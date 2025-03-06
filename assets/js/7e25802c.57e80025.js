/*! For license information please see 7e25802c.57e80025.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6806],{44796:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"api/puppeteer.page.waitforfilechooser","title":"Page.waitForFileChooser() method","description":"This method is typically coupled with an action that triggers file choosing.","source":"@site/versioned_docs/version-24.4.0/api/puppeteer.page.waitforfilechooser.md","sourceDirName":"api","slug":"/api/puppeteer.page.waitforfilechooser","permalink":"/api/puppeteer.page.waitforfilechooser","draft":false,"unlisted":false,"tags":[],"version":"24.4.0","frontMatter":{"sidebar_label":"Page.waitForFileChooser"},"sidebar":"api","previous":{"title":"Page.waitForDevicePrompt","permalink":"/api/puppeteer.page.waitfordeviceprompt"},"next":{"title":"Page.waitForFrame","permalink":"/api/puppeteer.page.waitforframe"}}');var n=i(74848),o=i(28453);const s={sidebar_label:"Page.waitForFileChooser"},a="Page.waitForFileChooser() method",l={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function p(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"pagewaitforfilechooser-method",children:"Page.waitForFileChooser() method"})}),"\n",(0,n.jsx)(r.p,{children:"This method is typically coupled with an action that triggers file choosing."}),"\n",(0,n.jsx)(r.admonition,{type:"caution",children:(0,n.jsx)(r.p,{children:"This must be called before the file chooser is launched. It will not return a currently active file chooser."})}),"\n",(0,n.jsx)(r.admonition,{type:"caution",children:(0,n.jsx)(r.p,{children:"Interception of file dialogs triggered via DOM APIs such as window.showOpenFilePicker is currently not supported."})}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  abstract waitForFileChooser(\n    options?: WaitTimeoutOptions,\n  ): Promise<FileChooser>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"options"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/api/puppeteer.waittimeoutoptions",children:"WaitTimeoutOptions"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"(Optional)"})})})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:["Promise<",(0,n.jsx)(r.a,{href:"/api/puppeteer.filechooser",children:"FileChooser"}),">"]}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:['In the "headful" browser, this method results in the native file picker dialog ',(0,n.jsx)(r.code,{children:"not showing up"})," for the user."]}),"\n",(0,n.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(r.p,{children:["The following example clicks a button that issues a file chooser and then responds with ",(0,n.jsx)(r.code,{children:"/tmp/myfile.pdf"})," as if a user has selected this file."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"const [fileChooser] = await Promise.all([\n  page.waitForFileChooser(),\n  page.click('#upload-file-button'),\n  // some button that triggers file selection\n]);\nawait fileChooser.accept(['/tmp/myfile.pdf']);\n"})})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},21020:(e,r,i)=>{var t=i(96540),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,i){var t,o={},c=null,p=null;for(t in void 0!==i&&(c=""+i),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(p=r.ref),r)s.call(r,t)&&!l.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:n,type:e,key:c,ref:p,props:o,_owner:a.current}}r.Fragment=o,r.jsx=c,r.jsxs=c},74848:(e,r,i)=>{e.exports=i(21020)},28453:(e,r,i)=>{i.d(r,{R:()=>s,x:()=>a});var t=i(96540);const n={},o=t.createContext(n);function s(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);