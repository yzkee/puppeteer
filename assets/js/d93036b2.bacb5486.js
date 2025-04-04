/*! For license information please see d93036b2.bacb5486.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30904],{5995:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"api/puppeteer.chromesettings","title":"ChromeSettings interface","description":"Signature","source":"@site/versioned_docs/version-24.6.0/api/puppeteer.chromesettings.md","sourceDirName":"api","slug":"/api/puppeteer.chromesettings","permalink":"/api/puppeteer.chromesettings","draft":false,"unlisted":false,"tags":[],"version":"24.6.0","frontMatter":{"sidebar_label":"ChromeSettings"},"sidebar":"api","previous":{"title":"ChromeReleaseChannel","permalink":"/api/puppeteer.chromereleasechannel"},"next":{"title":"ClickOptions","permalink":"/api/puppeteer.clickoptions"}}');var t=n(74848),i=n(28453);const d={sidebar_label:"ChromeSettings"},o="ChromeSettings interface",l={},c=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"chromesettings-interface",children:"ChromeSettings interface"})}),"\n",(0,t.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export interface ChromeSettings\n"})}),"\n",(0,t.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Property"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Default"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"downloadbaseurl",children:"downloadBaseUrl"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"string"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)(r.p,{children:"Specifies the URL prefix that is used to download the browser."}),(0,t.jsxs)(r.p,{children:["Can be overridden by ",(0,t.jsx)(r.code,{children:"PUPPETEER_CHROME_DOWNLOAD_BASE_URL"}),"."]}),(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Remarks:"})}),(0,t.jsxs)(r.p,{children:["This must include the protocol and may even need a path prefix. This must ",(0,t.jsx)(r.strong,{children:"not"})," include a trailing slash similar to the default."]})]}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://storage.googleapis.com/chrome-for-testing-public",children:"https://storage.googleapis.com/chrome-for-testing-public"})})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"skipdownload",children:"skipDownload"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"boolean"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)(r.p,{children:"Tells Puppeteer to not download the browser during installation."}),(0,t.jsxs)(r.p,{children:["Can be overridden by ",(0,t.jsx)(r.code,{children:"PUPPETEER_CHROME_SKIP_DOWNLOAD"}),"."]})]}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"false"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"version",children:"version"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"optional"})})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"string"})}),(0,t.jsxs)("td",{children:[(0,t.jsx)(r.p,{children:"Specifies a certain version of the browser you'd like Puppeteer to use."}),(0,t.jsxs)(r.p,{children:["Can be overridden by ",(0,t.jsx)(r.code,{children:"PUPPETEER_CHROME_VERSION"})," or ",(0,t.jsx)(r.code,{children:"PUPPETEER_SKIP_CHROME_DOWNLOAD"}),"."]}),(0,t.jsxs)(r.p,{children:["See ",(0,t.jsx)(r.a,{href:"/api/puppeteer.puppeteernode.launch",children:"puppeteer.launch"})," on how executable path is inferred."]})]}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"The pinned browser version supported by the current Puppeteer version."})})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>o});var s=n(96540);const t={},i=s.createContext(t);function d(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:r},e.children)}},29698:(e,r)=>{var n=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function t(e,r,s){var t=null;if(void 0!==s&&(t=""+s),void 0!==r.key&&(t=""+r.key),"key"in r)for(var i in s={},r)"key"!==i&&(s[i]=r[i]);else s=r;return r=s.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:s}}r.Fragment=s,r.jsx=t,r.jsxs=t},74848:(e,r,n)=>{e.exports=n(29698)}}]);