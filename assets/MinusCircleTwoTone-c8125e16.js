import{T as g}from"./index-4070ec6e.js";import{r as T}from"./utils-f8386a49.js";import{a as _}from"./AntdIcon-462ec046.js";function M(n,a){for(var i=0;i<a.length;i++){const u=a[i];if(typeof u!="string"&&!Array.isArray(u)){for(const o in u)if(o!=="default"&&!(o in n)){const c=Object.getOwnPropertyDescriptor(u,o);c&&Object.defineProperty(n,o,c.get?c:{enumerable:!0,get:()=>u[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var d={},p={};Object.defineProperty(p,"__esModule",{value:!0});var b={icon:function(a,i){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",fill:a}},{tag:"path",attrs:{d:"M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm192 396c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z",fill:i}},{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z",fill:a}}]}},name:"minus-circle",theme:"twotone"};p.default=b;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=T,i=o(p),u=o(_);function o(e){return e&&e.__esModule?e:{default:e}}function c(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},l=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(r).filter(function(f){return Object.getOwnPropertyDescriptor(r,f).enumerable}))),l.forEach(function(f){v(e,f,r[f])})}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(t,r){var l=c({},t,r.attrs);return(0,a.createVNode)(u.default,c({},l,{icon:i.default}),null)};s.displayName="MinusCircleTwoTone",s.inheritAttrs=!1;var m=s;n.default=m})(d);const O=g(d),C=M({__proto__:null,default:O},[d]);export{C as M,d as a};