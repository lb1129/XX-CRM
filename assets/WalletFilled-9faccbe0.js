import{T as g}from"./index-2a181c57.js";import{r as _}from"./utils-1fd1acb1.js";import{a as b}from"./AntdIcon-f0f3b2a7.js";function O(a,f){for(var o=0;o<f.length;o++){const n=f[o];if(typeof n!="string"&&!Array.isArray(n)){for(const l in n)if(l!=="default"&&!(l in a)){const i=Object.getOwnPropertyDescriptor(n,l);i&&Object.defineProperty(a,l,i.get?i:{enumerable:!0,get:()=>n[l]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var s={},p={};Object.defineProperty(p,"__esModule",{value:!0});var y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 464H528V448h320v128zm-268-64a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"wallet",theme:"filled"};p.default=y;(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var f=_,o=l(p),n=l(b);function l(e){return e&&e.__esModule?e:{default:e}}function i(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},u=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(u=u.concat(Object.getOwnPropertySymbols(r).filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable}))),u.forEach(function(c){m(e,c,r[c])})}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(t,r){var u=i({},t,r.attrs);return(0,f.createVNode)(n.default,i({},u,{icon:o.default}),null)};d.displayName="WalletFilled",d.inheritAttrs=!1;var v=d;a.default=v})(s);const F=g(s),j=O({__proto__:null,default:F},[s]);export{j as W,s as a};
