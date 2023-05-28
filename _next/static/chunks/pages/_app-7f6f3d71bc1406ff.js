(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4184:function(e,t){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var o={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===r){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var l in n)o.call(n,l)&&n[l]&&e.push(l)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0!==(n=(function(){return a}).apply(t,[]))&&(e.exports=n)}()},2962:function(e,t,n){"use strict";n.d(t,{PB:function(){return u},lX:function(){return h}});var o=n(7294),a=n(9008),r=n.n(a);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var l=["keyOverride"],p={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},s=function(e,t,n){void 0===t&&(t=[]);var a=void 0===n?{}:n,r=a.defaultWidth,i=a.defaultHeight;return t.reduce(function(t,n,a){return t.push(o.createElement("meta",{key:"og:"+e+":0"+a,property:"og:"+e,content:n.url})),n.alt&&t.push(o.createElement("meta",{key:"og:"+e+":alt0"+a,property:"og:"+e+":alt",content:n.alt})),n.secureUrl&&t.push(o.createElement("meta",{key:"og:"+e+":secure_url0"+a,property:"og:"+e+":secure_url",content:n.secureUrl.toString()})),n.type&&t.push(o.createElement("meta",{key:"og:"+e+":type0"+a,property:"og:"+e+":type",content:n.type.toString()})),n.width?t.push(o.createElement("meta",{key:"og:"+e+":width0"+a,property:"og:"+e+":width",content:n.width.toString()})):r&&t.push(o.createElement("meta",{key:"og:"+e+":width0"+a,property:"og:"+e+":width",content:r.toString()})),n.height?t.push(o.createElement("meta",{key:"og:"+e+":height"+a,property:"og:"+e+":height",content:n.height.toString()})):i&&t.push(o.createElement("meta",{key:"og:"+e+":height"+a,property:"og:"+e+":height",content:i.toString()})),t},[])},c=function(e){var t,n,a,r,c,d=[];e.titleTemplate&&(p.templateTitle=e.titleTemplate);var h="";e.title?(h=e.title,p.templateTitle&&(h=p.templateTitle.replace(/%s/g,function(){return h}))):e.defaultTitle&&(h=e.defaultTitle),h&&d.push(o.createElement("title",{key:"title"},h));var u=e.noindex||p.noindex||e.dangerouslySetAllPagesToNoIndex,m=e.nofollow||p.nofollow||e.dangerouslySetAllPagesToNoFollow,f="";if(e.robotsProps){var g=e.robotsProps,y=g.nosnippet,v=g.maxSnippet,G=g.maxImagePreview,b=g.maxVideoPreview,k=g.noarchive,w=g.noimageindex,E=g.notranslate,x=g.unavailableAfter;f=(y?",nosnippet":"")+(v?",max-snippet:"+v:"")+(G?",max-image-preview:"+G:"")+(k?",noarchive":"")+(x?",unavailable_after:"+x:"")+(w?",noimageindex":"")+(b?",max-video-preview:"+b:"")+(E?",notranslate":"")}if(u||m?(e.dangerouslySetAllPagesToNoIndex&&(p.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(p.nofollow=!0),d.push(o.createElement("meta",{key:"robots",name:"robots",content:(u?"noindex":"index")+","+(m?"nofollow":"follow")+f}))):d.push(o.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+f})),e.description&&d.push(o.createElement("meta",{key:"description",name:"description",content:e.description})),e.themeColor&&d.push(o.createElement("meta",{key:"theme-color",name:"theme-color",content:e.themeColor})),e.mobileAlternate&&d.push(o.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach(function(e){d.push(o.createElement("link",{rel:"alternate",key:"languageAlternate-"+e.hrefLang,hrefLang:e.hrefLang,href:e.href}))}),e.twitter&&(e.twitter.cardType&&d.push(o.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&d.push(o.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&d.push(o.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&d.push(o.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(null!=(t=e.openGraph)&&t.title||h)&&d.push(o.createElement("meta",{key:"og:title",property:"og:title",content:(null==(r=e.openGraph)?void 0:r.title)||h})),(null!=(n=e.openGraph)&&n.description||e.description)&&d.push(o.createElement("meta",{key:"og:description",property:"og:description",content:(null==(c=e.openGraph)?void 0:c.description)||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&d.push(o.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){var T=e.openGraph.type.toLowerCase();d.push(o.createElement("meta",{key:"og:type",property:"og:type",content:T})),"profile"===T&&e.openGraph.profile?(e.openGraph.profile.firstName&&d.push(o.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&d.push(o.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&d.push(o.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&d.push(o.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===T&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(function(e,t){d.push(o.createElement("meta",{key:"book:author:0"+t,property:"book:author",content:e}))}),e.openGraph.book.isbn&&d.push(o.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&d.push(o.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(function(e,t){d.push(o.createElement("meta",{key:"book:tag:0"+t,property:"book:tag",content:e}))})):"article"===T&&e.openGraph.article?(e.openGraph.article.publishedTime&&d.push(o.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&d.push(o.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&d.push(o.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(function(e,t){d.push(o.createElement("meta",{key:"article:author:0"+t,property:"article:author",content:e}))}),e.openGraph.article.section&&d.push(o.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(function(e,t){d.push(o.createElement("meta",{key:"article:tag:0"+t,property:"article:tag",content:e}))})):("video.movie"===T||"video.episode"===T||"video.tv_show"===T||"video.other"===T)&&e.openGraph.video&&(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(function(e,t){e.profile&&d.push(o.createElement("meta",{key:"video:actor:0"+t,property:"video:actor",content:e.profile})),e.role&&d.push(o.createElement("meta",{key:"video:actor:role:0"+t,property:"video:actor:role",content:e.role}))}),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(function(e,t){d.push(o.createElement("meta",{key:"video:director:0"+t,property:"video:director",content:e}))}),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(function(e,t){d.push(o.createElement("meta",{key:"video:writer:0"+t,property:"video:writer",content:e}))}),e.openGraph.video.duration&&d.push(o.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&d.push(o.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(function(e,t){d.push(o.createElement("meta",{key:"video:tag:0"+t,property:"video:tag",content:e}))}),e.openGraph.video.series&&d.push(o.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(p.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(p.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&d.push.apply(d,s("image",e.openGraph.images,{defaultWidth:p.defaultOpenGraphImageWidth,defaultHeight:p.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(p.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(p.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&d.push.apply(d,s("video",e.openGraph.videos,{defaultWidth:p.defaultOpenGraphVideoWidth,defaultHeight:p.defaultOpenGraphVideoHeight})),e.openGraph.audio&&d.push.apply(d,s("audio",e.openGraph.audio)),e.openGraph.locale&&d.push(o.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),(e.openGraph.siteName||e.openGraph.site_name)&&d.push(o.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.siteName||e.openGraph.site_name}))}return e.canonical&&d.push(o.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach(function(e){var t,n,a=e.keyOverride,r=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,l);d.push(o.createElement("meta",i({key:"meta:"+(null!=(t=null!=(n=null!=a?a:r.name)?n:r.property)?t:r.httpEquiv)},r)))}),null!=(a=e.additionalLinkTags)&&a.length&&e.additionalLinkTags.forEach(function(e){var t;d.push(o.createElement("link",i({key:"link"+(null!=(t=e.keyOverride)?t:e.href)+e.rel},e)))}),d},d=function(e){return o.createElement(r(),null,c(e))},h=function(e){var t=e.title,n=e.titleTemplate,a=e.defaultTitle,r=e.themeColor,i=e.dangerouslySetAllPagesToNoIndex,l=e.dangerouslySetAllPagesToNoFollow,p=e.description,s=e.canonical,c=e.facebook,h=e.openGraph,u=e.additionalMetaTags,m=e.twitter,f=e.defaultOpenGraphImageWidth,g=e.defaultOpenGraphImageHeight,y=e.defaultOpenGraphVideoWidth,v=e.defaultOpenGraphVideoHeight,G=e.mobileAlternate,b=e.languageAlternates,k=e.additionalLinkTags,w=e.robotsProps;return o.createElement(d,{title:t,titleTemplate:n,defaultTitle:a,themeColor:r,dangerouslySetAllPagesToNoIndex:void 0!==i&&i,dangerouslySetAllPagesToNoFollow:void 0!==l&&l,description:p,canonical:s,facebook:c,openGraph:h,additionalMetaTags:u,twitter:m,defaultOpenGraphImageWidth:f,defaultOpenGraphImageHeight:g,defaultOpenGraphVideoWidth:y,defaultOpenGraphVideoHeight:v,mobileAlternate:G,languageAlternates:b,additionalLinkTags:k,robotsProps:w})},u=function(e){var t=e.title,n=e.themeColor,a=e.noindex,r=void 0!==a&&a,i=e.nofollow,l=e.robotsProps,p=e.description,s=e.canonical,h=e.openGraph,u=e.facebook,m=e.twitter,f=e.additionalMetaTags,g=e.titleTemplate,y=e.defaultTitle,v=e.mobileAlternate,G=e.languageAlternates,b=e.additionalLinkTags,k=e.useAppDir;return o.createElement(o.Fragment,null,void 0!==k&&k?c({title:t,themeColor:n,noindex:r,nofollow:i,robotsProps:l,description:p,canonical:s,facebook:u,openGraph:h,additionalMetaTags:f,twitter:m,titleTemplate:g,defaultTitle:y,mobileAlternate:v,languageAlternates:G,additionalLinkTags:b}):o.createElement(d,{title:t,themeColor:n,noindex:r,nofollow:i,robotsProps:l,description:p,canonical:s,facebook:u,openGraph:h,additionalMetaTags:f,twitter:m,titleTemplate:g,defaultTitle:y,mobileAlternate:v,languageAlternates:G,additionalLinkTags:b}))};RegExp("["+Object.keys(Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})).join("")+"]","g")},5492:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1157)}])},4696:function(e,t,n){"use strict";n.d(t,{Lk:function(){return a},Pb:function(){return l},T5:function(){return c},VG:function(){return d},Z9:function(){return r},c0:function(){return p},cG:function(){return s},fB:function(){return i},px:function(){return o}});let o="Dominic Arrojado",a="Embassy of Japan in Singapore Visa Appointment Notification Service for Visa (Tourism) applications",r="Dominic Arrojado",i="".concat(a," | ").concat(o),l="My web application provides a convenient and cost-effective solution for those looking to apply for a tourist visa to Japan through the Embassy of Japan in Singapore. With this service, you will receive timely notifications when a visa appointment slot becomes available, saving you time and money. Apply for your visa with ease and confidence knowing that you won't miss your chance to secure an appointment. Sign up today!",p="https://dominicarrojado.com",s="".concat(p).concat("/japan-visa-appointment-booking-system-notifications/"),c="https://api.dominicarrojado.com",d="ca-pub-3632473845121107"},9404:function(e,t,n){"use strict";function o(e){let{searchParams:t}=new URL(window.location.href);return t.get(e)}function a(){return"localhost"===window.location.hostname}n.d(t,{Q:function(){return o},Z:function(){return a}})},6683:function(e,t,n){"use strict";var o,a,r,i,l,p,s,c,d,h,u,m,f;n.d(t,{AW:function(){return o},M:function(){return l},N$:function(){return i},RU:function(){return r},bg:function(){return p},de:function(){return s},hx:function(){return c}}),(d=o||(o={})).HOME="/",d.SUBSCRIBE="/subscribe",d.UNSUBSCRIBE="/unsubscribe",(a||(a={})).HOME="https://dominicarrojado.com",(r||(r={})).PERSONAL_PAYPAL="https://www.paypal.com/paypalme/DominicArrojado",(h=i||(i={})).SUBSCRIPTION_REQUESTS="/subscription-requests",h.SUBSCRIPTION_REQUEST_VERIFY="/subscription-requests/:id/verify",h.SUBSCRIPTION="/subscriptions/contact-mode/:contact-mode/topics/:topic",(u=l||(l={})).DEFAULT="DEFAULT",u.LOADING="LOADING",u.SUCCESS="SUCCESS",u.NOT_FOUND="NOT_FOUND",u.ERROR="ERROR",(m=p||(p={})).SUBSCRIBE_FORM_SUBMIT="subscribe_form_submit",m.UNSUBSCRIBE_FORM_SUBMIT="unsubscribe_form_submit",(f=s||(s={})).PROJECT_HEADER="2299922139",f.PROJECT_FOOTER="3221836158",(c||(c={})).FLUID="fluid"},1157:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var o=n(5893),a=n(7294),r=n(4184),i=n.n(r),l=n(4696);function p(e){let{className:t}=e;return(0,o.jsxs)("footer",{className:i()(t,"text-center text-gray-400"),children:["Made with ❤️ by"," ",(0,o.jsx)("a",{href:l.c0,className:"hover:underline font-bold",children:l.Z9})]})}function s(e){let{children:t}=e;return(0,o.jsx)("div",{className:i()("mt-8 flex flex-col gap-8 text-base leading-7 text-gray-700"),children:t})}function c(e){let{children:t}=e;return(0,o.jsx)("h1",{className:i()("text-3xl font-bold tracking-tight text-gray-900","sm:text-4xl"),children:t})}function d(){return(0,o.jsxs)("svg",{className:"absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]","aria-hidden":"true",children:[(0,o.jsx)("defs",{children:(0,o.jsx)("pattern",{id:"e813992c-7d03-4cc4-a2bd-151760b470a0",width:"200",height:"200",x:"50%",y:"-1",patternUnits:"userSpaceOnUse",children:(0,o.jsx)("path",{d:"M100 200V.5M.5 .5H200",fill:"none"})})}),(0,o.jsx)("svg",{x:"50%",y:"-1",className:"overflow-visible fill-gray-50",children:(0,o.jsx)("path",{d:"M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z",strokeWidth:"0"})}),(0,o.jsx)("rect",{width:"100%",height:"100%",strokeWidth:"0",fill:"url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"})]})}var h=n(9404),u=n(4480),m=n.n(u),f=a.memo(function(e){let{adSlot:t,adFormat:n,className:r}=e;return(0,a.useEffect)(()=>{!function(){try{if((0,h.Z)())return;window.adsbygoogle=Array.isArray(window.adsbygoogle)?window.adsbygoogle:[],window.adsbygoogle.push({})}catch(e){console.error("Error on displaying Google AdSense unit",e)}}()},[]),(0,o.jsx)("div",{className:r,children:(0,o.jsx)("ins",{className:i()("adsbygoogle block max-w-[1200px] mx-auto",m().adunit),"data-ad-client":l.VG,"data-ad-slot":t,"data-ad-format":n,"data-full-width-responsive":"true","data-testid":"ad-unit"})})}),g=n(6683);function y(e){let{children:t}=e;return(0,o.jsxs)("div",{className:"relative isolate bg-white py-12 px-6",children:[(0,o.jsx)("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:(0,o.jsx)(d,{})}),(0,o.jsx)(f,{adSlot:g.de.PROJECT_HEADER,adFormat:g.hx.FLUID}),(0,o.jsxs)("main",{className:"mx-auto max-w-xl",children:[(0,o.jsx)(c,{children:"Embassy of Japan in Singapore Visa Appointment Notification Service for Visa (Tourism) applications"}),(0,o.jsx)(s,{children:t})]}),(0,o.jsx)(p,{className:"mt-10"}),(0,o.jsx)(f,{adSlot:g.de.PROJECT_FOOTER,adFormat:g.hx.FLUID})]})}var v=n(9008),G=n.n(v),b=n(2962);function k(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(G(),{children:[(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("meta",{name:"theme-color",content:"#004151"}),(0,o.jsx)("link",{rel:"icon",href:"".concat(l.c0,"/favicon.ico")}),(0,o.jsx)("link",{rel:"manifest",href:"".concat(l.c0,"/manifest.json")})]}),(0,o.jsx)(b.lX,{title:l.fB,description:l.Pb,canonical:l.cG,openGraph:{url:l.cG,title:l.fB,description:l.Pb,type:"website",site_name:l.px}})]})}var w=n(4298),E=n.n(w);function x(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(E(),{id:"gtm",dangerouslySetInnerHTML:{__html:"\n              if (window.location.hostname !== 'localhost') {\n                (function (w, d, s, l, i) {\n                  w[l] = w[l] || [];\n                  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });\n                  var f = d.getElementsByTagName(s)[0],\n                    j = d.createElement(s),\n                    dl = l != 'dataLayer' ? '&l=' + l : '';\n                  j.async = true;\n                  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;\n                  f.parentNode.insertBefore(j, f);\n                })(window, document, 'script', 'dataLayer', 'GTM-TSMLTPT');\n              }\n            "}}),(0,o.jsx)("noscript",{dangerouslySetInnerHTML:{__html:'\n            <iframe\n              src="https://www.googletagmanager.com/ns.html?id=GTM-TSMLTPT"\n              height="0"\n              width="0"\n              style="display: none; visibility: hidden"\n            ></iframe>\n          '}})]})}var T=a.memo(function(){return(0,o.jsx)(E(),{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=".concat(l.VG),crossOrigin:"anonymous"})});function O(e){let{Component:t,pageProps:n}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(k,{}),(0,o.jsx)(x,{}),(0,o.jsx)(T,{}),(0,o.jsx)(y,{children:(0,o.jsx)(t,{...n})})]})}n(3814)},3814:function(){},4480:function(e){e.exports={adunit:"adUnit_adunit__Qsm4B"}},9008:function(e,t,n){e.exports=n(2636)},4298:function(e,t,n){e.exports=n(5442)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(5492),t(6885)}),_N_E=e.O()}]);