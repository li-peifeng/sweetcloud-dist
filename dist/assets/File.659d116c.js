import{c as e,av as y,I as _,ai as D,a3 as o,a6 as l,bN as F,b5 as P,aN as v,cd as L,cI as A,d as f,q as d,cJ as $,a7 as T,aq as k,ag as x,G as m,am as C,K as S,an as j,co as w,S as g,aH as R,as as I,cs as V,Q as B,cK as M,Y as t,Z as n,e as z,ct as W,cL as H,r as U,bc as X,$ as q,a0 as G,ao as K}from"./index.24684d9f.js";import{g as N,O as i}from"./icon.6c16fb03.js";import{k as J}from"./index.d2955476.js";import{T as Q}from"./Layout.0c7d119d.js";const Y=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(y,{boxSize:"$20",get fallback(){return e(_,{get color(){return D()},boxSize:"$20",get as(){return N(o.obj)}})},get src(){return o.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(F,{size:"lg",css:{wordBreak:"break-all"},get children(){return o.obj.name}}),e(P,{color:"$neutral10",size:"sm",get children(){return[v(()=>L(o.obj.size))," \xB7 ",v(()=>A(o.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),O=()=>{const r=f(),a=d(()=>$(o.obj.name)),{currentObjLink:u}=T();return e(g,{get when(){return a().length},get children(){return e(k,{get children(){return[e(x,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:J})},get children(){return r("home.preview.open_with")}}),e(C,{get children(){return e(S,{get each(){return a()},children:s=>e(j,{as:"a",target:"_blank",get href(){return w(s.value,{raw_url:o.raw_url,name:o.obj.name,d_url:u(!0)})},get children(){return s.key}})})}})]}})}})},p=r=>{const a=f(),{copyCurrentRawLink:u}=R();return e(Y,{get children(){return[e(I,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>u(!0),get children(){return a("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return o.raw_url},target:"_blank",get children(){return a("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(O,{})}})]}})},Z=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),ee=r=>{const{currentObjLink:a}=T(),u=d(()=>w(r.scheme,{raw_url:o.raw_url,name:o.obj.name,d_url:a(!0),ts:!0}));return e(M,{w:"$full",h:"70vh",get children(){return[e(V.iframe,{w:"$full",h:"$full",get src(){return u()}}),e(_,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:Q,onClick:()=>{window.open(u(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return B()},p:"$1",boxSize:"$7"})]}})},re=r=>()=>e(ee,{scheme:r}),te=[{name:"HTML \u6E32\u67D3",exts:["html"],component:t(()=>n(()=>import("./html.ef8768b5.js"),["assets/html.ef8768b5.js","assets/index.24684d9f.js","assets/index.bf275d9b.css"]))},{name:"\u5728\u7EBF\u963F\u91CC\u89C6\u9891",type:i.VIDEO,provider:/^Aliyundrive(Open)?$/,component:t(()=>n(()=>import("./aliyun_video.66c46bbe.js"),["assets/aliyun_video.66c46bbe.js","assets/index.24684d9f.js","assets/index.bf275d9b.css","assets/icon.6c16fb03.js","assets/index.d2955476.js","assets/useTitle.48d3436d.js","assets/Layout.0c7d119d.js","assets/index.d9eca960.js","assets/FolderTree.08731d20.js","assets/index.18020c09.js","assets/video_box.d554498a.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.9b344d94.js"]))},{name:"Markdown \u5728\u7EBF\u9884\u89C8",type:i.TEXT,component:t(()=>n(()=>import("./markdown.163e9399.js"),["assets/markdown.163e9399.js","assets/index.24684d9f.js","assets/index.bf275d9b.css"]))},{name:"Markdown \u81EA\u52A8\u6362\u884C",type:i.TEXT,component:t(()=>n(()=>import("./markdown_with_word_wrap.133600f7.js"),["assets/markdown_with_word_wrap.133600f7.js","assets/index.24684d9f.js","assets/index.bf275d9b.css"]))},{name:"\u6253\u5F00 URL",exts:["url"],component:t(()=>n(()=>import("./url.1872ae4d.js"),["assets/url.1872ae4d.js","assets/index.24684d9f.js","assets/index.bf275d9b.css","assets/icon.6c16fb03.js","assets/index.d2955476.js","assets/useTitle.48d3436d.js","assets/Layout.0c7d119d.js","assets/index.d9eca960.js","assets/FolderTree.08731d20.js","assets/index.18020c09.js"]))},{name:"TXT \u5728\u7EBF\u9884\u89C8",type:i.TEXT,exts:["url"],component:t(()=>n(()=>import("./text-editor.0563d959.js"),["assets/text-editor.0563d959.js","assets/index.24684d9f.js","assets/index.bf275d9b.css","assets/index.6487c5d8.js"]))},{name:"\u5728\u7EBF\u56FE\u7247\u9884\u89C8",type:i.IMAGE,component:t(()=>n(()=>import("./image.1a1ce3d0.js"),["assets/image.1a1ce3d0.js","assets/index.24684d9f.js","assets/index.bf275d9b.css","assets/ImageWithError.f642c28d.js"]))},{name:"\u5728\u7EBF\u89C6\u9891\u64AD\u653E",type:i.VIDEO,component:t(()=>n(()=>import("./video.e0906587.js"),["assets/video.e0906587.js","assets/index.24684d9f.js","assets/index.bf275d9b.css","assets/icon.6c16fb03.js","assets/index.d2955476.js","assets/useTitle.48d3436d.js","assets/Layout.0c7d119d.js","assets/index.d9eca960.js","assets/FolderTree.08731d20.js","assets/index.18020c09.js","assets/video_box.d554498a.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.9b344d94.js"]))},{name:"\u5728\u7EBF\u64AD\u653E\u97F3\u4E50",type:i.AUDIO,component:t(()=>n(()=>import("./audio.5bd58540.js"),["assets/audio.5bd58540.js","assets/audio.6d9b38d8.css","assets/index.24684d9f.js","assets/index.bf275d9b.css","assets/icon.6c16fb03.js","assets/index.d2955476.js","assets/useTitle.48d3436d.js","assets/Layout.0c7d119d.js","assets/index.d9eca960.js","assets/FolderTree.08731d20.js","assets/index.18020c09.js"]))},{name:"IPA \u6587\u4EF6",exts:["ipa","tipa"],component:t(()=>n(()=>import("./ipa.788a7edf.js"),["assets/ipa.788a7edf.js","assets/index.24684d9f.js","assets/index.bf275d9b.css","assets/icon.6c16fb03.js","assets/index.d2955476.js","assets/useTitle.48d3436d.js","assets/Layout.0c7d119d.js","assets/index.d9eca960.js","assets/FolderTree.08731d20.js","assets/index.18020c09.js"]))},{name:"PLIST \u6587\u4EF6",exts:["plist"],component:t(()=>n(()=>import("./plist.46c1e20c.js"),["assets/plist.46c1e20c.js","assets/index.24684d9f.js","assets/index.bf275d9b.css","assets/icon.6c16fb03.js","assets/index.d2955476.js","assets/useTitle.48d3436d.js","assets/Layout.0c7d119d.js","assets/index.d9eca960.js","assets/FolderTree.08731d20.js","assets/index.18020c09.js"]))},{name:"\u5728\u7EBF\u529E\u516C\u6587\u6863",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:t(()=>n(()=>import("./aliyun_office.ea72cddb.js"),["assets/aliyun_office.ea72cddb.js","assets/index.24684d9f.js","assets/index.bf275d9b.css"]))},{name:"\u64AD\u653E\u7EC8\u7AEF\u5F55\u5C4F",exts:["cast"],component:t(()=>n(()=>import("./asciinema.9d8b7487.js"),["assets/asciinema.9d8b7487.js","assets/asciinema.53412307.css","assets/index.24684d9f.js","assets/index.bf275d9b.css"]))}],ne=r=>{var E;const{searchParams:a}=z(),u=i[(E=a.type)==null?void 0:E.toUpperCase()],s=[];return te.forEach(c=>{var b;c.provider&&!c.provider.test(r.provider)||(c.type===r.type||u&&c.type===u||c.exts==="*"||((b=c.exts)==null?void 0:b.includes(W(r.name).toLowerCase())))&&s.push({name:c.name,component:c.component})}),H(r.name).forEach(c=>{s.push({name:c.key,component:re(c.value)})}),s.push({name:"\u4E0B\u8F7D\u4FDD\u5B58\u6587\u4EF6",component:t(()=>n(()=>Promise.resolve().then(()=>Z),void 0))}),s},oe=()=>{const r=d(()=>ne({...o.obj,provider:o.provider})),[a,u]=U(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(I,{w:"$full",spacing:"$2",get children(){return[e(X,{alwaysShowBorder:!0,get value(){return a().name},onChange:s=>{u(r().find(h=>h.name===s))},get options(){return r().map(s=>({value:s.name}))}}),e(O,{})]}}),e(q,{get fallback(){return e(G,{})},get children(){return e(K,{get component(){return a().component}})}})]}})}})},ie=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));export{Y as F,ie as a};
