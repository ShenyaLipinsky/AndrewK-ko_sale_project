"use strict";(self.webpackChunkAndrewK_ko_sale_project=self.webpackChunkAndrewK_ko_sale_project||[]).push([[527],{5353:function(e,t,i){i.r(t),i.d(t,{default:function(){return P}});var n=i(2791),r=i(6871),a=i(9457),s=i(2982),o=i(5671),l=i(3144),p=i(9340),u=i(5716),c=i(5861),d=i(7757),h=i.n(d),m=i(4569).default,f="https://pixabay.com/api/",b="27515696-8635174e5d1dc6e80848b95cf";function x(){return x=(0,c.Z)(h().mark((function e(){var t,i,n,r=arguments;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"war",i=r.length>1&&void 0!==r[1]?r[1]:1,e.next=4,m.get(f,{params:{q:t,page:i,key:b,image_type:"photo",orientation:"horizontal",per_page:12}}).then((function(e){return e.data.hits.map((function(e){return{id:e.id,webformatURL:e.webformatURL,fullInfoLink:e.largeImageURL}}))}));case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}var v,y,k,g=function(){return x.apply(this,arguments)},w=(i(8040),i(168)),j=i(1242),Z=i(6766),T=j.ZP.div(v||(v=(0,w.Z)(["\n  position: relative;\n"]))),S=j.ZP.a(y||(y=(0,w.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]))),_=(0,j.ZP)(Z.default)(k||(k=(0,w.Z)(["\n  & ul {\n    display: flex;\n    align-items: center;\n    max-height: 150px;\n    & li {\n      margin: 0 5px;\n    }\n  }\n"]))),L=(i(5141),i(184)),C={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:7,slidesToSlide:1,partialVisibilityGutter:40},desktop:{breakpoint:{max:3e3,min:1024},items:5,slidesToSlide:1,partialVisibilityGutter:40},tablet:{breakpoint:{max:1024,min:464},items:3,slidesToSlide:1,partialVisibilityGutter:20},mobile:{breakpoint:{max:464,min:0},items:2,slidesToSlide:1,partialVisibilityGutter:10}},A=function(e){(0,p.Z)(i,e);var t=(0,u.Z)(i);function i(){var e;(0,o.Z)(this,i);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={hits:[]},e}return(0,l.Z)(i,[{key:"componentDidMount",value:function(){var e=this;g().then((function(t){e.setState({hits:(0,s.Z)(t)})}))}},{key:"render",value:function(){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("h2",{children:" Some Title "}),(0,L.jsx)(_,{swipeable:!0,draggable:!0,responsive:C,ssr:!0,autoPlay:"mobile"!==this.props.deviceType,autoPlaySpeed:5e3,keyBoardControl:!0,customTransition:"transform 5000ms cubic-bezier(0, 0, 0, 0) 0s",containerClass:"carousel-container",rewind:!0,rewindWithAnimation:!0,removeArrowOnDeviceType:["tablet","mobile"],deviceType:this.props.deviceType,focusOnSelect:!0,itemClass:"carousel-item-padding-40-px",children:this.state.hits&&this.state.hits.map((function(e){var t=e.id,i=e.webformatURL,n=e.fullInfoLink;return(0,L.jsxs)(T,{children:[(0,L.jsx)("img",{src:i,alt:"*"}),(0,L.jsx)(S,{href:n})]},t)}))})]})}}]),i}(n.Component),P=function(){return(0,L.jsxs)(a.x,{children:[(0,L.jsx)(A,{}),(0,L.jsx)(n.Suspense,{fallback:null,children:(0,L.jsx)(r.j3,{})})]})}}}]);
//# sourceMappingURL=527.ace38189.chunk.js.map