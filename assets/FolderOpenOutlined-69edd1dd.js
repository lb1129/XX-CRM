import{T as v}from"./index-4070ec6e.js";import{r as g}from"./utils-f8386a49.js";import{a as _}from"./AntdIcon-462ec046.js";function b(l,d){for(var u=0;u<d.length;u++){const a=d[u];if(typeof a!="string"&&!Array.isArray(a)){for(const n in a)if(n!=="default"&&!(n in l)){const o=Object.getOwnPropertyDescriptor(a,n);o&&Object.defineProperty(l,n,o.get?o:{enumerable:!0,get:()=>a[n]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}var p={},O={};Object.defineProperty(O,"__esModule",{value:!0});var y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"}}]},name:"folder-open",theme:"outlined"};O.default=y;(function(l){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var d=g,u=n(O),a=n(_);function n(e){return e&&e.__esModule?e:{default:e}}function o(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},i=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(f){return Object.getOwnPropertyDescriptor(r,f).enumerable}))),i.forEach(function(f){s(e,f,r[f])})}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=function(t,r){var i=o({},t,r.attrs);return(0,d.createVNode)(a.default,o({},i,{icon:u.default}),null)};c.displayName="FolderOpenOutlined",c.inheritAttrs=!1;var m=c;l.default=m})(p);const F=v(p),H=b({__proto__:null,default:F},[p]);export{H as F,p as a};