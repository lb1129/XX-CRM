import{A as v}from"./index-52f781cf.js";import{r as g}from"./utils-a5eece12.js";import{a as _}from"./AntdIcon-5b0ad14e.js";function b(a,f){for(var u=0;u<f.length;u++){const l=f[u];if(typeof l!="string"&&!Array.isArray(l)){for(const n in l)if(n!=="default"&&!(n in a)){const i=Object.getOwnPropertyDescriptor(l,n);i&&Object.defineProperty(a,n,i.get?i:{enumerable:!0,get:()=>l[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var s={},O={};Object.defineProperty(O,"__esModule",{value:!0});var y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"}}]},name:"filter",theme:"outlined"};O.default=y;(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var f=g,u=n(O),l=n(_);function n(e){return e&&e.__esModule?e:{default:e}}function i(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable}))),o.forEach(function(c){p(e,c,r[c])})}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(t,r){var o=i({},t,r.attrs);return(0,f.createVNode)(l.default,i({},o,{icon:u.default}),null)};d.displayName="FilterOutlined",d.inheritAttrs=!1;var m=d;a.default=m})(s);const h=v(s),A=b({__proto__:null,default:h},[s]);export{A as F,h as a,s as b};
