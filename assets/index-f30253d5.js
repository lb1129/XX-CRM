import{A as H,v as n,cm as Q,cl as j,t as m,cn as X,R as L,q as g,cg as Y,r as U,a7 as Z,ck as ee,M as te,i as ae,S as ne,cf as S,co as re,cp as oe,cq as le}from"./index-2a181c57.js";import ie from"./ArrowLeftOutlined-b997f6a8.js";import ue from"./ArrowRightOutlined-75e32beb.js";import{B as ce,A as se}from"./index-e541e14c.js";import{K as W,b as de}from"./index-c070c8b9.js";import{u as ve}from"./useDestroyed-af3fe4e9.js";var fe=function(){return{prefixCls:String,width:{type:[Number,String]}}},pe=H({compatConfig:{MODE:3},name:"SkeletonTitle",props:fe(),setup:function(e){return function(){var o=e.prefixCls,s=e.width,t=typeof s=="number"?"".concat(s,"px"):s;return n("h3",{class:o,style:{width:t}},null)}}});const be=pe;var ge=function(){return{prefixCls:String,width:{type:[Number,String,Array]},rows:Number}},me=H({compatConfig:{MODE:3},name:"SkeletonParagraph",props:ge(),setup:function(e){var o=function(t){var u=e.width,c=e.rows,d=c===void 0?2:c;if(Array.isArray(u))return u[t];if(d-1===t)return u};return function(){var s=e.prefixCls,t=e.rows,u=Q(Array(t)).map(function(c,d){var y=o(d);return n("li",{key:d,style:{width:typeof y=="number"?"".concat(y,"px"):y}},null)});return n("ul",{class:s},[u])}}});const ye=me;var Re=function(){return{prefixCls:String,size:[String,Number],shape:String,active:{type:Boolean,default:void 0}}},V=function(e){var o,s,t=e.prefixCls,u=e.size,c=e.shape,d=j((o={},m(o,"".concat(t,"-lg"),u==="large"),m(o,"".concat(t,"-sm"),u==="small"),o)),y=j((s={},m(s,"".concat(t,"-circle"),c==="circle"),m(s,"".concat(t,"-square"),c==="square"),m(s,"".concat(t,"-round"),c==="round"),s)),h=typeof u=="number"?{width:"".concat(u,"px"),height:"".concat(u,"px"),lineHeight:"".concat(u,"px")}:{};return n("span",{class:j(t,d,y),style:h},null)};V.displayName="SkeletonElement";const ke=V;var he=function(){return{active:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},prefixCls:String,avatar:{type:[Boolean,Object],default:void 0},title:{type:[Boolean,Object],default:void 0},paragraph:{type:[Boolean,Object],default:void 0},round:{type:Boolean,default:void 0}}};function N(l){return l&&Y(l)==="object"?l:{}}function Ce(l,e){return l&&!e?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function xe(l,e){return!l&&e?{width:"38%"}:l&&e?{width:"50%"}:{}}function _e(l,e){var o={};return(!l||!e)&&(o.width="61%"),!l&&e?o.rows=3:o.rows=2,o}var we=H({compatConfig:{MODE:3},name:"ASkeleton",props:X(he(),{avatar:!1,title:!0,paragraph:!0}),setup:function(e,o){var s=o.slots,t=L("skeleton",e),u=t.prefixCls,c=t.direction;return function(){var d,y=e.loading,h=e.avatar,P=e.title,w=e.paragraph,I=e.active,b=e.round,i=u.value;if(y||e.loading===void 0){var p,B=!!h||h==="",C=!!P||P==="",$=!!w||w==="",v;if(B){var a=g(g({prefixCls:"".concat(i,"-avatar")},Ce(C,$)),N(h));v=n("div",{class:"".concat(i,"-header")},[n(ke,a,null)])}var r;if(C||$){var f;if(C){var x=g(g({prefixCls:"".concat(i,"-title")},xe(B,$)),N(P));f=n(be,x,null)}var k;if($){var _=g(g({prefixCls:"".concat(i,"-paragraph")},_e(B,C)),N(w));k=n(ye,_,null)}r=n("div",{class:"".concat(i,"-content")},[f,k])}var E=j(i,(p={},m(p,"".concat(i,"-with-avatar"),B),m(p,"".concat(i,"-active"),I),m(p,"".concat(i,"-rtl"),c.value==="rtl"),m(p,"".concat(i,"-round"),b),p));return n("div",{class:E},[v,r])}return(d=s.default)===null||d===void 0?void 0:d.call(s)}}});const Ae=we;var Be=["noStyle","disabled"],Se={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},Pe=H({compatConfig:{MODE:3},name:"TransButton",inheritAttrs:!1,props:{noStyle:{type:Boolean,default:void 0},onClick:Function,disabled:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0}},setup:function(e,o){var s=o.slots,t=o.emit,u=o.attrs,c=o.expose,d=U(),y=function(i){var p=i.keyCode;p===W.ENTER&&i.preventDefault()},h=function(i){var p=i.keyCode;p===W.ENTER&&t("click",i)},P=function(i){t("click",i)},w=function(){d.value&&d.value.focus()},I=function(){d.value&&d.value.blur()};return Z(function(){e.autofocus&&w()}),c({focus:w,blur:I}),function(){var b,i=e.noStyle,p=e.disabled,B=ee(e,Be),C={};return i||(C=g({},Se)),p&&(C.pointerEvents="none"),n("div",g(g(g({role:"button",tabindex:0,ref:d},B),u),{},{onClick:P,onKeydown:y,onKeyup:h,style:g(g({},C),u.style||{})}),[(b=s.default)===null||b===void 0?void 0:b.call(s)])}}});const $e=Pe;var Ee=function(){return{backIcon:S.any,prefixCls:String,title:S.any,subTitle:S.any,breadcrumb:S.object,tags:S.any,footer:S.any,extra:S.any,avatar:S.object,ghost:{type:Boolean,default:void 0},onBack:Function}},Te=H({compatConfig:{MODE:3},name:"APageHeader",props:Ee(),slots:["backIcon","avatar","breadcrumb","title","subTitle","tags","extra","footer"],setup:function(e,o){var s=o.emit,t=o.slots,u=L("page-header",e),c=u.prefixCls,d=u.direction,y=u.pageHeader,h=U(!1),P=ve(),w=function(a){var r=a.width;P.value||(h.value=r<768)},I=ae(function(){var v,a,r;return(v=(a=e.ghost)!==null&&a!==void 0?a:(r=y.value)===null||r===void 0?void 0:r.ghost)!==null&&v!==void 0?v:!0}),b=function(){var a,r,f;return(a=(r=e.backIcon)!==null&&r!==void 0?r:(f=t.backIcon)===null||f===void 0?void 0:f.call(t))!==null&&a!==void 0?a:d.value==="rtl"?n(ue,null,null):n(ie,null,null)},i=function(a){return!a||!e.onBack?null:n(le,{componentName:"PageHeader",children:function(f){var x=f.back;return n("div",{class:"".concat(c.value,"-back")},[n($e,{onClick:function(_){s("back",_)},class:"".concat(c.value,"-back-button"),"aria-label":x},{default:function(){return[a]}})])}},null)},p=function(){var a;return e.breadcrumb?n(ce,e.breadcrumb,null):(a=t.breadcrumb)===null||a===void 0?void 0:a.call(t)},B=function(){var a,r,f,x,k,_,E,O,R,A=e.avatar,z=(a=e.title)!==null&&a!==void 0?a:(r=t.title)===null||r===void 0?void 0:r.call(t),D=(f=e.subTitle)!==null&&f!==void 0?f:(x=t.subTitle)===null||x===void 0?void 0:x.call(t),K=(k=e.tags)!==null&&k!==void 0?k:(_=t.tags)===null||_===void 0?void 0:_.call(t),M=(E=e.extra)!==null&&E!==void 0?E:(O=t.extra)===null||O===void 0?void 0:O.call(t),T="".concat(c.value,"-heading"),q=z||D||K||M;if(!q)return null;var G=b(),F=i(G),J=F||A||q;return n("div",{class:T},[J&&n("div",{class:"".concat(T,"-left")},[F,A?n(se,A,null):(R=t.avatar)===null||R===void 0?void 0:R.call(t),z&&n("span",{class:"".concat(T,"-title"),title:typeof z=="string"?z:void 0},[z]),D&&n("span",{class:"".concat(T,"-sub-title"),title:typeof D=="string"?D:void 0},[D]),K&&n("span",{class:"".concat(T,"-tags")},[K])]),M&&n("span",{class:"".concat(T,"-extra")},[M])])},C=function(){var a,r,f=(a=e.footer)!==null&&a!==void 0?a:re((r=t.footer)===null||r===void 0?void 0:r.call(t));return oe(f)?null:n("div",{class:"".concat(c.value,"-footer")},[f])},$=function(a){return n("div",{class:"".concat(c.value,"-content")},[a])};return function(){var v,a,r,f=((v=e.breadcrumb)===null||v===void 0?void 0:v.routes)||t.breadcrumb,x=e.footer||t.footer,k=ne((a=t.default)===null||a===void 0?void 0:a.call(t)),_=j(c.value,(r={"has-breadcrumb":f,"has-footer":x},m(r,"".concat(c.value,"-ghost"),I.value),m(r,"".concat(c.value,"-rtl"),d.value==="rtl"),m(r,"".concat(c.value,"-compact"),h.value),r));return n(de,{onResize:w},{default:function(){return[n("div",{class:_},[p(),B(),k.length?$(k):null,C()])]}})}}});const Ke=te(Te);export{ke as E,Ae as S,Ke as _,be as a,Re as s};
