/*! For license information please see 7c0bee0d.9f3cc873.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11225],{58481:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>p});const r=JSON.parse('{"id":"api/puppeteer.elementhandle.type","title":"ElementHandle.type() method","description":"Focuses the element, and then sends a keydown, keypress/input, and keyup event for each character in the text.","source":"@site/versioned_docs/version-24.1.0/api/puppeteer.elementhandle.type.md","sourceDirName":"api","slug":"/api/puppeteer.elementhandle.type","permalink":"/api/puppeteer.elementhandle.type","draft":false,"unlisted":false,"tags":[],"version":"24.1.0","frontMatter":{"sidebar_label":"ElementHandle.type"},"sidebar":"api","previous":{"title":"ElementHandle.touchStart","permalink":"/api/puppeteer.elementhandle.touchstart"},"next":{"title":"ElementHandle.uploadFile","permalink":"/api/puppeteer.elementhandle.uploadfile"}}');var l=t(74848),s=t(28453);const a={sidebar_label:"ElementHandle.type"},i="ElementHandle.type() method",d={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2}];function o(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"elementhandletype-method",children:"ElementHandle.type() method"})}),"\n",(0,l.jsxs)(n.p,{children:["Focuses the element, and then sends a ",(0,l.jsx)(n.code,{children:"keydown"}),", ",(0,l.jsx)(n.code,{children:"keypress"}),"/",(0,l.jsx)(n.code,{children:"input"}),", and ",(0,l.jsx)(n.code,{children:"keyup"})," event for each character in the text."]}),"\n",(0,l.jsxs)(n.p,{children:["To press a special key, like ",(0,l.jsx)(n.code,{children:"Control"})," or ",(0,l.jsx)(n.code,{children:"ArrowDown"}),", use ",(0,l.jsx)(n.a,{href:"/api/puppeteer.elementhandle.press",children:"ElementHandle.press()"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"class ElementHandle {\n  type(text: string, options?: Readonly<KeyboardTypeOptions>): Promise<void>;\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)("table",{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:(0,l.jsx)(n.p,{children:"Parameter"})}),(0,l.jsx)("th",{children:(0,l.jsx)(n.p,{children:"Type"})}),(0,l.jsx)("th",{children:(0,l.jsx)(n.p,{children:"Description"})})]})}),(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(n.p,{children:"text"})}),(0,l.jsx)("td",{children:(0,l.jsx)(n.p,{children:"string"})}),(0,l.jsx)("td",{})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(n.p,{children:"options"})}),(0,l.jsx)("td",{children:(0,l.jsxs)(n.p,{children:["Readonly<",(0,l.jsx)(n.a,{href:"/api/puppeteer.keyboardtypeoptions",children:"KeyboardTypeOptions"}),">"]})}),(0,l.jsx)("td",{children:(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"(Optional)"})," Delay in milliseconds. Defaults to 0."]})})]})]})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,l.jsx)(n.p,{children:"Promise<void>"}),"\n",(0,l.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"await elementHandle.type('Hello'); // Types instantly\nawait elementHandle.type('World', {delay: 100}); // Types slower, like a user\n"})}),"\n",(0,l.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,l.jsx)(n.p,{children:"An example of typing into a text field and then submitting the form:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"const elementHandle = await page.$('input');\nawait elementHandle.type('some text');\nawait elementHandle.press('Enter');\n"})})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},21020:(e,n,t)=>{var r=t(96540),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(e,n,t){var r,s={},p=null,o=null;for(r in void 0!==t&&(p=""+t),void 0!==n.key&&(p=""+n.key),void 0!==n.ref&&(o=n.ref),n)a.call(n,r)&&!d.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:l,type:e,key:p,ref:o,props:s,_owner:i.current}}n.Fragment=s,n.jsx=p,n.jsxs=p},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(96540);const l={},s=r.createContext(l);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);