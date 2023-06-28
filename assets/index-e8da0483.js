import{s as j,z as n,ak as Q,af as H,q as m,al as X,G as L,n as g,aa as Y,r as U,a0 as Z,ae as ee,F as te,h as ae,H as ne,a8 as S,am as re,an as oe,ao as le}from"./index-d947ed2c.js";import ie from"./ArrowLeftOutlined-e51794d5.js";import ue from"./ArrowRightOutlined-17dadd41.js";import{B as se,A as ce}from"./index-f7c8511a.js";import{K as W,b as de}from"./index-c7da8ad1.js";import{u as ve}from"./useDestroyed-0e7e8b08.js";var fe=function(){return{prefixCls:String,width:{type:[Number,String]}}},pe=j({compatConfig:{MODE:3},name:"SkeletonTitle",props:fe(),setup:function(e){return function(){var o=e.prefixCls,c=e.width,t=typeof c=="number"?"".concat(c,"px"):c;return n("h3",{class:o,style:{width:t}},null)}}});const be=pe;var ge=function(){return{prefixCls:String,width:{type:[Number,String,Array]},rows:Number}},me=j({compatConfig:{MODE:3},name:"SkeletonParagraph",props:ge(),setup:function(e){var o=function(t){var u=e.width,s=e.rows,d=s===void 0?2:s;if(Array.isArray(u))return u[t];if(d-1===t)return u};return function(){var c=e.prefixCls,t=e.rows,u=Q(Array(t)).map(function(s,d){var y=o(d);return n("li",{key:d,style:{width:typeof y=="number"?"".concat(y,"px"):y}},null)});return n("ul",{class:c},[u])}}});const ye=me;var Re=function(){return{prefixCls:String,size:[String,Number],shape:String,active:{type:Boolean,default:void 0}}},G=function(e){var o,c,t=e.prefixCls,u=e.size,s=e.shape,d=H((o={},m(o,"".concat(t,"-lg"),u==="large"),m(o,"".concat(t,"-sm"),u==="small"),o)),y=H((c={},m(c,"".concat(t,"-circle"),s==="circle"),m(c,"".concat(t,"-square"),s==="square"),m(c,"".concat(t,"-round"),s==="round"),c)),k=typeof u=="number"?{width:"".concat(u,"px"),height:"".concat(u,"px"),lineHeight:"".concat(u,"px")}:{};return n("span",{class:H(t,d,y),style:k},null)};G.displayName="SkeletonElement";const he=G;var ke=function(){return{active:{type:Boolean,default:void 0},loading:{type:Boolean,default:void 0},prefixCls:String,avatar:{type:[Boolean,Object],default:void 0},title:{type:[Boolean,Object],default:void 0},paragraph:{type:[Boolean,Object],default:void 0},round:{type:Boolean,default:void 0}}};function M(l){return l&&Y(l)==="object"?l:{}}function Ce(l,e){return l&&!e?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function xe(l,e){return!l&&e?{width:"38%"}:l&&e?{width:"50%"}:{}}function _e(l,e){var o={};return(!l||!e)&&(o.width="61%"),!l&&e?o.rows=3:o.rows=2,o}var we=j({compatConfig:{MODE:3},name:"ASkeleton",props:X(ke(),{avatar:!1,title:!0,paragraph:!0}),setup:function(e,o){var c=o.slots,t=L("skeleton",e),u=t.prefixCls,s=t.direction;return function(){var d,y=e.loading,k=e.avatar,P=e.title,w=e.paragraph,z=e.active,b=e.round,i=u.value;if(y||e.loading===void 0){var p,B=!!k||k==="",C=!!P||P==="",$=!!w||w==="",v;if(B){var a=g(g({prefixCls:"".concat(i,"-avatar")},Ce(C,$)),M(k));v=n("div",{class:"".concat(i,"-header")},[n(he,a,null)])}var r;if(C||$){var f;if(C){var x=g(g({prefixCls:"".concat(i,"-title")},xe(B,$)),M(P));f=n(be,x,null)}var h;if($){var _=g(g({prefixCls:"".concat(i,"-paragraph")},_e(B,C)),M(w));h=n(ye,_,null)}r=n("div",{class:"".concat(i,"-content")},[f,h])}var E=H(i,(p={},m(p,"".concat(i,"-with-avatar"),B),m(p,"".concat(i,"-active"),z),m(p,"".concat(i,"-rtl"),s.value==="rtl"),m(p,"".concat(i,"-round"),b),p));return n("div",{class:E},[v,r])}return(d=c.default)===null||d===void 0?void 0:d.call(c)}}});const Ae=we;var Be=["noStyle","disabled"],Se={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},Pe=j({compatConfig:{MODE:3},name:"TransButton",inheritAttrs:!1,props:{noStyle:{type:Boolean,default:void 0},onClick:Function,disabled:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0}},setup:function(e,o){var c=o.slots,t=o.emit,u=o.attrs,s=o.expose,d=U(),y=function(i){var p=i.keyCode;p===W.ENTER&&i.preventDefault()},k=function(i){var p=i.keyCode;p===W.ENTER&&t("click",i)},P=function(i){t("click",i)},w=function(){d.value&&d.value.focus()},z=function(){d.value&&d.value.blur()};return Z(function(){e.autofocus&&w()}),s({focus:w,blur:z}),function(){var b,i=e.noStyle,p=e.disabled,B=ee(e,Be),C={};return i||(C=g({},Se)),p&&(C.pointerEvents="none"),n("div",g(g(g({role:"button",tabindex:0,ref:d},B),u),{},{onClick:P,onKeydown:y,onKeyup:k,style:g(g({},C),u.style||{})}),[(b=c.default)===null||b===void 0?void 0:b.call(c)])}}});const $e=Pe;var Ee=function(){return{backIcon:S.any,prefixCls:String,title:S.any,subTitle:S.any,breadcrumb:S.object,tags:S.any,footer:S.any,extra:S.any,avatar:S.object,ghost:{type:Boolean,default:void 0},onBack:Function}},Te=j({compatConfig:{MODE:3},name:"APageHeader",props:Ee(),slots:["backIcon","avatar","breadcrumb","title","subTitle","tags","extra","footer"],setup:function(e,o){var c=o.emit,t=o.slots,u=L("page-header",e),s=u.prefixCls,d=u.direction,y=u.pageHeader,k=U(!1),P=ve(),w=function(a){var r=a.width;P.value||(k.value=r<768)},z=ae(function(){var v,a,r;return(v=(a=e.ghost)!==null&&a!==void 0?a:(r=y.value)===null||r===void 0?void 0:r.ghost)!==null&&v!==void 0?v:!0}),b=function(){var a,r,f;return(a=(r=e.backIcon)!==null&&r!==void 0?r:(f=t.backIcon)===null||f===void 0?void 0:f.call(t))!==null&&a!==void 0?a:d.value==="rtl"?n(ue,null,null):n(ie,null,null)},i=function(a){return!a||!e.onBack?null:n(le,{componentName:"PageHeader",children:function(f){var x=f.back;return n("div",{class:"".concat(s.value,"-back")},[n($e,{onClick:function(_){c("back",_)},class:"".concat(s.value,"-back-button"),"aria-label":x},{default:function(){return[a]}})])}},null)},p=function(){var a;return e.breadcrumb?n(se,e.breadcrumb,null):(a=t.breadcrumb)===null||a===void 0?void 0:a.call(t)},B=function(){var a,r,f,x,h,_,E,O,R,A=e.avatar,I=(a=e.title)!==null&&a!==void 0?a:(r=t.title)===null||r===void 0?void 0:r.call(t),D=(f=e.subTitle)!==null&&f!==void 0?f:(x=t.subTitle)===null||x===void 0?void 0:x.call(t),K=(h=e.tags)!==null&&h!==void 0?h:(_=t.tags)===null||_===void 0?void 0:_.call(t),F=(E=e.extra)!==null&&E!==void 0?E:(O=t.extra)===null||O===void 0?void 0:O.call(t),T="".concat(s.value,"-heading"),N=I||D||K||F;if(!N)return null;var V=b(),q=i(V),J=q||A||N;return n("div",{class:T},[J&&n("div",{class:"".concat(T,"-left")},[q,A?n(ce,A,null):(R=t.avatar)===null||R===void 0?void 0:R.call(t),I&&n("span",{class:"".concat(T,"-title"),title:typeof I=="string"?I:void 0},[I]),D&&n("span",{class:"".concat(T,"-sub-title"),title:typeof D=="string"?D:void 0},[D]),K&&n("span",{class:"".concat(T,"-tags")},[K])]),F&&n("span",{class:"".concat(T,"-extra")},[F])])},C=function(){var a,r,f=(a=e.footer)!==null&&a!==void 0?a:re((r=t.footer)===null||r===void 0?void 0:r.call(t));return oe(f)?null:n("div",{class:"".concat(s.value,"-footer")},[f])},$=function(a){return n("div",{class:"".concat(s.value,"-content")},[a])};return function(){var v,a,r,f=((v=e.breadcrumb)===null||v===void 0?void 0:v.routes)||t.breadcrumb,x=e.footer||t.footer,h=ne((a=t.default)===null||a===void 0?void 0:a.call(t)),_=H(s.value,(r={"has-breadcrumb":f,"has-footer":x},m(r,"".concat(s.value,"-ghost"),z.value),m(r,"".concat(s.value,"-rtl"),d.value==="rtl"),m(r,"".concat(s.value,"-compact"),k.value),r));return n(de,{onResize:w},{default:function(){return[n("div",{class:_},[p(),B(),h.length?$(h):null,C()])]}})}}});const Ke=te(Te);export{he as E,Ae as S,Ke as _,be as a,Re as s};