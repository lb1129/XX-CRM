import{T as _}from"./index-4070ec6e.js";import{a as h}from"./utils-f8386a49.js";function w(s,i){for(var p=0;p<i.length;p++){const f=i[p];if(typeof f!="string"&&!Array.isArray(f)){for(const u in f)if(u!=="default"&&!(u in s)){const c=Object.getOwnPropertyDescriptor(f,u);c&&Object.defineProperty(s,u,c.get?c:{enumerable:!0,get:()=>f[u]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}var m={};(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i=h,p=["icon","primaryColor","secondaryColor"];function f(r,o){if(r==null)return{};var t=u(r,o),n,e;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(e=0;e<a.length;e++)n=a[e],!(o.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(t[n]=r[n])}return t}function u(r,o){if(r==null)return{};var t={},n=Object.keys(r),e,a;for(a=0;a<n.length;a++)e=n[a],!(o.indexOf(e)>=0)&&(t[e]=r[e]);return t}function c(r){for(var o=1;o<arguments.length;o++){var t=arguments[o]!=null?Object(arguments[o]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(e){b(r,e,t[e])})}return r}function b(r,o,t){return o in r?Object.defineProperty(r,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[o]=t,r}var d={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function C(r){var o=r.primaryColor,t=r.secondaryColor;d.primaryColor=o,d.secondaryColor=t||(0,i.getSecondaryColor)(o),d.calculated=!!t}function v(){return c({},d)}var y=function(o,t){var n=c({},o,t.attrs),e=n.icon,a=n.primaryColor,j=n.secondaryColor,P=f(n,p),g=d;if(a&&(g={primaryColor:a,secondaryColor:j||(0,i.getSecondaryColor)(a)}),(0,i.useInsertStyles)(),(0,i.warning)((0,i.isIconDefinition)(e),"icon should be icon definiton, but got ".concat(e)),!(0,i.isIconDefinition)(e))return null;var l=e;return l&&typeof l.icon=="function"&&(l=c({},l,{icon:l.icon(g.primaryColor,g.secondaryColor)})),(0,i.generate)(l.icon,"svg-".concat(l.name),c({},P,{"data-icon":l.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"}))};y.props={icon:Object,primaryColor:String,secondaryColor:String,focusable:String},y.inheritAttrs=!1,y.displayName="IconBase",y.getTwoToneColors=v,y.setTwoToneColors=C;var O=y;s.default=O})(m);const S=_(m),B=w({__proto__:null,default:S},[m]);export{B as I,m as a};
