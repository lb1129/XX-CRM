import{P as m}from"./index-1f60fd96.js";import{r as g}from"./utils-d9b628bc.js";import{a as _}from"./AntdIcon-4ec3baf8.js";function b(a,f){for(var l=0;l<f.length;l++){const i=f[l];if(typeof i!="string"&&!Array.isArray(i)){for(const n in i)if(n!=="default"&&!(n in a)){const u=Object.getOwnPropertyDescriptor(i,n);u&&Object.defineProperty(a,n,u.get?u:{enumerable:!0,get:()=>i[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var s={},O={};Object.defineProperty(O,"__esModule",{value:!0});var y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"line",theme:"outlined"};O.default=y;(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var f=g,l=n(O),i=n(_);function n(e){return e&&e.__esModule?e:{default:e}}function u(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable}))),o.forEach(function(c){p(e,c,r[c])})}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(t,r){var o=u({},t,r.attrs);return(0,f.createVNode)(i.default,u({},o,{icon:l.default}),null)};d.displayName="LineOutlined",d.inheritAttrs=!1;var v=d;a.default=v})(s);const P=m(s),$=b({__proto__:null,default:P},[s]);export{$ as L,s as a};
