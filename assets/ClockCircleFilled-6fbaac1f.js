import{T as C}from"./index-4070ec6e.js";import{r as g}from"./utils-f8386a49.js";import{a as _}from"./AntdIcon-462ec046.js";function b(a,u){for(var i=0;i<u.length;i++){const c=u[i];if(typeof c!="string"&&!Array.isArray(c)){for(const l in c)if(l!=="default"&&!(l in a)){const n=Object.getOwnPropertyDescriptor(c,l);n&&Object.defineProperty(a,l,n.get?n:{enumerable:!0,get:()=>c[l]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var s={},p={};Object.defineProperty(p,"__esModule",{value:!0});var O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm176.5 585.7l-28.6 39a7.99 7.99 0 01-11.2 1.7L483.3 569.8a7.92 7.92 0 01-3.3-6.5V288c0-4.4 3.6-8 8-8h48.1c4.4 0 8 3.6 8 8v247.5l142.6 103.1c3.6 2.5 4.4 7.5 1.8 11.1z"}}]},name:"clock-circle",theme:"filled"};p.default=O;(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var u=g,i=l(p),c=l(_);function l(e){return e&&e.__esModule?e:{default:e}}function n(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?Object(arguments[r]):{},o=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(f){return Object.getOwnPropertyDescriptor(t,f).enumerable}))),o.forEach(function(f){m(e,f,t[f])})}return e}function m(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var d=function(r,t){var o=n({},r,t.attrs);return(0,u.createVNode)(c.default,n({},o,{icon:i.default}),null)};d.displayName="ClockCircleFilled",d.inheritAttrs=!1;var v=d;a.default=v})(s);const y=C(s),h=b({__proto__:null,default:y},[s]);export{h as C,s as a};
