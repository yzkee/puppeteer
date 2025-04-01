/*! For license information please see 562d3ac4.3e10d917.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[90953],{28453:(e,r,t)=>{t.d(r,{R:()=>l,x:()=>s});var n=t(96540);const a={},o=n.createContext(a);function l(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(o.Provider,{value:r},e.children)}},29698:(e,r)=>{var t=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function a(e,r,n){var a=null;if(void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),"key"in r)for(var o in n={},r)"key"!==o&&(n[o]=r[o]);else n=r;return r=n.ref,{$$typeof:t,type:e,key:a,ref:void 0!==r?r:null,props:n}}r.Fragment=n,r.jsx=a,r.jsxs=a},38320:(e,r,t)=>{t.d(r,{A:()=>l});var n=t(96540),a=t(34164);const o={tabItem:"tabItem__kUE"};function l({children:e,hidden:r,className:t}){return n.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,t),hidden:r},e)}},44416:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>p});const n=JSON.parse('{"id":"guides/installation","title":"Installation","description":"To use Puppeteer in your project, run:","source":"@site/versioned_docs/version-24.5.0/guides/installation.md","sourceDirName":"guides","slug":"/guides/installation","permalink":"/guides/installation","draft":false,"unlisted":false,"tags":[],"version":"24.5.0","frontMatter":{},"sidebar":"docs","previous":{"title":"What is Puppeteer?","permalink":"/guides/what-is-puppeteer"},"next":{"title":"Getting started","permalink":"/guides/getting-started"}}');var a=t(74848),o=t(28453),l=t(52560),s=t(38320);const i={},c="Installation",u={},p=[];function d(e){const r={a:"a",code:"code",em:"em",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"installation",children:"Installation"})}),"\n",(0,a.jsx)(r.p,{children:"To use Puppeteer in your project, run:"}),"\n",(0,a.jsxs)(l.A,{groupId:"npm2yarn",children:[(0,a.jsx)(s.A,{value:"npm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"npm i puppeteer\n"})})}),(0,a.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"yarn add puppeteer\n"})})}),(0,a.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"pnpm add puppeteer\n"})})})]}),"\n",(0,a.jsxs)(r.p,{children:["When you install Puppeteer, it automatically downloads a recent version of\n",(0,a.jsx)(r.a,{href:"https://developer.chrome.com/blog/chrome-for-testing/",children:"Chrome for Testing"})," (~170MB macOS, ~282MB Linux, ~280MB Windows) and a ",(0,a.jsx)(r.code,{children:"chrome-headless-shell"})," binary (starting with Puppeteer v21.6.0) that is ",(0,a.jsx)(r.a,{href:"https://pptr.dev/faq#q-why-doesnt-puppeteer-vxxx-work-with-a-certain-version-of-chrome-or-firefox",children:"guaranteed to\nwork"}),"\nwith Puppeteer. The browser is downloaded to the ",(0,a.jsx)(r.code,{children:"$HOME/.cache/puppeteer"})," folder\nby default (starting with Puppeteer v19.0.0). See ",(0,a.jsx)(r.a,{href:"https://pptr.dev/api/puppeteer.configuration",children:"configuration"})," for configuration options and environmental variables to control the download behavior."]}),"\n",(0,a.jsx)(r.p,{children:"For every release since v1.7.0 we publish two packages:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"https://www.npmjs.com/package/puppeteer",children:(0,a.jsx)(r.code,{children:"puppeteer"})})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"https://www.npmjs.com/package/puppeteer-core",children:(0,a.jsx)(r.code,{children:"puppeteer-core"})})}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"puppeteer"})," is a ",(0,a.jsx)(r.em,{children:"product"})," for browser automation. When installed, it downloads\na version of Chrome, which it then drives using ",(0,a.jsx)(r.code,{children:"puppeteer-core"}),". Being an\nend-user product, ",(0,a.jsx)(r.code,{children:"puppeteer"})," automates several workflows using reasonable\ndefaults ",(0,a.jsx)(r.a,{href:"https://pptr.dev/guides/configuration",children:"that can be customized"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"puppeteer-core"})," is a ",(0,a.jsx)(r.em,{children:"library"})," to help drive anything that supports DevTools\nprotocol. Being a library, ",(0,a.jsx)(r.code,{children:"puppeteer-core"})," is fully driven through its\nprogrammatic interface implying no defaults are assumed and ",(0,a.jsx)(r.code,{children:"puppeteer-core"}),"\nwill not download Chrome when installed."]}),"\n",(0,a.jsxs)(r.p,{children:["You should use ",(0,a.jsx)(r.code,{children:"puppeteer-core"})," if you are\n",(0,a.jsx)(r.a,{href:"https://pptr.dev/api/puppeteer.puppeteer.connect",children:"connecting to a remote browser"}),"\nor ",(0,a.jsx)(r.a,{href:"https://pptr.dev/browsers-api/",children:"managing browsers yourself"}),".\nIf you are managing browsers yourself, you will need to call\n",(0,a.jsx)(r.a,{href:"https://pptr.dev/api/puppeteer.puppeteernode.launch",children:(0,a.jsx)(r.code,{children:"puppeteer.launch"})})," with\nan explicit\n",(0,a.jsx)(r.a,{href:"https://pptr.dev/api/puppeteer.launchoptions",children:(0,a.jsx)(r.code,{children:"executablePath"})}),"\n(or ",(0,a.jsx)(r.a,{href:"https://pptr.dev/api/puppeteer.launchoptions",children:(0,a.jsx)(r.code,{children:"channel"})})," if it's\ninstalled in a standard location)."]}),"\n",(0,a.jsxs)(r.p,{children:["When using ",(0,a.jsx)(r.code,{children:"puppeteer-core"}),", remember to change the import:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-ts",children:"import puppeteer from 'puppeteer-core';\n"})})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},52560:(e,r,t)=>{t.d(r,{A:()=>E});var n=t(96540),a=t(34164),o=t(23575),l=t(56347),s=t(91648),i=t(62072),c=t(73353),u=t(85831);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function h(e){var r,t;return null!==(t=null===(r=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===r?void 0:r.filter(Boolean))&&void 0!==t?t:[]}function f(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=null!=r?r:function(e){return h(e).map((({props:{value:e,label:r,attributes:t,default:n}})=>({value:e,label:r,attributes:t,default:n})))}(t);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function b({value:e,tabValues:r}){return r.some((r=>r.value===e))}function m({queryString:e=!1,groupId:r}){const t=(0,l.W6)(),a=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:e,groupId:r}),o=(0,i.aZ)(a),s=(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(t.location.search);r.set(a,e),t.replace(d(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){p(e,r,t[r])}))}return e}({},t.location),{search:r.toString()}))}),[a,t]);return[o,s]}function g(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,o=f(e),[l,i]=(0,n.useState)((()=>function({defaultValue:e,tabValues:r}){if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!b({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var t;const n=null!==(t=r.find((e=>e.default)))&&void 0!==t?t:r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:o}))),[c,p]=m({queryString:t,groupId:a}),[d,h]=function({groupId:e}){const r=function(e){return e?`docusaurus.tab.${e}`:null}(e),[t,a]=(0,u.Dv)(r);return[t,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:a}),g=(()=>{const e=null!=c?c:d;return b({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),h(e)}),[p,h,o]),tabValues:o}}var v=t(52700);const y={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};function j(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function w(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){j(e,r,t[r])}))}return e}function x(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function O({className:e,block:r,selectedValue:t,selectValue:l,tabValues:s}){const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const r=e.currentTarget,n=i.indexOf(r),a=s[n].value;a!==t&&(c(r),l(a))},p=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;var t;r=null!==(t=i[n])&&void 0!==t?t:i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;var n;r=null!==(n=i[t])&&void 0!==n?n:i[i.length-1];break}}null==r||r.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},e)},s.map((({value:e,label:r,attributes:o})=>n.createElement("li",x(w({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>{i.push(e)},onKeyDown:p,onClick:u},o),{className:(0,a.A)("tabs__item",y.tabItem,null==o?void 0:o.className,{"tabs__item--active":t===e})}),null!=r?r:e))))}function k({lazy:e,children:r,selectedValue:t}){const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){const e=o.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==t}))))}function P(e){const r=g(e);return n.createElement("div",{className:(0,a.A)("tabs-container",y.tabList)},n.createElement(O,w({},r,e)),n.createElement(k,w({},r,e)))}function E(e){const r=(0,v.A)();return n.createElement(P,w({key:String(r)},e),h(e.children))}},74848:(e,r,t)=>{e.exports=t(29698)}}]);