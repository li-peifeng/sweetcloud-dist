!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,i,o=[],c=!0,l=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);c=!0);}catch(a){l=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(l)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function t(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}System.register(["./index-legacy.043a02a8.js","./Folder-legacy.e994021d.js","./index-legacy.46291cb8.js","./index-legacy.ece9dd0e.js","./icon-legacy.1072a795.js","./helper-legacy.6757c272.js","./Layout-legacy.39164338.js","./index-legacy.37a23460.js","./FolderTree-legacy.47036668.js","./Paginator-legacy.2fecc2fc.js","./index-legacy.633fc02d.js","./index-legacy.7a0cfcac.js"],(function(n){"use strict";var r,i,o,c,l,a,u,s,f,g,d,b,h,m,y,p,j,w,v,x,A,S,$,k,C,O,_,P,M,z,I,E,H,K,L,D,B;return{setters:[function(e){r=e.bB,i=e.e,o=e.c,c=e.aa,l=e.O,a=e.aE,u=e.aH,s=e.cJ,f=e.v,g=e.aG,d=e.S,b=e.bU,h=e.I,m=e.ah,y=e.ar,p=e.a_,j=e.bX,w=e.cb,v=e.a9,x=e.l,A=e.d,S=e.q,$=e.y,k=e.cK,C=e.cL,O=e.cM,_=e.H,P=e.J,M=e.a2,z=e.a5},function(e){I=e.b},function(e){E=e.u},function(e){H=e.m},function(e){K=e.g,L=e.O},function(e){D=e.u,B=e.a},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var F=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],G=function(e){if((0,r().isHide)(e.obj))return null;var n=E().setPathAs,A=I({id:1}).show,S=i(),$=S.pushHref,k=S.to,C=B().isMouseSupported,O=D(),_=function(){return x.list_item_filename_overflow};return o(v.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){var r,i,v;return o(c,(i={get classList(){return{selected:!!e.obj.selected}},class:"list-item viselect-item"},(v={})[r="data-index"]=v[r]||{},v[r].get=function(){return e.index},t(i,"w","$full"),t(i,"p","$2"),t(i,"rounded","$lg"),t(i,"transition","all 0.3s"),"_hover",v._hover=v._hover||{},v._hover.get=function(){return{transform:"scale(1.01)",bgColor:l()}},t(i,"as",H),"href",v.href=v.href||{},v.href.get=function(){return e.obj.name},"cursor",v.cursor=v.cursor||{},v.cursor.get=function(){return C()||a()&&!O()?"default":"pointer"},"bgColor",v.bgColor=v.bgColor||{},v.bgColor.get=function(){return u((function(){return!!e.obj.selected}),!0)()?l():void 0},t(i,"on:dblclick",(function(n){C()&&(n.ctrlKey||n.metaKey||n.shiftKey||k($(e.obj.name)))})),t(i,"on:click",(function(n){if(C())return n.preventDefault();a()&&(n.preventDefault(),O()?k($(e.obj.name)):s(e.index,!e.obj.selected))})),t(i,"onMouseEnter",(function(){n(e.obj.name,e.obj.is_dir,!0)})),t(i,"onContextMenu",(function(n){f((function(){g(!1),s(e.index,!0,!0)})),A(n,{props:e.obj})})),"children",v.children=v.children||{},v.children.get=function(){return[o(c,{class:"name-box",spacing:"$1",get w(){return F[0].w},get children(){return[o(d,{get when(){return a()},get children(){return o(b,{"on:click":function(e){e.stopPropagation()},get checked(){return e.obj.selected},onChange:function(n){s(e.index,n.target.checked)}})}}),o(h,{class:"icon",boxSize:"$6",get color(){return m()},get as(){return K(e.obj)},mr:"$1","on:click":function(n){e.obj.type===L.IMAGE&&(n.stopPropagation(),n.preventDefault(),y.emit("gallery",e.obj.name))}}),o(p,{class:"name",get css(){return{wordBreak:"break-all",whiteSpace:"multi_line"===_()?"unset":"nowrap","overflow-x":"scrollable"===_()?"auto":"hidden",textOverflow:"ellipsis"===_()?"ellipsis":"unset","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),o(p,{class:"size",get w(){return F[1].w},get textAlign(){return F[1].textAlign},get children(){return j(e.obj.size)}}),o(p,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return F[2].w},get textAlign(){return F[2].textAlign},get children(){return w(e.obj.modified)}})]},function(e,n){for(var t in n)(o=n[t]).configurable=o.enumerable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,t,o);if(Object.getOwnPropertySymbols)for(var r=Object.getOwnPropertySymbols(n),i=0;i<r.length;i++){var o,c=r[i];(o=n[c]).configurable=o.enumerable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,c,o)}}(i,v),i))}})};n("default",(function(){var n=A(),t=e(S(),2),r=t[0],i=t[1],l=e(S(!1),2),u=l[0],s=l[1];$((function(){r()&&k(r(),u())}));var h=function(e){return{fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:e.textAlign,cursor:"pointer",onClick:function(){e.name===r()?s(!u()):f((function(){i(e.name),s(!1)}))}}},m=B(),y=m.isMouseSupported,j=m.registerSelectContainer,w=m.captureContentMenu;return j(),o(z,{"oncapture:contextmenu":w,get classList(){return{"viselect-container":y()}},class:"list",w:"$full",spacing:"$1",get children(){return[o(c,{class:"title",w:"$full",p:"$2",get children(){return[o(c,{get w(){return F[0].w},spacing:"$1",get children(){return[o(d,{get when(){return a()},get children(){return o(b,{get checked(){return C()},get indeterminate(){return O()},onChange:function(e){g(e.target.checked)}})}}),o(p,_((function(){return h(F[0])}),{get children(){return n("home.obj.".concat(F[0].name))}}))]}}),o(p,_({get w(){return F[1].w}},(function(){return h(F[1])}),{get children(){return n("home.obj.".concat(F[1].name))}})),o(p,_({get w(){return F[2].w}},(function(){return h(F[2])}),{display:{"@initial":"none","@md":"inline"},get children(){return n("home.obj.".concat(F[2].name))}}))]}}),o(P,{get each(){return M.objs},children:function(e,n){return o(G,{obj:e,get index(){return n()}})}})]}})}))}}}))}();
