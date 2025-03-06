/*! For license information please see 086cc9b3.1d161ff8.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[56627],{9166:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"guides/network-logging","title":"Network logging","description":"By default, Puppeteer listens for all network requests and responses and emits network events on the page.","source":"@site/versioned_docs/version-24.4.0/guides/network-logging.md","sourceDirName":"guides","slug":"/guides/network-logging","permalink":"/guides/network-logging","draft":false,"unlisted":false,"tags":[],"version":"24.4.0","frontMatter":{},"sidebar":"docs","previous":{"title":"JavaScript execution","permalink":"/guides/javascript-execution"},"next":{"title":"Guides","permalink":"/category/guides"}}');var o=t(74848),s=t(28453);const i={},a="Network logging",l={},c=[];function u(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"network-logging",children:"Network logging"})}),"\n",(0,o.jsx)(n.p,{children:"By default, Puppeteer listens for all network requests and responses and emits network events on the page."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"const page = await browser.newPage();\npage.on('request', request => {\n  console.log(request.url());\n});\n\npage.on('response', response => {\n  console.log(response.url());\n});\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},21020:(e,n,t)=>{var r=t(96540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,s={},c=null,u=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(u=n.ref),n)i.call(n,r)&&!l.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:o,type:e,key:c,ref:u,props:s,_owner:a.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},74848:(e,n,t)=>{e.exports=t(21020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(96540);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);