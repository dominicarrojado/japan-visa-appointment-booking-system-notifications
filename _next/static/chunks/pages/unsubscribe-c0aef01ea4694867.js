(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[785],{1327:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/unsubscribe",function(){return n(4152)}])},923:function(e,t,n){"use strict";n.d(t,{Wu:function(){return i},ZP:function(){return u},Ix:function(){return c}});var r,i,s=n(5893);n(7294);var o=n(4184),a=n.n(o);function c(e,t){return a()("inline-flex justify-center w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm select-none","focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",{"bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600":e===i.PRIMARY,"border border-gray-300  bg-white text-gray-900 hover:bg-gray-200 focus-visible:outline-black":e===i.SECONDARY,"opacity-60 pointer-events-none":t})}function u(e){let{className:t,children:n,disabled:r,type:o="button",variant:u=i.PRIMARY,...l}=e;return(0,s.jsx)("button",{...l,type:o,disabled:r,className:a()(t,c(u,r)),children:n})}(r=i||(i={})).PRIMARY="primary",r.SECONDARY="secondary"},4044:function(e,t,n){"use strict";var r=n(5893),i=n(7294),s=n(4184),o=n.n(s),a=n(923);let c=(0,i.forwardRef)((e,t)=>{let{target:n,rel:i,className:s,children:c,variant:u=a.Wu.PRIMARY,...l}=e;return(0,r.jsx)("a",{...l,ref:t,className:o()(s,(0,a.Ix)(u)),children:c})});c.displayName="ButtonLink",t.Z=c},6166:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893);n(7294);var i=n(4184),s=n.n(i);function o(e){return(0,r.jsxs)("svg",{...e,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,r.jsx)("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4",opacity:"0.25"}),(0,r.jsx)("path",{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",opacity:"0.75"})]})}function a(){return(0,r.jsx)(o,{className:s()("animate-spin -ml-1 mr-3 h-5 w-5 text-white"),"aria-label":"Loading"})}},846:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893);n(7294);var i=n(4184),s=n.n(i);function o(e){let{className:t,children:n,...i}=e;return(0,r.jsx)("form",{...i,className:s()(t,"mx-auto shadow-xl border border-gray-300 rounded-lg max-w-xl bg-white p-6"),children:n})}},7819:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893);function i(e){let{children:t}=e;return(0,r.jsx)("div",{className:"flex flex-col gap-4 text-gray-700",children:t})}n(7294)},4837:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893);function i(e){let{children:t}=e;return(0,r.jsx)("p",{className:"text-sm text-red-500",children:t})}n(7294)},6220:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5893);n(7294);var i=n(4184),s=n.n(i);function o(e){let{id:t,disabled:n,...i}=e;return(0,r.jsx)("div",{className:"grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2",children:(0,r.jsxs)("div",{className:"sm:col-span-2",children:[(0,r.jsx)("label",{htmlFor:t,className:"block text-sm font-semibold leading-6 text-gray-900",children:i.label}),(0,r.jsx)("div",{className:"mt-2.5",children:(0,r.jsx)("input",{...i,id:t,disabled:n,className:s()("block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400","focus:ring-2 focus:ring-inset focus:ring-indigo-600","sm:text-sm sm:leading-6",n?"bg-gray-100":"bg-white")})})]})})}},5630:function(e,t,n){"use strict";n.d(t,{pg:function(){return o},p_:function(){return c},tL:function(){return a}});var r=n(7294),i=n(6683),s=n(4696);function o(){let[e,t]=(0,r.useState)(i.M.DEFAULT),o=async e=>{try{t(i.M.LOADING);let r=(await n.e(856).then(n.bind(n,2856))).default;return await r.post("".concat(s.T5).concat(i.N$.SUBSCRIPTION_REQUESTS),{contact:e,contactMode:"email",topics:["japan-visa"]}),t(i.M.SUCCESS),!0}catch(e){return t(i.M.ERROR),!1}};return[e,o]}function a(){let[e,t]=(0,r.useState)(i.M.DEFAULT),o=async()=>{try{let e=function(e){let{searchParams:t}=new URL(window.location.href);return t.get("id")}(0);if(!e)return t(i.M.NOT_FOUND);t(i.M.LOADING);let r=(await n.e(856).then(n.bind(n,2856))).default,o="".concat(s.T5).concat(i.N$.SUBSCRIPTION_REQUEST_VERIFY);o=o.replace(":id",e),await r.post(o),t(i.M.SUCCESS)}catch(e){e.response&&404===e.response.status?t(i.M.NOT_FOUND):t(i.M.ERROR)}};return[e,o]}function c(){let[e,t]=(0,r.useState)(i.M.DEFAULT),o=async e=>{try{t(i.M.LOADING);let r=(await n.e(856).then(n.bind(n,2856))).default,o="".concat(s.T5).concat(i.N$.SUBSCRIPTION);return o=(o=o.replace(":contact-mode","email")).replace(":topic","japan-visa"),o="".concat(o,"?email=").concat(encodeURIComponent(e)),await r.delete(o),t(i.M.SUCCESS),!0}catch(e){return t(i.M.ERROR),!1}};return[e,o]}},6683:function(e,t,n){"use strict";var r,i,s,o,a,c,u,l;n.d(t,{AW:function(){return r},M:function(){return a},N$:function(){return o},RU:function(){return s}}),(c=r||(r={})).HOME="/",c.SUBSCRIBE="/subscribe",c.UNSUBSCRIBE="/unsubscribe",(i||(i={})).HOME="https://dominicarrojado.com",(s||(s={})).PERSONAL_PAYPAL="https://www.paypal.com/paypalme/DominicArrojado",(u=o||(o={})).SUBSCRIPTION_REQUESTS="/subscription-requests",u.SUBSCRIPTION_REQUEST_VERIFY="/subscription-requests/:id/verify",u.SUBSCRIPTION="/subscriptions/contact-mode/:contact-mode/topics/:topic",(l=a||(a={})).DEFAULT="DEFAULT",l.LOADING="LOADING",l.SUCCESS="SUCCESS",l.NOT_FOUND="NOT_FOUND",l.ERROR="ERROR"},4152:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(5893),i=n(1664),s=n.n(i);n(7294);var o=n(5630),a=n(6683),c=n(923),u=n(4044),l=n(6166),d=n(846),f=n(7819),m=n(4837),p=n(6220);function h(){let[e,t]=(0,o.p_)(),n=e===a.M.LOADING,i=async e=>{e.preventDefault();let n=e.currentTarget;t(n.email.value)};return(0,r.jsx)(d.Z,{onSubmit:i,children:(0,r.jsx)(f.Z,{children:e!==a.M.SUCCESS?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.Z,{label:"Email Address",type:"email",name:"email",id:"email",autoComplete:"email",disabled:n}),(0,r.jsx)("p",{className:"text-sm",children:"By submitting this form, you will no longer receive email notifications when a slot becomes available."}),e===a.M.ERROR&&(0,r.jsx)(m.Z,{children:"Oops! Something went wrong. Please try again."}),(0,r.jsxs)(c.ZP,{type:"submit",disabled:n,children:[n&&(0,r.jsx)(l.Z,{}),"Proceed"]}),(0,r.jsx)(s(),{href:a.AW.HOME,passHref:!0,legacyBehavior:!0,children:(0,r.jsx)(u.Z,{variant:c.Wu.SECONDARY,children:"Go Home"})})]}):(0,r.jsxs)("p",{children:["You have been successfully unsubscribed from the Embassy of Japan in Singapore Visa Appointment Notification Service for Visa (Tourism) applications. I'm sorry to see you go, but I appreciate your time and interest in this service. If you change your mind and would like to"," ",(0,r.jsx)(s(),{href:a.AW.HOME,className:"underline hover:text-black",children:"resubscribe"})," ","in the future, please don't hesitate to do so. Thank you!"]})})})}function b(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"To unsubscribe from this service, please enter your email in the form below and confirm. Thank you for your interest in my content."}),(0,r.jsx)(h,{})]})}}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=1327)}),_N_E=e.O()}]);