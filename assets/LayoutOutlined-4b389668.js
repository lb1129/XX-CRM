import{T as y}from"./index-89de8fec.js";import{r as m}from"./utils-b2df6fca.js";import{a as g}from"./AntdIcon-86cecc93.js";function _(a,f){for(var l=0;l<f.length;l++){const u=f[l];if(typeof u!="string"&&!Array.isArray(u)){for(const n in u)if(n!=="default"&&!(n in a)){const o=Object.getOwnPropertyDescriptor(u,n);o&&Object.defineProperty(a,n,o.get?o:{enumerable:!0,get:()=>u[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var s={},O={};Object.defineProperty(O,"__esModule",{value:!0});var b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-696 72h136v656H184V184zm656 656H384V384h456v456zM384 320V184h456v136H384z"}}]},name:"layout",theme:"outlined"};O.default=b;(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var f=m,l=n(O),u=n(g);function n(e){return e&&e.__esModule?e:{default:e}}function o(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},i=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable}))),i.forEach(function(c){p(e,c,r[c])})}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(t,r){var i=o({},t,r.attrs);return(0,f.createVNode)(u.default,o({},i,{icon:l.default}),null)};d.displayName="LayoutOutlined",d.inheritAttrs=!1;var v=d;a.default=v})(s);const h=y(s),M=_({__proto__:null,default:h},[s]);export{M as L,s as a};
