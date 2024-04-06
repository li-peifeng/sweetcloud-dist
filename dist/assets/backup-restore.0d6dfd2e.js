import{q as D,d as ue,aP as g,b2 as l,c as o,aa as q,E as C,br as ge,bJ as le,be as E,bq as me,C as pe,a5 as F,J as fe,a_ as A,bz as $,n as he}from"./index.5b66ff2f.js";import{s as be}from"./index.6b0f9c50.js";import{c as f}from"./index.5615f04b.js";import"./_commonjs-dynamic-modules.30ae7933.js";const N={success:{icon:"\u2705",color:"$success9"},error:{icon:"\u274C",color:"$danger9"},info:{icon:"\u2139\uFE0F",color:"$info9"}},ye=p=>o(q,{w:"$full",spacing:"$1",get children(){return[o(A,{get children(){return N[p.type].icon}}),o(A,{get color(){return N[p.type].color},get children(){return p.msg}})]}}),Le=()=>{const[p,L]=D(!1),[h,_]=D(""),t=ue();be("manage.sidemenu.backup-restore");let w;const[H,P]=D([]),i=(e,r)=>{P(d=>[...d,{type:r,msg:e}]),w.scrollTop=w.scrollHeight},[V,z]=g(()=>l.get("/admin/setting/list")),[W,O]=g(()=>l.get("/admin/user/list")),[Y,M]=g(()=>l.get("/admin/meta/list")),[G,R]=g(()=>l.get("/admin/storage/list")),K=()=>V()||W()||Y()||G();function U(e,r){if(r=="")return e;const d=f.AES.encrypt(JSON.stringify(e),r).toString();return f.enc.Base64.stringify(f.enc.Utf8.parse(d))}function x(e,r,d,c){if(!c)return e;const a=f.enc.Base64.parse(e).toString(f.enc.Utf8);return d?f.AES.decrypt(a,r).toString(f.enc.Utf8):JSON.parse(f.AES.decrypt(a,r).toString(f.enc.Utf8))}const I=async()=>{i(t("br.start_backup"),"info");const e={encrypted:"",settings:[],users:[],storages:[],metas:[]};h()!=""&&(e.encrypted=U("encrypted",h()));for(const r of[{name:"settings",fn:z,page:!1},{name:"users",fn:O,page:!0},{name:"storages",fn:R,page:!0},{name:"metas",fn:M,page:!0}]){const d=await r.fn();$(d,c=>{if(i(t("br.success_backup_item",{item:t(`manage.sidemenu.${r.name}`)}),"success"),r.page){for(let a=0;a<c.content.length;a++){const n=c.content[a];for(const m in n)n[m]=U(n[m],h())}e[r.name]=c.content}else{for(let a=0;a<c.length;a++){const n=c[a];for(const m in n)n[m]=U(n[m],h())}e[r.name]=c}},c=>{i(t("br.failed_backup_item",{item:t(`manage.sidemenu.${r.name}`)})+":"+c,"error")})}_e("alist_backup_"+new Date().toLocaleString()+".json",e),i(t("br.finish_backup"),"info")},[Q,X]=g(e=>l.post("/admin/setting/save",e)),[Z,J]=g(e=>l.post("/admin/user/create",e)),[ee,T]=g(e=>l.post("/admin/storage/create",e)),[te,B]=g(e=>l.post("/admin/meta/create",e)),[ne,re]=g(e=>l.post("/admin/user/update",e)),[ae,se]=g(e=>l.post("/admin/storage/update",e)),[oe,ce]=g(e=>l.post("/admin/meta/update",e));async function v(e,r,d,c,a,n){const m=(await r()).data.content;for(const y in e){const s=e[y],u=s[a],k=(m.find(j=>j[a]===u)?"update":"add")==="add"?d:c;await $(await k(s),()=>{i(t("br.success_restore_item",{item:t(n)})+`-[${u}]`,"success")},j=>{i(t("br.failed_restore_item",{item:t(n)})+`-[${u}]:`+j,"error")})}}const ie=()=>Q()||Z()||ee()||te()||ne()||ae()||oe(),de=async()=>{i(t("br.start_restore"),"info");const e=document.createElement("input");e.type="file",e.accept="application/json",e.onchange=async r=>{const d=r.target.files;if(!d||d.length===0){he.warning(t("br.no_file"));return}const c=d[0],a=new FileReader;a.onload=async()=>{const n=JSON.parse(a.result),m=Boolean(n.encrypted);if(m&&x(n.encrypted,h(),!0,!0)!=='"encrypted"'){i(t("br.wrong_encrypt_password"),"error");return}const y=Object.values(n);for(let s=y.length-4;s<y.length;s++){const u=y[s];console.log(u);for(let b=0;b<u.length;b++){const S=u[b];for(const k in S)S[k]=x(S[k],h(),!1,m)}}if(p()&&await I(),n.settings&&$(await X(n.settings.filter(s=>!["version","index_progress"].includes(s.key))),()=>{i(t("br.success_restore_item",{item:t("manage.sidemenu.settings")}),"success")},s=>{i(t("br.failed_restore_item",{item:t("manage.sidemenu.settings")})+":"+s,"error")}),p())await v(n.users,O,J,re,"username","manage.sidemenu.users"),await v(n.storages,R,T,se,"mount_path","manage.sidemenu.storages"),await v(n.metas,M,B,ce,"path","manage.sidemenu.metas");else for(const s of[{name:"users",fn:J,data:n.users,key:"username"},{name:"storages",fn:T,data:n.storages,key:"mount_path"},{name:"metas",fn:B,data:n.metas,key:"path"}])for(const u of s.data||[])u.id=0,$(await s.fn(u),()=>{i(t("br.success_restore_item",{item:t(`manage.sidemenu.${s.name}`)})+`-[${u[s.key]}]`,"success")},b=>{i(t("br.failed_restore_item",{item:t(`manage.sidemenu.${s.name}`)})+` [ ${u[s.key]} ] :`+b,"error")});i(t("br.finish_restore"),"info")},a.readAsText(c)},e.click()};return o(F,{spacing:"$2",w:"$full",get children(){return[o(q,{spacing:"$2",w:"$full",get children(){return[o(C,{get loading(){return K()},onClick:()=>{I()},colorScheme:"accent",get children(){return t("br.backup")}}),o(C,{get loading(){return ie()},onClick:()=>{de()},get children(){return t("br.restore")}})]}}),o(ge,{w:"$full",display:"flex",flexDirection:"column",get children(){return o(le,{w:"$full",direction:"column",gap:"$1",get children(){return[o(E,{get children(){return t("br.override")}}),o(me,{id:"restore-override",get checked(){return p()},onChange:e=>L(e.currentTarget.checked)}),o(E,{get children(){return t("br.encrypt_password")}}),o(pe,{id:"password",type:"password",get placeholder(){return t("br.encrypt_password_placeholder")},onInput:e=>_(e.currentTarget.value)})]}})}}),o(F,{p:"$2",ref(e){const r=w;typeof r=="function"?r(e):w=e},w:"$full",alignItems:"start",rounded:"$md",h:"70vh",bg:"$neutral3",overflowY:"auto",spacing:"$1",get children(){return o(fe,{get each(){return H()},children:e=>o(ye,e)})}})]}})};function _e(p,L){const h=new Blob([JSON.stringify(L,null,2)],{type:"application/json"}),_=URL.createObjectURL(h),t=document.createElement("a");t.href=_,t.download=p,t.click(),URL.revokeObjectURL(_)}export{Le as default};
