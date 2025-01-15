/*! For license information please see 8de37f16.8cac1c6f.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5949],{69789:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"api/puppeteer.cookiedata","title":"CookieData interface","description":"Cookie parameter object used to set cookies in the browser-level cookies API.","source":"@site/versioned_docs/version-24.1.0/api/puppeteer.cookiedata.md","sourceDirName":"api","slug":"/api/puppeteer.cookiedata","permalink":"/api/puppeteer.cookiedata","draft":false,"unlisted":false,"tags":[],"version":"24.1.0","frontMatter":{"sidebar_label":"CookieData"},"sidebar":"api","previous":{"title":"Cookie","permalink":"/api/puppeteer.cookie"},"next":{"title":"CookieParam","permalink":"/api/puppeteer.cookieparam"}}');var t=r(74848),n=r(28453);const d={sidebar_label:"CookieData"},o="CookieData interface",c={},l=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function h(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"cookiedata-interface",children:"CookieData interface"})}),"\n",(0,t.jsx)(i.p,{children:"Cookie parameter object used to set cookies in the browser-level cookies API."}),"\n",(0,t.jsx)(i.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typescript",children:"export interface CookieData\n"})}),"\n",(0,t.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(i.p,{children:"Property"})}),(0,t.jsx)("th",{children:(0,t.jsx)(i.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(i.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(i.p,{children:"Description"})}),(0,t.jsx)("th",{children:(0,t.jsx)(i.p,{children:"Default"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"domain",children:"domain"})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"string"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"Cookie domain."})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"expires",children:"expires"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"number"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"Cookie expiration date, session cookie if not set"})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"httponly",children:"httpOnly"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"boolean"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"True if cookie is http-only."})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"name",children:"name"})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"string"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"Cookie name."})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"partitionkey",children:"partitionKey"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"/api/puppeteer.cookiepartitionkey",children:"CookiePartitionKey"})," | string"]})}),(0,t.jsx)("td",{children:(0,t.jsxs)(i.p,{children:["Cookie partition key. In Chrome, it matches the top-level site the partitioned cookie is available in. In Firefox, it matches the source origin (",(0,t.jsx)(i.a,{href:"https://w3c.github.io/webdriver-bidi/%5C#type-storage-PartitionKey",children:"https://w3c.github.io/webdriver-bidi/\\#type-storage-PartitionKey"}),")."]})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"path",children:"path"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"string"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"Cookie path."})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"priority",children:"priority"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"/api/puppeteer.cookiepriority",children:"CookiePriority"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"Cookie Priority. Supported only in Chrome."})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"sameparty",children:"sameParty"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"boolean"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"True if cookie is SameParty. Supported only in Chrome."})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"samesite",children:"sameSite"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"/api/puppeteer.cookiesamesite",children:"CookieSameSite"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"Cookie SameSite type."})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"secure",children:"secure"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"boolean"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"True if cookie is secure."})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"sourcescheme",children:"sourceScheme"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"/api/puppeteer.cookiesourcescheme",children:"CookieSourceScheme"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"Cookie source scheme type. Supported only in Chrome."})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"value",children:"value"})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"string"})}),(0,t.jsx)("td",{children:(0,t.jsx)(i.p,{children:"Cookie value."})}),(0,t.jsx)("td",{})]})]})]})]})}function p(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},21020:(e,i,r)=>{var s=r(96540),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,i,r){var s,n={},l=null,h=null;for(s in void 0!==r&&(l=""+r),void 0!==i.key&&(l=""+i.key),void 0!==i.ref&&(h=i.ref),i)d.call(i,s)&&!c.hasOwnProperty(s)&&(n[s]=i[s]);if(e&&e.defaultProps)for(s in i=e.defaultProps)void 0===n[s]&&(n[s]=i[s]);return{$$typeof:t,type:e,key:l,ref:h,props:n,_owner:o.current}}i.Fragment=n,i.jsx=l,i.jsxs=l},74848:(e,i,r)=>{e.exports=r(21020)},28453:(e,i,r)=>{r.d(i,{R:()=>d,x:()=>o});var s=r(96540);const t={},n=s.createContext(t);function d(e){const i=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(n.Provider,{value:i},e.children)}}}]);