import{q as m,v as h,K as D,A as j,r as p,a6 as B,a9 as F}from"./index-1f60fd96.js";import{c as M,B as T}from"./index-d460498b.js";import{u as $}from"./useDestroyed-5ed80e67.js";var k=`accept acceptcharset accesskey action allowfullscreen allowtransparency
alt async autocomplete autofocus autoplay capture cellpadding cellspacing challenge
charset checked classid classname colspan cols content contenteditable contextmenu
controls coords crossorigin data datetime default defer dir disabled download draggable
enctype form formaction formenctype formmethod formnovalidate formtarget frameborder
headers height hidden high href hreflang htmlfor for httpequiv icon id inputmode integrity
is keyparams keytype kind label lang list loop low manifest marginheight marginwidth max maxlength media
mediagroup method min minlength multiple muted name novalidate nonce open
optimum pattern placeholder poster preload radiogroup readonly rel required
reversed role rowspan rows sandbox scope scoped scrolling seamless selected
shape size sizes span spellcheck src srcdoc srclang srcset start step style
summary tabindex target title type usemap value width wmode wrap`,z=`onCopy onCut onPaste onCompositionend onCompositionstart onCompositionupdate onKeydown
    onKeypress onKeyup onFocus onBlur onChange onInput onSubmit onClick onContextmenu onDoubleclick onDblclick
    onDrag onDragend onDragenter onDragexit onDragleave onDragover onDragstart onDrop onMousedown
    onMouseenter onMouseleave onMousemove onMouseout onMouseover onMouseup onSelect onTouchcancel
    onTouchend onTouchmove onTouchstart onTouchstartPassive onTouchmovePassive onScroll onWheel onAbort onCanplay onCanplaythrough
    onDurationchange onEmptied onEncrypted onEnded onError onLoadeddata onLoadedmetadata
    onLoadstart onPause onPlay onPlaying onProgress onRatechange onSeeked onSeeking onStalled onSuspend onTimeupdate onVolumechange onWaiting onLoad onError`,P="".concat(k," ").concat(z).split(/[\s\n]+/),N="aria-",A="data-";function w(n,e){return n.indexOf(e)===0}function Z(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t;e===!1?t={aria:!0,data:!0,attr:!0}:e===!0?t={aria:!0}:t=m({},e);var o={};return Object.keys(n).forEach(function(a){(t.aria&&(a==="role"||w(a,N))||t.data&&w(a,A)||t.attr&&(P.includes(a)||P.includes(a.toLowerCase())))&&(o[a]=n[a])}),o}var V={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"};const R=V;function C(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},o=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),o.forEach(function(a){q(n,a,t[a])})}return n}function q(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var g=function(e,t){var o=C({},e,t.attrs);return h(D,C({},o,{icon:R}),null)};g.displayName="LeftOutlined";g.inheritAttrs=!1;const W=g,ee=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));var v;function H(n){if(typeof document>"u")return 0;if(n||v===void 0){var e=document.createElement("div");e.style.width="100%",e.style.height="200px";var t=document.createElement("div"),o=t.style;o.position="absolute",o.top="0",o.left="0",o.pointerEvents="none",o.visibility="hidden",o.width="200px",o.height="150px",o.overflow="hidden",t.appendChild(e),document.body.appendChild(t);var a=e.offsetWidth;t.style.overflow="scroll";var u=e.offsetWidth;a===u&&(u=t.clientWidth),document.body.removeChild(t),v=a-u}return v}function x(n){var e=n.match(/^(.*)px$/),t=Number(e==null?void 0:e[1]);return Number.isNaN(t)?H():t}function te(n){if(typeof document>"u"||!n||!(n instanceof Element))return{width:0,height:0};var e=getComputedStyle(n,"::-webkit-scrollbar"),t=e.width,o=e.height;return{width:x(t),height:x(o)}}function ne(n){if(n==null)throw new TypeError("Cannot destructure "+n)}var I={type:{type:String},actionFn:Function,close:Function,autofocus:Boolean,prefixCls:String,buttonProps:Object,emitEvent:Boolean,quitOnNullishReturnValue:Boolean};function S(n){return!!(n&&n.then)}const oe=j({compatConfig:{MODE:3},name:"ActionButton",props:I,setup:function(e,t){var o=t.slots,a=p(!1),u=p(),s=p(!1),y,O=$();B(function(){e.autofocus&&(y=setTimeout(function(){var i;return(i=u.value.$el)===null||i===void 0?void 0:i.focus()}))}),F(function(){clearTimeout(y)});var E=function(l){var r=e.close;S(l)&&(s.value=!0,l.then(function(){O.value||(s.value=!1),r.apply(void 0,arguments),a.value=!1},function(d){console.error(d),O.value||(s.value=!1),a.value=!1}))},L=function(l){var r=e.actionFn,d=e.close,f=d===void 0?function(){}:d;if(!a.value){if(a.value=!0,!r){f();return}var c;if(e.emitEvent){if(c=r(l),e.quitOnNullishReturnValue&&!S(c)){a.value=!1,f(l);return}}else if(r.length)c=r(f),a.value=!1;else if(c=r(),!c){f();return}E(c)}};return function(){var i=e.type,l=e.prefixCls,r=e.buttonProps;return h(T,m(m(m({},M(i)),{},{onClick:L,loading:s.value,prefixCls:l},r),{},{ref:u}),o)}}});var U={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]},name:"folder",theme:"outlined"};const G=U;function _(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},o=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),o.forEach(function(a){J(n,a,t[a])})}return n}function J(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var b=function(e,t){var o=_({},e,t.attrs);return h(D,_({},o,{icon:G}),null)};b.displayName="FolderOutlined";b.inheritAttrs=!1;const K=b,ae=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));export{oe as A,K as F,W as L,ne as _,te as a,ee as b,ae as c,H as g,Z as p};
