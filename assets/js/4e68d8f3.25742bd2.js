/*! For license information please see 4e68d8f3.25742bd2.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[19529],{28453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>d});var t=s(96540);const n={},i=t.createContext(n);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(i.Provider,{value:r},e.children)}},29698:(e,r)=>{var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(e,r,t){var n=null;if(void 0!==t&&(n=""+t),void 0!==r.key&&(n=""+r.key),"key"in r)for(var i in t={},r)"key"!==i&&(t[i]=r[i]);else t=r;return r=t.ref,{$$typeof:s,type:e,key:n,ref:void 0!==r?r:null,props:t}}r.Fragment=t,r.jsx=n,r.jsxs=n},46570:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"api/puppeteer.frame","title":"Frame class","description":"Represents a DOM frame.","source":"@site/versioned_docs/version-24.5.0/api/puppeteer.frame.md","sourceDirName":"api","slug":"/api/puppeteer.frame","permalink":"/api/puppeteer.frame","draft":false,"unlisted":false,"tags":[],"version":"24.5.0","frontMatter":{"sidebar_label":"Frame"},"sidebar":"api","previous":{"title":"ConsoleMessage.type","permalink":"/api/puppeteer.consolemessage.type"},"next":{"title":"Frame.$","permalink":"/api/puppeteer.frame._"}}');var n=s(74848),i=s(28453);const a={sidebar_label:"Frame"},d="Frame class",l={},c=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"frame-class",children:"Frame class"})}),"\n",(0,n.jsx)(r.p,{children:"Represents a DOM frame."}),"\n",(0,n.jsxs)(r.p,{children:["To understand frames, you can think of frames as ",(0,n.jsx)(r.code,{children:"<iframe>"})," elements. Just like iframes, frames can be nested, and when JavaScript is executed in a frame, the JavaScript does not effect frames inside the ambient frame the JavaScript executes in."]}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export declare abstract class Frame extends EventEmitter<FrameEvents>\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Extends:"})," ",(0,n.jsx)(r.a,{href:"/api/puppeteer.eventemitter",children:"EventEmitter"}),"<",(0,n.jsx)(r.a,{href:"/api/puppeteer.frameevents",children:"FrameEvents"}),">"]}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["Frame lifecycles are controlled by three events that are all dispatched on the parent ",(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.page",children:"page"}),":"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"/api/puppeteer.pageevent",children:"PageEvent.FrameAttached"})," - ",(0,n.jsx)(r.a,{href:"/api/puppeteer.pageevent",children:"PageEvent.FrameNavigated"})," - ",(0,n.jsx)(r.a,{href:"/api/puppeteer.pageevent",children:"PageEvent.FrameDetached"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,n.jsx)(r.code,{children:"Frame"})," class."]}),"\n",(0,n.jsx)(r.h2,{id:"example-1",children:"Example 1"}),"\n",(0,n.jsxs)(r.p,{children:["At any point in time, ",(0,n.jsx)(r.a,{href:"/api/puppeteer.page",children:"pages"})," expose their current frame tree via the ",(0,n.jsx)(r.a,{href:"/api/puppeteer.page.mainframe",children:"Page.mainFrame()"})," and ",(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.childframes",children:"Frame.childFrames()"})," methods."]}),"\n",(0,n.jsx)(r.h2,{id:"example-2",children:"Example 2"}),"\n",(0,n.jsx)(r.p,{children:"An example of dumping frame tree:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.goto('https://www.google.com/chrome/browser/canary.html');\n  dumpFrameTree(page.mainFrame(), '');\n  await browser.close();\n\n  function dumpFrameTree(frame, indent) {\n    console.log(indent + frame.url());\n    for (const child of frame.childFrames()) {\n      dumpFrameTree(child, indent + '  ');\n    }\n  }\n})();\n"})}),"\n",(0,n.jsx)(r.h2,{id:"example-3",children:"Example 3"}),"\n",(0,n.jsx)(r.p,{children:"An example of getting text from an iframe element:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"const frame = page.frames().find(frame => frame.name() === 'myframe');\nconst text = await frame.$eval('.selector', element => element.textContent);\nconsole.log(text);\n"})}),"\n",(0,n.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Property"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Modifiers"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"detached",children:"detached"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"readonly"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"boolean"})}),(0,n.jsx)("td",{})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Method"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Modifiers"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"_",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame._",children:"$(selector)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Queries the frame for an element matching the given selector."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"__",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.__",children:"$$(selector, options)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Queries the frame for all elements matching the given selector."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"__eval",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.__eval",children:"$$eval(selector, pageFunction, args)"})})}),(0,n.jsx)("td",{}),(0,n.jsxs)("td",{children:[(0,n.jsx)(r.p,{children:"Runs the given function on an array of elements matching the given selector in the frame."}),(0,n.jsx)(r.p,{children:"If the given function returns a promise, then this method will wait till the promise resolves."})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"_eval",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame._eval",children:"$eval(selector, pageFunction, args)"})})}),(0,n.jsx)("td",{}),(0,n.jsxs)("td",{children:[(0,n.jsx)(r.p,{children:"Runs the given function on the first element matching the given selector in the frame."}),(0,n.jsx)(r.p,{children:"If the given function returns a promise, then this method will wait till the promise resolves."})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"addscripttag",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.addscripttag",children:"addScriptTag(options)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["Adds a ",(0,n.jsx)(r.code,{children:"<script>"})," tag into the page with the desired url or content."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"addstyletag",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.addstyletag",children:"addStyleTag(options)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["Adds a ",(0,n.jsx)(r.code,{children:"HTMLStyleElement"})," into the frame with the desired URL"]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"addstyletag",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.addstyletag",children:"addStyleTag(options)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["Adds a ",(0,n.jsx)(r.code,{children:"HTMLLinkElement"})," into the frame with the desired URL"]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"childframes",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.childframes",children:"childFrames()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"An array of child frames."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"click",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.click",children:"click(selector, options)"})})}),(0,n.jsx)("td",{}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(r.p,{children:["Clicks the first element found that matches ",(0,n.jsx)(r.code,{children:"selector"}),"."]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Remarks:"})}),(0,n.jsxs)(r.p,{children:["If ",(0,n.jsx)(r.code,{children:"click()"})," triggers a navigation event and there's a separate ",(0,n.jsx)(r.code,{children:"page.waitForNavigation()"})," promise to be resolved, you may end up with a race condition that yields unexpected results. The correct pattern for click and wait for navigation is the following:"]}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"const [response] = await Promise.all([\n  page.waitForNavigation(waitOptions),\n  frame.click(selector, clickOptions),\n]);\n"})})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"content",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.content",children:"content()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"The full HTML contents of the frame, including the DOCTYPE."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"evaluate",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.evaluate",children:"evaluate(pageFunction, args)"})})}),(0,n.jsx)("td",{}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(r.p,{children:["Behaves identically to ",(0,n.jsx)(r.a,{href:"/api/puppeteer.page.evaluate",children:"Page.evaluate()"})," except it's run within the context of this frame."]}),(0,n.jsxs)(r.p,{children:["See ",(0,n.jsx)(r.a,{href:"/api/puppeteer.page.evaluate",children:"Page.evaluate()"})," for details."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"evaluatehandle",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.evaluatehandle",children:"evaluateHandle(pageFunction, args)"})})}),(0,n.jsx)("td",{}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(r.p,{children:["Behaves identically to ",(0,n.jsx)(r.a,{href:"/api/puppeteer.page.evaluatehandle",children:"Page.evaluateHandle()"})," except it's run within the context of this frame."]}),(0,n.jsxs)(r.p,{children:["See ",(0,n.jsx)(r.a,{href:"/api/puppeteer.page.evaluatehandle",children:"Page.evaluateHandle()"})," for details."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"focus",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.focus",children:"focus(selector)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["Focuses the first element that matches the ",(0,n.jsx)(r.code,{children:"selector"}),"."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"frameelement",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.frameelement",children:"frameElement()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"goto",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.goto",children:"goto(url, options)"})})}),(0,n.jsx)("td",{}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(r.p,{children:["Navigates the frame or page to the given ",(0,n.jsx)(r.code,{children:"url"}),"."]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Remarks:"})}),(0,n.jsxs)(r.p,{children:["Navigation to ",(0,n.jsx)(r.code,{children:"about:blank"})," or navigation to the same URL with a different hash will succeed and return ",(0,n.jsx)(r.code,{children:"null"}),"."]}),(0,n.jsx)(r.admonition,{type:"warning",children:(0,n.jsxs)(r.p,{children:["Headless shell mode doesn't support navigation to a PDF document. See the ",(0,n.jsx)(r.a,{href:"https://crbug.com/761295",children:"upstream issue"}),"."]})}),(0,n.jsxs)(r.p,{children:['In headless shell, this method will not throw an error when any valid HTTP status code is returned by the remote server, including 404 "Not Found" and 500 "Internal Server Error". The status code for such responses can be retrieved by calling ',(0,n.jsx)(r.a,{href:"/api/puppeteer.httpresponse.status",children:"HTTPResponse.status()"}),"."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"hover",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.hover",children:"hover(selector)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["Hovers the pointer over the center of the first element that matches the ",(0,n.jsx)(r.code,{children:"selector"}),"."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"isdetached",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.isdetached",children:"isDetached()"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"deprecated"})})}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(r.p,{children:["Is",(0,n.jsx)(r.code,{children:"true"})," if the frame has been detached. Otherwise, ",(0,n.jsx)(r.code,{children:"false"}),"."]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Deprecated:"})}),(0,n.jsxs)(r.p,{children:["Use the ",(0,n.jsx)(r.code,{children:"detached"})," getter."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"locator",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.locator",children:"locator(selector)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["Creates a locator for the provided selector. See ",(0,n.jsx)(r.a,{href:"/api/puppeteer.locator",children:"Locator"})," for details and supported actions."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"locator",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.locator",children:"locator(func)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["Creates a locator for the provided function. See ",(0,n.jsx)(r.a,{href:"/api/puppeteer.locator",children:"Locator"})," for details and supported actions."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"name",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.name",children:"name()"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"deprecated"})})}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(r.p,{children:["The frame's ",(0,n.jsx)(r.code,{children:"name"})," attribute as specified in the tag."]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Deprecated:"})}),(0,n.jsx)(r.p,{children:"Use"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"const element = await frame.frameElement();\nconst nameOrId = await element.evaluate(frame => frame.name ?? frame.id);\n"})}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Remarks:"})}),(0,n.jsx)(r.p,{children:"This value is calculated once when the frame is created, and will not update if the attribute is changed later."})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"page",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.page",children:"page()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"The page associated with the frame."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"parentframe",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.parentframe",children:"parentFrame()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["The parent frame, if any. Detached and main frames return ",(0,n.jsx)(r.code,{children:"null"}),"."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"select",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.select",children:"select(selector, values)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["Selects a set of value on the first ",(0,n.jsx)(r.code,{children:"<select>"})," element that matches the ",(0,n.jsx)(r.code,{children:"selector"}),"."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"setcontent",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.setcontent",children:"setContent(html, options)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Set the content of the frame."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"tap",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.tap",children:"tap(selector)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["Taps the first element that matches the ",(0,n.jsx)(r.code,{children:"selector"}),"."]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"title",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.title",children:"title()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"The frame's title."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"type",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.type",children:"type(selector, text, options)"})})}),(0,n.jsx)("td",{}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(r.p,{children:["Sends a ",(0,n.jsx)(r.code,{children:"keydown"}),", ",(0,n.jsx)(r.code,{children:"keypress"}),"/",(0,n.jsx)(r.code,{children:"input"}),", and ",(0,n.jsx)(r.code,{children:"keyup"})," event for each character in the text."]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Remarks:"})}),(0,n.jsxs)(r.p,{children:["To press a special key, like ",(0,n.jsx)(r.code,{children:"Control"})," or ",(0,n.jsx)(r.code,{children:"ArrowDown"}),", use ",(0,n.jsx)(r.a,{href:"/api/puppeteer.keyboard.press",children:"Keyboard.press()"}),"."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"url",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.url",children:"url()"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"The frame's URL."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"waitforfunction",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.waitforfunction",children:"waitForFunction(pageFunction, options, args)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"waitfornavigation",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.waitfornavigation",children:"waitForNavigation(options)"})})}),(0,n.jsx)("td",{}),(0,n.jsxs)("td",{children:[(0,n.jsx)(r.p,{children:"Waits for the frame to navigate. It is useful for when you run code which will indirectly cause the frame to navigate."}),(0,n.jsxs)(r.p,{children:["Usage of the ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API",children:"History API"})," to change the URL is considered a navigation."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"waitforselector",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.waitforselector",children:"waitForSelector(selector, options)"})})}),(0,n.jsx)("td",{}),(0,n.jsxs)("td",{children:[(0,n.jsx)(r.p,{children:"Waits for an element matching the given selector to appear in the frame."}),(0,n.jsx)(r.p,{children:"This method works across navigations."})]})]})]})]})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},74848:(e,r,s)=>{e.exports=s(29698)}}]);