import{T as m}from"./index-89de8fec.js";import{r as g}from"./utils-b2df6fca.js";import{a as _}from"./AntdIcon-86cecc93.js";function b(l,i){for(var c=0;c<i.length;c++){const a=i[c];if(typeof a!="string"&&!Array.isArray(a)){for(const n in a)if(n!=="default"&&!(n in l)){const u=Object.getOwnPropertyDescriptor(a,n);u&&Object.defineProperty(l,n,u.get?u:{enumerable:!0,get:()=>a[n]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}var s={},O={};Object.defineProperty(O,"__esModule",{value:!0});var S={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h360c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H184V184h656v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32zM653.3 599.4l52.2-52.2a8.01 8.01 0 00-4.7-13.6l-179.4-21c-5.1-.6-9.5 3.7-8.9 8.9l21 179.4c.8 6.6 8.9 9.4 13.6 4.7l52.4-52.4 256.2 256.2c3.1 3.1 8.2 3.1 11.3 0l42.4-42.4c3.1-3.1 3.1-8.2 0-11.3L653.3 599.4z"}}]},name:"select",theme:"outlined"};O.default=S;(function(l){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var i=g,c=n(O),a=n(_);function n(e){return e&&e.__esModule?e:{default:e}}function u(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(f){return Object.getOwnPropertyDescriptor(r,f).enumerable}))),o.forEach(function(f){p(e,f,r[f])})}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(t,r){var o=u({},t,r.attrs);return(0,i.createVNode)(a.default,u({},o,{icon:c.default}),null)};d.displayName="SelectOutlined",d.inheritAttrs=!1;var v=d;l.default=v})(s);const y=m(s),M=b({__proto__:null,default:y},[s]);export{M as S,s as a};
