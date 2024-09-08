"use strict";(self.webpackChunkAndrewK_ko_sale_project=self.webpackChunkAndrewK_ko_sale_project||[]).push([[394],{5801:(e,t,o)=>{o.d(t,{C:()=>r});const r=[{href:"/products",text:"\u041f\u0440\u043e\u0434\u0443\u043a\u0446\u0456\u044f",buttons:[{href:"category/all",text:"\u0412\u0441\u0456 \u0442\u043e\u0432\u0430\u0440\u0438"},{href:"category/ortho",text:"\u041e\u0440\u0442\u043e\u043f\u0435\u0434\u0438\u0447\u043d\u0430 \u0456 \u0431\u0430\u043d\u0434\u0430\u0436\u043d\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0456\u044f"},{href:"category/compression",text:"\u041a\u043e\u043c\u043f\u0440\u0435\u0441\u0456\u0439\u043d\u0438\u0439 \u0442\u0440\u0438\u043a\u043e\u0442\u0430\u0436"},{href:"category/reabilitation",text:"\u0422\u043e\u0432\u0430\u0440\u0438 \u0434\u043b\u044f \u0440\u0435\u0430\u0431\u0456\u043b\u0456\u0442\u0430\u0446\u0456\u0457"},{href:"category/momies",text:"\u041c\u0430\u043c\u0430\u043c \u0438 \u043d\u043e\u0432\u043e\u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u0438\u043c"},{href:"category/home_equip",text:"\u0414\u043e\u043c\u0430\u0448\u043d\u044f \u043c\u0435\u0434\u0442\u0435\u0445\u043d\u0438\u043a\u0430"},{href:"category/aplicators",text:"\u0410\u043f\u043b\u0456\u043a\u0430\u0442\u043e\u0440\u0438 \u041b\u044f\u043f\u043a\u043e"},{href:"category/pampers",text:"\u041f\u0430\u043c\u043f\u0435\u0440\u0441\u0438 \u0456 \u0441\u0435\u0440\u0432\u0435\u0442\u043a\u0438"},{href:"category/home_chemical",text:"\u041f\u043e\u0431\u0443\u0442\u043e\u0432\u0430 \u0425\u0456\u043c\u0456\u044f"}]},{href:"/more_info",text:"\u041a\u043e\u0440\u0438\u0441\u043d\u0430 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f"},{href:"/contacts",text:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"},{href:"/language",text:"img",buttons:[{href:"/",text:"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"},{href:"/ru",text:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"},{href:"/en",text:"English"}]}]},6394:(e,t,o)=>{o.r(t),o.d(t,{default:()=>M});var r=o(5043),i=o(6971),n=o(4469),a=o(1318),s=o(4974),l=o(3034);const c=(0,n.Ay)(l.m)`
  display: flex;
  position: relative;
  padding: ${e=>e.theme.space[3]}px;
`,h=n.Ay.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  span {
    font-size: ${e=>e.theme.fontSizes.s};
    font-weight: ${e=>e.theme.fontWeights.bold};
    color: ${e=>e.theme.colors.secondaryText};
  }
`,d=(0,n.Ay)(s.a)`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: max-content;
  margin-left: ${e=>e.theme.space[3]}px;

  :hover {
    overflow: visible;
  }
  :hover > ul {
    opacity: 1;
  }
`,m=(0,n.Ay)(s.a)`
  position: absolute;
  /* padding-top: ${e=>e.theme.space[3]}px; */
  width: max-content;
  background-color: ${e=>e.theme.colors.secondary};
  border-bottom-left-radius: ${e=>e.theme.radii.normal};
  border-bottom-right-radius: ${e=>e.theme.radii.normal};
  transform: translate(0px, 35px);
  transition: ease-in-out 0.7s;
  opacity: 0;
  z-index: 2;
`,p=n.AH`
  gap: ${e=>e.theme.space[3]}px;
  padding: ${e=>e.theme.space[3]}px;
  border-radius: ${e=>e.theme.radii.normal};
  text-decoration: none;
  text-align: center;
  color: ${e=>e.theme.colors.text};
  background-color: ${e=>e.theme.colors.secondary};
  min-width: 60px;
  margin-left: ${e=>e.theme.space[3]}px;
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${e=>e.theme.colors.primary};
    background-color: ${e=>e.theme.colors.hovered};
  }
`,x=(0,n.Ay)(a.k2)`
  ${p}

  &.active {
    background-color: ${e=>e.theme.colors.accent};
    color: ${e=>e.theme.colors.white};
  }
  :first-child {
    margin-left: 0;
  }
`,f=n.Ay.li`
  /* padding: ${e=>e.theme.space[3]}px; */
  display: flex;
  border-radius: ${e=>e.theme.radii.normal};
  color: ${e=>e.theme.colors.text};
  background-color: ${e=>e.theme.colors.secondary};
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${e=>e.theme.colors.primary};
    background-color: ${e=>e.theme.colors.hovered};
  }
