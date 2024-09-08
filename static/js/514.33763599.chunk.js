"use strict";(self.webpackChunkhttps_medclub_netlify_app_=self.webpackChunkhttps_medclub_netlify_app_||[]).push([[514],{5801:(e,t,i)=>{i.d(t,{C:()=>r});const r=[{href:"/products",text:"\u041f\u0440\u043e\u0434\u0443\u043a\u0446\u0456\u044f",buttons:[{href:"category/all",text:"\u0412\u0441\u0456 \u0442\u043e\u0432\u0430\u0440\u0438"},{href:"category/ortho",text:"\u041e\u0440\u0442\u043e\u043f\u0435\u0434\u0438\u0447\u043d\u0430 \u0456 \u0431\u0430\u043d\u0434\u0430\u0436\u043d\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0456\u044f"},{href:"category/compression",text:"\u041a\u043e\u043c\u043f\u0440\u0435\u0441\u0456\u0439\u043d\u0438\u0439 \u0442\u0440\u0438\u043a\u043e\u0442\u0430\u0436"},{href:"category/reabilitation",text:"\u0422\u043e\u0432\u0430\u0440\u0438 \u0434\u043b\u044f \u0440\u0435\u0430\u0431\u0456\u043b\u0456\u0442\u0430\u0446\u0456\u0457"},{href:"category/momies",text:"\u041c\u0430\u043c\u0430\u043c \u0438 \u043d\u043e\u0432\u043e\u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u0438\u043c"},{href:"category/home_equip",text:"\u0414\u043e\u043c\u0430\u0448\u043d\u044f \u043c\u0435\u0434\u0442\u0435\u0445\u043d\u0438\u043a\u0430"},{href:"category/aplicators",text:"\u0410\u043f\u043b\u0456\u043a\u0430\u0442\u043e\u0440\u0438 \u041b\u044f\u043f\u043a\u043e"},{href:"category/pampers",text:"\u041f\u0430\u043c\u043f\u0435\u0440\u0441\u0438 \u0456 \u0441\u0435\u0440\u0432\u0435\u0442\u043a\u0438"},{href:"category/home_chemical",text:"\u041f\u043e\u0431\u0443\u0442\u043e\u0432\u0430 \u0425\u0456\u043c\u0456\u044f"}]},{href:"/more_info",text:"\u041a\u043e\u0440\u0438\u0441\u043d\u0430 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f"},{href:"/contacts",text:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"},{href:"/language",text:"img",buttons:[{href:"/",text:"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"},{href:"/ru",text:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"},{href:"/en",text:"English"}]}]},468:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ae});var r=i(89),o=i(4960),a=i(3383),n=i(6024),s=i(5043),l=i(6904),c=i(4482),d=i(7950),p=i(2096),h=i(3717),m=i(1848),u=i(4117);p.Ay.use(h.A).use(m.A).use(u.r9).init({fallbackLng:"en",whitelist:["ua","en"],debug:!1,detection:{order:["localStorage","cookie"],caches:["localStorage","cookie"]},interpolation:{escapeValue:!1}});var x=i(3892),g=i(3033),f=i(6178),b=i.n(f),y=(i(3624),i(246)),j=i(1566);var w=i(7494),v=i(8369),k=i(5801),$=i(8852),S=i(6213),C=i(6712),_=i.n(C),A=i(9815);S.A.defaults.baseURL="https://medclub.onrender.com/api/";const z=_().Notify.init({width:"400px",position:"top-right",distance:"50px",borderRadius:"10px",clickToClose:!0,useIcon:!1,fontSize:"23px"}),I={add:(0,A.createAsyncThunk)("products",(async(e,t)=>{try{const{data:t}=await S.A.post("products",e);return t}catch(i){return void 0!==i.response.data.message?(_().Notify.failure(`${i.response.data.message}`,z),t.rejectWithValue()):(_().Notify.failure(`${i.message}`,z),t.rejectWithValue())}})),update:(0,A.createAsyncThunk)("products",(async(e,t)=>{try{console.log(e);const{id:t}=e,i=(e,t)=>Object.fromEntries(Object.entries(t).filter((t=>{let[i]=t;return i!==e}))),r=i("id",e);console.log(r);const{data:o}=await S.A.put(`products/${t}`,r);return o}catch(i){return void 0!==i.response.data.message?(_().Notify.failure(`${i.response.data.message}`,z),t.rejectWithValue()):(_().Notify.failure(`${i.message}`,z),t.rejectWithValue())}}))};var D=i(3536),F=i(579);const O=document.getElementById("modal-root"),R=g.Ik().shape({sum:g.ai().positive("Sum must be a positive number").required("Sum is a required field"),category:g.Yj().required("Choose category"),comment:g.Yj(),date:g.p6().max(b()().add(1,"hour"),"Date should be today or earlier").default((()=>new Date)).required(),type:g.Yj().required()}),T=e=>{let{onClose:t,data:i,addMode:r}=e;console.log(i,r);const[o]=(0,s.useState)(i.productId),[a,n]=(0,s.useState)(i.title),[l,p]=(0,s.useState)(i.TM),[h,m]=(0,s.useState)(i.category),[u,g]=(0,s.useState)(i.description),[f,b]=(0,s.useState)(i.image),[S]=(0,s.useState)(i.size_and_price),[C,_]=(0,s.useState)(["1"]),[A,z]=(0,s.useState)(["No Price"]),[T,N]=(0,s.useState)(i.price||0),[E,H]=(0,s.useState)(i.short_description),[q,M]=(0,s.useState)(i.product_about),[P,V]=(0,s.useState)(i.full_images),[L,W]=(0,s.useState)(i.image_of_size[0]),[B,U]=(0,s.useState)(i.image_of_size[1]),[J,Q]=(0,s.useState)(i.instruction_description[0]),[G,K]=(0,s.useState)(i.instruction_description[1]),[Y,Z]=(0,s.useState)([]),[X,ee]=(0,s.useState)(void 0===i.recommended_products?[""]:i.recommended_products),[te,ie]=(0,s.useState)([]),[re]=(0,s.useState)("income"),[oe,ae]=(0,s.useState)(!1),ne=(0,c.wA)(),se=k.C[0].buttons,le=se.find((e=>h===e.text));(0,s.useEffect)((()=>{(async()=>{await(0,$.j0)().then((e=>e.result.map((e=>{let{title:t,_id:i}=e;return{title:t,_id:i}})))).then(Z)})(),void 0!==r&&ae(!0)}),[r]),(0,s.useEffect)((()=>{se.map((e=>{let{href:t,text:r}=e;return console.log(r,t.split("/",2)[1]),i.category===t.split("/",2)[1]?m(r):i.category}))}),[se,i.category]),(0,s.useEffect)((()=>{let e=S.map(((e,t,i)=>Object.keys(e)[0])),t=S.map(((e,t,i)=>Object.values(e)[0]));_(e),z(t)}),[S]),(0,s.useEffect)((()=>{if(void 0===Y||0===Y.length)return;let e=X.map((e=>{const t=Y.find((t=>e===t._id));return void 0===t?"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u0456 \u0442\u043e\u0432\u0430\u0440\u0438":t.title}));return ie(e)}),[X,Y]),(0,s.useEffect)((()=>{}),[]);const ce=e=>{if(console.log(e),e.target)if("fullImages"===e.target.name){const{value:t}=e.target;V((i=>{const r=parseInt(e.target.getAttribute("data-index"));return i.map(((e,i,o)=>i===r?P[r]=t:e))}))}else{const{name:t,value:i,id:r}=e.target;switch(console.log("name",t),t){case"sum":N(i);break;case"title":n(i);break;case"tradeMark":p(i);break;case"cardDescription":g(i);break;case"cardImage":b(i);break;case"shortDescription":H(i);break;case"productAbout":M(i);break;case"imageOfSize":W(i);break;case"sizing":U(i);break;case"instruction":K(i);break;case"imageOfInstruction":Q(i);break;case"cardSize":_((e=>e.map(((t,o,a)=>t===e[(0,D.toNumber)(r)]?e[(0,D.toNumber)(r)]=i:t))));break;case"cardPrice":z((e=>e.map(((t,o,a)=>t===e[(0,D.toNumber)(r)]?e[(0,D.toNumber)(r)]=i:t))))}}else{const{name:t}=e;switch(t){case"category":m(e.label);break;case"recommended":let t=function(e,t){return!!~e.indexOf(t)};if(0===X.length)return void ee([e.value]);if(t(X,e.value))return;ee((t=>{const i=e.value;return t.map(((i,r,o)=>(""===i&&t.pop(),e.value))),[...t,i]}))}}};(0,s.useEffect)((()=>{const e=e=>{"Escape"===e.code&&t()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[t]);return(0,d.createPortal)((0,F.jsx)(w.hJ,{onClick:e=>{e.target===e.currentTarget&&t()},children:(0,F.jsxs)(w.QI,{children:[(0,F.jsx)(y.A,{query:"(min-width: 768px)",render:()=>(0,F.jsx)(w.Jn,{onClick:()=>t()})}),(0,F.jsx)(w.hE,{children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f \u0442\u043e\u0432\u0430\u0440\u0443"}),(0,F.jsx)(x.l1,{initialValues:{sum:0,title:"",category:"",tradeMark:"",cardDescription:"",cardImage:"",shortDescription:"",productAbout:"",fullImages:[],imageOfSize:"",sizing:"",imageOfInstruction:"",instruction:"",recommended:[]},validationSchema:R,onChange:ce,children:e=>{let{touched:r,errors:n}=e;return(0,F.jsxs)(w.q,{autoComplete:"off",children:[(0,F.jsxs)(w.cl,{children:[(0,F.jsxs)(w.vK,{children:[(0,F.jsx)("h4",{children:"\u041a\u0430\u0440\u0442\u043a\u0430 \u0442\u043e\u0432\u0430\u0440\u0443: "}),(0,F.jsxs)(w.oi,{children:[(0,F.jsx)(w.l1,{htmlFor:"Title",children:"\u0410\u0440\u0442: "}),(0,F.jsx)(x.D0,{name:"title",value:a,placeholder:i.title,onChange:ce,as:w.wD,maxLength:20})]}),(0,F.jsxs)(w.oi,{children:[(0,F.jsx)(w.l1,{htmlFor:"ShortDescription",children:"\u041e\u043f\u0438\u0441: "}),(0,F.jsx)(x.D0,{name:"shortDescription",value:E,placeholder:i.short_description,onChange:ce,as:w.wD})]}),(0,F.jsxs)(w.oi,{children:[(0,F.jsx)(w.l1,{htmlFor:"CardImage",children:"\u0417\u043e\u0431\u0440\u0430\u0436: "}),(0,F.jsx)(x.D0,{name:"cardImage",value:f,placeholder:i.image,onChange:ce,as:w.wD})]}),(0,F.jsxs)(w.oi,{children:[(0,F.jsx)(w.l1,{htmlFor:"Sum",children:"\u0426\u0456\u043d\u0430: "}),(0,F.jsx)(w.Rd,{name:"sum",type:"number",min:"0.01",step:"0.01",value:T,onChange:ce,placeholder:i.price})]})]}),(0,F.jsxs)(w.vK,{children:[(0,F.jsx)("h4",{children:"\u041f\u043e\u0432\u043d\u0438\u0439 \u043e\u043f\u0438\u0441 \u0442\u043e\u0432\u0430\u0440\u0443: "}),(0,F.jsxs)(w.oi,{children:[(0,F.jsx)(w.l1,{htmlFor:"TradeMark",children:"\u0422\u041c: "}),(0,F.jsx)(x.D0,{name:"tradeMark",value:l,placeholder:i.TM,onChange:ce,as:w.wD,maxLength:30})]}),(0,F.jsxs)(w.v8,{children:[(0,F.jsx)(w.l1,{htmlFor:"Category",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044f: "}),(0,F.jsx)(j.Ay,{name:"category",components:(0,F.jsx)(v.A,{}),options:se.map((e=>{let{href:t,text:i}=e;return{name:"category",value:t,label:i}})),styles:{control:e=>({...e,border:"none",borderRadius:0,borderBottom:"1px solid #e0e0e0",minHeight:34,boxShadow:"none","&:hover":{border:"none",boxShadow:"none",borderBottom:"1px solid #e0e0e0"}}),indicatorSeparator:()=>({display:"none"}),valueContainer:e=>({...e,height:34,display:"flex",justifyContent:"start",padding:"0 20px","@media (min-width: 768px)":{padding:"0 8px"}}),input:e=>({...e,height:34,margin:0}),placeholder:e=>({...e,color:"#000000",margin:0,fontSize:18,lineHeight:1,fontFamily:"Circe, sans-serif"}),singleValue:e=>({...e,color:"#000000",margin:0,fontSize:18,lineHeight:1,fontFamily:"Circe, sans-serif"}),dropdownIndicator:e=>({...e,color:"#000000",alignItems:"flex-start"}),menu:e=>({...e,background:"rgba(255, 255, 255, 0.7)",boxShadow:"0px 6px 15px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(20px)",borderRadius:20,overflow:"hidden"}),menuList:e=>({...e,background:"transparent",borderRadius:20,cursor:"pointer","::-webkit-scrollbar":{width:"10px"},"::-webkit-scrollbar-track":{background:"#f9f9f9"},"::-webkit-scrollbar-thumb":{background:"#e1e1e1"},"::-webkit-scrollbar-thumb:hover":{background:"#f9f9f9"}}),option:(e,t)=>{let{isFocused:i,isSelected:r}=t;return{...e,background:i||r?"#ffffff":"transparent",color:"#000",cursor:"pointer",padding:"14px 20px",fontSize:18,lineHeight:1,fontFamily:"Circe, sans-serif",display:"flex"}}},placeholder:h,value:h,onChange:ce,isSearchable:!1},re)]}),(0,F.jsxs)(w.oi,{children:[(0,F.jsx)(w.l1,{htmlFor:"CardDescription",children:"\u041d\u0430\u0439\u043c\u0435\u043d\u0443\u0432:"}),(0,F.jsx)(x.D0,{name:"cardDescription",value:u,placeholder:i.description,onChange:ce,as:w.wD,maxLength:30})]}),(0,F.jsxs)(w.oi,{children:[(0,F.jsx)(w.l1,{htmlFor:"ProductAbout",children:"\u041f\u0440\u043e \u0442\u043e\u0432\u0430\u0440:"}),(0,F.jsx)(x.D0,{name:"productAbout",value:q,placeholder:i.product_about,onChange:ce,as:w.wD})]}),(0,F.jsxs)(w.oi,{children:[(0,F.jsx)(w.l7,{children:P.map(((e,t,r)=>(0,F.jsxs)("div",{children:[(0,F.jsx)(w.l1,{htmlFor:"FullImages",children:`\u0417\u043e\u0431\u0440\u0430\u0436 ${t+1}:`}),(0,F.jsx)(x.D0,{name:"fullImages","data-index":t,value:P[t],placeholder:i.full_images[t],onChange:ce,as:w.wD})]},`${e}${t}`)))}),(0,F.jsx)(w.VT,{onClick:()=>{P.push("")},children:"+"}),(0,F.jsx)(w.wj,{onClick:()=>{1!==P.length&&P.pop()},children:"-"})]}),(0,F.jsxs)(w.oi,{children:[(0,F.jsx)(w.l1,{htmlFor:"ImageOfSize",children:"\u0422\u0430\u0431. \u043f\u0456\u0434\u0431.:"}),(0,F.jsx)(x.D0,{name:"imageOfSize",value:L,placeholder:i.image_of_size[0],onChange:ce,as:w.wD})]}),(0,F.jsxs)(w.oi,{children:[(0,F.jsx)(w.l1,{htmlFor:"Sizing",children:"\u041e\u043f\u0438\u0441 \u043f\u0456\u0434\u0431\u043e\u0440\u0443:"}),(0,F.jsx)(x.D0,{name:"sizing",value:B,placeholder:i.image_of_size[1],onChange:ce,as:w.wD})]}),(0,F.jsxs)(w.oi,{children:[(0,F.jsx)(w.l1,{htmlFor:"ImageOfInstruction",children:"\u0422\u0430\u0431. \u0456\u043d\u0441\u0442\u0440.:"}),(0,F.jsx)(x.D0,{name:"imageOfInstruction",value:J,placeholder:i.instruction_description[0],onChange:ce,as:w.wD})]}),(0,F.jsxs)(w.oi,{children:[(0,F.jsx)(w.l1,{htmlFor:"Instruction",children:"\u0406\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0456\u044f:"}),(0,F.jsx)(x.D0,{name:"instruction",value:G,placeholder:i.instruction_description[1],onChange:ce,as:w.wD})]}),X.length>0?X.map(((e,t,i)=>(console.log(t,te[t]),(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(w.v8,{children:[(0,F.jsx)(w.l1,{htmlFor:"Recommended",children:"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434.:"}),(0,F.jsx)(j.Ay,{name:"recommended",components:(0,F.jsx)(v.A,{}),options:Y.map((e=>{let{_id:t,title:i}=e;return{name:"recommended",value:t,label:i}})),styles:{control:e=>({...e,border:"none",borderRadius:0,borderBottom:"1px solid #e0e0e0",minHeight:34,boxShadow:"none","&:hover":{border:"none",boxShadow:"none",borderBottom:"1px solid #e0e0e0"}}),indicatorSeparator:()=>({display:"none"}),valueContainer:e=>({...e,height:34,display:"flex",justifyContent:"start",padding:"0 20px","@media (min-width: 768px)":{padding:"0 8px"}}),input:e=>({...e,height:34,margin:0}),placeholder:e=>({...e,color:"#000000",margin:0,fontSize:18,lineHeight:1,fontFamily:"Circe, sans-serif"}),singleValue:e=>({...e,color:"#000000",margin:0,fontSize:18,lineHeight:1,fontFamily:"Circe, sans-serif"}),dropdownIndicator:e=>({...e,color:"#000000",alignItems:"flex-start"}),menu:e=>({...e,background:"rgba(255, 255, 255, 0.7)",boxShadow:"0px 6px 15px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(20px)",borderRadius:20,overflow:"hidden"}),menuList:e=>({...e,background:"transparent",borderRadius:20,cursor:"pointer","::-webkit-scrollbar":{width:"10px"},"::-webkit-scrollbar-track":{background:"#f9f9f9"},"::-webkit-scrollbar-thumb":{background:"#e1e1e1"},"::-webkit-scrollbar-thumb:hover":{background:"#f9f9f9"}}),option:(e,t)=>{let{isFocused:i,isSelected:r}=t;return{...e,background:i||r?"#ffffff":"transparent",color:"#000",cursor:"pointer",padding:"14px 20px",fontSize:18,lineHeight:1,fontFamily:"Circe, sans-serif",display:"flex"}}},placeholder:te[t],value:te[t],onChange:ce,isSearchable:!1}),(0,F.jsx)(w.jl,{onClick:()=>{X.push("")},children:"+"}),(0,F.jsx)(w.Mc,{onClick:()=>{if(1===X.length)return X.pop(),te.pop(),void X.push("");X.pop(),te.pop()},children:"-"})]},`${e}${t}`)})))):(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(w.v8,{children:[(0,F.jsx)(w.l1,{htmlFor:"Recommended",children:"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434.:"}),(0,F.jsx)(j.Ay,{name:"recommended",components:(0,F.jsx)(v.A,{}),options:Y.map((e=>{let{_id:t,title:i}=e;return{name:"recommended",value:t,label:i}})),styles:{control:e=>({...e,border:"none",borderRadius:0,borderBottom:"1px solid #e0e0e0",minHeight:34,boxShadow:"none","&:hover":{border:"none",boxShadow:"none",borderBottom:"1px solid #e0e0e0"}}),indicatorSeparator:()=>({display:"none"}),valueContainer:e=>({...e,height:34,display:"flex",justifyContent:"start",padding:"0 20px","@media (min-width: 768px)":{padding:"0 8px"}}),input:e=>({...e,height:34,margin:0}),placeholder:e=>({...e,color:"#000000",margin:0,fontSize:18,lineHeight:1,fontFamily:"Circe, sans-serif"}),singleValue:e=>({...e,color:"#000000",margin:0,fontSize:18,lineHeight:1,fontFamily:"Circe, sans-serif"}),dropdownIndicator:e=>({...e,color:"#000000",alignItems:"flex-start"}),menu:e=>({...e,background:"rgba(255, 255, 255, 0.7)",boxShadow:"0px 6px 15px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(20px)",borderRadius:20,overflow:"hidden"}),menuList:e=>({...e,background:"transparent",borderRadius:20,cursor:"pointer","::-webkit-scrollbar":{width:"10px"},"::-webkit-scrollbar-track":{background:"#f9f9f9"},"::-webkit-scrollbar-thumb":{background:"#e1e1e1"},"::-webkit-scrollbar-thumb:hover":{background:"#f9f9f9"}}),option:(e,t)=>{let{isFocused:i,isSelected:r}=t;return{...e,background:i||r?"#ffffff":"transparent",color:"#000",cursor:"pointer",padding:"14px 20px",fontSize:18,lineHeight:1,fontFamily:"Circe, sans-serif",display:"flex"}}},placeholder:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e",onChange:ce,isSearchable:!1}),(0,F.jsx)(w.jl,{onClick:()=>{X.push("")},children:"+"}),(0,F.jsx)(w.Mc,{onClick:()=>{if(1===X.length)return X.pop(),te.pop(),void X.push("");X.pop(),te.pop()},children:"-"})]})}),(0,F.jsxs)(w.Z$,{children:[S.map(((e,t,i)=>(0,F.jsxs)("div",{children:[(0,F.jsx)(w.l1,{htmlFor:"CardSize",children:"\u0420\u043e\u0437\u043c\u0456\u0440:"}),(0,F.jsx)(x.D0,{name:"cardSize",value:C[t],id:t,onChange:ce,as:w.wD}),(0,F.jsx)(w.l1,{htmlFor:"CardPrice",children:"\u0426\u0456\u043d\u0430:"}),(0,F.jsx)(x.D0,{name:"cardPrice",type:"number",value:A[t],id:t,onChange:ce,as:w.wD})]}))),(0,F.jsx)(w.jl,{onClick:()=>{C.push(""),A.push("0"),S.push("")},children:"+"}),(0,F.jsx)(w.Mc,{onClick:()=>{if(1===S.length)return S.pop(),C.pop(),A.pop(),S.push(""),C.push("1"),void A.push("No Price");C.pop(),A.pop(),S.pop()},children:"-"})]})]})]}),(0,F.jsxs)(w.vK,{children:[(0,F.jsx)(w.jn,{type:"submit",htmlType:"button",onClick:()=>{(e=>{let t={};""===X[0]?t={price:parseInt(T),category:le.href.split("/")[1],title:a,product_about:q,TM:l,description:u,short_description:E,image:f,full_images:P,image_of_size:[L,B],instruction_description:[J,G],recommended_products:[],size_and_price:C.map(((e,t,i)=>({[e]:(0,D.toNumber)(A[t])}))),id:o}:(console.log(C,A),t={price:parseInt(T),category:le.href.split("/")[1],title:a,product_about:q,TM:l,description:u,short_description:E,image:f,full_images:P,image_of_size:[L,B],instruction_description:[J,G],recommended_products:X,size_and_price:C.map(((e,t,i)=>({[e]:(0,D.toNumber)(A[t])}))),id:o}),console.log("CaTEGORY",t),ne(e?I.update(t):I.add(t))})(oe)},children:"\u0417\u043c\u0456\u043d\u0438\u0442\u0438"}),(0,F.jsx)(w.tA,{htmlType:"button",onClick:()=>t(),children:"\u0412\u0456\u0434\u043c\u0456\u043d\u0430"})]})]})}})]})}),O)},N=e=>{let{id:t,price:i,cardDescription:c,image:d,title:p,moreDetails:h,handleUpdateCartQuantity:m,handleUpdateCartItems:u}=e;const[x,g]=(0,s.useState)(!1),[f,b]=(0,s.useState)({}),y=(0,a.wA)();(0,s.useEffect)((()=>{document.body.style.overflow=x?"hidden":"visible"}),[x]);let j=(0,a.d4)(n.Pg.getIsAdmin);const w=async e=>{b({...await h(e),productId:e}),g(!0)},v=()=>{y(((e,r)=>{const o=r().cart,a=Object.keys(o).filter((e=>"_persist"!==e)).findIndex((e=>o[e].id===t));if(e((0,l.B5)({id:t,title:p,price:i,quantity:1})),console.log(a),a>=0){const e=Object.keys(o).filter((e=>"_persist"!==e)).map((e=>e===o[e].id?{...o[e],quantity:o[e].quantity+1}:{...o[e]}));localStorage.setItem("cart",JSON.stringify(e))}else{const e=Object.keys(o).filter((e=>"_persist"!==e)).find((e=>o[e].id===t));if(e){const t=Object.keys(o).filter((e=>"_persist"!==e)).map((t=>t===e?{...o[t],quantity:o[t].quantity+1}:{...o[t]}));localStorage.setItem("cart",JSON.stringify(t))}else{const e=Object.keys(o).filter((e=>"_persist"!==e)).map((e=>({...o[e]}))).concat([{id:t,title:p,price:i,quantity:1}]);localStorage.setItem("cart",JSON.stringify(e))}}})),m(),u()},k=()=>{console.log("Click"),y((0,l.Ai)(t)),y(((e,t)=>{const i=t().cart,r=Object.keys(i),o=Object.keys(i).filter((e=>"_persist"!==e)).map((e=>e===r?{...i[e],quantity:i[e].quantity-1}:{...i[e]}));localStorage.setItem("cart",JSON.stringify(o))})),m(),u()};return"No Image"===d?(0,F.jsxs)(r.jE,{children:[j&&(0,F.jsx)(r.lR,{onClick:()=>{w(t)},children:"Edit"}),x&&(0,F.jsx)(T,{data:f,onClose:()=>g(!1),addMode:!0}),(0,F.jsx)(r.FR,{href:`/${t}`,children:(0,F.jsx)(r.sO,{children:(0,F.jsx)(o.hf1,{})})}),(0,F.jsxs)(r.ht,{children:[(0,F.jsx)("a",{href:"/",children:p}),(0,F.jsx)("p",{children:c}),(0,F.jsxs)("h3",{children:["Price: ",i]})]}),(0,F.jsxs)(r.ot,{children:[(0,F.jsx)(r.lR,{onClick:k,children:"Remove"}),(0,F.jsx)(r.lR,{onClick:v,children:"Add"})]})]}):(0,F.jsxs)(r.jE,{children:[j&&(0,F.jsx)(r.lR,{onClick:()=>{w(t)},children:"Edit"}),x&&(0,F.jsx)(T,{data:f,onClose:()=>g(!1)}),(0,F.jsx)(r.FR,{href:`/${t}`,children:(0,F.jsx)(r.Du,{src:d,alt:p})}),(0,F.jsxs)(r.ht,{children:[(0,F.jsx)("a",{href:"/",children:p}),(0,F.jsx)("p",{children:c}),(0,F.jsxs)("h3",{children:["Price: ",i]})]}),(0,F.jsxs)(r.ot,{children:[(0,F.jsx)(r.lR,{children:"Remove"}),(0,F.jsx)(r.lR,{children:"Add"})]})]})};var E=i(6971),H=i(4974),q=i(9385),M=(i(1809),i(4469)),P=i(2488);const V=M.Ay.div`
  position: relative;
`,L=(M.Ay.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`,(0,M.Ay)(P.default)`
  & ul {
    display: flex;
    align-items: center;
    max-height: 150px;
    margin-bottom: ${e=>e.theme.space[3]}px;
    & li {
      margin: 0 5px;
    }
  }
`);i(2044);var W=i(1318);const B=M.Ay.img`
  max-width: 230px;
  margin-bottom: ${e=>e.theme.space[3]}px;
`,U={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:7,slidesToSlide:1,partialVisibilityGutter:40},desktop:{breakpoint:{max:3e3,min:1024},items:5,slidesToSlide:1,partialVisibilityGutter:40},tablet:{breakpoint:{max:1024,min:464},items:3,slidesToSlide:1,partialVisibilityGutter:20},mobile:{breakpoint:{max:464,min:0},items:2,slidesToSlide:1,partialVisibilityGutter:10}};class J extends s.Component{constructor(){super(...arguments),this.state={hits:[]}}componentDidMount(){const{data:e}=this.props;this.setState({hits:e})}render(){const{moreDetails:e,location:t}=this.props;return(0,F.jsx)(F.Fragment,{children:(0,F.jsx)(L,{swipeable:!0,draggable:!0,responsive:U,ssr:!0,autoPlay:"mobile"!==this.props.deviceType,autoPlaySpeed:5e3,keyBoardControl:!0,customTransition:"transform 5000ms cubic-bezier(0, 0, 0, 0) 0s",containerClass:"carousel-container",rewind:!0,rewindWithAnimation:!0,removeArrowOnDeviceType:["tablet","mobile"],deviceType:this.props.deviceType,focusOnSelect:!0,itemClass:"carousel-item-padding-40-px",children:this.state.hits.length>0&&this.state.hits.map((i=>{let{backdrop_path:r,id:o,original_title:a,name:n}=i;return(0,F.jsx)(V,{children:(0,F.jsxs)(W.k2,{to:"/"===t.pathname?`movies/${o}`:`${o}`,state:{from:t},onClick:()=>e(o),children:[(0,F.jsx)(B,{src:`https://image.tmdb.org/t/p/w500/${r}`,alt:"poster"}),a||n]})},o)}))})})}}var Q=i(3034);const G=(0,M.Ay)(Q.m)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 100px;
`,K=M.Ay.button`
  cursor: pointer;
  width: 15%;
  height: 35px;
  background-color: ${e=>e.theme.colors.primary_2};
  border: none;
  box-shadow: 0px 4px 10px 1px ${e=>e.theme.colors.primary_2};
  border-radius: 10px;
  :disabled {
    background-color: ${e=>e.theme.colors.primary};
    box-shadow: 0px 4px 10px 1px ${e=>e.theme.colors.primary};
    & svg {
      color: ${e=>e.theme.colors.primary_2};
    }
  }
  :not(:disabled):hover {
    background-color: ${e=>e.theme.colors.hovered};
    & svg {
      color: ${e=>e.theme.colors.primary_2};
    }
  }
  & svg {
    width: 100%;
    height: 100%;
    color: ${e=>e.theme.colors.accent};
  }
`,Y=M.Ay.select`
  width: 15%;
  text-align: center;
  height: 35px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  background-color: transparent;
  & :optional {
    background-color: red;
  }
`;var Z=i(5369);const X=e=>{let{disF:t,disB:i,setPage:r,page:o,totalHist:a,setLimit:n}=e;return(0,F.jsxs)(G,{children:[(0,F.jsx)(K,{type:"button",disabled:i,onClick:()=>{let e=parseInt(o)-1;r(e.toString())},children:(0,F.jsx)(Z.Tsg,{})}),(0,F.jsxs)(Y,{className:"qtyOnPage",defaultValue:"10",onChange:e=>{n(e.target.value),a<=parseInt(e.target.value)&&r("1")},children:[(0,F.jsx)("option",{value:"5",children:"5"}),(0,F.jsx)("option",{value:"10",children:"10"}),(0,F.jsx)("option",{value:"15",children:"15"})]}),(0,F.jsx)(K,{type:"button",disabled:t,onClick:()=>{let e=parseInt(o)+1;r(e.toString())},children:(0,F.jsx)(Z.eW4,{})})]})},ee=(0,M.Ay)(Q.m)`
  display: grid;
  position: relative;
  width: ${e=>`calc(100vw - ${e.theme.space[8]}px)`};
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: ${e=>`${e.theme.space[5]}px`};
  justify-items: center;
  margin: auto;
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly; */
  /* margin: -15px; */
  /* padding: 20px; */
  /* justify-items: center; */
`,te=(0,M.Ay)(r.lR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${e=>e.theme.fontSizes.xxxl};
  position: fixed;
  border-radius: ${e=>e.theme.borders.round};
  width: 60px;
  height: 60px;
  bottom: 204px;
  right: 0;
`;var ie=i(3615);i(5740);function re(e){let{children:t}=e;return(0,F.jsx)("div",{style:{display:"flex",flexDirection:"column",border:"1px solid #ccc",borderRadius:"5px",width:270,height:290,padding:"8px",margin:"15px"},children:t})}const oe=()=>(0,F.jsxs)(re,{children:[(0,F.jsx)(ie.A,{style:{display:"flex",width:130,height:100,borderRadius:"5px",margin:"0 auto",zIndex:0}}),(0,F.jsx)(ie.A,{count:5,style:{zIndex:0}}),(0,F.jsx)(ie.A,{count:2,inline:!0,style:{width:"45%",margin:"5px",zIndex:0}})]}),ae=e=>{let{moreDetails:t,location:i,handleUpdateCartQuantity:r,handleUpdateCartItems:o}=e;const[l,c]=(0,s.useState)(!1),[d,p]=(0,s.useState)([]),[h,m]=(0,s.useState)(0),[u,x]=(0,s.useState)(1),[g,f]=(0,s.useState)(10..toString()),[b,y]=(0,s.useState)([]),[j,w]=(0,s.useState)(1..toString()),[v,k]=(0,s.useState)(!1),[S,C]=(0,s.useState)(!0),[_,A]=(0,s.useState)(i.pathname),[z,I]=(0,s.useState)(!1);let D=(0,a.d4)(n.Pg.getIsAdmin);const O={title:"",TM:"",category:"",description:"",image:"",price:0,short_description:"",product_about:"",full_images:[""],image_of_size:[""],size_and_price:[{1:"No Price"}],instruction_description:["",""],recommended:[]};(0,s.useEffect)((()=>{!async function(){try{const e=await(0,q.MM)();p(e.results)}catch(e){console.log("error",e)}}()}),[]),(0,s.useEffect)((()=>{document.body.style.overflow=z?"hidden":"visible"}),[z]),(0,s.useEffect)((()=>{c(!0),A(i.pathname),async function(e,t){let{pathname:r}=i;try{"/all"===r&&(r="");const i=await(0,$.j0)(r,e,t);y(i.result),m(i.total_items)}catch(o){console.log("error",o)}finally{c(!1)}}(j,g)}),[g,i,i.pathname,j,_]),(0,s.useEffect)((()=>{x(parseInt(h)/parseInt(g)),1===u&&1===parseInt(j)?(k(!0),C(!0)):u>1&&(k(!1),C(!1)),1===parseInt(j)&&C(!0),u<=1&&k(!0)}),[g,j,h,u]);return(0,F.jsxs)(H.a,{as:"main",gridTemplateRows:"auto 2fr",p:3,children:[(0,F.jsx)(H.a,{as:"h2",mb:3,children:"Trending today"}),d.length>0?(0,F.jsx)(J,{data:d,moreDetails:q.$V,location:i}):(0,F.jsx)("h4",{children:"No images"}),(0,F.jsxs)(ee,{children:[l&&(0,F.jsx)(F.Fragment,{children:Array(10).fill(!0).map(((e,t)=>(0,F.jsx)(oe,{},t)))}),0!==b.length&&b.map((e=>{let{_id:t,image:a,title:n,short_description:s,price:l,size_and_price:c}=e;return console.log(b,Object.values(c[c.length-1])[0]),"No Image"===a?"No Price"!==Object.values(c[0])[0]?(0,F.jsx)(N,{id:t,image:"No Image",title:n,cardDescription:s,price:`${Object.values(c[0])[0]} - ${Object.values(c[c.length-1])[0]}`,moreDetails:$.eH,newLocation:i,handleUpdateCartQuantity:r,handleUpdateCartItems:o},t):(0,F.jsx)(N,{id:t,image:"No Image",title:n,cardDescription:s,price:l,moreDetails:$.eH,newLocation:i,handleUpdateCartQuantity:r,handleUpdateCartItems:o},t):(0,F.jsx)(N,{id:t,image:a,title:n,cardDescription:s,price:l,moreDetails:$.eH,state:{location:i},handleUpdateCartQuantity:r,handleUpdateCartItems:o},t)})),0===b.length&&(0,F.jsx)("div",{children:(0,F.jsx)("p",{children:"Sorry that category on construction study"})})]}),D&&(0,F.jsx)(te,{onClick:()=>{I(!0)},children:"+"}),z&&(0,F.jsx)(T,{data:O,onClose:()=>I(!1)}),(0,F.jsx)(X,{disB:S,disF:v,setPage:w,setLimit:f,totalHist:h,page:j}),(0,F.jsx)(s.Suspense,{fallback:null,children:(0,F.jsx)(E.sv,{})})]})}},7494:(e,t,i)=>{i.d(t,{Jn:()=>p,l7:()=>v,Rd:()=>S,cl:()=>u,v8:()=>$,wD:()=>C,vK:()=>x,VT:()=>f,wj:()=>b,l1:()=>w,jl:()=>j,Mc:()=>y,oi:()=>g,QI:()=>d,hJ:()=>c,jn:()=>_,tA:()=>A,Z$:()=>k,q:()=>m,hE:()=>h});var r=i(4469),o=i(3892);const a=`min-width: ${"768px"}`,n=`min-width: ${"1280px"}`;var s=i(3727),l=i(1210);const c=r.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (${a}) {
    background-color: rgba(0, 0, 0, 0.25);
  }
  z-index: 1200;
`,d=r.Ay.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: ${e=>e.theme.space[4]}px;
  width: 100%;
  max-height: 100%;
  font-family: ${e=>e.theme.fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  background-color: ${e=>e.theme.colors.primary};
  position: relative;
  overflow-y: auto;
  /* top: 60px; */

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 8px 1px ${e=>e.theme.colors.primary_2};
    :hover {
      box-shadow: inset 0 0 8px 20px ${e=>e.theme.colors.primary_2};
    }
  }

  @media screen and (${a}) {
    width: 540px;
    max-height: 603px;
    border-radius: 20px;
  }
  @media screen and (${n}) {
    width: 80%;
    max-height: 80%;
  }
`,p=(0,r.Ay)(s.A)`
  font-size: 16px;

  position: absolute;
  top: 35px;
  right: 20px;

  &:hover {
    color: ${e=>e.theme.colors.secondary};
  }
`,h=r.Ay.h2`
  display: flex;
  justify-content: center;
  width: 100%;

  margin-bottom: ${e=>e.theme.space[8]}px;
  font-size: ${e=>e.theme.fontSizes.xl};
  font-weight: ${e=>e.theme.fontWeights.normal};
  line-height: ${e=>e.theme.lineHeights.body};
  color: ${e=>e.theme.colors.black};

  @media (${a}) {
    margin-top: ${e=>e.theme.space[4]}px;
    font-size: ${e=>e.theme.fontSizes.xxxl};
  }
`,m=(0,r.Ay)(o.lV)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`,u=r.Ay.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  /* width: 280px; */

  /* @media (${a}) { */
  /* flex-direction: row;
    flex-flow: wrap; */
  /* width: 394px; */
  /* } */
`,x=r.Ay.div`
  padding: 8px;
  /* & > div {
    :last-child {
      position: relative;
    }
  } */
`,g=r.Ay.div`
  position: relative;
  margin-bottom: ${e=>e.theme.space[3]}px;
  /* width: 50%; */
  display: flex;
  align-items: center;
`,f=r.Ay.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  right: -32px;
  bottom: 23px;
`,b=r.Ay.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  right: -32px;
  bottom: 2px;
`,y=(0,r.Ay)(b)`
  position: relative;
  bottom: -3px;
  right: -12px;
`,j=(0,r.Ay)(f)`
  position: relative;
  bottom: 18px;
`,w=r.Ay.label`
  width: 25%;
  font-size: ${e=>e.theme.fontSizes.l};
  color: #000000;
`,v=r.Ay.div`
  width: 100%;
  & > div {
    display: flex;
  }
`,k=(0,r.Ay)(v)`
  display: flex;
  flex-wrap: wrap;
  height: auto;
`,$=r.Ay.div`
  position: static;
  display: flex;
  margin-bottom: ${e=>e.theme.space[2]}px;
  width: 100%;
  height: 36px;
  & > div {
    width: 85%;
  }
  align-items: center;

  /* @media (${a}) {
    width: 394px;
  } */
`,S=(0,r.Ay)(o.D0)`
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  font-family: ${e=>e.theme.fonts.primary};
  font-weight: ${e=>e.theme.fontWeights.normal};
  font-size: ${e=>e.theme.fontSizes.l};
  color: ${e=>e.theme.colors.black};
  background-color: transparent;
  outline: 0;
  border: none;
  border-bottom: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.border};
  width: 394px;
  height: 32px;

  &::placeholder {
    font-family: ${e=>e.theme.fonts.primary};
    font-weight: ${e=>e.theme.fontWeights.semibold};
    font-size: ${e=>e.theme.fontSizes.l};
    line-height: ${e=>e.theme.lineHeights.body};
    color: ${e=>e.theme.colors.shadow};
  }
  /* 
  @media (${a}) {
    text-align: center;
    margin-bottom: 0;

    &::placeholder {
      text-align: center;
    }
  } */
`,C=(r.Ay.div`
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  padding: 0 ${e=>e.theme.space[4]}px;
  font-family: ${e=>e.theme.fonts.primary};
  font-weight: ${e=>e.theme.fontWeights.normal};
  font-size: ${e=>e.theme.fontSizes.l};
  color: ${e=>e.theme.colors.black};
  background-color: transparent;
  outline: 0;
  border: none;
  border-bottom: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.border};
  width: 100%;
  height: 32px;
  position: relative;

  @media (${a}) {
    width: 181px;
  }
`,(0,r.Ay)(l.A)`
  font-size: 20px;
  color: ${e=>e.theme.colors.secondary};

  position: absolute;
  bottom: ${e=>e.theme.space[1]}px;
  right: ${e=>e.theme.space[1]}px;
`,r.Ay.textarea`
  padding: 0 ${e=>e.theme.space[4]}px;
  font-family: ${e=>e.theme.fonts.primary};
  font-weight: ${e=>e.theme.fontWeights.normal};
  font-size: ${e=>e.theme.fontSizes.l};
  color: ${e=>e.theme.colors.black};

  background-color: transparent;
  border: none;
  border-bottom: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.border};
  width: 100%;
  height: 32px;
  resize: vertical;
  &::placeholder {
    font-family: ${e=>e.theme.fonts.primary};
    font-weight: ${e=>e.theme.fontWeights.normal};
    font-size: ${e=>e.theme.fontSizes.l};
    line-height: ${e=>e.theme.lineHeights.body};
    color: ${e=>e.theme.colors.shadow};
  }

  @media (${a}) {
    padding: 0 ${e=>e.theme.space[1]}px;
    overflow-y: auto;
    width: 394px;
    /* height: 32px; */
  }
`),_=r.Ay.button`
  transition: all 0.3s ease;
  width: 300px;
  height: 50px;
  margin-bottom: ${e=>e.theme.space[4]}px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${e=>e.theme.fonts.primary};
  font-weight: ${e=>e.theme.fontWeights.normal};
  font-size: ${e=>e.theme.fontSizes.l};
  text-transform: uppercase;
  color: ${e=>e.theme.colors.primary};
  background-color: ${e=>e.theme.colors.accent};
  border-radius: ${e=>e.theme.radii.medium};
  outline: none;
  border: none;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px #00000040;
  }
`,A=r.Ay.button`
  transition: all 0.3s ease;
  width: 300px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${e=>e.theme.fonts.primary};
  font-weight: ${e=>e.theme.fontWeights.normal};
  font-size: ${e=>e.theme.fontSizes.l};
  text-transform: uppercase;
  color: ${e=>e.theme.colors.black};
  background-color: transparent;
  border: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.accent};
  border-radius: ${e=>e.theme.radii.medium};
  outline: none;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px #00000040;
  }
`}}]);
//# sourceMappingURL=514.33763599.chunk.js.map