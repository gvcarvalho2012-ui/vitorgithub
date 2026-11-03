// uso: node render.js <pasta-saida> test t1,t2,...   |   node render.js <pasta-saida> full [fps] [workers]
// a duração vem de TM.end no index.html
const {chromium}=require('playwright');const fs=require('fs');const path=require('path');
const out=process.argv[2],mode=process.argv[3];fs.mkdirSync(out,{recursive:true});
(async()=>{const b=await chromium.launch();const url='file://'+path.join(__dirname,'index.html');
 const mk=async()=>{const p=await b.newPage({viewport:{width:1080,height:1920}});await p.goto(url);await p.waitForTimeout(400);return p;};
 if(mode==='test'){const p=await mk();for(const t of process.argv[4].split(',').map(Number)){await p.evaluate(t=>render(t),t);await p.screenshot({path:`${out}/t${String(t).replace('.','_')}.png`});}}
 else{const fps=+process.argv[4]||30,N=+process.argv[5]||4;const pages=await Promise.all([...Array(N)].map(mk));
  const total=Math.round(fps*(await pages[0].evaluate(()=>TM.end)));
  await Promise.all(pages.map(async(p,k)=>{for(let i=k;i<total;i+=N){await p.evaluate(t=>render(t),i/fps);await p.screenshot({path:`${out}/f${String(i).padStart(5,'0')}.jpg`,type:'jpeg',quality:92});}}));}
 await b.close();})();
