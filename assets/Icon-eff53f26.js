import{T as A}from"./index-4070ec6e.js";import{r as D,a as E}from"./utils-f8386a49.js";function M(s,f){for(var l=0;l<f.length;l++){const c=f[l];if(typeof c!="string"&&!Array.isArray(c)){for(const i in c)if(i!=="default"&&!(i in s)){const p=Object.getOwnPropertyDescriptor(c,i);p&&Object.defineProperty(s,i,p.get?p:{enumerable:!0,get:()=>c[i]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}var h={};(function(s){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var f=D,l=E,c=["class","component","viewBox","spin","rotate","tabindex","onClick"];function i(e){for(var o=1;o<arguments.length;o++){var r=arguments[o]!=null?Object(arguments[o]):{},a=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),a.forEach(function(t){p(e,t,r[t])})}return e}function p(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function S(e,o){if(e==null)return{};var r=B(e,o),a,t;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],!(o.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function B(e,o){if(e==null)return{};var r={},a=Object.keys(e),t,n;for(n=0;n<a.length;n++)t=a[n],!(o.indexOf(t)>=0)&&(r[t]=e[t]);return r}var d=function(o,r){var a=r.attrs,t=r.slots,n=i({},o,a),_=n.class,b=n.component,v=n.viewBox,j=n.spin,m=n.rotate,C=n.tabindex,P=n.onClick,w=S(n,c),u=t.default&&t.default(),x=u&&u.length,y=t.component;(0,l.warning)(!!(b||x||y),"Should have `component` prop/slot or `children`."),(0,l.useInsertStyles)();var N=p({anticon:!0},_,_),k={"anticon-spin":j===""||!!j},$=m?{msTransform:"rotate(".concat(m,"deg)"),transform:"rotate(".concat(m,"deg)")}:void 0,g=i({},l.svgBaseProps,{viewBox:v,class:k,style:$});v||delete g.viewBox;var T=function(){return b?(0,f.createVNode)(b,g,{default:function(){return[u]}}):y?y(g):x?((0,l.warning)(!!v||u.length===1&&u[0]&&u[0].type==="use","Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),(0,f.createVNode)("svg",i({},g,{viewBox:v}),[u])):null},O=C;return O===void 0&&P&&(O=-1,w.tabindex=O),(0,f.createVNode)("span",i({role:"img"},w,{onClick:P,class:N}),[T()])};d.props={spin:Boolean,rotate:Number,viewBox:String,ariaLabel:String},d.inheritAttrs=!1,d.displayName="Icon";var I=d;s.default=I})(h);const V=A(h),F=M({__proto__:null,default:V},[h]);export{F as I,h as a};
