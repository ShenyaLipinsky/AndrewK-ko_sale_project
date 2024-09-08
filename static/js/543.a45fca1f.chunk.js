"use strict";(self.webpackChunkAndrewK_ko_sale_project=self.webpackChunkAndrewK_ko_sale_project||[]).push([[543],{5801:(e,o,t)=>{t.d(o,{C:()=>r});const r=[{href:"/products",text:"\u041f\u0440\u043e\u0434\u0443\u043a\u0446\u0456\u044f",buttons:[{href:"category/all",text:"\u0412\u0441\u0456 \u0442\u043e\u0432\u0430\u0440\u0438"},{href:"category/ortho",text:"\u041e\u0440\u0442\u043e\u043f\u0435\u0434\u0438\u0447\u043d\u0430 \u0456 \u0431\u0430\u043d\u0434\u0430\u0436\u043d\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0456\u044f"},{href:"category/compression",text:"\u041a\u043e\u043c\u043f\u0440\u0435\u0441\u0456\u0439\u043d\u0438\u0439 \u0442\u0440\u0438\u043a\u043e\u0442\u0430\u0436"},{href:"category/reabilitation",text:"\u0422\u043e\u0432\u0430\u0440\u0438 \u0434\u043b\u044f \u0440\u0435\u0430\u0431\u0456\u043b\u0456\u0442\u0430\u0446\u0456\u0457"},{href:"category/momies",text:"\u041c\u0430\u043c\u0430\u043c \u0438 \u043d\u043e\u0432\u043e\u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u0438\u043c"},{href:"category/home_equip",text:"\u0414\u043e\u043c\u0430\u0448\u043d\u044f \u043c\u0435\u0434\u0442\u0435\u0445\u043d\u0438\u043a\u0430"},{href:"category/aplicators",text:"\u0410\u043f\u043b\u0456\u043a\u0430\u0442\u043e\u0440\u0438 \u041b\u044f\u043f\u043a\u043e"},{href:"category/pampers",text:"\u041f\u0430\u043c\u043f\u0435\u0440\u0441\u0438 \u0456 \u0441\u0435\u0440\u0432\u0435\u0442\u043a\u0438"},{href:"category/home_chemical",text:"\u041f\u043e\u0431\u0443\u0442\u043e\u0432\u0430 \u0425\u0456\u043c\u0456\u044f"}]},{href:"/more_info",text:"\u041a\u043e\u0440\u0438\u0441\u043d\u0430 \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f"},{href:"/contacts",text:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438"},{href:"/language",text:"img",buttons:[{href:"/",text:"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"},{href:"/ru",text:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"},{href:"/en",text:"English"}]}]},3543:(e,o,t)=>{t.r(o),t.d(o,{default:()=>u});var r=t(4469),c=t(1318),a=t(4974),i=t(3034);const s=(0,r.Ay)(i.m)`
  position: relative;
  display: flex;
  justify-content: space-around;
`,l=(0,r.Ay)(a.a)`
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
`,n=(0,r.Ay)(a.a)`
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
`,h=(0,r.Ay)(c.k2)`
  gap: ${e=>e.theme.space[3]}px;
  padding: ${e=>e.theme.space[3]}px;
  border-radius: ${e=>e.theme.radii.normal};
  text-decoration: none;
  color: ${e=>e.theme.colors.text};
  background-color: ${e=>e.theme.colors.secondary};
  min-width: 60px;
  margin-left: ${e=>e.theme.space[3]}px;

  &.active {
    background-color: ${e=>e.theme.colors.accent};
    color: ${e=>e.theme.colors.white};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${e=>e.theme.colors.primary};
    background-color: ${e=>e.theme.colors.hovered};
  }
  :first-child {
    margin-left: 0;
  }
`,d=r.Ay.li`
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
`,m=((0,r.Ay)(c.k2)`
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
`,(0,r.Ay)(c.k2)`
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
`),p=r.Ay.h4`
  width: 100%;
  text-align: center;
`;var x=t(5801),f=t(579);const u=()=>(0,f.jsxs)(a.a,{as:"footer",display:"flex",position:"fixed",bottom:0,flexDirection:"column","justify-content":"space-between",alignItems:"center",width:"100vw",height:100,boxShadow:"1px -1px 10px #000000",bg:"primary_2",children:[(0,f.jsxs)(s,{children:[(0,f.jsx)(m,{to:"/",children:(0,f.jsx)("img",{src:"../Images/NoPhoto.jpg",alt:"",width:3})}),x.C.map((e=>{let{href:o,text:t,buttons:r}=e;return r?(0,f.jsxs)(l,{children:[(0,f.jsx)(h,{to:o,children:t}),(0,f.jsx)(n,{as:"ul",display:"flex",flexDirection:"column",children:r.map((e=>{let{href:o,text:t}=e;return(0,f.jsx)(d,{},o)}))})]},o):(0,f.jsx)(h,{to:o,children:t},o)}))]}),(0,f.jsx)(i.m,{children:(0,f.jsx)(p,{children:"Copyright \xa9 2022 ________ LLC. All the respective rights reserved."})})]})}}]);
//# sourceMappingURL=543.a45fca1f.chunk.js.map