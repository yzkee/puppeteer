/*! For license information please see 30ae7924.24406c87.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[61862],{27505:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"api/puppeteer.frame.evaluatehandle","title":"Frame.evaluateHandle() method","description":"Behaves identically to Page.evaluateHandle() except it\'s run within the context of this frame.","source":"@site/versioned_docs/version-24.6.0/api/puppeteer.frame.evaluatehandle.md","sourceDirName":"api","slug":"/api/puppeteer.frame.evaluatehandle","permalink":"/api/puppeteer.frame.evaluatehandle","draft":false,"unlisted":false,"tags":[],"version":"24.6.0","frontMatter":{"sidebar_label":"Frame.evaluateHandle"},"sidebar":"api","previous":{"title":"Frame.evaluate","permalink":"/api/puppeteer.frame.evaluate"},"next":{"title":"Frame.focus","permalink":"/api/puppeteer.frame.focus"}}');var t=n(74848),s=n(28453);const i={sidebar_label:"Frame.evaluateHandle"},l="Frame.evaluateHandle() method",d={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function p(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.header,{children:(0,t.jsx)(a.h1,{id:"frameevaluatehandle-method",children:"Frame.evaluateHandle() method"})}),"\n",(0,t.jsxs)(a.p,{children:["Behaves identically to ",(0,t.jsx)(a.a,{href:"/api/puppeteer.page.evaluatehandle",children:"Page.evaluateHandle()"})," except it's run within the context of this frame."]}),"\n",(0,t.jsxs)(a.p,{children:["See ",(0,t.jsx)(a.a,{href:"/api/puppeteer.page.evaluatehandle",children:"Page.evaluateHandle()"})," for details."]}),"\n",(0,t.jsx)(a.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-typescript",children:"class Frame {\n  evaluateHandle<\n    Params extends unknown[],\n    Func extends EvaluateFunc<Params> = EvaluateFunc<Params>,\n  >(\n    pageFunction: Func | string,\n    ...args: Params\n  ): Promise<HandleFor<Awaited<ReturnType<Func>>>>;\n}\n"})}),"\n",(0,t.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(a.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(a.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(a.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.p,{children:"pageFunction"})}),(0,t.jsx)("td",{children:(0,t.jsx)(a.p,{children:"Func | string"})}),(0,t.jsx)("td",{})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(a.p,{children:"args"})}),(0,t.jsx)("td",{children:(0,t.jsx)(a.p,{children:"Params"})}),(0,t.jsx)("td",{})]})]})]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(a.p,{children:["Promise<",(0,t.jsx)(a.a,{href:"/api/puppeteer.handlefor",children:"HandleFor"}),"<Awaited<ReturnType<Func>>>>"]})]})}function o(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>i,x:()=>l});var r=n(96540);const t={},s=r.createContext(t);function i(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:a},e.children)}},29698:(e,a)=>{var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function t(e,a,r){var t=null;if(void 0!==r&&(t=""+r),void 0!==a.key&&(t=""+a.key),"key"in a)for(var s in r={},a)"key"!==s&&(r[s]=a[s]);else r=a;return a=r.ref,{$$typeof:n,type:e,key:t,ref:void 0!==a?a:null,props:r}}a.Fragment=r,a.jsx=t,a.jsxs=t},74848:(e,a,n)=>{e.exports=n(29698)}}]);