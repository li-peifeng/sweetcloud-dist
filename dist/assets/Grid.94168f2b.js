import{c as t,l as a,J as m,a2 as p,cj as s}from"./index.5b66ff2f.js";import{G as u}from"./GridItem.7b0af685.js";import"./Folder.7f73d07d.js";import{a as c}from"./helper.40ed8d3a.js";import"./index.75ad544a.js";import"./index.0c9c85e1.js";import"./ImageWithError.6faa7458.js";import"./icon.fe3b9530.js";import"./index.6b0f9c50.js";import"./Layout.4af39bcd.js";import"./FolderTree.7e9f0640.js";import"./index.d37eb3a5.js";import"./Paginator.7b62af0a.js";import"./index.19ef1f95.js";const L=()=>{const{isMouseSupported:r,registerSelectContainer:e,captureContentMenu:o}=c();return e(),t(s,{"oncapture:contextmenu":o,get classList(){return{"viselect-container":r()}},w:"$full",gap:"$1",get templateColumns(){return`repeat(auto-fill, minmax(${parseInt(a.grid_item_size)+20}px,1fr))`},get children(){return t(m,{get each(){return p.objs},children:(i,n)=>t(u,{obj:i,get index(){return n()}})})}})};export{L as default};
