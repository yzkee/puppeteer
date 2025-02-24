/*! For license information please see 52dc7c01.a0a8a608.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[11762],{40945:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"api/puppeteer.frame.type","title":"Frame.type() method","description":"Sends a keydown, keypress/input, and keyup event for each character in the text.","source":"@site/versioned_docs/version-24.3.0/api/puppeteer.frame.type.md","sourceDirName":"api","slug":"/api/puppeteer.frame.type","permalink":"/api/puppeteer.frame.type","draft":false,"unlisted":false,"tags":[],"version":"24.3.0","frontMatter":{"sidebar_label":"Frame.type"},"sidebar":"api","previous":{"title":"Frame.title","permalink":"/api/puppeteer.frame.title"},"next":{"title":"Frame.url","permalink":"/api/puppeteer.frame.url"}}');var s=t(74848),i=t(28453);const a={sidebar_label:"Frame.type"},l="Frame.type() method",d={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function o(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"frametype-method",children:"Frame.type() method"})}),"\n",(0,s.jsxs)(r.p,{children:["Sends a ",(0,s.jsx)(r.code,{children:"keydown"}),", ",(0,s.jsx)(r.code,{children:"keypress"}),"/",(0,s.jsx)(r.code,{children:"input"}),", and ",(0,s.jsx)(r.code,{children:"keyup"})," event for each character in the text."]}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Frame {\n  type(\n    selector: string,\n    text: string,\n    options?: Readonly<KeyboardTypeOptions>,\n  ): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"selector"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"the selector for the element to type into. If there are multiple the first will be used."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"text"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"text to type into the element"})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Readonly<",(0,s.jsx)(r.a,{href:"/api/puppeteer.keyboardtypeoptions",children:"KeyboardTypeOptions"}),">"]})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"(Optional)"})," takes one option, ",(0,s.jsx)(r.code,{children:"delay"}),", which sets the time to wait between key presses in milliseconds. Defaults to ",(0,s.jsx)(r.code,{children:"0"}),"."]})})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["To press a special key, like ",(0,s.jsx)(r.code,{children:"Control"})," or ",(0,s.jsx)(r.code,{children:"ArrowDown"}),", use ",(0,s.jsx)(r.a,{href:"/api/puppeteer.keyboard.press",children:"Keyboard.press()"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"await frame.type('#mytextarea', 'Hello'); // Types instantly\nawait frame.type('#mytextarea', 'World', {delay: 100}); // Types slower, like a user\n"})})]})}function c(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},21020:(e,r,t)=>{var n=t(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,t){var n,i={},p=null,o=null;for(n in void 0!==t&&(p=""+t),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(o=r.ref),r)a.call(r,n)&&!d.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:s,type:e,key:p,ref:o,props:i,_owner:l.current}}r.Fragment=i,r.jsx=p,r.jsxs=p},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>l});var n=t(96540);const s={},i=n.createContext(s);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);