import{P as m}from"./index-1f60fd96.js";import{r as v}from"./utils-d9b628bc.js";import{a as _}from"./AntdIcon-4ec3baf8.js";function b(a,f){for(var u=0;u<f.length;u++){const l=f[u];if(typeof l!="string"&&!Array.isArray(l)){for(const n in l)if(n!=="default"&&!(n in a)){const i=Object.getOwnPropertyDescriptor(l,n);i&&Object.defineProperty(a,n,i.get?i:{enumerable:!0,get:()=>l[n]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var s={},g={};Object.defineProperty(g,"__esModule",{value:!0});var y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M573.7 252.5C422.5 197.4 201.3 96.7 201.3 96.7c-15.7-4.1-17.9 11.1-17.9 11.1-5 61.1 33.6 160.5 53.6 182.8 19.9 22.3 319.1 113.7 319.1 113.7S326 357.9 270.5 341.9c-55.6-16-37.9 17.8-37.9 17.8 11.4 61.7 64.9 131.8 107.2 138.4 42.2 6.6 220.1 4 220.1 4s-35.5 4.1-93.2 11.9c-42.7 5.8-97 12.5-111.1 17.8-33.1 12.5 24 62.6 24 62.6 84.7 76.8 129.7 50.5 129.7 50.5 33.3-10.7 61.4-18.5 85.2-24.2L565 743.1h84.6L603 928l205.3-271.9H700.8l22.3-38.7c.3.5.4.8.4.8S799.8 496.1 829 433.8l.6-1h-.1c5-10.8 8.6-19.7 10-25.8 17-71.3-114.5-99.4-265.8-154.5z"}}]},name:"dingtalk",theme:"outlined"};g.default=y;(function(a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var f=v,u=n(g),l=n(_);function n(e){return e&&e.__esModule?e:{default:e}}function i(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},o=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable}))),o.forEach(function(c){O(e,c,r[c])})}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=function(t,r){var o=i({},t,r.attrs);return(0,f.createVNode)(l.default,i({},o,{icon:u.default}),null)};d.displayName="DingtalkOutlined",d.inheritAttrs=!1;var p=d;a.default=p})(s);const D=m(s),j=b({__proto__:null,default:D},[s]);export{j as D,s as a};
