import{A as h,B as k,r as D,Z as N,W as U,a1 as L,n as b,D as B,F,G as o,o as M,v as e,H as i,J as p,a2 as R,a3 as S,a4 as z,a5 as C,a6 as P,_ as q}from"./index-2a181c57.js";import{_ as x,F as A}from"./index-2d03b300.js";import"./index-c070c8b9.js";import{B as E}from"./index-9184923e.js";import{I as H,_ as O}from"./index-8e0f43dd.js";import T from"./Layout-b60c71ef.js";import V from"./UserOutlined-a0f1d94c.js";import G from"./LockOutlined-50bfb73a.js";import"./responsiveObserve-4bcf7717.js";import"./styleChecker-207110c2.js";import"./useSize-140db40f.js";import"./ResizeObserver.es-0f9f8adb.js";import"./EyeOutlined-db759af5.js";import"./EyeInvisibleOutlined-2c4f630e.js";import"./index-c2bcd993.js";import"./index.vue_vue_type_script_setup_true_lang-aba2ab8b.js";/* empty css              */import"./index-816f4e46.js";const J=h({__name:"Login",setup(W){const s=k({userName:"",password:""}),n=D(!1),c=N(),{t:d}=U(),f=L(),m=b(),g=async()=>{n.value=!0;try{const t=await R(s);await S.set(t.data);const a=await z(),u=await C();m.setMenuData(u.data),m.setMenuDataDone(!0),f.setUserInfo(a.data),await c.replace({name:"Home"}),setTimeout(()=>{P.success({message:d("welcome"),description:a.data.userName})},200),n.value=!1}catch{n.value=!1}};return(t,a)=>{const u=V,v=H,r=x,w=G,y=O,_=B("router-link"),I=E,$=A;return M(),F(T,null,{default:o(()=>[e($,{model:s,onFinish:g},{default:o(()=>[e(r,{name:"userName",rules:[{required:!0,message:t.$t("pleaseEnterAccount")}]},{default:o(()=>[e(v,{size:"large",placeholder:t.$t("account")+"admin/viho/user",value:s.userName,"onUpdate:value":a[0]||(a[0]=l=>s.userName=l)},{prefix:o(()=>[e(u,{class:"icon"})]),_:1},8,["placeholder","value"])]),_:1},8,["rules"]),e(r,{name:"password",rules:[{required:!0,message:t.$t("pleaseEnterPassword")}]},{default:o(()=>[e(y,{size:"large",placeholder:t.$t("password")+"a123456",value:s.password,"onUpdate:value":a[1]||(a[1]=l=>s.password=l)},{prefix:o(()=>[e(w,{class:"icon"})]),_:1},8,["placeholder","value"])]),_:1},8,["rules"]),e(r,null,{default:o(()=>[e(_,{to:{name:"Register"}},{default:o(()=>[i(p(t.$t("signUp")),1)]),_:1}),e(_,{style:{float:"right"},to:{name:"FindPassword"}},{default:o(()=>[i(p(t.$t("forgotPassword")),1)]),_:1})]),_:1}),e(r,null,{default:o(()=>[e(I,{size:"large",block:"",loading:n.value,type:"primary","html-type":"submit"},{default:o(()=>[i(p(t.$t("login")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),_:1})}}});const _e=q(J,[["__scopeId","data-v-5f5de7b6"]]);export{_e as default};
