import{T as g}from"./index-4070ec6e.js";import{r as _}from"./utils-f8386a49.js";import{a as b}from"./AntdIcon-462ec046.js";function O(n,c){for(var o=0;o<c.length;o++){const l=c[o];if(typeof l!="string"&&!Array.isArray(l)){for(const a in l)if(a!=="default"&&!(a in n)){const i=Object.getOwnPropertyDescriptor(l,a);i&&Object.defineProperty(n,a,i.get?i:{enumerable:!0,get:()=>l[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var s={},p={};Object.defineProperty(p,"__esModule",{value:!0});var A={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm330-170c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z"}}]},name:"audio",theme:"filled"};p.default=A;(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=_,o=a(p),l=a(b);function a(e){return e&&e.__esModule?e:{default:e}}function i(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},u=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(u=u.concat(Object.getOwnPropertySymbols(r).filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable}))),u.forEach(function(d){v(e,d,r[d])})}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=function(t,r){var u=i({},t,r.attrs);return(0,c.createVNode)(l.default,i({},u,{icon:o.default}),null)};f.displayName="AudioFilled",f.inheritAttrs=!1;var m=f;n.default=m})(s);const y=g(s),j=O({__proto__:null,default:y},[s]);export{j as A,s as a};