import{x as C,v as p,y as I,z as _}from"./index-52f781cf.js";var k=["class","component","viewBox","spin","rotate","tabindex","onClick"];function c(e){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?Object(arguments[a]):{},o=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(t){x(e,t,n[t])})}return e}function x(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function N(e,a){if(e==null)return{};var n=E(e,a),o,t;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],!(a.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}function E(e,a){if(e==null)return{};var n={},o=Object.keys(e),t,r;for(r=0;r<o.length;r++)t=o[r],!(a.indexOf(t)>=0)&&(n[t]=e[t]);return n}var v=function(a,n){var o=n.attrs,t=n.slots,r=c({},a,o),d=r.class,g=r.component,s=r.viewBox,b=r.spin,f=r.rotate,h=r.tabindex,m=r.onClick,y=N(r,k),i=t.default&&t.default(),w=i&&i.length,O=t.component;C();var P=x({anticon:!0},d,d),S={"anticon-spin":b===""||!!b},j=f?{msTransform:"rotate(".concat(f,"deg)"),transform:"rotate(".concat(f,"deg)")}:void 0,l=c({},I,{viewBox:s,class:S,style:j});s||delete l.viewBox;var B=function(){return g?p(g,l,{default:function(){return[i]}}):O?O(l):w?(_(!!s||i.length===1&&i[0]&&i[0].type==="use"),p("svg",c({},l,{viewBox:s}),[i])):null},u=h;return u===void 0&&m&&(u=-1,y.tabindex=u),p("span",c({role:"img"},y,{onClick:m,class:P}),[B()])};v.props={spin:Boolean,rotate:Number,viewBox:String,ariaLabel:String};v.inheritAttrs=!1;v.displayName="Icon";export{v as default};
