import{e as v,aW as c,b9 as u,d as w,r as i,c as t,S as x,a6 as S,bN as g,av as _,aN as $,b5 as k,ai as C,D,G as I,aa as R,au as d,n as T,ba as F,aY as L,cR as M}from"./index.0815bc43.js";const W=()=>{const{back:n}=v(),[l,p]=c(()=>u.post("/auth/2fa/generate")),a=w(),[r,h]=i(),f=async()=>{if(d().otp){T.warning(a("users.2fa_already_enabled")),n();return}const e=await p();F(e,h)},[s,y]=i("");f();const[m,b]=c(()=>{var e;return u.post("/auth/2fa/verify",{code:s(),secret:(e=r())==null?void 0:e.secret})}),o=async()=>{const e=await b();L(e,()=>{M({...d(),otp:!0}),n()})};return t(R,{get loading(){return l()},get children(){return t(x,{get when(){return r()},get children(){return t(S,{spacing:"$2",alignItems:"start",get children(){return[t(g,{get children(){return a("users.scan_qr")}}),t(_,{boxSize:"$xs",rounded:"$lg",get src(){var e;return(e=r())==null?void 0:e.qr}}),t(g,{get children(){return[$(()=>a("users.or_manual")),":"," ",t(k,{get color(){return C()},get children(){var e;return(e=r())==null?void 0:e.secret}})]}}),t(D,{maxW:"$xs",get placeholder(){return a("users.input_code")},get value(){return s()},onInput:e=>y(e.currentTarget.value),onKeyDown:e=>{e.key==="Enter"&&o()}}),t(I,{get loading(){return m()},onClick:o,get children(){return a("users.verify")}})]}})}})}})};export{W as default};
