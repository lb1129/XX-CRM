import{T as m}from"./index-4070ec6e.js";import{r as v}from"./utils-f8386a49.js";import{a as _}from"./AntdIcon-462ec046.js";function b(a,d){for(var u=0;u<d.length;u++){const o=d[u];if(typeof o!="string"&&!Array.isArray(o)){for(const n in o)if(n!=="default"&&!(n in a)){const i=Object.getOwnPropertyDescriptor(o,n);i&&Object.defineProperty(a,n,i.get?i:{enumerable:!0,get:()=>o[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var s={},g={};Object.defineProperty(g,"__esModule",{value:!0});var y={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"};g.default=y;(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=v,u=n(g),o=n(_);function n(e){return e&&e.__esModule?e:{default:e}}function i(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},l=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(r).filter(function(f){return Object.getOwnPropertyDescriptor(r,f).enumerable}))),l.forEach(function(f){O(e,f,r[f])})}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=function(t,r){var l=i({},t,r.attrs);return(0,d.createVNode)(o.default,i({},l,{icon:u.default}),null)};c.displayName="LoadingOutlined",c.inheritAttrs=!1;var p=c;a.default=p})(s);const L=m(s),$=b({__proto__:null,default:L},[s]);export{$ as L,s as a};
