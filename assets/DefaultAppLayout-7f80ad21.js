import{g as e,_ as T,c as E}from"./createLucideIcon-6a58835b.js";import{d as y,o as C,a as c,c as h,F as S,p as O,b as P,e as t,f as G,r as b,g as V,h as u,w as k,i as q,j as L,t as g,k as $,u as x,n as j,l as H}from"./index-26e95dc8.js";const A=r=>(O("data-v-b234022c"),r=r(),P(),r),B=A(()=>t("div",{class:"square tw-hidden sm:tw-block"},null,-1)),N=A(()=>t("div",{class:"hold tw-hidden sm:tw-block"},"Hold",-1)),z=y({__name:"TheSquare",setup(r){return C(()=>{let s=e.matchMedia(),i=640;s.add(`(min-width: ${i}px)`,()=>{const o=document.querySelector(".square");e.set(o,{xPercent:-100,yPercent:-100});const n=e.utils.pipe(e.utils.snap(window.innerWidth/18),e.quickTo(o,"x",{duration:.6,ease:"power3"})),p=e.utils.pipe(e.utils.snap(window.innerHeight/9.65),e.quickTo(o,"y",{duration:.6,ease:"power3"})),l=document.querySelector(".hold");e.set(l,{xPercent:0,yPercent:-100});const w=e.quickTo(l,"x",{duration:.6,ease:"power3"}),m=e.quickTo(l,"y",{duration:.6,ease:"power3"});window.addEventListener("mousemove",f=>{w(f.x),m(f.y),n(f.x),p(f.y)});let v,d;function a(){v=e.timeline({paused:!0}).fromTo(o,{scale:1},{scale:10,duration:.5,ease:"power2.inOut"}).to(o,{opacity:0,duration:.5},0),d=e.timeline({paused:!0}).fromTo(l,{opacity:1},{opacity:0,duration:.5,ease:"power2.inOut"})}function _(){v.play(),d.play()}function M(){v.reverse(),d.reverse()}function F(){window.addEventListener("mousedown",_),window.addEventListener("touchstart",_),window.addEventListener("mouseup",M),window.addEventListener("touchend",M)}function I(){a(),F()}I()})}),(s,i)=>(c(),h(S,null,[B,N],64))}});const D=T(z,[["__scopeId","data-v-b234022c"]]),W="/assets/grid2-43462639.svg",R=G('<svg id="demo" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" data-v-2c379219><defs data-v-2c379219><radialGradient id="maskGradient" data-v-2c379219><stop offset="50%" stop-color="#fff" data-v-2c379219></stop><stop offset="100%" stop-color="#000" data-v-2c379219></stop></radialGradient><mask id="theMask" data-v-2c379219><circle id="masker" r="150" fill="url(#maskGradient)" cx="0" cy="0" data-v-2c379219></circle></mask></defs><g id="maskReveal" mask="url(#theMask)" data-v-2c379219><image id="regular" xlink:href="'+W+'" class="grid tw-hidden sm:tw-block" data-v-2c379219></image></g></svg><div id="instructions" data-v-2c379219></div>',2),X=y({__name:"TheGrid",setup(r){return C(()=>{let s=e.matchMedia(),i=640;s.add(`(min-width: ${i}px)`,()=>{const o=e.timeline();o.to("#masker",{duration:2,attr:{r:2400},ease:"power2.in"}),o.reversed(!0);function n(){o.reversed(!o.reversed())}window.addEventListener("mousedown",n),window.addEventListener("touchstart",n),window.addEventListener("mouseup",n),window.addEventListener("touchend",n);const p=e.quickTo("#masker","x",{duration:1,ease:"steps (6)"}),l=e.quickTo("#masker","y",{duration:1,ease:"steps (6)"});window.addEventListener("mousemove",w=>{p(w.x),l(w.y)})})}),(s,i)=>R}});const Q=T(X,[["__scopeId","data-v-2c379219"]]),Y={},U={class:"tw-border-t tw-border-gray-700 tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-2 tw-p-4 tw-mb-4"},J=G('<div class="tw-text-center"> Built with <a href="https://typescriptlang.org" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="Typescript" class="tw-inline-block tw-w-4 tw-h-4 tw-mb-0.5 tw-mr-1"> Typescript, </a><a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer"><img src="https://vitejs.dev/logo.svg" alt="Vite" class="tw-inline-block tw-w-4 tw-h-4 tw-mb-0.5 tw-mr-1"> Vite</a>, and <a href="https://v3.vuejs.org" target="_blank" rel="noopener noreferrer"><img src="https://docs.vuejs.id//images/logo.png" alt="Vue" class="tw-inline-block tw-w-4 tw-h-4 tw-mb-0.5 tw-mr-1"> Vue 3</a></div><div> Styled with <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="Tailwind CSS" class="tw-inline-block tw-w-4 tw-h-2.5 tw-mb-0.5 tw-mr-1"> Tailwind CSS </a></div><div> Animated with <a href="https://greensock.com/gsap/" target="_blank" rel="noopener noreferrer"><img src="https://greensock.com/uploads/monthly_2020_03/tweenmax.png.cf27916e926fbb328ff214f66b4c8429.png" alt="GSAP" class="tw-inline-block tw-w-4 tw-h-4 tw-mb-0.5 tw-mr-1"> GSAP </a></div>',3),K=[J];function Z(r,s){return c(),h("div",U,K)}const tt=T(Y,[["render",Z]]),et="/assets/rn-logo-55a213d1.svg",ot=E("MenuIcon",[["line",{x1:"4",y1:"12",x2:"20",y2:"12",key:"1q6rtp"}],["line",{x1:"4",y1:"6",x2:"20",y2:"6",key:"1jr6gt"}],["line",{x1:"4",y1:"18",x2:"20",y2:"18",key:"98tuvx"}]]),st=E("XIcon",[["line",{x1:"18",y1:"6",x2:"6",y2:"18",key:"1o5bob"}],["line",{x1:"6",y1:"6",x2:"18",y2:"18",key:"z4dcbv"}]]),nt=t("button",{"aria-label":"logo"},[t("img",{src:et,alt:"logo",class:"tw-w-12 tw-h-fit"})],-1),it={class:"tw-flex tw-items-center"},at={class:"tw-hidden sm:tw-flex tw-items-center tw-gap-8"},rt={class:"tw-flex tw-gap-6"},lt={class:"tw-font-mono tw-text-yellow-400"},wt=["href"],ct=t("button",{class:"tw-p-2 tw-px-6 tw-border tw-border-yellow-400 tw-text-yellow-400 tw-text-xs tw-font-semibold tw-transition tw-duration-300 tw-ease-in-out tw-transform hover:tw-text-[#000000] hover:tw-bg-yellow-300 hover:tw-scale-105"}," Resume ",-1),dt=[ct],ut={class:"tw-absolute tw-top-0 tw-right-0 tw-py-4 tw-px-6"},pt={class:"tw-flex tw-flex-col tw-gap-8"},_t={class:"tw-font-mono tw-text-yellow-400"},ht=["href"],mt=t("button",{class:"tw-p-2 tw-px-6 tw-border tw-border-yellow-400 tw-text-yellow-400 tw-text-xs tw-font-semibold tw-transition tw-duration-300 tw-ease-in-out tw-transform hover:tw-text-[#000000] hover:tw-bg-yellow-300 hover:tw-scale-105"}," Resume ",-1),vt=[mt],ft=y({__name:"TheAppbar",setup(r){const s="https://drive.google.com/file/d/19vO_5fF9Co7j9c1G5QmNBiXQO6YyWSMG/view?usp=sharing",i=b([{title:"About",link:"/#about"},{title:"Work",link:"/#work"},{title:"Projects",link:"/#projects"},{title:"Archive",link:"/#archive"}]),o=b(!1),n=b(!1);let p=0;const l=()=>{const m=window.scrollY;m<p?o.value=!1:o.value=!0,p=m};C(()=>{window.addEventListener("scroll",l)});const w=()=>{n.value=!n.value};return(m,v)=>{const d=V("router-link");return c(),h("div",null,[t("header",{class:j(["tw-fixed tw-py-4 tw-px-6 tw-flex tw-justify-between tw-w-full tw-z-50 tw-backdrop-blur-md tw-bg-[#1C1F33] tw-bg-opacity-50 tw-transition tw-duration-300 tw-ease-in-out",o.value?"tw-translate-y-[-100%] tw-opacity-100 tw-pointer-events-none":"tw-translate-y-0 tw-opacity-100 tw-pointer-events-auto tw-shadow-lg"])},[u(d,{to:"/#hero"},{default:k(()=>[nt]),_:1}),t("div",it,[t("div",at,[t("div",rt,[(c(!0),h(S,null,q(i.value,(a,_)=>(c(),L(d,{key:a.title,to:a.link,class:"hover:tw-text-yellow-400 tw-transition tw-duration-300 tw-ease-in-out tw-cursor-pointer"},{default:k(()=>[t("span",lt,"0"+g(1+_)+". ",1),$(g(a.title),1)]),_:2},1032,["to"]))),128))]),t("a",{href:x(s),target:"_blank",rel:"noopener noreferrer"},dt,8,wt)]),t("button",{"aria-label":"Open Mobile Menu",onClick:w},[u(x(ot),{class:"tw-block sm:tw-hidden tw-w-8 tw-h-8 tw-text-yellow-400 tw-transition tw-duration-300 tw-ease-in-out hover:tw-text-[#1C1F33] hover:tw-bg-yellow-300"})])])],2),t("div",{class:j(["tw-fixed tw-top-0 tw-right-0 tw-min-w-[230px] tw-h-full tw-bg-[#1C1F33] tw-flex tw-flex-col tw-justify-center tw-items-center tw-z-50 tw-transition tw-duration-300 tw-ease-in-out",n.value?"tw-translate-x-0 tw-shadow-2xl":"tw-translate-x-full tw-shadow-none"])},[t("div",ut,[t("button",{"aria-label":"Close Mobile Menu",onClick:w},[u(x(st),{class:"tw-w-8 tw-h-8 tw-mt-0.5 tw-text-yellow-400 tw-transition tw-duration-300 tw-ease-in-out hover:tw-text-[#1C1F33] hover:tw-bg-yellow-300"})])]),t("div",pt,[(c(!0),h(S,null,q(i.value,(a,_)=>(c(),L(d,{key:a.title,to:a.link,class:"hover:tw-text-yellow-400 tw-transition tw-duration-300 tw-ease-in-out tw-cursor-pointer",onClick:w},{default:k(()=>[t("span",_t,"0"+g(1+_)+". ",1),$(g(a.title),1)]),_:2},1032,["to"]))),128)),t("a",{href:x(s),target:"_blank",rel:"noopener noreferrer"},vt,8,ht)])],2)])}}}),yt=y({__name:"DefaultAppLayout",setup(r){return(s,i)=>(c(),h("div",null,[u(ft),u(D),u(Q),H(s.$slots,"default"),u(tt)]))}});export{yt as default};
