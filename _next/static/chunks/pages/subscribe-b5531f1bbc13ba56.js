(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[367],{6829:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/subscribe",function(){return t(7203)}])},923:function(e,n,t){"use strict";t.d(n,{Wu:function(){return r},ZP:function(){return u},Ix:function(){return a}});var i,r,o=t(5893);t(7294);var s=t(4184),c=t.n(s);function a(e,n){return c()("inline-flex justify-center w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm select-none","focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",{"bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600":e===r.PRIMARY,"border border-gray-300  bg-white text-gray-900 hover:bg-gray-200 focus-visible:outline-black":e===r.SECONDARY,"opacity-60 pointer-events-none":n})}function u(e){let{className:n,children:t,disabled:i,type:s="button",variant:u=r.PRIMARY,...l}=e;return(0,o.jsx)("button",{...l,type:s,disabled:i,className:c()(n,a(u,i)),children:t})}(i=r||(r={})).PRIMARY="primary",i.SECONDARY="secondary"},4044:function(e,n,t){"use strict";var i=t(5893),r=t(7294),o=t(4184),s=t.n(o),c=t(923);let a=(0,r.forwardRef)((e,n)=>{let{target:t,rel:r,className:o,children:a,variant:u=c.Wu.PRIMARY,...l}=e;return(0,i.jsx)("a",{...l,ref:n,className:s()(o,(0,c.Ix)(u)),children:a})});a.displayName="ButtonLink",n.Z=a},5630:function(e,n,t){"use strict";t.d(n,{pg:function(){return s},p_:function(){return a},tL:function(){return c}});var i=t(7294),r=t(6683),o=t(4696);function s(){let[e,n]=(0,i.useState)(r.M.DEFAULT),s=async e=>{try{n(r.M.LOADING);let i=(await t.e(856).then(t.bind(t,2856))).default;return await i.post("".concat(o.T5).concat(r.N$.SUBSCRIPTION_REQUESTS),{contact:e,contactMode:"email",topics:["japan-visa"]}),n(r.M.SUCCESS),!0}catch(e){return n(r.M.ERROR),!1}};return[e,s]}function c(){let[e,n]=(0,i.useState)(r.M.DEFAULT),s=async()=>{try{let e=function(e){let{searchParams:n}=new URL(window.location.href);return n.get("id")}(0);if(!e)return n(r.M.NOT_FOUND);n(r.M.LOADING);let i=(await t.e(856).then(t.bind(t,2856))).default,s="".concat(o.T5).concat(r.N$.SUBSCRIPTION_REQUEST_VERIFY);s=s.replace(":id",e),await i.post(s),n(r.M.SUCCESS)}catch(e){e.response&&404===e.response.status?n(r.M.NOT_FOUND):n(r.M.ERROR)}};return[e,s]}function a(){let[e,n]=(0,i.useState)(r.M.DEFAULT),s=async e=>{try{n(r.M.LOADING);let i=(await t.e(856).then(t.bind(t,2856))).default,s="".concat(o.T5).concat(r.N$.SUBSCRIPTION);return s=(s=s.replace(":contact-mode","email")).replace(":topic","japan-visa"),s="".concat(s,"?email=").concat(encodeURIComponent(e)),await i.delete(s),n(r.M.SUCCESS),!0}catch(e){return n(r.M.ERROR),!1}};return[e,s]}},6683:function(e,n,t){"use strict";var i,r,o,s,c,a,u,l;t.d(n,{AW:function(){return i},M:function(){return c},N$:function(){return s},RU:function(){return o}}),(a=i||(i={})).HOME="/",a.SUBSCRIBE="/subscribe",a.UNSUBSCRIBE="/unsubscribe",(r||(r={})).HOME="https://dominicarrojado.com",(o||(o={})).PERSONAL_PAYPAL="https://www.paypal.com/paypalme/DominicArrojado",(u=s||(s={})).SUBSCRIPTION_REQUESTS="/subscription-requests",u.SUBSCRIPTION_REQUEST_VERIFY="/subscription-requests/:id/verify",u.SUBSCRIPTION="/subscriptions/contact-mode/:contact-mode/topics/:topic",(l=c||(c={})).DEFAULT="DEFAULT",l.LOADING="LOADING",l.SUCCESS="SUCCESS",l.NOT_FOUND="NOT_FOUND",l.ERROR="ERROR"},7203:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var i=t(5893),r=t(1664),o=t.n(r),s=t(7294),c=t(2962),a=t(4044);function u(e){let{children:n}=e;return(0,i.jsx)("h2",{className:"text-lg leading-8 text-gray-900 font-semibold",children:n})}var l=t(5630),d=t(6683);function f(){let[e,n]=(0,l.tL)();return(0,s.useEffect)(()=>{n()},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.PB,{noindex:!0}),e===d.M.LOADING&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u,{children:"Verifying subscription..."}),(0,i.jsx)("p",{children:"Please wait while we verify your subscription. This process may take a few moments. Thank you for your patience and interest in this service."})]}),e===d.M.SUCCESS&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u,{children:"Subscription confirmed"}),(0,i.jsx)("p",{children:"You're now subscribed to the Embassy of Japan in Singapore Visa Appointment Notification Service for Visa (Tourism) applications. Get ready to receive updates when a slot becomes available."}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{href:d.AW.HOME,passHref:!0,legacyBehavior:!0,children:(0,i.jsx)(a.Z,{children:"Go Home"})})})]}),e===d.M.NOT_FOUND&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u,{children:"Token expired or not found"}),(0,i.jsx)("p",{children:"Your confirmation token has expired or cannot be found. If you have not confirmed your subscription yet, please resubscribe to receive updates on new slots."}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{href:d.AW.HOME,passHref:!0,legacyBehavior:!0,children:(0,i.jsx)(a.Z,{children:"Go Home"})})})]}),e===d.M.ERROR&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u,{children:"Something went wrong"}),(0,i.jsx)("p",{children:"Please try again later. If you continue to experience issues, please contact me and we'll do our best to assist you. Thank you for your patience and understanding."})]})]})}}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=6829)}),_N_E=e.O()}]);