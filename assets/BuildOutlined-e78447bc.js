import{P as p}from"./index-1f60fd96.js";import{r as g}from"./utils-d9b628bc.js";import{a as _}from"./AntdIcon-4ec3baf8.js";function b(u,d){for(var i=0;i<d.length;i++){const a=d[i];if(typeof a!="string"&&!Array.isArray(a)){for(const n in a)if(n!=="default"&&!(n in u)){const l=Object.getOwnPropertyDescriptor(a,n);l&&Object.defineProperty(u,n,l.get?l:{enumerable:!0,get:()=>a[n]})}}}return Object.freeze(Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}))}var s={},v={};Object.defineProperty(v,"__esModule",{value:!0});var y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M916 210H376c-17.7 0-32 14.3-32 32v236H108c-17.7 0-32 14.3-32 32v272c0 17.7 14.3 32 32 32h540c17.7 0 32-14.3 32-32V546h236c17.7 0 32-14.3 32-32V242c0-17.7-14.3-32-32-32zm-504 68h200v200H412V278zm-68 468H144V546h200v200zm268 0H412V546h200v200zm268-268H680V278h200v200z"}}]},name:"build",theme:"outlined"};v.default=y;(function(u){Object.defineProperty(u,"__esModule",{value:!0}),u.default=void 0;var d=g,i=n(v),a=n(_);function n(e){return e&&e.__esModule?e:{default:e}}function l(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(f){return Object.getOwnPropertyDescriptor(r,f).enumerable}))),o.forEach(function(f){O(e,f,r[f])})}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=function(t,r){var o=l({},t,r.attrs);return(0,d.createVNode)(a.default,l({},o,{icon:i.default}),null)};c.displayName="BuildOutlined",c.inheritAttrs=!1;var m=c;u.default=m})(s);const h=p(s),V=b({__proto__:null,default:h},[s]);export{V as B,s as a};
