import{T as v}from"./index-4070ec6e.js";import{r as g}from"./utils-f8386a49.js";import{a as _}from"./AntdIcon-462ec046.js";function b(l,s){for(var u=0;u<s.length;u++){const i=s[u];if(typeof i!="string"&&!Array.isArray(i)){for(const n in i)if(n!=="default"&&!(n in l)){const a=Object.getOwnPropertyDescriptor(i,n);a&&Object.defineProperty(l,n,a.get?a:{enumerable:!0,get:()=>i[n]})}}}return Object.freeze(Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}))}var d={},p={};Object.defineProperty(p,"__esModule",{value:!0});var y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};p.default=y;(function(l){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var s=g,u=n(p),i=n(_);function n(e){return e&&e.__esModule?e:{default:e}}function a(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(f){return Object.getOwnPropertyDescriptor(r,f).enumerable}))),o.forEach(function(f){O(e,f,r[f])})}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=function(t,r){var o=a({},t,r.attrs);return(0,s.createVNode)(i.default,a({},o,{icon:u.default}),null)};c.displayName="EllipsisOutlined",c.inheritAttrs=!1;var m=c;l.default=m})(d);const E=v(d),$=b({__proto__:null,default:E},[d]);export{$ as E,d as a};