`,u=(0,n.Ay)(a.k2)`
  text-decoration: none;
  padding: ${e=>e.theme.space[3]}px;
  width: 100%;
  border-radius: ${e=>e.theme.radii.normal};
  &.active {
    background-color: ${e=>e.theme.colors.accent};
    color: ${e=>e.theme.colors.white};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${e=>e.theme.colors.primary};
    background-color: ${e=>e.theme.colors.hovered};
  }
`,g=(0,n.Ay)(a.k2)`
  /* position: absolute; */
  gap: ${e=>e.theme.space[4]}px;
  padding: ${e=>e.theme.space[3]}px;
  border-radius: ${e=>e.theme.radii.normal};
  text-decoration: none;
  color: ${e=>e.theme.colors.text};
  background-color: ${e=>e.theme.colors.secondary};
  min-width: 60px;

  /* &.active {
    background-color: ${e=>e.theme.colors.accent};
    color: ${e=>e.theme.colors.white};
  } */
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${e=>e.theme.colors.primary};
    background-color: ${e=>e.theme.colors.hovered};
  }
`,y=n.Ay.button`
  ${p}
  border: none;
  cursor: pointer;
`,b=n.Ay.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: -450%;
  width: 250px;
  height: 290px;
  padding: ${e=>e.theme.space[3]}px;
  background-color: ${e=>e.theme.colors.whiteBlur};
  border-radius: ${e=>e.theme.radii.large};
  overflow-y: scroll;
  transform: translate(0px, 20px);
  transition: ease-in-out 0.7s;
`,$=n.Ay.div`
  position: relative;
  overflow: hidden;
  :hover {
    overflow: visible;
  }
  :hover ${b} {
    opacity: 1;
  }
`;var w=o(5801),j=o(3383),v=o(6024),k=o(266),A=o(5369),z=o(579);const C=e=>{let{cartCounter:t}=e;return(0,z.jsxs)("div",{children:[(0,z.jsx)(A.AsH,{}),t>0&&(0,z.jsx)("span",{children:t})]})};var S=o(3536),U=o(7494),I=o(3892),N=o(7950),q=o(246);const _=n.Ay.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  & > div:last-child {
    display: flex;
    justify-content: space-evenly;
    & > button {
      padding: ${e=>e.theme.space[3]}px;
      border-radius: 5px;
    }
  }
