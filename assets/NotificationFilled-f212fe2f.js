import{A as g}from"./index-52f781cf.js";import{r as _}from"./utils-a5eece12.js";import{a as b}from"./AntdIcon-5b0ad14e.js";function O(n,c){for(var l=0;l<c.length;l++){const a=c[l];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in n)){const o=Object.getOwnPropertyDescriptor(a,i);o&&Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var s={},p={};Object.defineProperty(p,"__esModule",{value:!0});var y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.6c-3.7 11.6-5.6 23.9-5.6 36.4 0 65.9 53.8 119.5 120 119.5 55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3 16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112zM344 762.3c-26.5 0-48-21.4-48-47.8 0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1z"}}]},name:"notification",theme:"filled"};p.default=y;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=_,l=i(p),a=i(b);function i(e){return e&&e.__esModule?e:{default:e}}function o(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},f=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(f=f.concat(Object.getOwnPropertySymbols(r).filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable}))),f.forEach(function(u){v(e,u,r[u])})}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(t,r){var f=o({},t,r.attrs);return(0,c.createVNode)(a.default,o({},f,{icon:l.default}),null)};d.displayName="NotificationFilled",d.inheritAttrs=!1;var m=d;n.default=m})(s);const N=g(s),j=O({__proto__:null,default:N},[s]);export{j as N,N as a,s as b};
