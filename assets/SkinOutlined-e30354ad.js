import{T as m}from"./index-4070ec6e.js";import{r as g}from"./utils-f8386a49.js";import{a as _}from"./AntdIcon-462ec046.js";function b(a,f){for(var l=0;l<f.length;l++){const i=f[l];if(typeof i!="string"&&!Array.isArray(i)){for(const n in i)if(n!=="default"&&!(n in a)){const u=Object.getOwnPropertyDescriptor(i,n);u&&Object.defineProperty(a,n,u.get?u:{enumerable:!0,get:()=>i[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var s={},O={};Object.defineProperty(O,"__esModule",{value:!0});var S={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7a37.93 37.93 0 00-37-29.3H154a44 44 0 00-44 44v252a44 44 0 0044 44h75v388a44 44 0 0044 44h478a44 44 0 0044-44V466h75a44 44 0 0044-44V170a44 44 0 00-44-44zm-28 268H723v432H301V394H182V198h153.3c28.2 71.2 97.5 120 176.7 120s148.5-48.8 176.7-120H842v196z"}}]},name:"skin",theme:"outlined"};O.default=S;(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var f=g,l=n(O),i=n(_);function n(e){return e&&e.__esModule?e:{default:e}}function u(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable}))),o.forEach(function(c){p(e,c,r[c])})}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(t,r){var o=u({},t,r.attrs);return(0,f.createVNode)(i.default,u({},o,{icon:l.default}),null)};d.displayName="SkinOutlined",d.inheritAttrs=!1;var v=d;a.default=v})(s);const y=m(s),j=b({__proto__:null,default:y},[s]);export{j as S,s as a};