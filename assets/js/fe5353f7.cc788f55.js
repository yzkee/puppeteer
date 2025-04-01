/*! For license information please see fe5353f7.cc788f55.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[63929],{8697:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"api/puppeteer.frame.goto","title":"Frame.goto() method","description":"Navigates the frame or page to the given url.","source":"@site/versioned_docs/version-24.5.0/api/puppeteer.frame.goto.md","sourceDirName":"api","slug":"/api/puppeteer.frame.goto","permalink":"/api/puppeteer.frame.goto","draft":false,"unlisted":false,"tags":[],"version":"24.5.0","frontMatter":{"sidebar_label":"Frame.goto"},"sidebar":"api","previous":{"title":"Frame.frameElement","permalink":"/api/puppeteer.frame.frameelement"},"next":{"title":"Frame.hover","permalink":"/api/puppeteer.frame.hover"}}');var t=r(74848),i=r(28453);const o={sidebar_label:"Frame.goto"},a="Frame.goto() method",l={},d=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"framegoto-method",children:"Frame.goto() method"})}),"\n",(0,t.jsxs)(n.p,{children:["Navigates the frame or page to the given ",(0,t.jsx)(n.code,{children:"url"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class Frame {\n  abstract goto(\n    url: string,\n    options?: GoToOptions,\n  ): Promise<HTTPResponse | null>;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(n.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"url"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"string"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:["URL to navigate the frame to. The URL should include scheme, e.g. ",(0,t.jsx)(n.code,{children:"https://"})]})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:"options"})}),(0,t.jsx)("td",{children:(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/api/puppeteer.gotooptions",children:"GoToOptions"})})}),(0,t.jsx)("td",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"(Optional)"})," Options to configure waiting behavior."]})})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(n.p,{children:["Promise<",(0,t.jsx)(n.a,{href:"/api/puppeteer.httpresponse",children:"HTTPResponse"})," | null>"]}),"\n",(0,t.jsx)(n.p,{children:"A promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect."}),"\n",(0,t.jsx)(n.h2,{id:"exceptions",children:"Exceptions"}),"\n",(0,t.jsx)(n.p,{children:"If:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"there's an SSL error (e.g. in case of self-signed certificates)."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"target URL is invalid."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"the timeout is exceeded during navigation."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"the remote server does not respond or is unreachable."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"the main resource failed to load."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(n.p,{children:["Navigation to ",(0,t.jsx)(n.code,{children:"about:blank"})," or navigation to the same URL with a different hash will succeed and return ",(0,t.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Headless shell mode doesn't support navigation to a PDF document. See the ",(0,t.jsx)(n.a,{href:"https://crbug.com/761295",children:"upstream issue"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:['In headless shell, this method will not throw an error when any valid HTTP status code is returned by the remote server, including 404 "Not Found" and 500 "Internal Server Error". The status code for such responses can be retrieved by calling ',(0,t.jsx)(n.a,{href:"/api/puppeteer.httpresponse.status",children:"HTTPResponse.status()"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var s=r(96540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}},29698:(e,n)=>{var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function t(e,n,s){var t=null;if(void 0!==s&&(t=""+s),void 0!==n.key&&(t=""+n.key),"key"in n)for(var i in s={},n)"key"!==i&&(s[i]=n[i]);else s=n;return n=s.ref,{$$typeof:r,type:e,key:t,ref:void 0!==n?n:null,props:s}}n.Fragment=s,n.jsx=t,n.jsxs=t},74848:(e,n,r)=>{e.exports=r(29698)}}]);