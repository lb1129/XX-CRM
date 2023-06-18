import{B as V,aR as kt,O as Z,a7 as pt,ba as yt,aa as Et,cB as rt,cf as At,v as h,L as ot,am as Nt,cn as Lt,r as R,i as F,cg as _t,c0 as It,t as v,w as Bt,bm as Mt,P as ht,q as L,al as Ot,cC as Pt,cD as zt}from"./index-52f781cf.js";var Tt=function(t){return setTimeout(t,16)},Ct=function(t){return clearTimeout(t)};typeof window<"u"&&"requestAnimationFrame"in window&&(Tt=function(t){return window.requestAnimationFrame(t)},Ct=function(t){return window.cancelAnimationFrame(t)});var ut=0,tt=new Map;function wt(n){tt.delete(n)}function X(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;ut+=1;var a=ut;function i(f){if(f===0)wt(a),n();else{var s=Tt(function(){i(f-1)});tt.set(a,s)}}return i(t),a}X.cancel=function(n){var t=tt.get(n);return wt(t),Ct(t)};var K={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},Q={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},_=[],I=[];function Wt(){var n=document.createElement("div"),t=n.style;"AnimationEvent"in window||(delete K.animationstart.animation,delete Q.animationend.animation),"TransitionEvent"in window||(delete K.transitionstart.transition,delete Q.transitionend.transition);function a(i,f){for(var s in i)if(i.hasOwnProperty(s)){var p=i[s];for(var c in p)if(c in t){f.push(p[c]);break}}}a(K,_),a(Q,I)}typeof window<"u"&&typeof document<"u"&&Wt();function lt(n,t,a){n.addEventListener(t,a,!1)}function st(n,t,a){n.removeEventListener(t,a,!1)}var jt={startEvents:_,addStartEventListener:function(t,a){if(_.length===0){setTimeout(a,0);return}_.forEach(function(i){lt(t,i,a)})},removeStartEventListener:function(t,a){_.length!==0&&_.forEach(function(i){st(t,i,a)})},endEvents:I,addEndEventListener:function(t,a){if(I.length===0){setTimeout(a,0);return}I.forEach(function(i){lt(t,i,a)})},removeEndEventListener:function(t,a){I.length!==0&&I.forEach(function(i){st(t,i,a)})}};const U=jt;var k;function ct(n){return!n||n.offsetParent===null}function Dt(n){var t=(n||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return t&&t[1]&&t[2]&&t[3]?!(t[1]===t[2]&&t[2]===t[3]):!0}const Rt=V({compatConfig:{MODE:3},name:"Wave",props:{insertExtraNode:Boolean,disabled:Boolean},setup:function(t,a){var i=a.slots,f=a.expose,s=kt(),p=Z("",t),c=p.csp,u=p.prefixCls;f({csp:c});var C=null,w=null,P=null,S=!1,m=null,N=!1,y=function(e){if(!N){var l=rt(s);!e||e.target!==l||S||O(l)}},x=function(e){!e||e.animationName!=="fadeEffect"||O(e.target)},B=function(){var e=t.insertExtraNode;return e?"".concat(u.value,"-click-animating"):"".concat(u.value,"-click-animating-without-extra-node")},M=function(e,l){var A=t.insertExtraNode,o=t.disabled;if(!(o||!e||ct(e)||e.className.indexOf("-leave")>=0)){m=document.createElement("div"),m.className="".concat(u.value,"-click-animating-node");var r=B();if(e.removeAttribute(r),e.setAttribute(r,"true"),k=k||document.createElement("style"),l&&l!=="#ffffff"&&l!=="rgb(255, 255, 255)"&&Dt(l)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(l)&&l!=="transparent"){var g;(g=c.value)!==null&&g!==void 0&&g.nonce&&(k.nonce=c.value.nonce),m.style.borderColor=l,k.innerHTML=`
        [`.concat(u.value,"-click-animating-without-extra-node='true']::after, .").concat(u.value,`-click-animating-node {
          --antd-wave-shadow-color: `).concat(l,`;
        }`),document.body.contains(k)||document.body.appendChild(k)}A&&e.appendChild(m),U.addStartEventListener(e,y),U.addEndEventListener(e,x)}},O=function(e){if(!(!e||e===m||!(e instanceof Element))){var l=t.insertExtraNode,A=B();e.setAttribute(A,"false"),k&&(k.innerHTML=""),l&&m&&e.contains(m)&&e.removeChild(m),U.removeStartEventListener(e,y),U.removeEndEventListener(e,x)}},z=function(e){if(!(!e||!e.getAttribute||e.getAttribute("disabled")||e.className.indexOf("disabled")>=0)){var l=function(o){if(!(o.target.tagName==="INPUT"||ct(o.target))){O(e);var r=getComputedStyle(e).getPropertyValue("border-top-color")||getComputedStyle(e).getPropertyValue("border-color")||getComputedStyle(e).getPropertyValue("background-color");w=setTimeout(function(){return M(e,r)},0),X.cancel(P),S=!0,P=X(function(){S=!1},10)}};return e.addEventListener("click",l,!0),{cancel:function(){e.removeEventListener("click",l,!0)}}}};return pt(function(){yt(function(){var d=rt(s);d.nodeType===1&&(C=z(d))})}),Et(function(){C&&C.cancel(),clearTimeout(w),N=!0}),function(){var d;return(d=i.default)===null||d===void 0?void 0:d.call(i)[0]}}});function Kt(n){return n==="danger"?{danger:!0}:{type:n}}var Ut=function(){return{prefixCls:String,type:String,htmlType:{type:String,default:"button"},shape:{type:String},size:{type:String},loading:{type:[Boolean,Object],default:function(){return!1}},disabled:{type:Boolean,default:void 0},ghost:{type:Boolean,default:void 0},block:{type:Boolean,default:void 0},danger:{type:Boolean,default:void 0},icon:At.any,href:String,target:String,title:String,onClick:{type:Function},onMousedown:{type:Function}}};const $t=Ut;var ft=function(t){t&&(t.style.width="0px",t.style.opacity="0",t.style.transform="scale(0)")},dt=function(t){yt(function(){t&&(t.style.width="".concat(t.scrollWidth,"px"),t.style.opacity="1",t.style.transform="scale(1)")})},vt=function(t){t&&t.style&&(t.style.width=null,t.style.opacity=null,t.style.transform=null)};const Ft=V({compatConfig:{MODE:3},name:"LoadingIcon",props:{prefixCls:String,loading:[Boolean,Object],existIcon:Boolean},setup:function(t){return function(){var a=t.existIcon,i=t.prefixCls,f=t.loading;if(a)return h("span",{class:"".concat(i,"-loading-icon")},[h(ot,null,null)]);var s=!!f;return h(Nt,{name:"".concat(i,"-loading-icon-motion"),onBeforeEnter:ft,onEnter:dt,onAfterEnter:vt,onBeforeLeave:dt,onLeave:function(c){setTimeout(function(){ft(c)})},onAfterLeave:vt},{default:function(){return[s?h("span",{class:"".concat(i,"-loading-icon")},[h(ot,null,null)]):null]}})}}});var mt=/^[\u4e00-\u9fa5]{2}$/,gt=mt.test.bind(mt);function $(n){return n==="text"||n==="link"}const G=V({compatConfig:{MODE:3},name:"AButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:Lt($t(),{type:"default"}),slots:["icon"],setup:function(t,a){var i=a.slots,f=a.attrs,s=a.emit,p=a.expose,c=Z("btn",t),u=c.prefixCls,C=c.autoInsertSpaceInButton,w=c.direction,P=c.size,S=R(null),m=R(void 0),N=!1,y=R(!1),x=R(!1),B=F(function(){return C.value!==!1}),M=F(function(){return _t(t.loading)==="object"&&t.loading.delay?t.loading.delay||!0:!!t.loading});It(M,function(o){clearTimeout(m.value),typeof M.value=="number"?m.value=setTimeout(function(){y.value=o},M.value):y.value=o},{immediate:!0});var O=F(function(){var o,r=t.type,g=t.shape,E=g===void 0?"default":g,T=t.ghost,q=t.block,H=t.danger,b=u.value,W={large:"lg",small:"sm",middle:void 0},j=P.value,D=j&&W[j]||"";return o={},v(o,"".concat(b),!0),v(o,"".concat(b,"-").concat(r),r),v(o,"".concat(b,"-").concat(E),E!=="default"&&E),v(o,"".concat(b,"-").concat(D),D),v(o,"".concat(b,"-loading"),y.value),v(o,"".concat(b,"-background-ghost"),T&&!$(r)),v(o,"".concat(b,"-two-chinese-chars"),x.value&&B.value),v(o,"".concat(b,"-block"),q),v(o,"".concat(b,"-dangerous"),!!H),v(o,"".concat(b,"-rtl"),w.value==="rtl"),o}),z=function(){var r=S.value;if(!(!r||C.value===!1)){var g=r.textContent;N&&gt(g)?x.value||(x.value=!0):x.value&&(x.value=!1)}},d=function(r){if(y.value||t.disabled){r.preventDefault();return}s("click",r)},e=function(r,g){var E=g?" ":"";if(r.type===Ot){var T=r.children.trim();return gt(T)&&(T=T.split("").join(E)),h("span",null,[T])}return r};Bt(function(){Pt(!(t.ghost&&$(t.type)),"Button","`link` or `text` button can't be a `ghost` button.")}),pt(z),Mt(z),Et(function(){m.value&&clearTimeout(m.value)});var l=function(){var r;(r=S.value)===null||r===void 0||r.focus()},A=function(){var r;(r=S.value)===null||r===void 0||r.blur()};return p({focus:l,blur:A}),function(){var o,r,g=t.icon,E=g===void 0?(o=i.icon)===null||o===void 0?void 0:o.call(i):g,T=ht((r=i.default)===null||r===void 0?void 0:r.call(i));N=T.length===1&&!E&&!$(t.type);var q=t.type,H=t.htmlType,b=t.disabled,W=t.href,j=t.title,D=t.target,St=t.onMousedown,xt=y.value?"loading":E,J=L(L({},f),{},{title:j,disabled:b,class:[O.value,f.class,v({},"".concat(u.value,"-icon-only"),T.length===0&&!!xt)],onClick:d,onMousedown:St});b||delete J.disabled;var nt=E&&!y.value?E:h(Ft,{existIcon:!!E,prefixCls:u.value,loading:!!y.value},null),et=T.map(function(it){return e(it,N&&B.value)});if(W!==void 0)return h("a",L(L({},J),{},{href:W,target:D,ref:S}),[nt,et]);var at=h("button",L(L({},J),{},{ref:S,type:H}),[nt,et]);return $(q)?at:h(Rt,{ref:"wave",disabled:!!y.value},{default:function(){return[at]}})}}});function bt(n,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,zt(i.key),i)}}function Gt(n,t,a){return t&&bt(n.prototype,t),a&&bt(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n}function Vt(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var qt=Gt(function n(t){Vt(this,n),this.error=new Error("unreachable case: ".concat(JSON.stringify(t)))}),Ht=function(){return{prefixCls:String,size:{type:String}}};const Y=V({compatConfig:{MODE:3},name:"AButtonGroup",props:Ht(),setup:function(t,a){var i=a.slots,f=Z("btn-group",t),s=f.prefixCls,p=f.direction,c=F(function(){var u,C=t.size,w="";switch(C){case"large":w="lg";break;case"small":w="sm";break;case"middle":case void 0:break;default:console.warn(new qt(C).error)}return u={},v(u,"".concat(s.value),!0),v(u,"".concat(s.value,"-").concat(w),w),v(u,"".concat(s.value,"-rtl"),p.value==="rtl"),u});return function(){var u;return h("div",{class:c.value},[ht((u=i.default)===null||u===void 0?void 0:u.call(i))])}}});G.Group=Y;G.install=function(n){return n.component(G.name,G),n.component(Y.name,Y),n};export{G as B,Gt as _,Vt as a,Y as b,Kt as c,$t as d,X as w};
