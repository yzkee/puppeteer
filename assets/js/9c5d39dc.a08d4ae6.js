/*! For license information please see 9c5d39dc.a08d4ae6.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21939],{60717:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"api/puppeteer.elementhandle.boxmodel","title":"ElementHandle.boxModel() method","description":"This method returns boxes of the element, or null if the element is not part of the layout (example none).","source":"@site/../docs/api/puppeteer.elementhandle.boxmodel.md","sourceDirName":"api","slug":"/api/puppeteer.elementhandle.boxmodel","permalink":"/next/api/puppeteer.elementhandle.boxmodel","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"ElementHandle.boxModel"},"sidebar":"api","previous":{"title":"ElementHandle.boundingBox","permalink":"/next/api/puppeteer.elementhandle.boundingbox"},"next":{"title":"ElementHandle.click","permalink":"/next/api/puppeteer.elementhandle.click"}}');var o=t(74848),l=t(28453);const s={sidebar_label:"ElementHandle.boxModel"},a="ElementHandle.boxModel() method",d={},i=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"elementhandleboxmodel-method",children:"ElementHandle.boxModel() method"})}),"\n",(0,o.jsxs)(n.p,{children:["This method returns boxes of the element, or ",(0,o.jsx)(n.code,{children:"null"})," if the element is ",(0,o.jsx)(n.a,{href:"https://drafts.csswg.org/css-display-4/#box-generation",children:"not part of the layout"})," (example: ",(0,o.jsx)(n.code,{children:"display: none"}),")."]}),"\n",(0,o.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"class ElementHandle {\n  boxModel(): Promise<BoxModel | null>;\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,o.jsxs)(n.p,{children:["Promise<",(0,o.jsx)(n.a,{href:"/next/api/puppeteer.boxmodel",children:"BoxModel"})," | null>"]}),"\n",(0,o.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,o.jsxs)(n.p,{children:["Boxes are represented as an array of points; Each Point is an object ",(0,o.jsx)(n.code,{children:"{x, y}"}),". Box points are sorted clock-wise."]})]})}function c(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},21020:(e,n,t)=>{var r=t(96540),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,t){var r,l={},i=null,p=null;for(r in void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(p=n.ref),n)s.call(n,r)&&!d.hasOwnProperty(r)&&(l[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===l[r]&&(l[r]=n[r]);return{$$typeof:o,type:e,key:i,ref:p,props:l,_owner:a.current}}n.Fragment=l,n.jsx=i,n.jsxs=i},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var r=t(96540);const o={},l=r.createContext(o);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);