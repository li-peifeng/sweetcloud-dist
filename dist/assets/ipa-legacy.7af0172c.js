!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,i,c=[],o=!0,a=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(c.push(r.value),!e||c.length!==e);o=!0);}catch(l){a=!0,i=l}finally{try{o||null==t.return||t.return()}finally{if(a)throw i}}return c}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.54ca0ef5.js","./File-legacy.9877b72b.js","./icon-legacy.9e72b7ed.js","./index-legacy.0e189369.js","./index-legacy.d3baf434.js","./Layout-legacy.a89e4934.js","./index-legacy.bf7d5067.js","./FolderTree-legacy.c8a28d7e.js","./index-legacy.4f7990f7.js"],(function(e){"use strict";var t,r,i,c,o,a,l,u,f,s,y;return{setters:[function(n){t=n.a,r=n.k,i=n.c2,c=n.e,o=n.a8,a=n.B,l=n.cX,u=n.cY,f=n.a0,s=n.cW},function(n){y=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=t(),d=n(r(!1),2),g=d[0],m=d[1],p=n(r(!1),2),h=p[0],b=p[1],j=i().currentObjLink;return c(y,{get children(){return c(o,{spacing:"$2",get children(){return[c(a,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+"".concat(l,"/i/").concat(u(encodeURIComponent(f.raw_url)+"/"+s(encodeURIComponent(f.obj.name))),".plist")},onClick:function(){m(!0)},get children(){return e("home.preview.".concat(g()?"installing":"install"))}}),c(a,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(j(!0))},onClick:function(){b(!0)},get children(){return e("home.preview.".concat(h()?"tr-installing":"tr-install"))}})]}})}})}))}}}))}();
