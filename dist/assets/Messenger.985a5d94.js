import{e,bI as i,an as w,a as y,n as R,k as b,aP as r,b2 as c,bV as k,d as C,a3 as o,E as x,aj as T,D as z,I as B,a8 as D,B as g,bz as F,aR as H,cI as L}from"./index.d84ac98c.js";const N=n=>e(i,{get children(){return n.content}}),P=n=>e(w,{get src(){return n.content}}),V={string:N,image:P},j=()=>{const n=y();R.info(n("manage.messenger-tips"));const[a,l]=b(""),[d,u]=r(()=>c.post("/admin/message/get")),[p,m]=r(()=>c.post("/admin/message/send",{message:a()})),[h,I]=k([]),s=async()=>{const t=await u();F(t,f=>{I(L($=>$.push(f)))})},S=async()=>{const t=await m();H(t)},v=setInterval(s,1e3);return C(()=>clearInterval(v)),e(o,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(o,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return n("manage.received_msgs")}}),e(x,{each:h,children:t=>e(T,z({get component(){return V[t.type]}},t))})]}}),e(B,{w:"$full",get value(){return a()},onInput:t=>l(t.currentTarget.value)}),e(D,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return d()},onClick:s,get children(){return n("manage.receive")}}),e(g,{get loading(){return p()},onClick:S,get children(){return n("manage.send")}})]}})]}})};export{j as Messenger,V as Shower,j as default};
