!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,i,o=[],c=!0,u=!1;try{for(e=e.call(n);!(c=(r=e.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==e.return||e.return()}finally{if(u)throw i}}return o}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./index-legacy.64b96085.js","./File-legacy.7d95d042.js","./icon-legacy.cd9cf09d.js","./index-legacy.c0f80bc4.js","./index-legacy.a1435796.js","./Layout-legacy.ed55a97a.js","./index-legacy.7944211d.js","./FolderTree-legacy.59ced081.js","./index-legacy.bff77223.js"],(function(t){"use strict";var e,r,i,o,c,u,a,l;return{setters:[function(n){e=n.cS,r=n.y,i=n.d,o=n.c,c=n.E,u=n.a9,a=n.cT},function(n){l=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=n(e(),1)[0];function f(){var n,e=null===(n=t())||void 0===n?void 0:n.content,r=a(e).text;e&&window.open(r(),"_blank")}r((function(){f()}));var d=i();return o(u,{get loading(){return t.loading},get children(){return o(l,{get children(){return o(c,{onClick:f,get children(){return d("home.preview.open_in_new_window")}})}})}})}))}}}))}();
