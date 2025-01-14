/*! For license information please see a8dff042.6f618cc3.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[51082],{90907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"api/puppeteer.elementhandle.autofill","title":"ElementHandle.autofill() method","description":"If the element is a form input, you can use ElementHandle.autofill() to test if the form is compatible with the browser\'s autofill implementation. Throws an error if the form cannot be autofilled.","source":"@site/versioned_docs/version-24.0.0/api/puppeteer.elementhandle.autofill.md","sourceDirName":"api","slug":"/api/puppeteer.elementhandle.autofill","permalink":"/api/puppeteer.elementhandle.autofill","draft":false,"unlisted":false,"tags":[],"version":"24.0.0","frontMatter":{"sidebar_label":"ElementHandle.autofill"},"sidebar":"api","previous":{"title":"ElementHandle.$eval","permalink":"/api/puppeteer.elementhandle._eval"},"next":{"title":"ElementHandle.backendNodeId","permalink":"/api/puppeteer.elementhandle.backendnodeid"}}');var a=n(74848),l=n(28453);const i={sidebar_label:"ElementHandle.autofill"},o="ElementHandle.autofill() method",s={},d=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"elementhandleautofill-method",children:"ElementHandle.autofill() method"})}),"\n",(0,a.jsxs)(t.p,{children:["If the element is a form input, you can use ",(0,a.jsx)(t.a,{href:"/api/puppeteer.elementhandle.autofill",children:"ElementHandle.autofill()"})," to test if the form is compatible with the browser's autofill implementation. Throws an error if the form cannot be autofilled."]}),"\n",(0,a.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"class ElementHandle {\n  abstract autofill(data: AutofillData): Promise<void>;\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"Parameter"})}),(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"Type"})}),(0,a.jsx)("th",{children:(0,a.jsx)(t.p,{children:"Description"})})]})}),(0,a.jsx)("tbody",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:(0,a.jsx)(t.p,{children:"data"})}),(0,a.jsx)("td",{children:(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"/api/puppeteer.autofilldata",children:"AutofillData"})})}),(0,a.jsx)("td",{})]})})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,a.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,a.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,a.jsx)(t.p,{children:"Currently, Puppeteer supports auto-filling credit card information only and in Chrome in the new headless and headful modes only."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"// Select an input on the credit card form.\nconst name = await page.waitForSelector('form #name');\n// Trigger autofill with the desired data.\nawait name.autofill({\n  creditCard: {\n    number: '4444444444444444',\n    name: 'John Smith',\n    expiryMonth: '01',\n    expiryYear: '2030',\n    cvc: '123',\n  },\n});\n"})})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},21020:(e,t,n)=>{var r=n(96540),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,l={},d=null,c=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:a,type:e,key:d,ref:c,props:l,_owner:o.current}}t.Fragment=l,t.jsx=d,t.jsxs=d},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const a={},l=r.createContext(a);function i(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);