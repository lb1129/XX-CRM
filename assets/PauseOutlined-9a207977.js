import{T as m}from"./index-4070ec6e.js";import{r as P}from"./utils-f8386a49.js";import{a as g}from"./AntdIcon-462ec046.js";function _(a,f){for(var o=0;o<f.length;o++){const u=f[o];if(typeof u!="string"&&!Array.isArray(u)){for(const n in u)if(n!=="default"&&!(n in a)){const l=Object.getOwnPropertyDescriptor(u,n);l&&Object.defineProperty(a,n,l.get?l:{enumerable:!0,get:()=>u[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var d={},p={};Object.defineProperty(p,"__esModule",{value:!0});var b={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M304 176h80v672h-80zm408 0h-64c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8z"}}]},name:"pause",theme:"outlined"};p.default=b;(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var f=P,o=n(p),u=n(g);function n(e){return e&&e.__esModule?e:{default:e}}function l(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},i=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable}))),i.forEach(function(c){O(e,c,r[c])})}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(t,r){var i=l({},t,r.attrs);return(0,f.createVNode)(u.default,l({},i,{icon:o.default}),null)};s.displayName="PauseOutlined",s.inheritAttrs=!1;var v=s;a.default=v})(d);const y=m(d),A=_({__proto__:null,default:y},[d]);export{A as P,d as a};