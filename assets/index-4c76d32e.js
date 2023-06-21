import{cr as Q,A as H,cn as Y,r as _,c0 as D,ck as R,q as v,cl as U,t as P,v as A,cf as W,R as X,j as Z,w as ee,aa as ae,a7 as ne,ch as te,S as re,i as E,p as oe,cm as ie}from"./index-4070ec6e.js";import{u as J}from"./index-394a4df4.js";const ke=function(){if(typeof navigator>"u"||typeof window>"u")return!1;var t=navigator.userAgent||navigator.vendor||window.opera;return!!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(t==null?void 0:t.substr(0,4)))};function le(t,e){var o=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!o){if(Array.isArray(t)||(o=Q(t))||e&&t&&typeof t.length=="number"){o&&(t=o);var l=0,s=function(){};return{s,n:function(){return l>=t.length?{done:!0}:{done:!1,value:t[l++]}},e:function(c){throw c},f:s}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var x=!0,p=!1,h;return{s:function(){o=o.call(t)},n:function(){var c=o.next();return x=c.done,c},e:function(c){p=!0,h=c},f:function(){try{!x&&o.return!=null&&o.return()}finally{if(p)throw h}}}}var ue=["prefixCls","name","id","type","disabled","readonly","tabindex","autofocus","value","required"],ce={prefixCls:String,name:String,id:String,type:String,defaultChecked:{type:[Boolean,Number],default:void 0},checked:{type:[Boolean,Number],default:void 0},disabled:Boolean,tabindex:{type:[Number,String]},readonly:Boolean,autofocus:Boolean,value:W.any,required:Boolean};const de=H({compatConfig:{MODE:3},name:"Checkbox",inheritAttrs:!1,props:Y(ce,{prefixCls:"rc-checkbox",type:"checkbox",defaultChecked:!1}),emits:["click","change"],setup:function(e,o){var l=o.attrs,s=o.emit,x=o.expose,p=_(e.checked===void 0?e.defaultChecked:e.checked),h=_();D(function(){return e.checked},function(){p.value=e.checked}),x({focus:function(){var n;(n=h.value)===null||n===void 0||n.focus()},blur:function(){var n;(n=h.value)===null||n===void 0||n.blur()}});var d=_(),c=function(n){if(!e.disabled){e.checked===void 0&&(p.value=n.target.checked),n.shiftKey=d.value;var C={target:v(v({},e),{},{checked:n.target.checked}),stopPropagation:function(){n.stopPropagation()},preventDefault:function(){n.preventDefault()},nativeEvent:n};e.checked!==void 0&&(h.value.checked=!!e.checked),s("change",C),d.value=!1}},g=function(n){s("click",n),d.value=n.shiftKey};return function(){var r,n=e.prefixCls,C=e.name,w=e.id,j=e.type,V=e.disabled,y=e.readonly,a=e.tabindex,i=e.autofocus,f=e.value,m=e.required,b=R(e,ue),u=l.class,S=l.onFocus,M=l.onBlur,G=l.onKeydown,I=l.onKeypress,$=l.onKeyup,q=v(v({},b),l),k=Object.keys(q).reduce(function(K,B){return(B.substr(0,5)==="aria-"||B.substr(0,5)==="data-"||B==="role")&&(K[B]=q[B]),K},{}),z=U(n,u,(r={},P(r,"".concat(n,"-checked"),p.value),P(r,"".concat(n,"-disabled"),V),r)),N=v(v({name:C,id:w,type:j,readonly:y,disabled:V,tabindex:a,class:"".concat(n,"-input"),checked:!!p.value,autofocus:i,value:f},k),{},{onChange:c,onClick:g,onFocus:S,onBlur:M,onKeydown:G,onKeypress:I,onKeyup:$,required:m});return A("span",{class:z},[A("input",v({ref:h},N),null),A("span",{class:"".concat(n,"-inner")},null)])}}});var se=function(){return{name:String,prefixCls:String,options:{type:Array,default:function(){return[]}},disabled:Boolean,id:String}},ve=function(){return v(v({},se()),{},{defaultValue:{type:Array},value:{type:Array},onChange:{type:Function},"onUpdate:value":{type:Function}})},fe=function(){return{prefixCls:String,defaultChecked:{type:Boolean,default:void 0},checked:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},isGroup:{type:Boolean,default:void 0},value:W.any,name:String,id:String,indeterminate:{type:Boolean,default:void 0},type:{type:String,default:"checkbox"},autofocus:{type:Boolean,default:void 0},onChange:Function,"onUpdate:checked":Function,onClick:Function,skipGroup:{type:Boolean,default:!1}}},me=function(){return v(v({},fe()),{},{indeterminate:{type:Boolean,default:!1}})},L=Symbol("CheckboxGroupContext"),be=["indeterminate","skipGroup","id"],pe=["onMouseenter","onMouseleave","onInput","class","style"];const O=H({compatConfig:{MODE:3},name:"ACheckbox",inheritAttrs:!1,__ANT_CHECKBOX:!0,props:me(),setup:function(e,o){var l=o.emit,s=o.attrs,x=o.slots,p=o.expose,h=J(),d=X("checkbox",e),c=d.prefixCls,g=d.direction,r=Z(L,void 0),n=Symbol("checkboxUniId");ee(function(){!e.skipGroup&&r&&r.registerValue(n,e.value)}),ae(function(){r&&r.cancelValue(n)}),ne(function(){te(e.checked!==void 0||r||e.value===void 0,"Checkbox","`value` is not validate prop, do you mean `checked`?")});var C=function(a){var i=a.target.checked;l("update:checked",i),l("change",a)},w=_(),j=function(){var a;(a=w.value)===null||a===void 0||a.focus()},V=function(){var a;(a=w.value)===null||a===void 0||a.blur()};return p({focus:j,blur:V}),function(){var y,a,i=re((y=x.default)===null||y===void 0?void 0:y.call(x)),f=e.indeterminate,m=e.skipGroup,b=e.id,u=b===void 0?h.id.value:b,S=R(e,be),M=s.onMouseenter,G=s.onMouseleave;s.onInput;var I=s.class,$=s.style,q=R(s,pe),k=v(v({},S),{},{id:u,prefixCls:c.value},q);r&&!m?(k.onChange=function(){for(var K=arguments.length,B=new Array(K),F=0;F<K;F++)B[F]=arguments[F];l.apply(void 0,["change"].concat(B)),r.toggleOption({label:i,value:e.value})},k.name=r.name.value,k.checked=r.mergedValue.value.indexOf(e.value)!==-1,k.disabled=e.disabled||r.disabled.value,k.indeterminate=f):k.onChange=C;var z=U((a={},P(a,"".concat(c.value,"-wrapper"),!0),P(a,"".concat(c.value,"-rtl"),g.value==="rtl"),P(a,"".concat(c.value,"-wrapper-checked"),k.checked),P(a,"".concat(c.value,"-wrapper-disabled"),k.disabled),a),I),N=U(P({},"".concat(c.value,"-indeterminate"),f));return A("label",{class:z,style:$,onMouseenter:M,onMouseleave:G},[A(de,v(v({},k),{},{class:N,ref:w}),null),i.length?A("span",null,[i]):null])}}}),T=H({compatConfig:{MODE:3},name:"ACheckboxGroup",props:ve(),setup:function(e,o){var l=o.slots,s=o.emit,x=o.expose,p=J(),h=X("checkbox",e),d=h.prefixCls,c=h.direction,g=_((e.value===void 0?e.defaultValue:e.value)||[]);D(function(){return e.value},function(){g.value=e.value||[]});var r=E(function(){return e.options.map(function(a){return typeof a=="string"||typeof a=="number"?{label:a,value:a}:a})}),n=_(Symbol()),C=_(new Map),w=function(i){C.value.delete(i),n.value=Symbol()},j=function(i,f){C.value.set(i,f),n.value=Symbol()},V=_(new Map);D(n,function(){var a=new Map,i=le(C.value.values()),f;try{for(i.s();!(f=i.n()).done;){var m=f.value;a.set(m,!0)}}catch(b){i.e(b)}finally{i.f()}V.value=a});var y=function(i){var f=g.value.indexOf(i.value),m=ie(g.value);f===-1?m.push(i.value):m.splice(f,1),e.value===void 0&&(g.value=m);var b=m.filter(function(u){return V.value.has(u)}).sort(function(u,S){var M=r.value.findIndex(function(I){return I.value===u}),G=r.value.findIndex(function(I){return I.value===S});return M-G});s("update:value",b),s("change",b),p.onFieldChange()};return oe(L,{cancelValue:w,registerValue:j,toggleOption:y,mergedValue:g,name:E(function(){return e.name}),disabled:E(function(){return e.disabled})}),x({mergedValue:g}),function(){var a,i=e.id,f=i===void 0?p.id.value:i,m=null,b="".concat(d.value,"-group");return r.value&&r.value.length>0&&(m=r.value.map(function(u){var S;return A(O,{prefixCls:d.value,key:u.value.toString(),disabled:"disabled"in u?u.disabled:e.disabled,indeterminate:u.indeterminate,value:u.value,checked:g.value.indexOf(u.value)!==-1,onChange:u.onChange,class:"".concat(b,"-item")},{default:function(){return[u.label===void 0?(S=l.label)===null||S===void 0?void 0:S.call(l,u):u.label]}})})),A("div",{class:[b,P({},"".concat(b,"-rtl"),c.value==="rtl")],id:f},[m||((a=l.default)===null||a===void 0?void 0:a.call(l))])}}});O.Group=T;O.install=function(t){return t.component(O.name,O),t.component(T.name,T),t};export{O as C,de as V,ke as i};
