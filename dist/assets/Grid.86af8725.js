import{c as t,l as a,J as m,a2 as p,cm as s}from"./index.0c562dd6.js";import{G as u}from"./GridItem.6155f354.js";import"./Folder.925d9444.js";import{a as c}from"./helper.112122cf.js";import"./index.7cb31d94.js";import"./index.7f324398.js";import"./ImageWithError.87acf675.js";import"./icon.17cf0622.js";import"./index.1ecf1991.js";import"./Layout.8c387086.js";import"./FolderTree.2bcacf1c.js";import"./index.4afe141b.js";import"./Paginator.0eba78c6.js";import"./index.5a747926.js";const L=()=>{const{isMouseSupported:r,registerSelectContainer:e,captureContentMenu:o}=c();return e(),t(s,{"oncapture:contextmenu":o,get classList(){return{"viselect-container":r()}},w:"$full",gap:"$1",get templateColumns(){return`repeat(auto-fill, minmax(${parseInt(a.grid_item_size)+20}px,1fr))`},get children(){return t(m,{get each(){return p.objs},children:(i,n)=>t(u,{obj:i,get index(){return n()}})})}})};export{L as default};
