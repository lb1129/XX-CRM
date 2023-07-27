import{k as ee,r as w,y as se,a8 as ve,D as te,a9 as O,x as de,aa as ae,q as ne,s as N,l as g,t as D,a3 as ce,m as fe,h as $,w as ge,ab as Z,ac as J}from"./index-9a9dea24.js";import{t as re,a as me,u as he,f as xe,C as be,b as ze,r as U}from"./index-726ed5a1.js";import{R as Se}from"./index-516dbfe4.js";import{w as R}from"./raf-8f666c46.js";import{o as ie}from"./RightOutlined-c94e739b.js";var pe=`
 min-height:0 !important;
 max-height:none !important;
 height:0 !important;
 visibility:hidden !important;
 overflow:hidden !important;
 position:absolute !important;
 z-index:-1000 !important;
 top:0 !important;
 right:0 !important
`,ye=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break"],K={},z;function we(d){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=d.getAttribute("id")||d.getAttribute("data-reactid")||d.getAttribute("name");if(e&&K[r])return K[r];var n=window.getComputedStyle(d),m=n.getPropertyValue("box-sizing")||n.getPropertyValue("-moz-box-sizing")||n.getPropertyValue("-webkit-box-sizing"),c=parseFloat(n.getPropertyValue("padding-bottom"))+parseFloat(n.getPropertyValue("padding-top")),b=parseFloat(n.getPropertyValue("border-bottom-width"))+parseFloat(n.getPropertyValue("border-top-width")),v=ye.map(function(u){return"".concat(u,":").concat(n.getPropertyValue(u))}).join(";"),i={sizingStyle:v,paddingSize:c,borderSize:b,boxSizing:m};return e&&r&&(K[r]=i),i}function Ce(d){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;z||(z=document.createElement("textarea"),z.setAttribute("tab-index","-1"),z.setAttribute("aria-hidden","true"),document.body.appendChild(z)),d.getAttribute("wrap")?z.setAttribute("wrap",d.getAttribute("wrap")):z.removeAttribute("wrap");var m=we(d,e),c=m.paddingSize,b=m.borderSize,v=m.boxSizing,i=m.sizingStyle;z.setAttribute("style","".concat(i,";").concat(pe)),z.value=d.value||d.placeholder||"";var u=Number.MIN_SAFE_INTEGER,f=Number.MAX_SAFE_INTEGER,s=z.scrollHeight,S;if(v==="border-box"?s+=b:v==="content-box"&&(s-=c),r!==null||n!==null){z.value=" ";var E=z.scrollHeight-c;r!==null&&(u=E*r,v==="border-box"&&(u=u+c+b),s=Math.max(u,s)),n!==null&&(f=E*n,v==="border-box"&&(f=f+c+b),S=s>f?"":"hidden",s=Math.min(f,s))}return{height:"".concat(s,"px"),minHeight:"".concat(u,"px"),maxHeight:"".concat(f,"px"),overflowY:S,resize:"none"}}var L=0,Q=1,Ae=2,Ee=ee({compatConfig:{MODE:3},name:"ResizableTextArea",inheritAttrs:!1,props:re(),setup:function(e,r){var n=r.attrs,m=r.emit,c=r.expose,b,v,i=w(),u=w({}),f=w(L);se(function(){R.cancel(b),R.cancel(v)});var s=function(){try{if(document.activeElement===i.value){var h=i.value.selectionStart,p=i.value.selectionEnd;i.value.setSelectionRange(h,p)}}catch{}},S=function(){var h=e.autoSize||e.autosize;if(!(!h||!i.value)){var p=h.minRows,F=h.maxRows;u.value=Ce(i.value,!1,p,F),f.value=Q,R.cancel(v),v=R(function(){f.value=Ae,v=R(function(){f.value=L,s()})})}},E=function(){R.cancel(b),b=R(S)},C=function(h){if(f.value===L){m("resize",h);var p=e.autoSize||e.autosize;p&&E()}};ve(e.autosize===void 0,"Input.TextArea","autosize is deprecated, please use autoSize instead.");var _=function(){var h=e.prefixCls,p=e.autoSize,F=e.autosize,k=e.disabled,j=ie(e,["prefixCls","onPressEnter","autoSize","autosize","defaultValue","allowClear","type","lazy","maxlength","valueModifiers"]),Y=ne(h,n.class,N({},"".concat(h,"-disabled"),k)),V=[n.style,u.value,f.value===Q?{overflowX:"hidden",overflowY:"hidden"}:null],T=g(g(g({},j),n),{},{style:V,class:Y});return T.autofocus||delete T.autofocus,T.rows===0&&delete T.rows,D(Se,{onResize:C,disabled:!(p||F)},{default:function(){return[ce(D("textarea",g(g({},T),{},{ref:i}),null),[[me]])]}})};te(function(){return e.value},function(){O(function(){S()})}),de(function(){O(function(){S()})});var I=ae();return c({resizeTextarea:S,textArea:i,instance:I}),function(){return _()}}});const Ie=Ee;function le(d,e){return Z(d||"").slice(0,e).join("")}function W(d,e,r,n){var m=r;return d?m=le(r,n):Z(e||"").length<r.length&&Z(r||"").length>n&&(m=e),m}const Ne=ee({compatConfig:{MODE:3},name:"ATextarea",inheritAttrs:!1,props:re(),setup:function(e,r){var n=r.attrs,m=r.expose,c=r.emit,b=he(),v=w(e.value===void 0?e.defaultValue:e.value),i=w(),u=w(""),f=fe("input",e),s=f.prefixCls,S=f.size,E=f.direction,C=$(function(){return e.showCount===""||e.showCount||!1}),_=$(function(){return Number(e.maxlength)>0}),I=w(!1),A=w(),h=w(0),p=function(t){I.value=!0,A.value=u.value,h.value=t.currentTarget.selectionStart,c("compositionstart",t)},F=function(t){I.value=!1;var a=t.currentTarget.value;if(_.value){var o,x=h.value>=e.maxlength+1||h.value===((o=A.value)===null||o===void 0?void 0:o.length);a=W(x,A.value,a,e.maxlength)}a!==u.value&&(V(a),U(t.currentTarget,t,G,a)),c("compositionend",t)},k=ae();te(function(){return e.value},function(){"value"in k.vnode.props;var l;v.value=(l=e.value)!==null&&l!==void 0?l:""});var j=function(t){var a;ze((a=i.value)===null||a===void 0?void 0:a.textArea,t)},Y=function(){var t,a;(t=i.value)===null||t===void 0||(a=t.textArea)===null||a===void 0||a.blur()},V=function(t,a){v.value!==t&&(e.value===void 0?v.value=t:O(function(){if(i.value.textArea.value!==u.value){var o,x,y;(o=i.value)===null||o===void 0||(x=(y=o.instance).update)===null||x===void 0||x.call(y)}}),O(function(){a&&a()}))},T=function(t){t.keyCode===13&&c("pressEnter",t),c("keydown",t)},X=function(t){var a=e.onBlur;a==null||a(t),b.onFieldBlur()},G=function(t){c("update:value",t.target.value),c("change",t),c("input",t),b.onFieldChange()},oe=function(t){U(i.value.textArea,t,G),V("",function(){j()})},q=function(t){var a=t.target.composing,o=t.target.value;if(I.value=!!(t.isComposing||a),!(I.value&&e.lazy||v.value===o)){if(_.value){var x=t.target,y=x.selectionStart>=e.maxlength+1||x.selectionStart===o.length||!x.selectionStart;o=W(y,u.value,o,e.maxlength)}U(t.currentTarget,t,G,o),V(o)}},ue=function(){var t,a,o,x=n.style,y=n.class,B=e.bordered,M=B===void 0?!0:B,P=g(g(g({},ie(e,["allowClear"])),n),{},{style:C.value?{}:x,class:(t={},N(t,"".concat(s.value,"-borderless"),!M),N(t,"".concat(y),y&&!C.value),N(t,"".concat(s.value,"-sm"),S.value==="small"),N(t,"".concat(s.value,"-lg"),S.value==="large"),t),showCount:null,prefixCls:s.value,onInput:q,onChange:q,onBlur:X,onKeydown:T,onCompositionstart:p,onCompositionend:F});return(a=e.valueModifiers)!==null&&a!==void 0&&a.lazy&&delete P.onInput,D(Ie,g(g({},P),{},{id:(o=P.id)!==null&&o!==void 0?o:b.id.value,ref:i,maxlength:e.maxlength}),null)};return m({focus:j,blur:Y,resizableTextArea:i}),ge(function(){var l=xe(v.value);!I.value&&_.value&&(e.value===null||e.value===void 0)&&(l=le(l,e.maxlength)),u.value=l}),function(){var l=e.maxlength,t=e.bordered,a=t===void 0?!0:t,o=e.hidden,x=n.style,y=n.class,B=g(g(g({},e),n),{},{prefixCls:s.value,inputType:"text",handleReset:oe,direction:E.value,bordered:a,style:C.value?void 0:x}),M=D(be,g(g({},B),{},{value:u.value}),{element:ue});if(C.value){var P=Z(u.value).length,H="";J(C.value)==="object"?H=C.value.formatter({count:P,maxlength:l}):H="".concat(P).concat(_.value?" / ".concat(l):""),M=D("div",{hidden:o,class:ne("".concat(s.value,"-textarea"),N({},"".concat(s.value,"-textarea-rtl"),E.value==="rtl"),"".concat(s.value,"-textarea-show-count"),y),style:x,"data-count":J(H)!=="object"?H:void 0},[M])}return M}}});export{Ne as _};
