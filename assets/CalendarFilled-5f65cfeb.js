import{P as g}from"./index-1f60fd96.js";import{r as _}from"./utils-d9b628bc.js";import{a as b}from"./AntdIcon-4ec3baf8.js";function O(n,d){for(var o=0;o<d.length;o++){const l=d[o];if(typeof l!="string"&&!Array.isArray(l)){for(const a in l)if(a!=="default"&&!(a in n)){const i=Object.getOwnPropertyDescriptor(l,a);i&&Object.defineProperty(n,a,i.get?i:{enumerable:!0,get:()=>l[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var s={},v={};Object.defineProperty(v,"__esModule",{value:!0});var y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M112 880c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V460H112v420zm768-696H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v176h800V216c0-17.7-14.3-32-32-32z"}}]},name:"calendar",theme:"filled"};v.default=y;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var d=_,o=a(v),l=a(b);function a(e){return e&&e.__esModule?e:{default:e}}function i(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?Object(arguments[r]):{},u=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(u=u.concat(Object.getOwnPropertySymbols(t).filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable}))),u.forEach(function(c){p(e,c,t[c])})}return e}function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var f=function(r,t){var u=i({},r,t.attrs);return(0,d.createVNode)(l.default,i({},u,{icon:o.default}),null)};f.displayName="CalendarFilled",f.inheritAttrs=!1;var m=f;n.default=m})(s);const h=g(s),j=O({__proto__:null,default:h},[s]);export{j as C,s as a};
