"use strict";(self.webpackChunkdora_ai_landing=self.webpackChunkdora_ai_landing||[]).push([[245],{978:function(e,t,n){n.d(t,{G:function(){return I},L:function(){return p},M:function(){return k},P:function(){return v},S:function(){return j},_:function(){return i},a:function(){return s},b:function(){return u},c:function(){return c},g:function(){return d},h:function(){return o}});var a=n(6540),l=(n(5147),n(5556)),r=n.n(l);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t.indexOf(n=r[a])>=0||(l[n]=e[n]);return l}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,n;return Boolean(null==e||null==(t=e.images)||null==(n=t.fallback)?void 0:n.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,n,a,l){return void 0===l&&(l={}),s({},n,{loading:a,shouldLoad:e,"data-main-image":"",style:s({},l,{opacity:t?1:0})})}function d(e,t,n,a,l,r,i,o){const c={};r&&(c.backgroundColor=r,"fixed"===n?(c.width=a,c.height=l,c.backgroundColor=r,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],g=function(e){let{layout:t,width:n,height:l}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:l/n*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:n,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+l+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,n=i(e,m);return a.createElement(a.Fragment,null,a.createElement(g,s({},n)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],E=function(e){let{src:t,srcSet:n,loading:l,alt:r="",shouldLoad:o}=e,c=i(e,h);return a.createElement("img",s({},c,{decoding:"async",loading:l,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?n:void 0,"data-srcset":o?void 0:n,alt:r}))},y=function(e){let{fallback:t,sources:n=[],shouldLoad:l=!0}=e,r=i(e,f);const o=r.sizes||(null==t?void 0:t.sizes),c=a.createElement(E,s({},r,t,{sizes:o,shouldLoad:l}));return n.length?a.createElement("picture",null,n.map((e=>{let{media:t,srcSet:n,type:r}=e;return a.createElement("source",{key:t+"-"+r+"-"+n,type:r,media:t,srcSet:l?n:void 0,"data-srcset":l?void 0:n,sizes:o})})),c):c};var w;E.propTypes={src:l.string.isRequired,alt:l.string.isRequired,sizes:l.string,srcSet:l.string,shouldLoad:l.bool},y.displayName="Picture",y.propTypes={alt:l.string.isRequired,shouldLoad:l.bool,fallback:l.exact({src:l.string.isRequired,srcSet:l.string,sizes:l.string}),sources:l.arrayOf(l.oneOfType([l.exact({media:l.string.isRequired,type:l.string,sizes:l.string,srcSet:l.string.isRequired}),l.exact({media:l.string,type:l.string.isRequired,sizes:l.string,srcSet:l.string.isRequired})]))};const b=["fallback"],v=function(e){let{fallback:t}=e,n=i(e,b);return t?a.createElement(y,s({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",s({},n))};v.displayName="Placeholder",v.propTypes={fallback:l.string,sources:null==(w=y.propTypes)?void 0:w.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};const k=function(e){return a.createElement(a.Fragment,null,a.createElement(y,s({},e)),a.createElement("noscript",null,a.createElement(y,s({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=y.propTypes;const T=function(e,t,n){for(var a=arguments.length,l=new Array(a>3?a-3:0),s=3;s<a;s++)l[s-3]=arguments[s];return e.alt||""===e.alt?r().string.apply(r(),[e,t,n].concat(l)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:r().object.isRequired,alt:T},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],x=new Set;let R,N;const O=function(e){let{as:t="div",image:l,style:r,backgroundColor:c,className:u,class:d,onStartLoad:m,onLoad:g,onError:p}=e,h=i(e,L);const{width:f,height:E,layout:y}=l,w=function(e,t,n){const a={};let l="gatsby-image-wrapper";return"fixed"===n?(a.width=e,a.height=t):"constrained"===n&&(l="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:l,"data-gatsby-image-wrapper":"",style:a}}(f,E,y),{style:b,className:v}=w,k=i(w,S),T=(0,a.useRef)(),C=(0,a.useMemo)((()=>JSON.stringify(l.images)),[l.images]);d&&(u=d);const O=function(e,t,n){let a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(y,f,E);return(0,a.useEffect)((()=>{R||(R=Promise.all([n.e(593),n.e(896)]).then(n.bind(n,7896)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:n}=e;return N=t,{renderImageToString:t,swapPlaceholderImage:n}})));const e=T.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void x.add(C);if(N&&x.has(C))return;let t,a;return R.then((e=>{let{renderImageToString:n,swapPlaceholderImage:i}=e;T.current&&(T.current.innerHTML=n(s({isLoading:!0,isLoaded:x.has(C),image:l},h)),x.has(C)||(t=requestAnimationFrame((()=>{T.current&&(a=i(T.current,C,x,r,m,g,p))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[l]),(0,a.useLayoutEffect)((()=>{x.has(C)&&N&&(T.current.innerHTML=N(s({isLoading:x.has(C),isLoaded:x.has(C),image:l},h)),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}))}),[l]),(0,a.createElement)(t,s({},k,{style:s({},b,r,{backgroundColor:c}),className:v+(u?" "+u:""),ref:T,dangerouslySetInnerHTML:{__html:O},suppressHydrationWarning:!0}))},I=(0,a.memo)((function(e){return e.image?(0,a.createElement)(O,e):null}));I.propTypes=C,I.displayName="GatsbyImage";const A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],D=function(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),l=2;l<n;l++)a[l-2]=arguments[l];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?r().number.apply(r(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},_=new Set(["fixed","fullWidth","constrained"]),M={src:r().string.isRequired,alt:T,width:D,height:D,sizes:r().string,layout:e=>{if(void 0!==e.layout&&!_.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},j=(q=I,function(e){let{src:t,__imageData:n,__error:l}=e,r=i(e,A);return l&&console.warn(l),n?a.createElement(q,s({image:n},r)):(console.warn("Image not loaded",t),null)});var q;j.displayName="StaticImage",j.propTypes=M},5147:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,n=!1,a=!1;for(let l=0;l<e.length;l++){const r=e[l];t&&/[a-zA-Z]/.test(r)&&r.toUpperCase()===r?(e=e.slice(0,l)+"-"+e.slice(l),t=!1,a=n,n=!0,l++):n&&a&&/[a-zA-Z]/.test(r)&&r.toLowerCase()===r?(e=e.slice(0,l-1)+"-"+e.slice(l-1),a=n,n=!1,t=!0):(t=r.toLowerCase()===r&&r.toUpperCase()!==r,a=n,n=r.toUpperCase()===r&&r.toLowerCase()!==r)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n;var n};e.exports=t,e.exports.default=t},7661:function(e,t,n){n.r(t);var a=n(6540),l=n(7548),r=n(8932),s=n(8564),i=n(978);t.default=()=>a.createElement(l.A,null,a.createElement(r.A,{className:"navbar-fixed-top white-page"}),a.createElement("header",{className:"header legal"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row headline"},a.createElement("div",{className:"col-lg-9 col-md-10 col-sm-12 col-centered"},a.createElement("div",{className:"row"},a.createElement("div",{className:"title"},"Dora.ai"),a.createElement("h1",{className:"page-type"},"Tokenomics"),a.createElement("div",{className:"skayline"})))))),a.createElement("section",{className:"post-body legal"},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-lg-9 col-md-10 col-sm-12 col-centered"},a.createElement("div",{className:"version"},"v1.0.0")),a.createElement("div",{className:"col-lg-9 col-md-10 col-sm-12 col-centered"},a.createElement("article",{className:"post"},a.createElement("p",null,"We provide a detailed overview of ou utility token $DORA, and its distribution.",a.createElement("br",null)," "),a.createElement("h3",null,"Total Supply and Token Allocation",a.createElement("br",null)," "),a.createElement("p",null,a.createElement("strong",null,"Total Supply:")," The total number of $DORA tokens is 1 000 000 000 (one billion), with a circulating supply of one billion tokens."),a.createElement("p",null,a.createElement("strong",null,"Tax:")," There is a 1% tax tax on buying and selling $Dora tokens. This tax is used to fill the staking pool making sure there is enough tokens for rewards.",a.createElement("br",null),"The tax is not applicable when buying and selling tokens on Centralised Exchanges - CEXs."),a.createElement("p",null,a.createElement("strong",null,"Inflation:")," No inflation, minting or mining. The total supply of $Dora tokens is fixed."),a.createElement("h3",null,a.createElement("strong",null,"Token Allocation:")),a.createElement("br",null),a.createElement(i.S,{src:"../assets/images/token-allocation.png",__imageData:n(690)}),a.createElement("br",null),a.createElement("ul",null,a.createElement("li",null,a.createElement("strong",null,"Token Sale")," - 20% Will be sold in the token sale/IDO"),a.createElement("li",null,a.createElement("strong",null,"Foundation")," - 20% This is the company's vault. These funds will be used to invest in the infrastructure of our projects, but also when opportunity presents itself we will use these funds to make possible acquisitions of startups."),a.createElement("li",null,a.createElement("strong",null,"Team Members")," - 20% Will be gradually released to the team members and founders."),a.createElement("li",null,a.createElement("strong",null,"Exchange Listing")," - 10% We will use these funds to offer liquidity to exchanges."),a.createElement("li",null,a.createElement("strong",null,"Staking Rewards")," - 10% These funds will be used to reward the holders of staked tokens."),a.createElement("li",null,a.createElement("strong",null,"Community Rewards")," - 10% Funds used for rewarding the people in our community."),a.createElement("li",null,a.createElement("strong",null,"Marketing")," - 5% These funds will be used to promote the project."),a.createElement("li",null,a.createElement("strong",null,"Advisors")," - 5% These funds will be gradually released to our advisors.")),a.createElement("p",null,"We are strong believers in using these funds wisely. As we have no minting, mining or inflation in the $Dora token we think of them as precious assets that we value."),a.createElement("h3",null,"Projects economy",a.createElement("br",null)),a.createElement("p",null,"Many of the projects we'll be launching will be generating $Dora tokens, which we will be using as follows:"),a.createElement("ul",null,a.createElement("li",null,"to support our infrastructure costs"),a.createElement("li",null,"to maintain the projects"),a.createElement("li",null,"to develop and launch new products")),a.createElement("h3",null,"Vesting Periods"),a.createElement("p",null,"When launching a new token, it's crucial to have a well-thought-out vesting schedule to ensure the fair distribution of tokens and incentivize long-term commitment from stakeholders. Here's the release schedule for the Dora AI token:"),a.createElement("h4",null,"Token Sale (20%)"),a.createElement("ul",null,a.createElement("li",null,"100% Released on Token Generation Event (TGE)")),a.createElement("h4",null,"Foundation (20%)"),a.createElement("ul",null,a.createElement("li",null,"20% Released on TGE"),a.createElement("li",null,"80% Linear Vesting Release Scheduled Over 12 Months")),a.createElement("h4",null,"Team Members (20%)"),a.createElement("ul",null,a.createElement("li",null,"50% Released on TGE"),a.createElement("li",null,"50% Linear Vesting Release Schedule Over 12 Months")),a.createElement("h4",null,"Exchanges Listing (10%)"),a.createElement("ul",null,a.createElement("li",null,"100% Released on TGE")),a.createElement("h4",null,"Staking Reward (10%)"),a.createElement("ul",null,a.createElement("li",null,"10% Released on TGE"),a.createElement("li",null,"90% Linear Vesting Release Schedule Over 12 Months")),a.createElement("h4",null,"Marketing (5%)"),a.createElement("ul",null,a.createElement("li",null,"100% Released on TGE")),a.createElement("h4",null,"Advisors (5%)"),a.createElement("ul",null,a.createElement("li",null,"50% Released on TGE"),a.createElement("li",null,"50% Linear Vesting Release Schedule Over 12 Months")),a.createElement("h4",null,"Community Rewards (10%)"),a.createElement("ul",null,a.createElement("li",null,"10% Released on TGE"),a.createElement("li",null,"90% Vesting Release Schedule Over 24 Months")),a.createElement("p",null,"This vesting schedule ensures that tokens are distributed responsibly and in a manner that aligns with the long-term goals of the Dora AI project. By staggering the release of tokens and implementing vesting periods, we aim to foster a sustainable and thriving ecosystem around the Dora AI token."),a.createElement("p",null,"Stay tuned for more updates and developments as we continue to build and grow the Dora AI platform."),a.createElement("h3",null,"You can buy $Dora tokens here:",a.createElement("br",null)),a.createElement("ul",null,a.createElement("li",null,"public ido - ",a.createElement("strong",null,"to be done")),a.createElement("li",null,"uniswap/pancakeswap - ",a.createElement("strong",null,"to be done")),a.createElement("li",null,"CEXs - ",a.createElement("strong",null,"to be done"))),"Token contract: ",a.createElement("strong",null,"0x0"),"TODO update token contract TODO update with vesting schedule"))))),a.createElement(s.A,null))},690:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/dora-ai/static/4b2ff12fc376da58a67977ca1244fc56/e0897/token-allocation.png","srcSet":"/dora-ai/static/4b2ff12fc376da58a67977ca1244fc56/3a46a/token-allocation.png 256w,\\n/dora-ai/static/4b2ff12fc376da58a67977ca1244fc56/db291/token-allocation.png 512w,\\n/dora-ai/static/4b2ff12fc376da58a67977ca1244fc56/e0897/token-allocation.png 1024w","sizes":"(min-width: 1024px) 1024px, 100vw"},"sources":[{"srcSet":"/dora-ai/static/4b2ff12fc376da58a67977ca1244fc56/e92ac/token-allocation.webp 256w,\\n/dora-ai/static/4b2ff12fc376da58a67977ca1244fc56/dcf1b/token-allocation.webp 512w,\\n/dora-ai/static/4b2ff12fc376da58a67977ca1244fc56/afeb4/token-allocation.webp 1024w","type":"image/webp","sizes":"(min-width: 1024px) 1024px, 100vw"}]},"width":1024,"height":768}')}}]);
//# sourceMappingURL=component---src-pages-tokenomics-js-a9ef87f0d84aac116b1f.js.map