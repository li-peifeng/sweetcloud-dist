import{bP as ee,aA as k,R as $,b as B,bL as d,bQ as w,d as te,e,ax as D,b2 as f,bR as ne,bS as re,W as F,a as oe,j as se,k as g,bT as ae,aP as L,a3 as ie,bJ as E,an as le,bI as ce,S as h,I as P,bU as j,a_ as ue,a8 as ge,B as T,aq as de,bz as A,n as m,b3 as pe}from"./index.d84ac98c.js";import{j as he,t as me,v as fe,c as we,w as be}from"./index.7dc5453b.js";import{s as Se,g as _e,a as $e}from"./webauthn-json.browser-ponyfill.1c672167.js";const ke="https://github.com/alist-org/alist";function Ie(l){return ee(`${l}-${ke}`)}const Ce=()=>{const l=k("sso_login_enabled"),I=$("sso_login_platform"),n=k("sso_compatibility_mode"),{searchParams:c,to:b}=B(),o=c.token;o!=null&&o!=""&&(d(o),b(decodeURIComponent(c.redirect||w||"/"),!0));function p(s){const r=s.data;r.token&&(d(r.token),b(decodeURIComponent(c.redirect||w||"/"),!0))}if(window.addEventListener("message",p),te(()=>{window.removeEventListener("message",p)}),l){const s=()=>{const u=f.getUri()+"/auth/sso?method=sso_get_token";if(n){window.location.href=u;return}window.open(u,"authPopup","width=500,height=600")};let r;switch(I){case"Github":r=fe;break;case"Microsoft":r=me;break;case"Google":r=re;break;case"Dingtalk":r=ne;break;default:r=he}return e(D,{cursor:"pointer",boxSize:"$8",as:r,p:"$0_5",onclick:s})}},Re=()=>{const l=$("logo").split(`
`),I=F(l[0],l.pop()),n=oe(),c=se(()=>`${$("site_title")}`);we(c);const b=F("white","$neutral1"),[o,p]=g(localStorage.getItem("username")||""),[s,r]=g(localStorage.getItem("password")||""),[u,U]=g(""),[S,G]=g(!1),[_,M]=ae("remember-pwd","false"),[C,O]=g(!1),[N,J]=L(async()=>C()?f.post("/auth/login/ldap",{username:o(),password:s(),otp_code:u()}):f.post("/auth/login/hash",{username:o(),password:Ie(s()),otp_code:u()})),[,q]=L((t,a,i)=>f.post("/authn/webauthn_finish_login?username="+i,JSON.stringify(a),{headers:{session:t}})),[,H]=L(t=>f.get("/authn/webauthn_begin_login?username="+t)),{searchParams:y,to:v}=B(),K=k("webauthn_login_enabled"),V=async()=>{G(!S())},x=async()=>{if(S()){if(!Se()){m.error(n("users.webauthn_not_supported"));return}d(),_()==="true"?localStorage.setItem("username",o()):localStorage.removeItem("username");const t=await H(o());pe(t,async a=>{try{const i=_e(a.options),X=await $e(i),Y=await q(a.session,X,o());A(Y,Z=>{m.success(n("login.success")),d(Z.token),v(decodeURIComponent(y.redirect||w||"/"),!0)})}catch(i){i instanceof Error&&m.error(i.message)}})}else{_()==="true"?(localStorage.setItem("username",o()),localStorage.setItem("password",s())):(localStorage.removeItem("username"),localStorage.removeItem("password"));const t=await J();A(t,a=>{m.success(n("login.success")),d(a.token),v(decodeURIComponent(y.redirect||w||"/"),!0)},(a,i)=>{!R()&&i===402?W(!0):m.error(a)})}},[R,W]=g(!1),z=k("ldap_login_enabled"),Q=$("ldap_login_tips");return z&&O(!0),e(de,{zIndex:"1",w:"$full",h:"100vh",get children(){return e(ie,{get bgColor(){return b()},rounded:"$xl",p:"24px",w:{"@initial":"90%","@sm":"364px"},spacing:"$4",get children(){return[e(E,{alignItems:"center",justifyContent:"space-around",get children(){return[e(le,{mr:"$2",boxSize:"$12",get src(){return I()}}),e(ce,{color:"$info9",fontSize:"$2xl",get children(){return c()}})]}}),e(h,{get when(){return!R()},get fallback(){return e(P,{id:"totp",name:"otp",get placeholder(){return n("login.otp-tips")},get value(){return u()},onInput:t=>U(t.currentTarget.value),onKeyDown:t=>{t.key==="Enter"&&x()}})},get children(){return[e(P,{name:"username",get placeholder(){return n("login.username-tips")},get value(){return o()},onInput:t=>p(t.currentTarget.value)}),e(h,{get when(){return!S()},get children(){return e(P,{name:"password",get placeholder(){return n("login.password-tips")},type:"password",get value(){return s()},onInput:t=>r(t.currentTarget.value),onKeyDown:t=>{t.key==="Enter"&&x()}})}}),e(E,{px:"$1",w:"$full",fontSize:"$sm",color:"$neutral10",justifyContent:"space-between",alignItems:"center",get children(){return[e(j,{get checked(){return _()==="true"},onChange:()=>M(_()==="true"?"false":"true"),get children(){return n("login.remember")}}),e(ue,{get children(){return n("\u6E38\u5BA2\u767B\u5F55\u4E0D\u9700\u8981\u5BC6\u7801\u54E6")}})]}})]}}),e(ge,{w:"$full",spacing:"$2",get children(){return[e(h,{get when(){return!S()},get children(){return[e(T,{w:"$full",colorScheme:"danger",onClick:()=>{d(),v(decodeURIComponent(y.redirect||w||"/"),!0)},get children(){return n("login.use_guest")}}),e(T,{colorScheme:"warning",w:"$full",onClick:()=>{R()?U(""):(p(""),r(""))},get children(){return n("login.clear")}})]}}),e(T,{colorScheme:"success",w:"$full",get loading(){return N()},onClick:x,get children(){return n("login.login")}})]}}),e(h,{when:z,get children(){return e(j,{w:"$full",get checked(){return C()===!0},onChange:()=>O(!C()),children:Q})}}),e(E,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return[e(Ce,{}),e(h,{when:K,get children(){return e(D,{cursor:"pointer",boxSize:"$8",as:be,p:"$0_5",onclick:V})}})]}})]}})}})};export{Re as default};
