import{c as e,bI as i,ap as w,d as y,n as R,q as b,aP as r,b2 as c,bV as C,i as k,a5 as o,J as x,al as H,H as T,C as z,aa as F,E as g,bz as L,aR as N,cI as P}from"./index.024085d6.js";const V=n=>e(i,{get children(){return n.content}}),W=n=>e(w,{get src(){return n.content}}),q={string:V,image:W},D=()=>{const n=y();R.info(n("manage.messenger-tips"));const[a,l]=b(""),[d,u]=r(()=>c.post("/admin/message/get")),[p,m]=r(()=>c.post("/admin/message/send",{message:a()})),[h,S]=C([]),s=async()=>{const t=await u();L(t,f=>{S(P($=>$.push(f)))})},I=async()=>{const t=await m();N(t)},v=setInterval(s,1e3);return k(()=>clearInterval(v)),e(o,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(o,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return n("manage.received_msgs")}}),e(x,{each:h,children:t=>e(H,T({get component(){return q[t.type]}},t))})]}}),e(z,{w:"$full",get value(){return a()},onInput:t=>l(t.currentTarget.value)}),e(F,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return d()},onClick:s,get children(){return n("manage.receive")}}),e(g,{get loading(){return p()},onClick:I,get children(){return n("manage.send")}})]}})]}})};export{D as Messenger,q as Shower,D as default};
