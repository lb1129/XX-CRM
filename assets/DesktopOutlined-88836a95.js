import{T as m}from"./index-4070ec6e.js";import{r as g}from"./utils-f8386a49.js";import{a as _}from"./AntdIcon-462ec046.js";function b(a,c){for(var l=0;l<c.length;l++){const o=c[l];if(typeof o!="string"&&!Array.isArray(o)){for(const n in o)if(n!=="default"&&!(n in a)){const u=Object.getOwnPropertyDescriptor(o,n);u&&Object.defineProperty(a,n,u.get?u:{enumerable:!0,get:()=>o[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var s={},p={};Object.defineProperty(p,"__esModule",{value:!0});var y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 140H96c-17.7 0-32 14.3-32 32v496c0 17.7 14.3 32 32 32h380v112H304c-8.8 0-16 7.2-16 16v48c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-48c0-8.8-7.2-16-16-16H548V700h380c17.7 0 32-14.3 32-32V172c0-17.7-14.3-32-32-32zm-40 488H136V212h752v416z"}}]},name:"desktop",theme:"outlined"};p.default=y;(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var c=g,l=n(p),o=n(_);function n(e){return e&&e.__esModule?e:{default:e}}function u(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},i=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(f){return Object.getOwnPropertyDescriptor(r,f).enumerable}))),i.forEach(function(f){v(e,f,r[f])})}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(t,r){var i=u({},t,r.attrs);return(0,c.createVNode)(o.default,u({},i,{icon:l.default}),null)};d.displayName="DesktopOutlined",d.inheritAttrs=!1;var O=d;a.default=O})(s);const D=m(s),j=b({__proto__:null,default:D},[s]);export{j as D,s as a};