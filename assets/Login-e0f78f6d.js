import{A as h,B as k,r as D,Z as N,W as U,a1 as L,n as b,D as B,F,G as o,o as M,v as e,H as i,J as p,a2 as R,a3 as S,a4 as z,a5 as C,a6 as P,_ as q}from"./index-89de8fec.js";import{_ as x,F as A}from"./index-eb9359a6.js";import"./index-e6cbf75e.js";import{B as E}from"./index-0b73371a.js";import{I as H,_ as O}from"./index-3d871ff3.js";import T from"./Layout-ec58b6e0.js";import V from"./UserOutlined-2e27590e.js";import G from"./LockOutlined-ed94081d.js";import"./responsiveObserve-00ef97ce.js";import"./styleChecker-e6070262.js";import"./useSize-eae69433.js";import"./ResizeObserver.es-0f9f8adb.js";import"./EyeOutlined-981f1c7a.js";import"./EyeInvisibleOutlined-4662ceee.js";import"./index-ff52e6b7.js";import"./index.vue_vue_type_script_setup_true_lang-d65888ec.js";/* empty css              */import"./index-8cda959b.js";const J=h({__name:"Login",setup(W){const s=k({userName:"",password:""}),n=D(!1),c=N(),{t:d}=U(),f=L(),m=b(),g=async()=>{n.value=!0;try{const t=await R(s);await S.set(t.data);const a=await z(),u=await C();m.setMenuData(u.data),m.setMenuDataDone(!0),f.setUserInfo(a.data),await c.replace({name:"Home"}),setTimeout(()=>{P.success({message:d("welcome"),description:a.data.userName})},200),n.value=!1}catch{n.value=!1}};return(t,a)=>{const u=V,v=H,r=x,w=G,y=O,_=B("router-link"),I=E,$=A;return M(),F(T,null,{default:o(()=>[e($,{model:s,onFinish:g},{default:o(()=>[e(r,{name:"userName",rules:[{required:!0,message:t.$t("pleaseEnterAccount")}]},{default:o(()=>[e(v,{size:"large",placeholder:t.$t("account")+"admin/viho/user",value:s.userName,"onUpdate:value":a[0]||(a[0]=l=>s.userName=l)},{prefix:o(()=>[e(u,{class:"icon"})]),_:1},8,["placeholder","value"])]),_:1},8,["rules"]),e(r,{name:"password",rules:[{required:!0,message:t.$t("pleaseEnterPassword")}]},{default:o(()=>[e(y,{size:"large",placeholder:t.$t("password")+"a123456",value:s.password,"onUpdate:value":a[1]||(a[1]=l=>s.password=l)},{prefix:o(()=>[e(w,{class:"icon"})]),_:1},8,["placeholder","value"])]),_:1},8,["rules"]),e(r,null,{default:o(()=>[e(_,{to:{name:"Register"}},{default:o(()=>[i(p(t.$t("signUp")),1)]),_:1}),e(_,{style:{float:"right"},to:{name:"FindPassword"}},{default:o(()=>[i(p(t.$t("forgotPassword")),1)]),_:1})]),_:1}),e(r,null,{default:o(()=>[e(I,{size:"large",block:"",loading:n.value,type:"primary","html-type":"submit"},{default:o(()=>[i(p(t.$t("login")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1})}}});const _e=q(J,[["__scopeId","data-v-5f5de7b6"]]);export{_e as default};
