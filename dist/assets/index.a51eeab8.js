import{e as t,E as C,a3 as k,j as V,a9 as $,aa as b,bC as _,$ as D,Z as B,b as f,a as g,L as y,N as x,K as P,S as h,av as E,bD as d,k as M,bE as I,a8 as p,a4 as l,am as W,U as n,V as r,bF as T,az as z,W as R,ae as S,bG as U,n as j,b9 as H,b3 as N,b4 as Y,b5 as F,b6 as J,b7 as X,bH as q,ar as K,bI as Z,bJ as Q}from"./index.df0febc8.js";import{c as G,d as ee,e as te,f as ne,g as re,h as oe,i as ae,j as ie,I as se,k as le,l as ce,m as ue,n as me,o as ge,p as de,q as _e,b as he}from"./index.10ee6f39.js";import{A as Ee,g as pe,h as fe,i as Ie,j as ve}from"./index.2740ef81.js";import{S as Ae}from"./index.9cfbd5c1.js";var i=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e))(i||{}),Le=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(Le||{});const $e=e=>{const o=V(()=>{if(!$.is_admin(b())){if(e.role===void 0)return!1;if(e.role===_.GENERAL&&!$.is_general(b()))return!1}return!0});return t(B,{get fallback(){return t(be,e)},get children(){return[t(D,{get when(){return!o()},children:null}),t(D,{get when(){return e.children},get children(){return t(De,e)}})]}})},be=e=>{const{pathname:o}=f(),a=g(),c=()=>o()===e.to;return t(Ee,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:y,get href(){return e.to},onClick:u=>{var L;if(w(),e.refresh){(L=u.stopPropagation)==null||L.call(u);let m=e.to;m.startsWith("http")||(m=x(m)),window.open(m,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:c()?"$info4":P(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return c()?"$info4":""},get color(){return c()?"$info11":""},get external(){return e.external},get children(){return[t(h,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(d,{get children(){return a(e.title)}})]}})},De=e=>{const{pathname:o}=f(),[a,c]=M(o().includes(e.to)),u=g();return t(l,{w:"$full",get children(){return[t(I,{justifyContent:"space-between",onClick:()=>{c(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:P()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(p,{get children(){return[t(h,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(d,{get children(){return u(e.title)}})]}}),t(E,{as:pe,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(h,{get when(){return a()},get children(){return t(l,{pl:"$2",get children(){return t(v,{get items(){return e.children}})}})}})]}})},v=e=>t(k,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(C,{get each(){return e.items},children:o=>t($e,o)})}});function Te(e){return W({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const s=n(()=>r(()=>import("./Common.67d9fd56.js"),["assets/Common.67d9fd56.js","assets/index.df0febc8.js","assets/index.ad7cefe3.css","assets/index.10ee6f39.js","assets/SettingItem.d16ff66f.js","assets/item_type.be442da4.js","assets/index.2740ef81.js","assets/ResponsiveGrid.e6a46481.js","assets/index.9cfbd5c1.js"])),A=[{title:"manage.sidemenu.profile",icon:G,to:"/@manage",role:_.GUEST,component:n(()=>r(()=>import("./Profile.4ff05f6e.js"),["assets/Profile.4ff05f6e.js","assets/index.df0febc8.js","assets/index.ad7cefe3.css","assets/index.10ee6f39.js","assets/index.2740ef81.js","assets/webauthn-json.browser-ponyfill.1c672167.js"]))},{title:"manage.sidemenu.settings",icon:ee,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:te,to:"/@manage/settings/site",component:()=>t(s,{get group(){return i.SITE}})},{title:"manage.sidemenu.style",icon:ne,to:"/@manage/settings/style",component:()=>t(s,{get group(){return i.STYLE}})},{title:"manage.sidemenu.preview",icon:re,to:"/@manage/settings/preview",component:()=>t(s,{get group(){return i.PREVIEW}})},{title:"manage.sidemenu.global",icon:oe,to:"/@manage/settings/global",component:()=>t(s,{get group(){return i.GLOBAL}})},{title:"manage.sidemenu.sso",icon:T,to:"/@manage/settings/sso",component:()=>t(s,{get group(){return i.SSO}})},{title:"manage.sidemenu.ldap",icon:T,to:"/@manage/settings/ldap",component:()=>t(s,{get group(){return i.LDAP}})},{title:"manage.sidemenu.s3",icon:ae,to:"/@manage/settings/s3",component:n(()=>r(()=>import("./S3.16d3ad2d.js"),["assets/S3.16d3ad2d.js","assets/index.df0febc8.js","assets/index.ad7cefe3.css","assets/index.10ee6f39.js","assets/SettingItem.d16ff66f.js","assets/item_type.be442da4.js","assets/index.2740ef81.js","assets/ResponsiveGrid.e6a46481.js","assets/FolderTree.66403bbc.js","assets/index.9cfbd5c1.js"]))},{title:"manage.sidemenu.other",icon:ie,to:"/@manage/settings/other",component:n(()=>r(()=>import("./Other.ac924b57.js"),["assets/Other.ac924b57.js","assets/index.df0febc8.js","assets/index.ad7cefe3.css","assets/index.10ee6f39.js","assets/SettingItem.d16ff66f.js","assets/item_type.be442da4.js","assets/index.2740ef81.js","assets/index.9cfbd5c1.js"]))}]},{title:"manage.sidemenu.tasks",icon:Te,to:"/@manage/tasks",children:[{title:"manage.sidemenu.offline_download",icon:se,to:"/@manage/tasks/aria2",component:n(()=>r(()=>import("./offline_download.c9796392.js"),["assets/offline_download.c9796392.js","assets/index.df0febc8.js","assets/index.ad7cefe3.css","assets/index.10ee6f39.js","assets/Tasks.812cd441.js","assets/Paginator.92266e2a.js","assets/index.2740ef81.js"]))},{title:"manage.sidemenu.upload",icon:le,to:"/@manage/tasks/upload",component:n(()=>r(()=>import("./Upload.fe772872.js"),["assets/Upload.fe772872.js","assets/index.df0febc8.js","assets/index.ad7cefe3.css","assets/index.10ee6f39.js","assets/Tasks.812cd441.js","assets/Paginator.92266e2a.js","assets/index.2740ef81.js"]))},{title:"manage.sidemenu.copy",icon:ce,to:"/@manage/tasks/copy",component:n(()=>r(()=>import("./Copy.ec5565c1.js"),["assets/Copy.ec5565c1.js","assets/index.df0febc8.js","assets/index.ad7cefe3.css","assets/index.10ee6f39.js","assets/Tasks.812cd441.js","assets/Paginator.92266e2a.js","assets/index.2740ef81.js"]))}]},{title:"manage.sidemenu.users",icon:ue,to:"/@manage/users",component:n(()=>r(()=>import("./Users.f4c1d18e.js"),["assets/Users.f4c1d18e.js","assets/index.df0febc8.js","assets/index.ad7cefe3.css","assets/index.10ee6f39.js","assets/DeletePopover.e7a93cce.js","assets/Wether.c46765ee.js"]))},{title:"manage.sidemenu.storages",icon:fe,to:"/@manage/storages",component:n(()=>r(()=>import("./Storages.8a38e932.js"),["assets/Storages.8a38e932.js","assets/index.df0febc8.js","assets/index.ad7cefe3.css","assets/index.10ee6f39.js","assets/DeletePopover.e7a93cce.js"]))},{title:"manage.sidemenu.metas",icon:Ae,to:"/@manage/metas",component:n(()=>r(()=>import("./Metas.29fde3b9.js"),["assets/Metas.29fde3b9.js","assets/index.df0febc8.js","assets/index.ad7cefe3.css","assets/index.10ee6f39.js","assets/DeletePopover.e7a93cce.js","assets/Wether.c46765ee.js"]))},{title:"manage.sidemenu.indexes",icon:me,to:"/@manage/indexes",component:n(()=>r(()=>import("./indexes.8fd102c1.js"),["assets/indexes.8fd102c1.js","assets/index.df0febc8.js","assets/index.ad7cefe3.css","assets/Common.67d9fd56.js","assets/index.10ee6f39.js","assets/SettingItem.d16ff66f.js","assets/item_type.be442da4.js","assets/index.2740ef81.js","assets/ResponsiveGrid.e6a46481.js","assets/index.9cfbd5c1.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:Ie,component:n(()=>r(()=>import("./backup-restore.b97f8f73.js"),["assets/backup-restore.b97f8f73.js","assets/index.df0febc8.js","assets/index.ad7cefe3.css","assets/index.10ee6f39.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))},{title:"manage.sidemenu.home",icon:ge,to:"/",role:_.GUEST,refresh:!0}],{isOpen:Se,onOpen:Ce,onClose:w}=z(),Pe=()=>{const e=g(),{to:o}=f();return t(l,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return R("$background","$neutral2")()},get children(){return[t(I,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(p,{spacing:"$2",get children(){return[t(S,{"aria-label":"menu",get icon(){return t(ve,{})},display:{"@sm":"none"},onClick:Ce,size:"sm"}),t(d,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{o("/@manage")},get children(){return e("manage.title")}})]}}),t(p,{spacing:"$1",get children(){return t(S,{"aria-label":"logout",get icon(){return t(de,{})},onClick:()=>{U(),j.success(e("manage.logout_success")),o(`/@login?redirect=${encodeURIComponent(location.pathname)}`)},size:"sm"})}})]}}),t(H,{get opened(){return Se()},placement:"left",onClose:w,get children(){return[t(N,{}),t(Y,{get children(){return[t(F,{}),t(J,{color:"$info9",get children(){return e("manage.title")}}),t(X,{get children(){return t(v,{items:A})}})]}})]}})]}})},Re=[{to:"/storages/add",component:n(()=>r(()=>import("./AddOrEdit.d8013e4e.js"),["assets/AddOrEdit.d8013e4e.js","assets/index.df0febc8.js","assets/index.ad7cefe3.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.e6a46481.js"]))},{to:"/storages/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.d8013e4e.js"),["assets/AddOrEdit.d8013e4e.js","assets/index.df0febc8.js","assets/index.ad7cefe3.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.e6a46481.js"]))},{to:"/users/add",component:n(()=>r(()=>import("./AddOrEdit.9ec56242.js"),["assets/AddOrEdit.9ec56242.js","assets/index.df0febc8.js","assets/index.ad7cefe3.css","assets/FolderTree.66403bbc.js","assets/index.2740ef81.js"]))},{to:"/users/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.9ec56242.js"),["assets/AddOrEdit.9ec56242.js","assets/index.df0febc8.js","assets/index.ad7cefe3.css","assets/FolderTree.66403bbc.js","assets/index.2740ef81.js"]))},{to:"/metas/add",component:n(()=>r(()=>import("./AddOrEdit.ea11a16f.js"),["assets/AddOrEdit.ea11a16f.js","assets/index.df0febc8.js","assets/index.ad7cefe3.css","assets/FolderTree.66403bbc.js","assets/index.2740ef81.js"]))},{to:"/metas/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.ea11a16f.js"),["assets/AddOrEdit.ea11a16f.js","assets/index.df0febc8.js","assets/index.ad7cefe3.css","assets/FolderTree.66403bbc.js","assets/index.2740ef81.js"]))},{to:"/2fa",component:n(()=>r(()=>import("./2fa.e9c2ac8f.js"),["assets/2fa.e9c2ac8f.js","assets/index.df0febc8.js","assets/index.ad7cefe3.css"]))},{to:"/messenger",component:n(()=>r(()=>import("./Messenger.2499ac05.js"),["assets/Messenger.2499ac05.js","assets/index.df0febc8.js","assets/index.ad7cefe3.css"]))}],we=e=>(_e(e.title),t(K,{h:"$full",get children(){return t(d,{get children(){return e.title}})}})),O=(e,o=[])=>(e.forEach(a=>{a.children?O(a.children,o):o.push({to:q(a.to,"/@manage"),component:a.component||(()=>t(we,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),o),Oe=O(A).concat(Re),ke=()=>{const e=g();return he(()=>e("manage.title")),t(l,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(Pe,{}),t(I,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(l,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return R("$background","$neutral2")()},overflowY:"auto",get children(){return t(v,{items:A})}}),t(l,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(Z,{get children(){return t(C,{each:Oe,children:o=>t(Q,{get path(){return o.to},get component(){return o.component}})})}})}})]}})]}})},Me=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"}));export{Le as F,i as G,Me as i};
