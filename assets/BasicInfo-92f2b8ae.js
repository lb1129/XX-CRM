import{k as q,N as E,r as g,P as V,a7 as x,w as z,g as A,a3 as m,U as h,t as e,S as a,a8 as C,o as D,u as _,T as P,a9 as T,aa as j,ab as I,ac as k,ad as H,_ as L}from"./index-8c2c8a7d.js";import{_ as M,F as Z}from"./index-4fee7edb.js";import{u as G,_ as J}from"./file-b636a6a3.js";import{B as K}from"./index-290b7f19.js";import"./index-82e103c7.js";import{_ as O}from"./index-8f9be98c.js";import{I as Q}from"./index-814594e5.js";import{_ as W}from"./TextArea-a749e38f.js";import"./index-7c1cc990.js";import X from"./EditOutlined-218b2466.js";import{a as Y,_ as ee}from"./index-84bb0212.js";import"./responsiveObserve-40564c18.js";import"./styleChecker-28819520.js";import"./useSize-e9a94cb6.js";import"./pickAttrs-2dc48ce2.js";import"./PaperClipOutlined-b31f5443.js";import"./PictureTwoTone-1f0ad81b.js";import"./FileTwoTone-cdb0488e.js";import"./EyeOutlined-500bfa08.js";import"./DeleteOutlined-de8a07eb.js";import"./DownloadOutlined-61e90bb5.js";import"./index-b68f3fb7.js";import"./raf-8f666c46.js";import"./CheckOutlined-305a70cb.js";import"./useMergedState-4a131a80.js";import"./index-1ebafc0b.js";import"./ResizeObserver.es-0f9f8adb.js";import"./css-06fbc100.js";import"./DialogWrap-4e22d00a.js";import"./RightOutlined-37847992.js";import"./objectDestructuringEmpty-7dfc2223.js";import"./RotateLeftOutlined-539fddeb.js";import"./RotateRightOutlined-271563a8.js";import"./ZoomInOutlined-3d01919e.js";import"./ZoomOutOutlined-88b7dbec.js";import"./SearchOutlined-63ce7740.js";import"./Password-c77b6401.js";import"./EyeInvisibleOutlined-6d89ff04.js";const oe={class:"basic-info-title"},ae={class:"basic-info-image"},te={class:"basic-info-image-content"},ne=q({__name:"BasicInfo",setup(se){const{t:r}=E(),l=g(!1),s=g(!1),o=V({nickname:"",profile:""}),i=x(),u=Promise;z(()=>{o.nickname=i.userInfo.nickname,o.profile=i.userInfo.profile});const b=async()=>{l.value=!0;try{await I({nickname:o.nickname,profile:o.profile}),k.success(r("whatSuccess",[r("updateBasicInfo")])),i.setUserInfo({nickname:o.nickname,profile:o.profile}),l.value=!1}catch{l.value=!1}},w=async t=>{s.value=!0;try{const n=await G(t.file);await I({avatar:n}),k.success(r("whatSuccess",[r("editAvatar")])),i.setUserInfo({avatar:n}),s.value=!1}catch{s.value=!1}};return(t,n)=>{const y=Q,c=M,B=W,f=K,S=Z,d=ee,$=O,U=H,N=X,F=J,R=Y;return D(),A(C,null,[m("h1",oe,h(t.$t("basicInfo")),1),e(R,null,{default:a(()=>[e(d,{span:14},{default:a(()=>[e(S,{layout:"vertical",hideRequiredMark:"",model:o,onFinish:b},{default:a(()=>[e(c,{label:t.$t("nickname"),name:"nickname",rules:[{validator:(p,v)=>!v||!/^[\u4e00-\u9fa5A-Za-z0-9_-]{4,10}$/.test(v)?_(u).reject(t.$t("nicknameRule")):_(u).resolve()}]},{default:a(()=>[e(y,{value:o.nickname,"onUpdate:value":n[0]||(n[0]=p=>o.nickname=p),placeholder:t.$t("pleaseEnterNickname")},null,8,["value","placeholder"])]),_:1},8,["label","rules"]),e(c,{label:t.$t("profile"),name:"profile"},{default:a(()=>[e(B,{value:o.profile,"onUpdate:value":n[1]||(n[1]=p=>o.profile=p),placeholder:t.$t("profile"),rows:4},null,8,["value","placeholder"])]),_:1},8,["label"]),e(c,null,{default:a(()=>[e(f,{loading:l.value,type:"primary","html-type":"submit"},{default:a(()=>[P(h(t.$t("updateBasicInfo")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1}),e(d,{span:10,style:{"text-align":"center"}},{default:a(()=>[m("div",ae,[e(U,{spinning:s.value},{default:a(()=>[m("div",te,[e($,{width:200,height:200,src:_(i).userInfo.avatar},null,8,["src"])])]),_:1},8,["spinning"]),T(e(F,{class:"basic-info-image-edit","max-count":1,accept:"image/*","show-upload-list":!1,customRequest:w},{default:a(()=>[e(f,{shape:"circle",size:"large"},{icon:a(()=>[e(N)]),_:1})]),_:1},512),[[j,!s.value]])])]),_:1})]),_:1})],64)}}});const Me=L(ne,[["__scopeId","data-v-fb149545"]]);export{Me as default};
