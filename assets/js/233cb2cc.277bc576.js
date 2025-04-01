/*! For license information please see 233cb2cc.277bc576.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30718],{8773:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"api/puppeteer.page.metrics","title":"Page.metrics() method","description":"Object containing metrics as key/value pairs.","source":"@site/versioned_docs/version-24.5.0/api/puppeteer.page.metrics.md","sourceDirName":"api","slug":"/api/puppeteer.page.metrics","permalink":"/api/puppeteer.page.metrics","draft":false,"unlisted":false,"tags":[],"version":"24.5.0","frontMatter":{"sidebar_label":"Page.metrics"},"sidebar":"api","previous":{"title":"Page.mainFrame","permalink":"/api/puppeteer.page.mainframe"},"next":{"title":"Page.pdf","permalink":"/api/puppeteer.page.pdf"}}');var r=s(74848),t=s(28453);const a={sidebar_label:"Page.metrics"},c="Page.metrics() method",l={},o=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"pagemetrics-method",children:"Page.metrics() method"})}),"\n",(0,r.jsx)(n.p,{children:"Object containing metrics as key/value pairs."}),"\n",(0,r.jsx)(n.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"class Page {\n  abstract metrics(): Promise<Metrics>;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(n.p,{children:["Promise<",(0,r.jsx)(n.a,{href:"/api/puppeteer.metrics",children:"Metrics"}),">"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Timestamp"})," : The timestamp when the metrics sample was taken."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Documents"})," : Number of documents in the page."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Frames"})," : Number of frames in the page."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"JSEventListeners"})," : Number of events in the page."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Nodes"})," : Number of DOM nodes in the page."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"LayoutCount"})," : Total number of full or partial page layout."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"RecalcStyleCount"})," : Total number of page style recalculations."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"LayoutDuration"})," : Combined durations of all page layouts."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"RecalcStyleDuration"})," : Combined duration of all page style recalculations."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ScriptDuration"})," : Combined duration of JavaScript execution."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"TaskDuration"})," : Combined duration of all tasks performed by the browser."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"JSHeapUsedSize"})," : Used JavaScript heap size."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"JSHeapTotalSize"})," : Total JavaScript heap size."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsx)(n.p,{children:"All timestamps are in monotonic time: monotonically increasing time in seconds since an arbitrary point in the past."})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>c});var i=s(96540);const r={},t=i.createContext(r);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}},29698:(e,n)=>{var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(e,n,i){var r=null;if(void 0!==i&&(r=""+i),void 0!==n.key&&(r=""+n.key),"key"in n)for(var t in i={},n)"key"!==t&&(i[t]=n[t]);else i=n;return n=i.ref,{$$typeof:s,type:e,key:r,ref:void 0!==n?n:null,props:i}}n.Fragment=i,n.jsx=r,n.jsxs=r},74848:(e,n,s)=>{e.exports=s(29698)}}]);