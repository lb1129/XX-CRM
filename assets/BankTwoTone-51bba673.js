import{T as g}from"./index-4070ec6e.js";import{r as T}from"./utils-f8386a49.js";import{a as _}from"./AntdIcon-462ec046.js";function b(n,f){for(var o=0;o<f.length;o++){const u=f[o];if(typeof u!="string"&&!Array.isArray(u)){for(const a in u)if(a!=="default"&&!(a in n)){const l=Object.getOwnPropertyDescriptor(u,a);l&&Object.defineProperty(n,a,l.get?l:{enumerable:!0,get:()=>u[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var s={},v={};Object.defineProperty(v,"__esModule",{value:!0});var h={icon:function(f,o){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M240.9 393.9h542.2L512 196.7z",fill:o}},{tag:"path",attrs:{d:"M894 462c30.9 0 43.8-39.7 18.7-58L530.8 126.2a31.81 31.81 0 00-37.6 0L111.3 404c-25.1 18.2-12.2 58 18.8 58H192v374h-72c-4.4 0-8 3.6-8 8v52c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-52c0-4.4-3.6-8-8-8h-72V462h62zM381 836H264V462h117v374zm189 0H453V462h117v374zm190 0H642V462h118v374zM240.9 393.9L512 196.7l271.1 197.2H240.9z",fill:f}}]}},name:"bank",theme:"twotone"};v.default=h;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var f=T,o=a(v),u=a(_);function a(e){return e&&e.__esModule?e:{default:e}}function l(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},c=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(c=c.concat(Object.getOwnPropertySymbols(r).filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable}))),c.forEach(function(i){p(e,i,r[i])})}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(t,r){var c=l({},t,r.attrs);return(0,f.createVNode)(u.default,l({},c,{icon:o.default}),null)};d.displayName="BankTwoTone",d.inheritAttrs=!1;var m=d;n.default=m})(s);const O=g(s),P=b({__proto__:null,default:O},[s]);export{P as B,s as a};