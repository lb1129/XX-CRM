import{P as C}from"./index-1f60fd96.js";import{r as g}from"./utils-d9b628bc.js";import{a as _}from"./AntdIcon-4ec3baf8.js";function b(n,u){for(var d=0;d<u.length;d++){const l=u[d];if(typeof l!="string"&&!Array.isArray(l)){for(const a in l)if(a!=="default"&&!(a in n)){const i=Object.getOwnPropertyDescriptor(l,a);i&&Object.defineProperty(n,a,i.get?i:{enumerable:!0,get:()=>l[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var s={},p={};Object.defineProperty(p,"__esModule",{value:!0});var O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v160h896V192c0-17.7-14.3-32-32-32zM64 832c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V440H64v392zm579-184c0-4.4 3.6-8 8-8h165c4.4 0 8 3.6 8 8v72c0 4.4-3.6 8-8 8H651c-4.4 0-8-3.6-8-8v-72z"}}]},name:"credit-card",theme:"filled"};p.default=O;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=g,d=a(p),l=a(_);function a(e){return e&&e.__esModule?e:{default:e}}function i(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?Object(arguments[r]):{},o=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable}))),o.forEach(function(c){v(e,c,t[c])})}return e}function v(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var f=function(r,t){var o=i({},r,t.attrs);return(0,u.createVNode)(l.default,i({},o,{icon:d.default}),null)};f.displayName="CreditCardFilled",f.inheritAttrs=!1;var m=f;n.default=m})(s);const y=C(s),j=b({__proto__:null,default:y},[s]);export{j as C,s as a};
