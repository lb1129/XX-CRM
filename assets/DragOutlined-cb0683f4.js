import{P as v}from"./index-1f60fd96.js";import{r as m}from"./utils-d9b628bc.js";import{a as _}from"./AntdIcon-4ec3baf8.js";function b(n,f){for(var o=0;o<f.length;o++){const u=f[o];if(typeof u!="string"&&!Array.isArray(u)){for(const a in u)if(a!=="default"&&!(a in n)){const l=Object.getOwnPropertyDescriptor(u,a);l&&Object.defineProperty(n,a,l.get?l:{enumerable:!0,get:()=>u[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var g={},s={};Object.defineProperty(s,"__esModule",{value:!0});var y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.3 506.3L781.7 405.6a7.23 7.23 0 00-11.7 5.7V476H548V254h64.8c6 0 9.4-7 5.7-11.7L517.7 114.7a7.14 7.14 0 00-11.3 0L405.6 242.3a7.23 7.23 0 005.7 11.7H476v222H254v-64.8c0-6-7-9.4-11.7-5.7L114.7 506.3a7.14 7.14 0 000 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V548h222v222h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V548h222v64.8c0 6 7 9.4 11.7 5.7l127.5-100.8a7.3 7.3 0 00.1-11.4z"}}]},name:"drag",theme:"outlined"};s.default=y;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var f=m,o=a(s),u=a(_);function a(e){return e&&e.__esModule?e:{default:e}}function l(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},i=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(r).filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable}))),i.forEach(function(c){O(e,c,r[c])})}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(t,r){var i=l({},t,r.attrs);return(0,f.createVNode)(u.default,l({},i,{icon:o.default}),null)};d.displayName="DragOutlined",d.inheritAttrs=!1;var p=d;n.default=p})(g);const D=v(g),$=b({__proto__:null,default:D},[g]);export{$ as D,g as a};
