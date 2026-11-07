import {readFile,writeFile,mkdir,readdir,lstat,realpath} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
const here=path.dirname(fileURLToPath(import.meta.url));
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.mjs':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.avif':'image/avif','.gif':'image/gif','.ico':'image/x-icon','.woff':'font/woff','.woff2':'font/woff2','.ttf':'font/ttf','.otf':'font/otf','.txt':'text/plain; charset=utf-8','.xml':'application/xml','.pdf':'application/pdf','.mp4':'video/mp4','.webm':'video/webm','.mp3':'audio/mpeg','.wav':'audio/wav','.wasm':'application/wasm','.webmanifest':'application/manifest+json'};
export async function build({publicDir,out,hosting}) {
 if(!publicDir||!out)throw Error('--public and --out are required');
 const root=await realpath(path.resolve(publicDir)),dest=path.resolve(out);
 if(dest===root||dest.startsWith(root+path.sep))throw Error('Output must be outside public directory');
 const assets={};let totalBytes=0;
 async function visit(directory){for(const entry of (await readdir(directory)).sort()){
  if(entry.startsWith('.'))throw Error('Hidden files are not publishable');
  const file=path.join(directory,entry),stat=await lstat(file);if(stat.isSymbolicLink())throw Error('Symlinks are not publishable');
  if(stat.isDirectory()){await visit(file);continue;}if(!stat.isFile())throw Error('Unsupported asset type');
  const bytes=await readFile(file),key='/'+path.relative(root,file).split(path.sep).join('/');totalBytes+=bytes.length;
  assets[key]={base64:bytes.toString('base64'),type:mime[path.extname(entry).toLowerCase()]||'application/octet-stream',size:bytes.length,hash:createHash('sha256').update(bytes).digest('hex')};
 }}await visit(root);
 if(!assets['/index.html']||!assets['/catalog-v3.json'])throw Error('index.html and catalog-v3.json are required');
 const catalog=JSON.parse(Buffer.from(assets['/catalog-v3.json'].base64,'base64').toString('utf8'));
 let worker=await readFile(path.join(here,'../../worker/hiai-worker.mjs'),'utf8');
 worker=worker.replace('/* HIAI_ASSETS */ {}',()=>JSON.stringify(assets)).replace('/* HIAI_CATALOG */ {}',()=>JSON.stringify(catalog));
 await mkdir(path.join(dest,'server'),{recursive:true});await writeFile(path.join(dest,'server/index.js'),worker);
 if(hosting){const manifest=JSON.parse(await readFile(path.resolve(hosting),'utf8'));if(manifest.static)throw Error('Worker hosting manifest must omit static');if(!manifest.project_id)throw Error('hosting project_id is required');await mkdir(path.join(dest,'.openai'),{recursive:true});await writeFile(path.join(dest,'.openai/hosting.json'),JSON.stringify(manifest,null,2));}
 return {files:Object.keys(assets).length,assetBytes:totalBytes,workerBytes:Buffer.byteLength(worker),output:path.join(dest,'server/index.js')};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href){const args=process.argv.slice(2);const get=flag=>{const i=args.indexOf(flag);return i<0?undefined:args[i+1];};build({publicDir:get('--public'),out:get('--out'),hosting:get('--hosting')}).then(r=>console.log(JSON.stringify(r))).catch(e=>{console.error(e.message);process.exitCode=1;});}
