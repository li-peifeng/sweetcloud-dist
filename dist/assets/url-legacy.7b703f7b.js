!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,i,o=[],c=!0,u=!1;try{for(e=e.call(n);!(c=(r=e.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(l){u=!0,i=l}finally{try{c||null==e.return||e.return()}finally{if(u)throw i}}return o}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./index-legacy.c62f6cc6.js","./File-legacy.4779373c.js","./icon-legacy.493cf83c.js","./index-legacy.8ef6672f.js","./index-legacy.3b0523fc.js","./Layout-legacy.7409b282.js","./index-legacy.6b1559b7.js","./FolderTree-legacy.419db1f7.js","./index-legacy.1f805071.js"],(function(t){"use strict";var e,r,i,o,c,u,l,a;return{setters:[function(n){e=n.cO,r=n.w,i=n.a,o=n.e,c=n.B,u=n.cp,l=n.cP},function(n){a=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=n(e(),1)[0];function f(){var n,e=null===(n=t())||void 0===n?void 0:n.content,r=l(e).text;e&&window.open(r(),"_blank")}r((function(){f()}));var y=i();return o(u,{get loading(){return t.loading},get children(){return o(a,{get children(){return o(c,{onClick:f,get children(){return y("home.preview.open_in_new_window")}})}})}})}))}}}))}();
