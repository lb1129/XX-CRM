import{T as m}from"./index-89de8fec.js";import{r as g}from"./utils-b2df6fca.js";import{a as _}from"./AntdIcon-86cecc93.js";function O(n,f){for(var i=0;i<f.length;i++){const a=f[i];if(typeof a!="string"&&!Array.isArray(a)){for(const l in a)if(l!=="default"&&!(l in n)){const u=Object.getOwnPropertyDescriptor(a,l);u&&Object.defineProperty(n,l,u.get?u:{enumerable:!0,get:()=>a[l]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var s={},b={};Object.defineProperty(b,"__esModule",{value:!0});var y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M348 676.1C250 619.4 184 513.4 184 392c0-181.1 146.9-328 328-328s328 146.9 328 328c0 121.4-66 227.4-164 284.1V792c0 17.7-14.3 32-32 32H380c-17.7 0-32-14.3-32-32V676.1zM392 888h240c4.4 0 8 3.6 8 8v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32v-32c0-4.4 3.6-8 8-8z"}}]},name:"bulb",theme:"filled"};b.default=y;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var f=g,i=l(b),a=l(_);function l(e){return e&&e.__esModule?e:{default:e}}function u(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable}))),o.forEach(function(c){p(e,c,r[c])})}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(t,r){var o=u({},t,r.attrs);return(0,f.createVNode)(a.default,u({},o,{icon:i.default}),null)};d.displayName="BulbFilled",d.inheritAttrs=!1;var v=d;n.default=v})(s);const B=m(s),j=O({__proto__:null,default:B},[s]);export{j as B,s as a};
