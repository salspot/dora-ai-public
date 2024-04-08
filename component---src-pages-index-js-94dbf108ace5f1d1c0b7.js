"use strict";(self.webpackChunkdora_ai_landing=self.webpackChunkdora_ai_landing||[]).push([[293],{978:function(e,t,a){a.d(t,{G:function(){return _},L:function(){return p},M:function(){return N},P:function(){return w},S:function(){return z},_:function(){return i},a:function(){return l},b:function(){return d},c:function(){return c},g:function(){return m},h:function(){return o}});var n=a(6540),r=(a(5147),a(5556)),s=a.n(r);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t.indexOf(a=s[n])>=0||(r[a]=e[a]);return r}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,a,n,r){return void 0===r&&(r={}),l({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:l({},r,{opacity:t?1:0})})}function m(e,t,a,n,r,s,i,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const d=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const u=["children"],g=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=i(e,u);return n.createElement(n.Fragment,null,n.createElement(g,l({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],v=function(e){let{src:t,srcSet:a,loading:r,alt:s="",shouldLoad:o}=e,c=i(e,h);return n.createElement("img",l({},c,{decoding:"async",loading:r,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},E=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,s=i(e,f);const o=s.sizes||(null==t?void 0:t.sizes),c=n.createElement(v,l({},s,t,{sizes:o,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return n.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:o})})),c):c};var y;v.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},E.displayName="Picture",E.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const b=["fallback"],w=function(e){let{fallback:t}=e,a=i(e,b);return t?n.createElement(E,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",l({},a))};w.displayName="Placeholder",w.propTypes={fallback:r.string,sources:null==(y=E.propTypes)?void 0:y.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const N=function(e){return n.createElement(n.Fragment,null,n.createElement(E,l({},e)),n.createElement("noscript",null,n.createElement(E,l({},e,{shouldLoad:!0}))))};N.displayName="MainImage",N.propTypes=E.propTypes;const A=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),l=3;l<n;l++)r[l-3]=arguments[l];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},I={image:s().object.isRequired,alt:A},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],x=["style","className"],T=new Set;let C,L;const S=function(e){let{as:t="div",image:r,style:s,backgroundColor:c,className:d,class:m,onStartLoad:u,onLoad:g,onError:p}=e,h=i(e,k);const{width:f,height:v,layout:E}=r,y=function(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}(f,v,E),{style:b,className:w}=y,N=i(y,x),A=(0,n.useRef)(),I=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);m&&(d=m);const S=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(E,f,v);return(0,n.useEffect)((()=>{C||(C=Promise.all([a.e(593),a.e(896)]).then(a.bind(a,7896)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return L=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=A.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==u||u({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(I);if(L&&T.has(I))return;let t,n;return C.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;A.current&&(A.current.innerHTML=a(l({isLoading:!0,isLoaded:T.has(I),image:r},h)),T.has(I)||(t=requestAnimationFrame((()=>{A.current&&(n=i(A.current,I,T,s,u,g,p))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{T.has(I)&&L&&(A.current.innerHTML=L(l({isLoading:T.has(I),isLoaded:T.has(I),image:r},h)),null==u||u({wasCached:!0}),null==g||g({wasCached:!0}))}),[r]),(0,n.createElement)(t,l({},N,{style:l({},b,s,{backgroundColor:c}),className:w+(d?" "+d:""),ref:A,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},_=(0,n.memo)((function(e){return e.image?(0,n.createElement)(S,e):null}));_.propTypes=I,_.displayName="GatsbyImage";const q=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],M=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},O=new Set(["fixed","fullWidth","constrained"]),W={src:s().string.isRequired,alt:A,width:M,height:M,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!O.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},z=(R=_,function(e){let{src:t,__imageData:a,__error:r}=e,s=i(e,q);return r&&console.warn(r),a?n.createElement(R,l({image:a},s)):(console.warn("Image not loaded",t),null)});var R;z.displayName="StaticImage",z.propTypes=W},5147:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,n=!1;for(let r=0;r<e.length;r++){const s=e[r];t&&/[a-zA-Z]/.test(s)&&s.toUpperCase()===s?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,n=a,a=!0,r++):a&&n&&/[a-zA-Z]/.test(s)&&s.toLowerCase()===s?(e=e.slice(0,r-1)+"-"+e.slice(r-1),n=a,a=!1,t=!0):(t=s.toLowerCase()===s&&s.toUpperCase()!==s,n=a,a=s.toUpperCase()===s&&s.toLowerCase()!==s)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},4901:function(e,t,a){var n=a(6540);t.A=e=>{let{message:t,url:a,ctaMessage:r}=e;return n.createElement("section",{className:"splashstrip color"},n.createElement("div",{className:"bg-pattern"}),n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-md-8"},n.createElement("div",{className:"message"},t)),n.createElement("div",{className:"col-md-4"},n.createElement("div",{className:"button-group"},n.createElement("a",{href:a},n.createElement("button",{type:"button",className:"btn action-btn","aria-label":"Lets get started"},n.createElement("span",{className:"btn-title ng-binding"},r))))))))}},5795:function(e,t,a){var n=a(6540);t.A=e=>{let{children:t}=e;return n.createElement("div",{className:"services"},n.createElement("section",{className:"approach "},n.createElement("div",{className:"study-cases"},n.createElement("div",{className:"title-block"},n.createElement("h5",null,"case studies")),t)))}},8002:function(e,t,a){a.d(t,{z:function(){return l}});var n=a(6540),r=a(2327),s=(a(8007),a(978));const l={LEFT:"left",RIGHT:"right"};t.A=e=>{let{style:t=l.LEFT,content:a,elementIndex:i}=e;const{title:o,description:c,accordionList:d,slug:m,imgSrc:u,imgAlt:g}=a,p=(0,s.c)(u);console.log("caseStudyImage",u,p);const h={right:["col-lg-4 order-lg-last top","col-lg-8"],left:["col-lg-4 top","col-lg-8"]};if(!a.title)return"";const f=d&&d.map(((e,t)=>n.createElement(r.A.Item,{key:(null==i?void 0:i.toString())+t.toString(),eventKey:(null==i?void 0:i.toString())+t.toString()},n.createElement(r.A.Header,null,e.title),n.createElement(r.A.Body,null,e.body))));return n.createElement("article",{className:"row discovery"},n.createElement("div",{className:h[t][0]},n.createElement("div",{className:"block-text "+t},n.createElement("h3",null,n.createElement("small",null," "),o),n.createElement("p",null,c),n.createElement(r.A,{flush:!0,alwaysOpen:!0},f))),n.createElement("div",{className:h[t][1]},n.createElement("div",{className:"block-image"},n.createElement("div",{className:"bg-overlay"}),n.createElement("img",{className:"case-study-image",alt:g,src:u}))))}},864:function(e,t){t.A={aiTranslator:{title:"Custom AI Content Translator",description:"Our client, a leader in the travel services industry, needed  a solution  for translating content across more than a hundred  websites in different languages. They were having high costs using traditional 3rd party translation services",slug:"/case-studies/custom-ai-content-translator",imgSrc:"/ai-translator.jpg",imgAlt:"Dora ai Translator",accordionList:[{title:"Custom format translation support",body:"Our AI translator was designed to support custom formats, ensuring that the translated content respected the required structure and layout."},{title:"Specific language tone and style",body:"We customised the AI translations to use the same tone and style as the company's communication, to ensure that the content resonates with the target audience."},{title:"Reduced translation costs",body:"The AI translator significantly reduced the costs associated with manual translation services, providing a cost-effective solution for translating content in multiple languages."}]},supportAgent:{title:"Support agent chat for specialized services",description:"Our client, required a chat solution that could support their clients in providing personalized assistance to customers.",slug:"/case-studies/support-chat-agent",imgSrc:"/ai-support-agent.jpg",imgAlt:"Dora ai - support agent chat for specialized services",accordionList:[{title:"Trained on a massive support chat dataset",body:"The model was trained on a massive dataset of support chat conversations, enabling it to understand and respond to customer queries effectively."},{title:"Trained on the internal support documentation",body:"The chatbot was trained on the company's internal support documentation, ensuring that it could provide accurate and up-to-date information to customers."},{title:"Expanded with api backend actions",body:"We expanded the chatbot's capabilities to include API actions, enabling it to access the companys api services and provide more detailed information to customers."}]},esap:{title:"Replace owner's manual with a a smart Ai chatbot",description:"Our client, a manufacturer of consumer electronics, needed a solution to aid their customers with an AI chatbot that could provide information from the manual as personalized support to customers.",slug:"/case-studies/instructions-manual-ai-chatbot",imgSrc:"/owner's-manual.jpg",imgAlt:"Dora ai - owner's manual ai chatbot",accordionList:[{title:"Trained the ai model on the company's product manuals and documentation",body:"The AI chatbot has the knowledge of the entire company's manuals and documentation, enabling it to provide specific responses and instructions for the customer, without having him scroll through an entire manual."},{title:"Increased customer satisfaction",body:"The AI chatbot has increased customer satisfaction by providing instant and accurate responses to customer queries, reducing the time taken to resolve issues and improving the overall customer experience."},{title:"Enhanced customer experience",body:"We iterated on the chatbot to provide a more personalized experience for customers, enabling it to understand the context of the conversation and provide relevant information to the customer."}]}}},4738:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var n=a(6540),r=a(8932),s=a(8564),l=a(7548),i=a(5540);let o=function(e){function t(t){var a;return(a=e.call(this,t)||this).next=()=>{a._ismounted&&(a.updateText(a.props.phrasesToDecode[a.counter]).then((()=>{setTimeout(a.next,2500)})),a.counter=a.counter+1===a.props.phrasesToDecode.length?0:a.counter+1)},a.updateText=e=>{if(!a._ismounted)return;const t=a.state.text,n=Math.max(t.length,e.length),r=new Promise((e=>a.resolve=e));a.queue=[];for(let s=0;s<n;s++){const n=t[s]||"",r=e[s]||"",l=Math.floor(40*Math.random()),i=l+Math.floor(40*Math.random());a.queue.push({from:n,to:r,start:l,end:i})}return cancelAnimationFrame(a.frameRequest),a.frame=0,a.update(),r},a.update=()=>{let e="",t=0;for(let n=0,r=a.queue.length;n<r;n++){let{from:r,to:s,start:l,end:i,char:o}=a.queue[n];a.frame>=i?(t++,e+=s):a.frame>=l?((!o||Math.random()<.28)&&(o=a.randomChar(),a.queue[n].char=o),e+=o):e+=r}a.setState({text:e}),t===a.queue.length?a.resolve():(a.frameRequest=requestAnimationFrame(a.update),a.frame++)},a.randomChar=()=>a.chars[Math.floor(Math.random()*a.chars.length)],a.state={text:"initial",unmounted:!1},a.chars="!<>-_\\/[]{}—=+*^?#________",a.counter=0,a}(0,i.A)(t,e);var a=t.prototype;return a.componentDidMount=function(){this._ismounted=!0,this.next()},a.componentWillUnmount=function(){this._ismounted=!1},a.render=function(){return n.createElement("span",null,this.state.text)},t}(n.Component);a.p,a.p;var c=()=>n.createElement("div",{className:"banner video-wrapper"},n.createElement("div",{className:"container-fluid"},n.createElement("div",{className:"video-blurb"},n.createElement("div",{className:"row"},n.createElement("h1",null,"AI technology. Human focused."),n.createElement("div",{className:"tagline show-on-desktop ng-isolate-scope"},"Bringing the power of AI ",n.createElement("span",{className:"highlight"}," to consumers")," with",n.createElement("br",null),n.createElement("span",{className:"textdecode"},n.createElement(o,{phrasesToDecode:[" custom trained ai models."," advanced custom ai support agents."," ai content translator."," ai document editor."," media & content creation."," machine learning."," chatbots for online shops & websites."," crypto & nft marketplaces."," ai managed twitter accounts."]})))))),n.createElement("div",{className:"video-block"},n.createElement("div",{className:"video-block-container"},n.createElement("div",{className:"bg-overlay"}),n.createElement("video",{loop:!0,autoPlay:!0,playsInline:!0,muted:!0,src:"https://scalio-assets.scaliolabs.com/assets/video/scalio-home-hero3-d5d2718c42.mp4",type:"video/mp4",reveal:"fadeIn","data-sr-id":"6"})))),d=a(4901),m=a.p+"static/info-banner-default-01cd09a74c69f46e49ead0c061624e7d.jpg";var u=()=>n.createElement("section",{className:"module dark whatwecreate "},n.createElement("div",{className:"container"},n.createElement("div",{className:"block text-left"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12 left"},n.createElement("div",{className:"title"},"What we're creating"),n.createElement("h3",{className:""},"Bringing our AI experience to the blockchain"),n.createElement("div",{className:"blurb"},"We are bringing new use cases to the crypto community through our utility token $Dora: AI generated content, AI chatbots, AI translation services and more.",n.createElement("br",null),n.createElement("br",null),"Leveraging latest software design practices we plan to build chatbot integrations with well known platforms: Shopify, Slack, Facebook Messenger, Whatsapp, X.com and more.")),n.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12 right"},n.createElement("div",null," "))))),n.createElement("div",{className:"hero-container"},n.createElement("div",null,n.createElement("div",{className:"bg-overlay"}),n.createElement("img",{className:"hero-image",alt:"Scalio Creative",src:m}))));var g=()=>n.createElement("section",{className:"module light whatwedo"},n.createElement("article",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-lg-10 col-md-11  col-12"},n.createElement("div",{className:"title ","data-sr-id":"17"},"What we do"),n.createElement("h2",{"data-sr-id":"18"},"Innovative AI built to enhance customer experience."),n.createElement("div",{className:"blurb","data-sr-id":"19"},"We've designed, architected numerous ai models for different use cases. Our team is ready to help you build your next AI agent."))),n.createElement("div",{className:"row"},n.createElement("div",{className:"card-wrapper"},n.createElement("div",{className:"row"},n.createElement("ul",{className:"card services"},n.createElement("li",{className:"col-lg-4 col-md-6  col-12","data-sr-id":"23"},n.createElement("figure",null,n.createElement("figcaption",null,n.createElement("div",{className:"fig-block"},n.createElement("i",{className:"icon-service-web"}),n.createElement("h4",{className:"heading"},"Content Translation"))))),n.createElement("li",{className:"col-lg-4 col-md-6  col-12 ","data-sr-id":"20"},n.createElement("figure",null,n.createElement("figcaption",null,n.createElement("div",{className:"fig-block"},n.createElement("i",{className:"icon-service-mobile"}),n.createElement("h4",{className:"heading"},"Custom tailored chatbots"))))),n.createElement("li",{className:"col-lg-4 col-md-6  col-12","data-sr-id":"24"},n.createElement("figure",null,n.createElement("figcaption",null,n.createElement("div",{className:"fig-block"},n.createElement("i",{className:"icon-service-devops"}),n.createElement("h4",{className:"heading"},"Custom Model Training & Hosting"))))),n.createElement("li",{className:"col-lg-4 col-md-6  col-12","data-sr-id":"22"},n.createElement("figure",null,n.createElement("figcaption",null,n.createElement("div",{className:"fig-block"},n.createElement("i",{className:"icon-service-growth"}),n.createElement("h4",{className:"heading"},"Web3 & Blockchain"))))),n.createElement("li",{className:"col-lg-4 col-md-6  col-12","data-sr-id":"21"},n.createElement("figure",null,n.createElement("figcaption",null,n.createElement("div",{className:"fig-block"},n.createElement("i",{className:"icon-service-design"}),n.createElement("h4",{className:"heading"},"Design & User Experience"))))),n.createElement("li",{className:"col-lg-4 col-md-6  col-12","data-sr-id":"25"},n.createElement("figure",null,n.createElement("figcaption",null,n.createElement("div",{className:"fig-block"},n.createElement("i",{className:"icon-service-support"}),n.createElement("h4",{className:"heading"},"Support & Maintenance"))))))))))),p=a(8002),h=a(864),f=a(5795);var v=()=>n.createElement(l.A,null,n.createElement(r.A,{className:"navbar-fixed-top"}),n.createElement(c,null),n.createElement(g,null),n.createElement(d.A,{message:"Need a custom ai chatbot?",url:"/contact",ctaMessage:"lets get started"}),n.createElement(f.A,null,n.createElement(p.A,{style:p.z.RIGHT,content:h.A.aiTranslator,elementIndex:1}),n.createElement(p.A,{style:p.z.LEFT,content:h.A.supportAgent,elementIndex:2}),n.createElement(p.A,{style:p.z.RIGHT,content:h.A.esap,elementIndex:3})),n.createElement(u,null),n.createElement(d.A,{message:"Want to invest in $Dora?",url:"/tokenomics",ctaMessage:"start here"}),n.createElement(s.A,null))}}]);
//# sourceMappingURL=component---src-pages-index-js-94dbf108ace5f1d1c0b7.js.map