import{s as W,ab as ae,k as A,al as x,r as k,aT as Se,aa as Pe,x as xe,D as Q,a9 as me,y as ge,t as g,z as _e,ac as Oe,ak as ie,l as d,h as Ee,aU as ye,a3 as Ce,aV as be,a4 as he,as as pe,w as Te,q as Re}from"./index-9a9dea24.js";import{P as De,b as Me,K as re,u as Ae}from"./index-516dbfe4.js";import{o as Ie}from"./RightOutlined-c94e739b.js";import{p as $e}from"./pickAttrs-42e5daec.js";import{g as ke,_ as Le}from"./objectDestructuringEmpty-23eaae80.js";import{_ as Be,a as We}from"./index-68eb0c53.js";import{w as le}from"./raf-8f666c46.js";function R(m){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.element,o=n===void 0?document.body:n,t={},a=Object.keys(m);return a.forEach(function(c){t[c]=o.style[c]}),a.forEach(function(c){o.style[c]=m[c]}),t}function Ve(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var q={};const se=function(m){if(!(!Ve()&&!m)){var e="ant-scrolling-effect",n=new RegExp("".concat(e),"g"),o=document.body.className;if(m){if(!n.test(o))return;R(q),q={},document.body.className=o.replace(n,"").trim();return}var t=ke();if(t&&(q=R({position:"relative",width:"calc(100% - ".concat(t,"px)")}),!n.test(o))){var a="".concat(o," ").concat(e);document.body.className=a.trim()}}};var S=[],we="ant-scrolling-effect",G=new RegExp("".concat(we),"g"),je=0,J=new Map,ze=Be(function m(e){var n=this;We(this,m),W(this,"getContainer",function(){var o;return(o=n.options)===null||o===void 0?void 0:o.container}),W(this,"reLock",function(o){var t=S.find(function(a){var c=a.target;return c===n.lockTarget});t&&n.unLock(),n.options=o,t&&(t.options=o,n.lock())}),W(this,"lock",function(){var o;if(!S.some(function(l){var f=l.target;return f===n.lockTarget})){if(S.some(function(l){var f,b=l.options;return(b==null?void 0:b.container)===((f=n.options)===null||f===void 0?void 0:f.container)})){S=[].concat(ae(S),[{target:n.lockTarget,options:n.options}]);return}var t=0,a=((o=n.options)===null||o===void 0?void 0:o.container)||document.body;(a===document.body&&window.innerWidth-document.documentElement.clientWidth>0||a.scrollHeight>a.clientHeight)&&(t=ke());var c=a.className;if(S.filter(function(l){var f,b=l.options;return(b==null?void 0:b.container)===((f=n.options)===null||f===void 0?void 0:f.container)}).length===0&&J.set(a,R({width:t!==0?"calc(100% - ".concat(t,"px)"):void 0,overflow:"hidden",overflowX:"hidden",overflowY:"hidden"},{element:a})),!G.test(c)){var v="".concat(c," ").concat(we);a.className=v.trim()}S=[].concat(ae(S),[{target:n.lockTarget,options:n.options}])}}),W(this,"unLock",function(){var o,t=S.find(function(v){var l=v.target;return l===n.lockTarget});if(S=S.filter(function(v){var l=v.target;return l!==n.lockTarget}),!(!t||S.some(function(v){var l,f=v.options;return(f==null?void 0:f.container)===((l=t.options)===null||l===void 0?void 0:l.container)}))){var a=((o=n.options)===null||o===void 0?void 0:o.container)||document.body,c=a.className;G.test(c)&&(R(J.get(a),{element:a}),J.delete(a),a.className=a.className.replace(G,"").trim())}}),this.lockTarget=je++,this.options=e}),O=0,M=_e(),V={},T=function(e){if(!M)return null;if(e){if(typeof e=="string")return document.querySelectorAll(e)[0];if(typeof e=="function")return e();if(Oe(e)==="object"&&e instanceof window.HTMLElement)return e}return document.body};const Fe=A({compatConfig:{MODE:3},name:"PortalWrapper",inheritAttrs:!1,props:{wrapperClassName:String,forceRender:{type:Boolean,default:void 0},getContainer:x.any,visible:{type:Boolean,default:void 0}},setup:function(e,n){var o=n.slots,t=k(),a=k(),c=k(),v=new ze({container:T(e.getContainer)}),l=function(){var s,C;(s=t.value)===null||s===void 0||(C=s.parentNode)===null||C===void 0||C.removeChild(t.value)},f=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(s||t.value&&!t.value.parentNode){var C=T(e.getContainer);return C?(C.appendChild(t.value),!0):!1}return!0},b=function(){return M?(t.value||(t.value=document.createElement("div"),f(!0)),N(),t.value):null},N=function(){var s=e.wrapperClassName;t.value&&s&&s!==t.value.className&&(t.value.className=s)};Se(function(){N(),f()});var w=function(){O===1&&!Object.keys(V).length?(se(),V=R({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"})):O||(R(V),V={},se(!0))},y=Pe();return xe(function(){var i=!1;Q([function(){return e.visible},function(){return e.getContainer}],function(s,C){var p=ie(s,2),u=p[0],r=p[1],h=ie(C,2),_=h[0],P=h[1];if(M&&T(e.getContainer)===document.body&&(u&&!_?O+=1:i&&(O-=1)),i){var E=typeof r=="function"&&typeof P=="function";(E?r.toString()!==P.toString():r!==P)&&l(),u&&u!==_&&M&&T(r)!==v.getContainer()&&v.reLock({container:T(r)})}i=!0},{immediate:!0,flush:"post"}),me(function(){f()||(c.value=le(function(){y.update()}))})}),ge(function(){var i=e.visible,s=e.getContainer;M&&T(s)===document.body&&(O=i&&O?O-1:O),l(),le.cancel(c.value)}),function(){var i=e.forceRender,s=e.visible,C=null,p={getOpenCount:function(){return O},getContainer:b,switchScrollingEffect:w,scrollLocker:v};return(i||s||a.value)&&(C=g(De,{getContainer:b,ref:a},{default:function(){var r;return(r=o.default)===null||r===void 0?void 0:r.call(o,p)}})),C}}});function Z(){return{keyboard:{type:Boolean,default:void 0},mask:{type:Boolean,default:void 0},afterClose:Function,closable:{type:Boolean,default:void 0},maskClosable:{type:Boolean,default:void 0},visible:{type:Boolean,default:void 0},destroyOnClose:{type:Boolean,default:void 0},mousePosition:x.shape({x:Number,y:Number}).loose,title:x.any,footer:x.any,transitionName:String,maskTransitionName:String,animation:x.any,maskAnimation:x.any,wrapStyle:{type:Object,default:void 0},bodyStyle:{type:Object,default:void 0},maskStyle:{type:Object,default:void 0},prefixCls:String,wrapClassName:String,rootClassName:String,width:[String,Number],height:[String,Number],zIndex:Number,bodyProps:x.any,maskProps:x.any,wrapProps:x.any,getContainer:x.any,dialogStyle:{type:Object,default:void 0},dialogClass:String,closeIcon:x.any,forceRender:{type:Boolean,default:void 0},getOpenCount:Function,focusTriggerAfterClose:{type:Boolean,default:void 0},onClose:Function,modalRender:Function}}function ue(m,e,n){var o=e;return!o&&n&&(o="".concat(m,"-").concat(n)),o}var ce=-1;function Ue(){return ce+=1,ce}function fe(m,e){var n=m["page".concat(e?"Y":"X","Offset")],o="scroll".concat(e?"Top":"Left");if(typeof n!="number"){var t=m.document;n=t.documentElement[o],typeof n!="number"&&(n=t.body[o])}return n}function Ke(m){var e=m.getBoundingClientRect(),n={left:e.left,top:e.top},o=m.ownerDocument,t=o.defaultView||o.parentWindow;return n.left+=fe(t),n.top+=fe(t,!0),n}var de={width:0,height:0,overflow:"hidden",outline:"none"};const He=A({compatConfig:{MODE:3},name:"Content",inheritAttrs:!1,props:d(d({},Z()),{},{motionName:String,ariaId:String,onVisibleChanged:Function,onMousedown:Function,onMouseup:Function}),setup:function(e,n){var o=n.expose,t=n.slots,a=n.attrs,c=k(),v=k(),l=k();o({focus:function(){var i;(i=c.value)===null||i===void 0||i.focus()},changeActive:function(i){var s=document,C=s.activeElement;i&&C===v.value?c.value.focus():!i&&C===c.value&&v.value.focus()}});var f=k(),b=Ee(function(){var y=e.width,i=e.height,s={};return y!==void 0&&(s.width=typeof y=="number"?"".concat(y,"px"):y),i!==void 0&&(s.height=typeof i=="number"?"".concat(i,"px"):i),f.value&&(s.transformOrigin=f.value),s}),N=function(){me(function(){if(l.value){var i=Ke(l.value);f.value=e.mousePosition?"".concat(e.mousePosition.x-i.left,"px ").concat(e.mousePosition.y-i.top,"px"):""}})},w=function(i){e.onVisibleChanged(i)};return function(){var y,i,s,C,p=e.prefixCls,u=e.footer,r=u===void 0?(y=t.footer)===null||y===void 0?void 0:y.call(t):u,h=e.title,_=h===void 0?(i=t.title)===null||i===void 0?void 0:i.call(t):h,P=e.ariaId,E=e.closable,I=e.closeIcon,j=I===void 0?(s=t.closeIcon)===null||s===void 0?void 0:s.call(t):I,z=e.onClose,F=e.bodyStyle,U=e.bodyProps,K=e.onMousedown,H=e.onMouseup,$=e.visible,L=e.modalRender,D=L===void 0?t.modalRender:L,X=e.destroyOnClose,Y=e.motionName,B;r&&(B=g("div",{class:"".concat(p,"-footer")},[r]));var ee;_&&(ee=g("div",{class:"".concat(p,"-header")},[g("div",{class:"".concat(p,"-title"),id:P},[_])]));var te;E&&(te=g("button",{type:"button",onClick:z,"aria-label":"Close",class:"".concat(p,"-close")},[j||g("span",{class:"".concat(p,"-close-x")},null)]));var ne=g("div",{class:"".concat(p,"-content")},[te,ee,g("div",d({class:"".concat(p,"-body"),style:F},U),[(C=t.default)===null||C===void 0?void 0:C.call(t)]),B]),Ne=ye(Y);return g(be,d(d({},Ne),{},{onBeforeEnter:N,onAfterEnter:function(){return w(!0)},onAfterLeave:function(){return w(!1)}}),{default:function(){return[$||!X?Ce(g("div",d(d({},a),{},{ref:l,key:"dialog-element",role:"document",style:[b.value,a.style],class:[p,a.class],onMousedown:K,onMouseup:H}),[g("div",{tabindex:0,ref:c,style:de,"aria-hidden":"true"},null),D?D({originVNode:ne}):ne,g("div",{tabindex:0,ref:v,style:de,"aria-hidden":"true"},null)]),[[he,$]]):null]}})}}}),Xe=A({compatConfig:{MODE:3},name:"Mask",props:{prefixCls:String,visible:Boolean,motionName:String,maskProps:Object},setup:function(e,n){return Le(n),function(){var o=e.prefixCls,t=e.visible,a=e.maskProps,c=e.motionName,v=ye(c);return g(be,v,{default:function(){return[Ce(g("div",d({class:"".concat(o,"-mask")},a),null),[[he,t]])]}})}}}),ve=A({compatConfig:{MODE:3},name:"Dialog",inheritAttrs:!1,props:pe(d(d({},Z()),{},{getOpenCount:Function,scrollLocker:Object}),{mask:!0,visible:!1,keyboard:!0,closable:!0,maskClosable:!0,destroyOnClose:!1,prefixCls:"rc-dialog",getOpenCount:function(){return null},focusTriggerAfterClose:!0}),setup:function(e,n){var o=n.attrs,t=n.slots,a=k(),c=k(),v=k(),l=k(e.visible),f=k("vcDialogTitle".concat(Ue())),b=function(r){if(r){if(!Me(c.value,document.activeElement)){var h;a.value=document.activeElement,(h=v.value)===null||h===void 0||h.focus()}}else{var _=l.value;if(l.value=!1,e.mask&&a.value&&e.focusTriggerAfterClose){try{a.value.focus({preventScroll:!0})}catch{}a.value=null}if(_){var P;(P=e.afterClose)===null||P===void 0||P.call(e)}}},N=function(r){var h;(h=e.onClose)===null||h===void 0||h.call(e,r)},w=k(!1),y=k(),i=function(){clearTimeout(y.value),w.value=!0},s=function(){y.value=setTimeout(function(){w.value=!1})},C=function(r){if(!e.maskClosable)return null;w.value?w.value=!1:c.value===r.target&&N(r)},p=function(r){if(e.keyboard&&r.keyCode===re.ESC){r.stopPropagation(),N(r);return}e.visible&&r.keyCode===re.TAB&&v.value.changeActive(!r.shiftKey)};return Q(function(){return e.visible},function(){e.visible&&(l.value=!0)},{flush:"post"}),ge(function(){var u;clearTimeout(y.value),(u=e.scrollLocker)===null||u===void 0||u.unLock()}),Te(function(){var u;if((u=e.scrollLocker)===null||u===void 0||u.unLock(),l.value){var r;(r=e.scrollLocker)===null||r===void 0||r.lock()}}),function(){var u=e.prefixCls,r=e.mask,h=e.visible,_=e.maskTransitionName,P=e.maskAnimation,E=e.zIndex,I=e.wrapClassName,j=e.rootClassName,z=e.wrapStyle,F=e.closable,U=e.maskProps,K=e.maskStyle,H=e.transitionName,$=e.animation,L=e.wrapProps,D=e.title,X=D===void 0?t.title:D,Y=o.style,B=o.class;return g("div",d({class:["".concat(u,"-root"),j]},$e(e,{data:!0})),[g(Xe,{prefixCls:u,visible:r&&h,motionName:ue(u,_,P),style:d({zIndex:E},K),maskProps:U},null),g("div",d({tabIndex:-1,onKeydown:p,class:Re("".concat(u,"-wrap"),I),ref:c,onClick:C,role:"dialog","aria-labelledby":X?f.value:null,style:d(d({zIndex:E},z),{},{display:l.value?null:"none"})},L),[g(He,d(d({},Ie(e,["scrollLocker"])),{},{style:Y,class:B,onMousedown:i,onMouseup:s,ref:v,closable:F,ariaId:f.value,prefixCls:u,visible:h,onClose:N,onVisibleChanged:b,motionName:ue(u,H,$)}),t)])])}}});var Ye=Z(),qe=A({compatConfig:{MODE:3},name:"DialogWrap",inheritAttrs:!1,props:pe(Ye,{visible:!1}),setup:function(e,n){var o=n.attrs,t=n.slots,a=k(e.visible);return Ae({},{inTriggerContext:!1}),Q(function(){return e.visible},function(){e.visible&&(a.value=!0)},{flush:"post"}),function(){var c=e.visible,v=e.getContainer,l=e.forceRender,f=e.destroyOnClose,b=f===void 0?!1:f,N=e.afterClose,w=d(d(d({},e),o),{},{ref:"_component",key:"dialog"});return v===!1?g(ve,d(d({},w),{},{getOpenCount:function(){return 2}}),t):!l&&b&&!a.value?null:g(Fe,{visible:c,forceRender:l,getContainer:v},{default:function(i){return w=d(d(d({},w),i),{},{afterClose:function(){N==null||N(),a.value=!1}}),g(ve,w,t)}})}}});const ot=qe;export{ot as D,Z as d};
