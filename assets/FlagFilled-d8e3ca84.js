import{P as m}from"./index-1f60fd96.js";import{r as F}from"./utils-d9b628bc.js";import{a as _}from"./AntdIcon-4ec3baf8.js";function b(l,f){for(var o=0;o<f.length;o++){const n=f[o];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in l)){const i=Object.getOwnPropertyDescriptor(n,a);i&&Object.defineProperty(l,a,i.get?i:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}var g={},s={};Object.defineProperty(s,"__esModule",{value:!0});var O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 305H624V192c0-17.7-14.3-32-32-32H184v-40c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V640h248v113c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V337c0-17.7-14.3-32-32-32z"}}]},name:"flag",theme:"filled"};s.default=O;(function(l){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var f=F,o=a(s),n=a(_);function a(e){return e&&e.__esModule?e:{default:e}}function i(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},u=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(u=u.concat(Object.getOwnPropertySymbols(r).filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable}))),u.forEach(function(c){p(e,c,r[c])})}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(t,r){var u=i({},t,r.attrs);return(0,f.createVNode)(n.default,i({},u,{icon:o.default}),null)};d.displayName="FlagFilled",d.inheritAttrs=!1;var v=d;l.default=v})(g);const y=m(g),$=b({__proto__:null,default:y},[g]);export{$ as F,g as a};
