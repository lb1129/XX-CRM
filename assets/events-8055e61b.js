var r=Object.defineProperty;var d=(s,t,e)=>t in s?r(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var c=(s,t,e)=>(d(s,typeof t!="symbol"?t+"":t,e),e);import{am as i,an as p,ao as h,ap as u,aq as f}from"./index-9a9dea24.js";const m=s=>i.get(p,{params:{id:s}}),v=s=>i.post(u,s),P=s=>i.delete(f,{data:{ids:s}}),I=s=>i.post(h,s);class l{constructor(){c(this,"store");this.store=new Map}on(t,e,o){const a={handler:e,once:!!o};if(this.store.has(t)){const n=this.store.get(t);n==null||n.push(a)}else this.store.set(t,[a])}off(t,e){if(this.store.has(t)){const o=this.store.get(t),a=o==null?void 0:o.findIndex(n=>n.handler===e);(a||a===0)&&(o==null||o.splice(a,1))}}emit(t,...e){if(this.store.has(t)){const o=this.store.get(t);o==null||o.forEach(a=>{a.handler(...e),a.once&&this.off(t,a.handler)})}}once(t,e){this.on(t,e,!0)}}const b=l,S=new b,x=Symbol("productEditDone");export{x as a,I as b,P as d,m as g,S as p,v as s};
