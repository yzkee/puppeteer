/*! For license information please see 6d657ceb.81f81c32.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[69849],{28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var t=n(96540);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}},29698:(e,s)=>{var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(e,s,t){var i=null;if(void 0!==t&&(i=""+t),void 0!==s.key&&(i=""+s.key),"key"in s)for(var r in t={},s)"key"!==r&&(t[r]=s[r]);else t=s;return s=t.ref,{$$typeof:n,type:e,key:i,ref:void 0!==s?s:null,props:t}}s.Fragment=t,s.jsx=i,s.jsxs=i},32503:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"api/puppeteer.accessibility.snapshot","title":"Accessibility.snapshot() method","description":"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page.","source":"@site/versioned_docs/version-24.5.0/api/puppeteer.accessibility.snapshot.md","sourceDirName":"api","slug":"/api/puppeteer.accessibility.snapshot","permalink":"/api/puppeteer.accessibility.snapshot","draft":false,"unlisted":false,"tags":[],"version":"24.5.0","frontMatter":{"sidebar_label":"Accessibility.snapshot"},"sidebar":"api","previous":{"title":"Accessibility","permalink":"/api/puppeteer.accessibility"},"next":{"title":"Keyboard","permalink":"/api/puppeteer.keyboard"}}');var i=n(74848),r=n(28453);const o={sidebar_label:"Accessibility.snapshot"},a="Accessibility.snapshot() method",c={},l=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"accessibilitysnapshot-method",children:"Accessibility.snapshot() method"})}),"\n",(0,i.jsx)(s.p,{children:"Captures the current state of the accessibility tree. The returned object represents the root accessible node of the page."}),"\n",(0,i.jsx)(s.h3,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-typescript",children:"class Accessibility {\n  snapshot(options?: SnapshotOptions): Promise<SerializedAXNode | null>;\n}\n"})}),"\n",(0,i.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(s.p,{children:"Parameter"})}),(0,i.jsx)("th",{children:(0,i.jsx)(s.p,{children:"Type"})}),(0,i.jsx)("th",{children:(0,i.jsx)(s.p,{children:"Description"})})]})}),(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(s.p,{children:"options"})}),(0,i.jsx)("td",{children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/api/puppeteer.snapshotoptions",children:"SnapshotOptions"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"(Optional)"})})})]})})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Returns:"})}),"\n",(0,i.jsxs)(s.p,{children:["Promise<",(0,i.jsx)(s.a,{href:"/api/puppeteer.serializedaxnode",children:"SerializedAXNode"})," | null>"]}),"\n",(0,i.jsx)(s.p,{children:"An AXNode object representing the snapshot."}),"\n",(0,i.jsx)(s.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"NOTE"})," The Chrome accessibility tree contains nodes that go unused on most platforms and by most screen readers. Puppeteer will discard them as well for an easier to process tree, unless ",(0,i.jsx)(s.code,{children:"interestingOnly"})," is set to ",(0,i.jsx)(s.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsx)(s.p,{children:"An example of dumping the entire accessibility tree:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",children:"const snapshot = await page.accessibility.snapshot();\nconsole.log(snapshot);\n"})}),"\n",(0,i.jsx)(s.h2,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsx)(s.p,{children:"An example of logging the focused node's name:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-ts",children:"const snapshot = await page.accessibility.snapshot();\nconst node = findFocusedNode(snapshot);\nconsole.log(node && node.name);\n\nfunction findFocusedNode(node) {\n  if (node.focused) return node;\n  for (const child of node.children || []) {\n    const foundNode = findFocusedNode(child);\n    return foundNode;\n  }\n  return null;\n}\n"})})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},74848:(e,s,n)=>{e.exports=n(29698)}}]);