(()=>{var e={};e.id=243,e.ids=[243],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},9889:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>u,pages:()=>l,routeModule:()=>p,tree:()=>c});var s=t(260),n=t(8203),i=t(5155),o=t.n(i),a=t(7292),d={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>a[e]);t.d(r,d);let c=["",{children:["customers",{children:["check",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,6073)),"C:\\Users\\sokas\\Documents\\Tech0\\Step3_practical2\\deploy_frontend\\src\\app\\customers\\check\\page.jsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,8180)),"C:\\Users\\sokas\\Documents\\Tech0\\Step3_practical2\\deploy_frontend\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["C:\\Users\\sokas\\Documents\\Tech0\\Step3_practical2\\deploy_frontend\\src\\app\\customers\\check\\page.jsx"],u={require:t,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/customers/check/page",pathname:"/customers/check",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},8088:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,3219,23)),Promise.resolve().then(t.t.bind(t,4863,23)),Promise.resolve().then(t.t.bind(t,5155,23)),Promise.resolve().then(t.t.bind(t,802,23)),Promise.resolve().then(t.t.bind(t,9350,23)),Promise.resolve().then(t.t.bind(t,8530,23)),Promise.resolve().then(t.t.bind(t,8921,23))},4936:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,6959,23)),Promise.resolve().then(t.t.bind(t,3875,23)),Promise.resolve().then(t.t.bind(t,8903,23)),Promise.resolve().then(t.t.bind(t,7174,23)),Promise.resolve().then(t.t.bind(t,4178,23)),Promise.resolve().then(t.t.bind(t,7190,23)),Promise.resolve().then(t.t.bind(t,1365,23))},2345:()=>{},2617:()=>{},6487:()=>{},8335:()=>{},6073:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a,dynamic:()=>i});var s=t(2740);function n({customer_id:e,customer_name:r,age:t,gender:n}){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"m-4 card bordered bg-blue-200 duration-200 hover:border-r-red",children:(0,s.jsxs)("div",{className:"card-body",children:[(0,s.jsxs)("h2",{className:"card-title",children:[r,"さん"]}),(0,s.jsxs)("p",{children:["Customer ID: ",e]}),(0,s.jsxs)("p",{children:["Age: ",t]}),(0,s.jsxs)("p",{children:["Gender: ",n]})]})})})}let i="force-dynamic";async function o(e){let r=await fetch(`https://tech0-gen-9-step3-1-py-43.azurewebsites.net//customers?customer_id=${e}`);if(!r.ok)throw Error("Failed to fetch customer");return r.json()}async function a({query:e}){let{id:r}=e,t=await o(r);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"alert alert-success",children:"更新しました"}),(0,s.jsx)("div",{className:"card bordered bg-white border-blue-200 border-2 max-w-sm m-4",children:(0,s.jsx)(n,{...t[0]})}),(0,s.jsx)("button",{className:"btn btn-outline btn-accent",children:(0,s.jsx)("a",{href:"/customers",children:"一覧に戻る"})})]})}},8180:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a,metadata:()=>o});var s=t(2740),n=t(5819),i=t.n(n);t(1135);let o={title:"Create Next App",description:"Generated by create next app"};function a({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:i().className,children:e})})}},440:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});var s=t(8077);let n=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},1135:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[638,81,77],()=>t(9889));module.exports=s})();