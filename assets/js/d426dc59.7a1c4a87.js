/*! For license information please see d426dc59.7a1c4a87.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85826],{20776:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"api/puppeteer.page.waitforresponse","title":"Page.waitForResponse() method","description":"Signature","source":"@site/versioned_docs/version-24.3.1/api/puppeteer.page.waitforresponse.md","sourceDirName":"api","slug":"/api/puppeteer.page.waitforresponse","permalink":"/api/puppeteer.page.waitforresponse","draft":false,"unlisted":false,"tags":[],"version":"24.3.1","frontMatter":{"sidebar_label":"Page.waitForResponse"},"sidebar":"api","previous":{"title":"Page.waitForRequest","permalink":"/api/puppeteer.page.waitforrequest"},"next":{"title":"Page.waitForSelector","permalink":"/api/puppeteer.page.waitforselector"}}');var n=s(74848),i=s(28453);const a={sidebar_label:"Page.waitForResponse"},o="Page.waitForResponse() method",p={},l=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"pagewaitforresponse-method",children:"Page.waitForResponse() method"})}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  waitForResponse(\n    urlOrPredicate: string | AwaitablePredicate<HTTPResponse>,\n    options?: WaitTimeoutOptions,\n  ): Promise<HTTPResponse>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"urlOrPredicate"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["string | ",(0,n.jsx)(r.a,{href:"/api/puppeteer.awaitablepredicate",children:"AwaitablePredicate"}),"<",(0,n.jsx)(r.a,{href:"/api/puppeteer.httpresponse",children:"HTTPResponse"}),">"]})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"A URL or predicate to wait for."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"options"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/api/puppeteer.waittimeoutoptions",children:"WaitTimeoutOptions"})})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"(Optional)"})," Optional waiting parameters"]})})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:["Promise<",(0,n.jsx)(r.a,{href:"/api/puppeteer.httpresponse",children:"HTTPResponse"}),">"]}),"\n",(0,n.jsx)(r.p,{children:"Promise which resolves to the matched response."}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsx)(r.p,{children:"Optional Parameter have:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"timeout"}),": Maximum wait time in milliseconds, defaults to ",(0,n.jsx)(r.code,{children:"30"})," seconds, pass ",(0,n.jsx)(r.code,{children:"0"})," to disable the timeout. The default value can be changed by using the ",(0,n.jsx)(r.a,{href:"/api/puppeteer.page.setdefaulttimeout",children:"Page.setDefaultTimeout()"})," method."]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"const firstResponse = await page.waitForResponse(\n  'https://example.com/resource',\n);\nconst finalResponse = await page.waitForResponse(\n  response =>\n    response.url() === 'https://example.com' && response.status() === 200,\n);\nconst finalResponse = await page.waitForResponse(async response => {\n  return (await response.text()).includes('<html>');\n});\nreturn finalResponse.ok();\n"})})]})}function d(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},21020:(e,r,s)=>{var t=s(96540),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,s){var t,i={},l=null,c=null;for(t in void 0!==s&&(l=""+s),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(c=r.ref),r)a.call(r,t)&&!p.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:n,type:e,key:l,ref:c,props:i,_owner:o.current}}r.Fragment=i,r.jsx=l,r.jsxs=l},74848:(e,r,s)=>{e.exports=s(21020)},28453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>o});var t=s(96540);const n={},i=t.createContext(n);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);