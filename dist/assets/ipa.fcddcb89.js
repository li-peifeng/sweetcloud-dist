import{a as m,k as n,c9 as p,e,a8 as u,B as r,c_ as g,c$ as f,a0 as a,cZ as d}from"./index.d84ac98c.js";import{F as h}from"./File.f2bf1239.js";import"./icon.71d8ce10.js";import"./index.7dc5453b.js";import"./index.93936d60.js";import"./Layout.43b76727.js";import"./index.f24a4e43.js";import"./FolderTree.53271a16.js";import"./index.5dce76d8.js";const B=()=>{const t=m(),[i,o]=n(!1),[s,l]=n(!1),{currentObjLink:c}=p();return e(h,{get children(){return e(u,{spacing:"$2",get children(){return[e(r,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${g}/i/${f(encodeURIComponent(a.raw_url)+"/"+d(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{o(!0)},get children(){return t(`home.preview.${i()?"installing":"install"}`)}}),e(r,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(c(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}})]}})}})};export{B as default};