`,E=n.Ay.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`,P=n.Ay.div`
  padding: 8px;
  width: 100%;

  & > div {
    :last-child {
      position: relative;
    }
  }
`,W=n.Ay.div`
  position: relative;
  margin-bottom: ${e=>e.theme.space[3]}px;
  /* width: 50%; */
  display: flex;
  align-items: center;
`,T=n.Ay.ul`
  width: 100%;
`,D=n.Ay.li`
  justify-content: space-between;
  display: flex;
  &:last-child {
    padding-top: ${e=>e.theme.space[5]}px;
    justify-content: flex-end;
  }
  & > p {
    width: 25%;
    text-align: start;
  }
  & > div {
    width: 25%;
    text-align: start;
  }
`,F=n.Ay.label`
  width: 25%;
  font-size: ${e=>e.theme.fontSizes.l};
  color: #000000;
  text-align: start;
`,O=n.Ay.input`
  padding: 0 ${e=>e.theme.space[4]}px;
  font-family: ${e=>e.theme.fonts.primary};
  font-weight: ${e=>e.theme.fontWeights.normal};
  font-size: ${e=>e.theme.fontSizes.m};
  color: ${e=>e.theme.colors.black};

  background-color: transparent;
  border: none;
  border-bottom: ${e=>e.theme.borders.normal} ${e=>e.theme.colors.border};
  width: 55%;
  height: 36px;
  resize: none;
  overflow: auto;
  &::placeholder {
    font-family: ${e=>e.theme.fonts.primary};
    font-weight: ${e=>e.theme.fontWeights.normal};
    font-size: ${e=>e.theme.fontSizes.m};
    line-height: ${e=>e.theme.lineHeights.body};
    color: ${e=>e.theme.colors.shadow};
  }
`;var Q=o(6904);const H=document.getElementById("modal-root"),J=e=>{let{onClose:t,data:o,email:i="",totalPrice:n,handleUpdateCartItems:a,handleUpdateCartQuantity:s}=e;const[l,c]=(0,r.useState)(),[h,d]=(0,r.useState)(),[m,p]=(0,r.useState)(""),[x,f]=(0,r.useState)(i||""),[u,g]=(0,r.useState)(),[y,b]=(0,r.useState)(o),$=(0,j.wA)();(0,r.useEffect)((()=>{$((0,Q.Bb)())}),[$]);const w=(e,t)=>{let{id:o,price:r,title:i}=t;const n=e.target.name;$(((e,t)=>{const a=t().cart,s=Object.values(a).filter((e=>e.id)).map((e=>e)).reduce(((e,t)=>({...e,[t.id]:t})),{});e(-1===Object.values(s).findIndex((e=>e.id===o))?(0,Q.B5)({id:o,price:r,title:i,quantity:1}):"minus"===n?(0,Q.RO)({operationName:n,id:o,quantity:-1}):(0,Q.RO)({operationName:n,id:o,quantity:1}));const l=Object.keys(a).filter((e=>"_persist"!==e)).map((e=>t().cart[e]));localStorage.setItem("cart",JSON.stringify(l)),b(l)})),s(),a()},v=e=>{const{name:t,value:o}=e.target;switch(t){case"UserName":c(o);break;case"UserSecondName":d(o);break;case"UserThirdName":p(o);break;case"UserMail":f(o);break;case"UserPhone":g(o)}};(0,r.useEffect)((()=>{const e=e=>{"Escape"===e.code&&t()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[t]);return(0,N.createPortal)((0,z.jsx)(U.hJ,{onClick:e=>{e.target===e.currentTarget&&t()},children:(0,z.jsxs)(U.QI,{children:[(0,z.jsx)(q.A,{query:"(min-width: 768px)",render:()=>(0,z.jsx)(U.Jn,{onClick:()=>t()})}),(0,z.jsx)(U.hE,{children:"\u0412\u0430\u0448\u0435 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f:"}),(0,z.jsx)(I.l1,{children:e=>{let{touched:o,errors:r}=e;return(0,z.jsxs)(_,{children:[(0,z.jsx)(E,{children:(0,z.jsxs)(P,{children:[(0,z.jsx)(W,{children:(0,z.jsxs)(T,{children:[(0,z.jsxs)(D,{children:[(0,z.jsx)("p",{children:"\u0422\u043e\u0432\u0430\u0440"}),(0,z.jsx)("p",{children:"\u0426\u0456\u043d\u0430"}),(0,z.jsx)("p",{children:"\u041a-\u0442\u044c"}),(0,z.jsx)("p",{children:"\u0414\u0456\u0457"})]},"header_list"),y.map(((e,t)=>{let{id:o,title:r,price:i,quantity:n}=e;return(0,z.jsxs)(D,{children:[(0,z.jsx)("p",{children:r}),(0,z.jsx)("p",{children:i}),(0,z.jsx)("p",{children:n}),(0,z.jsxs)("div",{children:[(0,z.jsx)("button",{name:"plus",type:"button",onClick:e=>{w(e,{id:o,title:r,price:i})},children:"+"}),(0,z.jsx)("button",{name:"minus",type:"button",onClick:e=>{w(e,{id:o,title:r,price:i})},children:"-"})]})]},`id:${o}`)})),(0,z.jsx)(D,{children:(0,z.jsxs)("p",{children:["\u0412\u0441\u044c\u043e\u0433\u043e: ",(0,z.jsx)("span",{children:n})]})})]})}),(0,z.jsxs)(W,{children:[(0,z.jsx)(F,{htmlFor:"UserName",children:"\u0406\u043c'\u044f: "}),(0,z.jsx)(I.D0,{name:"UserName",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f",required:!0,onChange:v,as:O})]}),(0,z.jsxs)(W,{children:[(0,z.jsx)(F,{htmlFor:"UserSecondName",children:"\u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435: "}),(0,z.jsx)(I.D0,{name:"UserSecondName",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435",required:!0,onChange:v,as:O})]}),(0,z.jsxs)(W,{children:[(0,z.jsx)(F,{htmlFor:"UserThirdName",children:"\u041f\u043e \u0431\u0430\u0442\u044c\u043a\u043e\u0432\u0456:"}),(0,z.jsx)(I.D0,{name:"UserThirdName",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f \u043f\u043e-\u0431\u0430\u0442\u044c\u043a\u043e\u0432\u0456 (\u043d\u0435 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u043e)",required:!1,onChange:v,as:O})]}),(0,z.jsxs)(W,{children:[(0,z.jsx)(F,{htmlFor:"UserMail",children:"\u041f\u043e\u0448\u0442\u0430: "}),(0,z.jsx)(I.D0,{name:"UserMail",type:"email",placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0448\u0443 \u043f\u043e\u0448\u0442\u043e\u0432\u0443 \u0441\u043a\u0440\u0438\u043d\u044c\u043a\u0443",required:!0,value:x,onChange:v,as:O})]}),(0,z.jsxs)(W,{children:[(0,z.jsx)(F,{htmlFor:"UserPhone",children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d: "}),(0,z.jsx)(I.D0,{name:"UserPhone",type:"text",placeholder:"\u0412\u0430\u0448 \u043c\u043e\u0431\u0456\u043b\u044c\u043d\u0438\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443",required:!0,onChange:v,as:O})]})]})}),(0,z.jsxs)(P,{children:[(0,z.jsx)(U.jn,{type:"submit",htmlType:"button",onClick:()=>{(()=>{let e={userName:l,userSecondName:h,userThirdName:m,userEmail:x,userPhone:u,dataProducts:y};console.log(e)})(),console.log("click on submit")},children:"\u0417\u043c\u0456\u043d\u0438\u0442\u0438"}),(0,z.jsx)(U.tA,{htmlType:"button",onClick:()=>t(),children:"\u0412\u0456\u0434\u043c\u0456\u043d\u0430"})]})]})}})]})}),H)},B=e=>{let{cartCounter:t,cartItems:o,handleUpdateCartItems:i,handleUpdateCartQuantity:n}=e;const[a,l]=(0,r.useState)([]),[p,A]=(0,r.useState)(!1),[U,I]=(0,r.useState)({}),N=(0,j.wA)();let q=(0,j.d4)(v.Pg.getIsLoggedIn),_=(0,j.d4)(v.Pg.getUserId),E=(0,j.d4)(v.Pg.getUserEmail);const P=null===a||void 0===a?void 0:a.reduce((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,{price:t,quantity:o}=arguments.length>1?arguments[1]:void 0;return(0,S.toInteger)(e)+(0,S.toInteger)(t)*(0,S.toInteger)(o)}),0);(0,r.useEffect)((()=>{document.body.style.overflow=p?"hidden":"visible"}),[p]),(0,r.useEffect)((()=>{l(o)}),[o]);return(0,z.jsx)(s.a,{as:"header",width:"100vw",boxShadow:"1px 1px 4px #000000",mb:3,bg:"primary_2",children:(0,z.jsxs)(c,{children:[(0,z.jsx)(g,{to:"/",children:(0,z.jsx)("img",{src:"../Images/NoPhoto.jpg",alt:"",width:3})}),w.C.map((e=>{let{href:t,text:o,buttons:r}=e;return r?(0,z.jsxs)(d,{children:[(0,z.jsx)(x,{to:t,children:o}),(0,z.jsx)(m,{as:"ul",display:"flex",flexDirection:"column",children:r.map((e=>{let{href:t,text:o}=e;return(0,z.jsx)(f,{children:(0,z.jsx)(u,{to:t,children:o})},t)}))})]},t):(0,z.jsx)(x,{to:t,children:o},t)})),(0,z.jsxs)(h,{children:[(0,z.jsxs)($,{children:[(0,z.jsx)(C,{cartCounter:t}),(0,z.jsxs)(b,{children:[(0,z.jsx)("h2",{children:"\u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430"}),(0,z.jsxs)("div",{children:[(0,z.jsx)("ul",{children:null===a||void 0===a?void 0:a.map(((e,t)=>{let{title:o,price:r,quantity:i}=e;return(0,z.jsxs)("li",{children:[(0,z.jsx)("h3",{children:o}),(0,z.jsx)("p",{children:r}),(0,z.jsx)("p",{children:i})]},t)}))}),(0,z.jsxs)("p",{children:["\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f: ",(0,z.jsx)("span",{children:P})]}),(0,z.jsx)("button",{onClick:()=>{(async e=>{I(e),A(!0)})(a)},children:"\u0417\u0430\u043c\u043e\u0432\u0438\u0442\u0438"}),p&&(0,z.jsx)(J,{data:U,email:E,totalPrice:P,onClose:()=>A(!1),handleUpdateCartQuantity:n,handleUpdateCartItems:i})]})]})]}),q?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("span",{children:E}),(0,z.jsx)(y,{onClick:()=>{N(k.T.logOut(_))},children:"\u0412\u0438\u0439\u0442\u0438"})]}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(x,{to:"login",children:"\u041b\u043e\u0433\u0456\u043d"}),(0,z.jsx)(x,{to:"register",children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"})]})]})]})})},M=e=>{let{cartCounter:t,cartItems:o,handleUpdateCartItems:n,handleUpdateCartQuantity:a}=e;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(B,{cartCounter:t,cartItems:o,handleUpdateCartQuantity:a,handleUpdateCartItems:n}),(0,z.jsx)(r.Suspense,{fallback:null,children:(0,z.jsx)(i.sv,{})})]})}},7494:(e,t,o)=>{o.d(t,{Jn:()=>d,l7:()=>j,Rd:()=>A,cl:()=>x,v8:()=>k,wD:()=>z,vK:()=>f,VT:()=>g,wj:()=>y,l1:()=>w,jl:()=>$,Mc:()=>b,oi:()=>u,QI:()=>h,hJ:()=>c,jn:()=>C,tA:()=>S,Z$:()=>v,q:()=>p,hE:()=>m});var r=o(4469),i=o(3892);const n=`min-width: ${"768px"}`,a=`min-width: ${"1280px"}`;var s=o(3727),l=o(1210);const c=r.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (${n}) {
    background-color: rgba(0, 0, 0, 0.25);
  }
  z-index: 1200;
`,h=r.Ay.div`
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

  @media screen and (${n}) {
    width: 540px;
    max-height: 603px;
    border-radius: 20px;
  }
  @media screen and (${a}) {
    width: 80%;
    max-height: 80%;
  }
`,d=(0,r.Ay)(s.A)`
  font-size: 16px;

  position: absolute;
  top: 35px;
  right: 20px;

  &:hover {
    color: ${e=>e.theme.colors.secondary};
  }
`,m=r.Ay.h2`
  display: flex;
  justify-content: center;
  width: 100%;

  margin-bottom: ${e=>e.theme.space[8]}px;
  font-size: ${e=>e.theme.fontSizes.xl};
  font-weight: ${e=>e.theme.fontWeights.normal};
  line-height: ${e=>e.theme.lineHeights.body};
  color: ${e=>e.theme.colors.black};

  @media (${n}) {
    margin-top: ${e=>e.theme.space[4]}px;
    font-size: ${e=>e.theme.fontSizes.xxxl};
  }
`,p=(0,r.Ay)(i.lV)`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`,x=r.Ay.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  /* width: 280px; */

  /* @media (${n}) { */
  /* flex-direction: row;
    flex-flow: wrap; */
  /* width: 394px; */
  /* } */
`,f=r.Ay.div`
  padding: 8px;
  /* & > div {
    :last-child {
      position: relative;
    }
  } */
`,u=r.Ay.div`
  position: relative;
  margin-bottom: ${e=>e.theme.space[3]}px;
  /* width: 50%; */
  display: flex;
  align-items: center;
`,g=r.Ay.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  right: -32px;
  bottom: 23px;
`,y=r.Ay.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  right: -32px;
  bottom: 2px;
`,b=(0,r.Ay)(y)`
  position: relative;
  bottom: -3px;
  right: -12px;
`,$=(0,r.Ay)(g)`
  position: relative;
  bottom: 18px;
`,w=r.Ay.label`
  width: 25%;
  font-size: ${e=>e.theme.fontSizes.l};
  color: #000000;
`,j=r.Ay.div`
  width: 100%;
  & > div {
    display: flex;
  }
`,v=(0,r.Ay)(j)`
  display: flex;
  flex-wrap: wrap;
  height: auto;
`,k=r.Ay.div`
  position: static;
  display: flex;
  margin-bottom: ${e=>e.theme.space[2]}px;
  width: 100%;
  height: 36px;
  & > div {
    width: 85%;
  }
  align-items: center;

  /* @media (${n}) {
    width: 394px;
  } */
`,A=(0,r.Ay)(i.D0)`
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
  @media (${n}) {
    text-align: center;
    margin-bottom: 0;

    &::placeholder {
      text-align: center;
    }
  } */
`,z=(r.Ay.div`
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

  @media (${n}) {
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

  @media (${n}) {
    padding: 0 ${e=>e.theme.space[1]}px;
    overflow-y: auto;
    width: 394px;
    /* height: 32px; */
  }
`),C=r.Ay.button`
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
`,S=r.Ay.button`
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
//# sourceMappingURL=394.a5841b60.chunk.js.map