import{A as g}from"./index-52f781cf.js";import{r as T}from"./utils-a5eece12.js";import{a as _}from"./AntdIcon-5b0ad14e.js";function b(n,u){for(var a=0;a<u.length;a++){const i=u[a];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const f=Object.getOwnPropertyDescriptor(i,o);f&&Object.defineProperty(n,o,f.get?f:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var s={},p={};Object.defineProperty(p,"__esModule",{value:!0});var O={icon:function(u,a){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M761.1 288.3L687.8 215 325.1 577.6l-15.6 89 88.9-15.7z",fill:a}},{tag:"path",attrs:{d:"M880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32zm-622.3-84c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89z",fill:u}}]}},name:"edit",theme:"twotone"};p.default=O;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=T,a=o(p),i=o(_);function o(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},l=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(r).filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable}))),l.forEach(function(c){m(e,c,r[c])})}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(t,r){var l=f({},t,r.attrs);return(0,u.createVNode)(i.default,f({},l,{icon:a.default}),null)};d.displayName="EditTwoTone",d.inheritAttrs=!1;var v=d;n.default=v})(s);const w=g(s),h=b({__proto__:null,default:w},[s]);export{h as E,w as a,s as b};
