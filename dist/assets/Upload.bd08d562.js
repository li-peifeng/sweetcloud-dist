import{b2 as J,_ as V,a2 as X,d as W,e as Y,q as P,bV as Z,c as o,S as T,aa as _,E as M,J as K,C as O,a5 as R,ah as v,n as N,bI as H,a6 as Q,b5 as E,ag as j,bU as ee,a_ as U,bW as te,aH as ae,bX as oe,bY as ne,bZ as re,p as se}from"./index.5b66ff2f.js";import{u as le,b as ie,c as ce}from"./index.75ad544a.js";async function*de(a,l,p){const n=new Set;async function c(){const[g,i]=await Promise.race(n);return n.delete(g),i}for(const g of l){const i=(async()=>await p(g,l))().then(r=>[i,r]);n.add(i),n.size>=a&&(yield await c())}for(;n.size;)yield await c()}const ue={pending:"neutral",uploading:"info",backending:"info",success:"success",error:"danger"},pe=async a=>{let l=[];const p=async(n,c)=>{await new Promise((i,r)=>{const d=s=>{console.error(s),r(s)};if(n.isFile)n.file(s=>{const u=new File([s],c+s.name,{type:s.type});l.push(u),console.log(u),i({})},d);else if(n.isDirectory){const s=n.createReader(),u=()=>{s.readEntries(async w=>{for(let m=0;m<w.length;m++)await p(w[m],c+n.name+"/");i({}),w.length>0&&u()},d)};u()}})};return await p(a,""),l},ge=a=>({name:a.name,path:a.webkitRelativePath?a.webkitRelativePath:a.name,size:a.size,progress:0,speed:0,status:"pending"}),me=async(a,l,p,n=!1)=>{let c=new Date().valueOf(),g=0;const i=new FormData;i.append("file",l);const r=await J.put("/fs/form",i,{headers:{"File-Path":encodeURIComponent(a),"As-Task":n,"Content-Type":"multipart/form-data","Last-Modified":l.lastModified,Password:V()},onUploadProgress:d=>{if(d.total){const s=d.loaded/d.total*100|0;p("progress",s);const u=new Date().valueOf(),w=(u-c)/1e3;if(w>1){const k=(d.loaded-g)/w,h=(d.total-d.loaded)/k;p("speed",k),console.log(h),c=u,g=d.loaded}s===100&&p("status","backending")}}});if(r.code!==200)return new Error(r.message)},fe=async(a,l,p,n=!1)=>{let c=new Date().valueOf(),g=0;const i=await J.put("/fs/put",l,{headers:{"File-Path":encodeURIComponent(a),"As-Task":n,"Content-Type":l.type||"application/octet-stream","Last-Modified":l.lastModified,Password:V()},onUploadProgress:r=>{if(r.total){const d=r.loaded/r.total*100|0;p("progress",d);const s=new Date().valueOf(),u=(s-c)/1e3;if(u>1){const m=(r.loaded-g)/u,F=(r.total-r.loaded)/m;p("speed",m),console.log(F),c=s,g=r.loaded}d===100&&p("status","backending")}}});if(i.code!==200)return new Error(i.message)},he=[{name:"\u6D41\u5F0F",upload:fe,provider:/.*/},{name:"\u8868\u5355",upload:me,provider:/.*/}],we=()=>he.filter(a=>a.provider.test(X.provider)),be=a=>{const l=W();return o(R,{w:"$full",spacing:"$1",rounded:"$lg",border:"1px solid $neutral7",alignItems:"start",p:"$2",get _hover(){return{border:`1px solid ${v()}`}},get children(){return[o(U,{css:{wordBreak:"break-all"},get children(){return a.path}}),o(_,{spacing:"$2",get children(){return[o(te,{get colorScheme(){return ue[a.status]},get children(){return l(`home.upload.${a.status}`)}}),o(U,{get children(){return[ae(()=>oe(a.speed)),"/s"]}})]}}),o(ne,{w:"$full",trackColor:"$info3",rounded:"$full",get value(){return a.progress},size:"sm",get children(){return o(re,{get color(){return v()},rounded:"$md"})}}),o(U,{color:"$danger10",get children(){return a.msg}})]}})},Fe=()=>{const a=W(),{pathname:l}=Y(),{refresh:p}=le(),[n,c]=P(!1),[g,i]=P(!1),[r,d]=P(!1),[s,u]=Z({uploads:[]}),w=()=>s.uploads.every(({status:e})=>["success","error"].includes(e));let m,k;const F=async e=>{if(e.length!==0){i(!0);for(const t of e){const b=ge(t);u("uploads",f=>[...f,b])}for await(const t of de(3,e,G))console.log(t);p(void 0,!0)}},h=(e,t,b)=>{u("uploads",f=>f.path===e,t,b)},D=we(),[x,q]=P(D[0]),G=async e=>{const t=e.webkitRelativePath?e.webkitRelativePath:e.name;h(t,"status","uploading");const b=se(l(),t);try{const f=await x().upload(b,e,(S,C)=>{h(t,S,C)},r());f?(h(t,"status","error"),h(t,"msg",f.message)):(h(t,"status","success"),h(t,"progress",100))}catch(f){console.error(f),h(t,"status","error"),h(t,"msg",f.message)}};return o(R,{w:"$full",pb:"$2",spacing:"$2",get children(){return o(T,{get when(){return!g()},get fallback(){return[o(_,{spacing:"$2",get children(){return[o(M,{colorScheme:"accent",onClick:()=>{u("uploads",e=>e.filter(({status:t})=>!["success","error"].includes(t))),console.log(s.uploads)},get children(){return a("home.upload.clear_done")}}),o(T,{get when(){return w()},get children(){return o(M,{onClick:()=>{i(!1)},get children(){return a("home.upload.back")}})}})]}}),o(K,{get each(){return s.uploads},children:e=>o(be,e)})]},get children(){return[o(O,{type:"file",multiple:!0,ref(e){const t=m;typeof t=="function"?t(e):m=e},display:"none",onChange:e=>{var t;F(Array.from((t=e.target.files)!=null?t:[]))}}),o(O,{type:"file",multiple:!0,webkitdirectory:!0,ref(e){const t=k;typeof t=="function"?t(e):k=e},display:"none",onChange:e=>{var t;F(Array.from((t=e.target.files)!=null?t:[]))}}),o(R,{w:"$full",justifyContent:"center",get border(){return`2px dashed ${n()?v():"$neutral8"}`},rounded:"$lg",onDragOver:e=>{e.preventDefault(),c(!0)},onDragLeave:()=>{c(!1)},onDrop:async e=>{var A,I,z,B;e.preventDefault(),e.stopPropagation(),c(!1);const t=[],b=Array.from((I=(A=e.dataTransfer)==null?void 0:A.items)!=null?I:[]),f=Array.from((B=(z=e.dataTransfer)==null?void 0:z.files)!=null?B:[]);let S=b.length;const C=[];for(let $=0;$<S;$++){const y=b[$].webkitGetAsEntry();y!=null&&y.isFile?t.push(f[$]):y!=null&&y.isDirectory&&C.push(y)}for(const $ of C){const L=await pe($);t.push(...L)}t.length===0&&N.warning(a("home.upload.no_files_drag")),F(t)},spacing:"$4",h:"$56",get children(){return o(T,{get when(){return!n()},get fallback(){return o(H,{get children(){return a("home.upload.release")}})},get children(){return[o(H,{get children(){return a("home.upload.upload-tips")}}),o(Q,{w:"30%",get children(){return o(E,{get value(){return x().name},onChange:e=>{q(D.find(t=>t.name===e))},get options(){return D.map(e=>({label:e.name,value:e.name}))}})}}),o(_,{spacing:"$4",get children(){return[o(j,{compact:!0,size:"xl",get["aria-label"](){return a("home.upload.upload_folder")},colorScheme:"accent",get icon(){return o(ie,{})},onClick:()=>{k.click()}}),o(j,{compact:!0,size:"xl",get["aria-label"](){return a("home.upload.upload_files")},get icon(){return o(ce,{})},onClick:()=>{m.click()}})]}}),o(ee,{get checked(){return r()},onChange:()=>{d(!r())},get children(){return a("home.upload.add_as_task")}})]}})}})]}})}})};export{Fe as default};
