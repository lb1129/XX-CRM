import{A as m}from"./index-52f781cf.js";import{r as T}from"./utils-a5eece12.js";import{a as h}from"./AntdIcon-5b0ad14e.js";function _(a,u){for(var n=0;n<u.length;n++){const l=u[n];if(typeof l!="string"&&!Array.isArray(l)){for(const o in l)if(o!=="default"&&!(o in a)){const f=Object.getOwnPropertyDescriptor(l,o);f&&Object.defineProperty(a,o,f.get?f:{enumerable:!0,get:()=>l[o]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var s={},d={};Object.defineProperty(d,"__esModule",{value:!0});var b={icon:function(u,n){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M184 232h368v336H184z",fill:n}},{tag:"path",attrs:{d:"M624 632c0 4.4-3.6 8-8 8H504v73h336V377H624v255z",fill:n}},{tag:"path",attrs:{d:"M880 305H624V192c0-17.7-14.3-32-32-32H184v-40c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V640h248v113c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V337c0-17.7-14.3-32-32-32zM184 568V232h368v336H184zm656 145H504v-73h112c4.4 0 8-3.6 8-8V377h216v336z",fill:u}}]}},name:"flag",theme:"twotone"};d.default=b;(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var u=T,n=o(d),l=o(h);function o(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},c=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(c=c.concat(Object.getOwnPropertySymbols(r).filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable}))),c.forEach(function(i){v(e,i,r[i])})}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(t,r){var c=f({},t,r.attrs);return(0,u.createVNode)(l.default,f({},c,{icon:n.default}),null)};g.displayName="FlagTwoTone",g.inheritAttrs=!1;var p=g;a.default=p})(s);const O=m(s),P=_({__proto__:null,default:O},[s]);export{P as F,O as a,s as b};
