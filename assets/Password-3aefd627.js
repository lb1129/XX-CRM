import{k as z,l as o,r as P,m as S,h as V,n as A,q as D,s as r,t as l,v as N}from"./index-9a9dea24.js";import{c as O}from"./index-516dbfe4.js";import{i as $,I as q}from"./index-726ed5a1.js";import B from"./EyeOutlined-99b55777.js";import F from"./EyeInvisibleOutlined-6e705fc5.js";import{o as W}from"./RightOutlined-c94e739b.js";var G=["size","visibilityToggle"],H={click:"onClick",hover:"onMouseover"},J=function(n){return n?l(B,null,null):l(F,null,null)};const Z=z({compatConfig:{MODE:3},name:"AInputPassword",inheritAttrs:!1,props:o(o({},$()),{},{prefixCls:String,inputPrefixCls:String,action:{type:String,default:"click"},visibilityToggle:{type:Boolean,default:!0},iconRender:Function}),setup:function(n,c){var x=c.slots,C=c.attrs,_=c.expose,t=P(!1),y=function(){var e=n.disabled;e||(t.value=!t.value)},f=P(),R=function(){var e;(e=f.value)===null||e===void 0||e.focus()},w=function(){var e;(e=f.value)===null||e===void 0||e.blur()};_({focus:R,blur:w});var M=function(e){var i,d=n.action,a=n.iconRender,p=a===void 0?x.iconRender||J:a,u=H[d]||"",m=p(t.value),T=(i={},r(i,u,y),r(i,"class","".concat(e,"-icon")),r(i,"key","passwordIcon"),r(i,"onMousedown",function(g){g.preventDefault()}),r(i,"onMouseup",function(g){g.preventDefault()}),i);return O(N(m)?m:l("span",null,[m]),T)},b=S("input-password",n),v=b.prefixCls,h=b.getPrefixCls,k=V(function(){return h("input",n.inputPrefixCls)}),E=function(){var e=n.size,i=n.visibilityToggle,d=A(n,G),a=i&&M(v.value),p=D(v.value,C.class,r({},"".concat(v.value,"-").concat(e),!!e)),u=o(o(o({},W(d,["suffix","iconRender","action"])),C),{},{type:t.value?"text":"password",class:p,prefixCls:k.value,suffix:a});return e&&(u.size=e),l(q,o({ref:f},u),x)};return function(){return E()}}});export{Z as _};
