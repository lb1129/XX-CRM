import{T as m}from"./index-4070ec6e.js";import{r as v}from"./utils-f8386a49.js";import{a as _}from"./AntdIcon-462ec046.js";function b(o,u){for(var a=0;a<u.length;a++){const l=u[a];if(typeof l!="string"&&!Array.isArray(l)){for(const n in l)if(n!=="default"&&!(n in o)){const c=Object.getOwnPropertyDescriptor(l,n);c&&Object.defineProperty(o,n,c.get?c:{enumerable:!0,get:()=>l[n]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var d={},T={};Object.defineProperty(T,"__esModule",{value:!0});var O={icon:function(u,a){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M706.8 488.7a32.05 32.05 0 01-45.3 0L537 364.2a32.05 32.05 0 010-45.3l132.9-132.8a184.2 184.2 0 00-144 53.5c-58.1 58.1-69.3 145.3-33.6 214.6L439.5 507c-.1 0-.1-.1-.1-.1L209.3 737l79.2 79.2 274-274.1.1.1 8.8-8.8c69.3 35.7 156.5 24.5 214.6-33.6 39.2-39.1 57.3-92.1 53.6-143.9L706.8 488.7z",fill:a}},{tag:"path",attrs:{d:"M876.6 239.5c-.5-.9-1.2-1.8-2-2.5-5-5-13.1-5-18.1 0L684.2 409.3l-67.9-67.9L788.7 169c.8-.8 1.4-1.6 2-2.5 3.6-6.1 1.6-13.9-4.5-17.5-98.2-58-226.8-44.7-311.3 39.7-67 67-89.2 162-66.5 247.4l-293 293c-3 3-2.8 7.9.3 11l169.7 169.7c3.1 3.1 8.1 3.3 11 .3l292.9-292.9c85.5 22.8 180.5.7 247.6-66.4 84.4-84.5 97.7-213.1 39.7-311.3zM786 499.8c-58.1 58.1-145.3 69.3-214.6 33.6l-8.8 8.8-.1-.1-274 274.1-79.2-79.2 230.1-230.1s0 .1.1.1l52.8-52.8c-35.7-69.3-24.5-156.5 33.6-214.6a184.2 184.2 0 01144-53.5L537 318.9a32.05 32.05 0 000 45.3l124.5 124.5a32.05 32.05 0 0045.3 0l132.8-132.8c3.7 51.8-14.4 104.8-53.6 143.9z",fill:u}}]}},name:"tool",theme:"twotone"};T.default=O;(function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var u=v,a=n(T),l=n(_);function n(e){return e&&e.__esModule?e:{default:e}}function c(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},f=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(f=f.concat(Object.getOwnPropertySymbols(r).filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable}))),f.forEach(function(i){p(e,i,r[i])})}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(t,r){var f=c({},t,r.attrs);return(0,u.createVNode)(l.default,c({},f,{icon:a.default}),null)};s.displayName="ToolTwoTone",s.inheritAttrs=!1;var g=s;o.default=g})(d);const w=m(d),j=b({__proto__:null,default:w},[d]);export{j as T,d as a};