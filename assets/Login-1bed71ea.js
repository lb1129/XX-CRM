import{B as h,D as k,r as D,Z as N,W as U,a1 as L,n as b,F as B,G as F,H as o,o as M,v as e,J as i,K as p,a2 as R,a3 as S,a4 as z,a5 as C,a6 as P,_ as q}from"./index-52f781cf.js";import{_ as x,F as E}from"./index-329bc1df.js";import"./index-80cab411.js";import{B as H}from"./index-c9dabb5d.js";import{I as O,_ as T}from"./index-3d372b09.js";import V from"./Layout-073a087f.js";import A from"./UserOutlined-4b213913.js";import G from"./LockOutlined-32e07716.js";import"./responsiveObserve-df9725ca.js";import"./styleChecker-c2401253.js";import"./useSize-d188913a.js";import"./ResizeObserver.es-0f9f8adb.js";import"./EyeOutlined-1f85d6ee.js";import"./EyeInvisibleOutlined-9529eb7c.js";import"./index-5cf5cd12.js";import"./index.vue_vue_type_script_setup_true_lang-4309d845.js";/* empty css              */import"./index-15b79708.js";const J=h({__name:"Login",setup(K){const s=k({userName:"",password:""}),n=D(!1),c=N(),{t:d}=U(),f=L(),m=b(),g=async()=>{n.value=!0;try{const t=await R(s);await S.set(t.data);const a=await z(),u=await C();m.setMenuData(u.data),m.setMenuDataDone(!0),f.setUserInfo(a.data),await c.replace({name:"Home"}),setTimeout(()=>{P.success({message:d("welcome"),description:a.data.userName})},200),n.value=!1}catch{n.value=!1}};return(t,a)=>{const u=A,v=O,r=x,w=G,y=T,_=B("router-link"),I=H,$=E;return M(),F(V,null,{default:o(()=>[e($,{model:s,onFinish:g},{default:o(()=>[e(r,{name:"userName",rules:[{required:!0,message:t.$t("pleaseEnterAccount")}]},{default:o(()=>[e(v,{size:"large",placeholder:t.$t("account")+"admin/viho/user",value:s.userName,"onUpdate:value":a[0]||(a[0]=l=>s.userName=l)},{prefix:o(()=>[e(u,{class:"icon"})]),_:1},8,["placeholder","value"])]),_:1},8,["rules"]),e(r,{name:"password",rules:[{required:!0,message:t.$t("pleaseEnterPassword")}]},{default:o(()=>[e(y,{size:"large",placeholder:t.$t("password")+"a123456",value:s.password,"onUpdate:value":a[1]||(a[1]=l=>s.password=l)},{prefix:o(()=>[e(w,{class:"icon"})]),_:1},8,["placeholder","value"])]),_:1},8,["rules"]),e(r,null,{default:o(()=>[e(_,{to:{name:"Register"}},{default:o(()=>[i(p(t.$t("signUp")),1)]),_:1}),e(_,{style:{float:"right"},to:{name:"FindPassword"}},{default:o(()=>[i(p(t.$t("forgotPassword")),1)]),_:1})]),_:1}),e(r,null,{default:o(()=>[e(I,{size:"large",block:"",loading:n.value,type:"primary","html-type":"submit"},{default:o(()=>[i(p(t.$t("login")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1})}}});const _e=q(J,[["__scopeId","data-v-5f5de7b6"]]);export{_e as default};
