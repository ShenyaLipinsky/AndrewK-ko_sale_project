"use strict";(self.webpackChunkhttps_medclub_netlify_app_=self.webpackChunkhttps_medclub_netlify_app_||[]).push([[204],{6204:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(5043),r=a(6971),l=a(1318),s=a(579);const i=e=>{let{value:t,onSubmit:a}=e;const[r,l]=(0,n.useState)(t);return(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault(),a(r)},children:[(0,s.jsx)("input",{type:"text",value:r===t?t:r,onChange:e=>l(e.target.value)}),(0,s.jsx)("button",{type:"submit",children:"Search"})]})};var u=a(9385),o=a(8852);const c=(0,n.lazy)((()=>a.e(653).then(a.bind(a,3653)))),d=(0,n.lazy)((()=>Promise.all([a.e(107),a.e(480),a.e(514)]).then(a.bind(a,468)))),h=e=>{var t;let{handleUpdateCartQuantity:a,handleUpdateCartItems:h}=e;const p=(0,r.zy)(),[v]=(0,n.useState)([]),[f,g]=(0,l.ok)(),m=null!==(t=f.get("query"))&&void 0!==t?t:"";(0,n.useEffect)((()=>{""!==m&&(0,u.q8)(m).then(v)}));return(0,s.jsx)("main",{children:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(i,{value:m,onSubmit:e=>{g(""!==e?{query:e}:{})}}),(0,s.jsx)(d,{handleUpdateCartQuantity:a,handleUpdateCartItems:h,moreDetails:o.eH,location:p,state:{from:p}}),(0,s.jsx)(n.Suspense,{fallback:null,children:(0,s.jsx)(r.sv,{})})]})})}},9385:(e,t,a)=>{a.d(t,{$V:()=>i,MM:()=>s,q8:()=>u});const n=a(1802).default,r="https://api.themoviedb.org/3/",l="52671e5fdac66fed8f134cf47bc0c7d2";async function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"trending/all/week",t=arguments.length>1?arguments[1]:void 0;if(null===e)return;return await n.get(`${r}${e}${t?"/"+t:""}?api_key=${l}`).then((e=>e.data))}async function i(e){try{const{poster_path:t,original_title:a,vote_average:s,overview:i,genres:u}=await n.get(`${r}movie/${e}?api_key=${l}`).then((e=>e.data));return{posterPath:`https://image.tmdb.org/t/p/w500/${t}`,original_title:a,vote_average:s,overview:i,genres:u}}catch(t){return console.log(t),null}}async function u(e){return await n.get(`${r}search/movie?api_key=${l}&query=${e}`).then((e=>e.data.results))}}}]);
//# sourceMappingURL=204.24721571.chunk.js.map