import{N as Ge,_ as De,F as Ne}from"./SubHeader-BAhFAQaC.js";import{d as K,r as m,a as D,p as C,o as ze,n as Me,b as Oe,c as G,w as re,e as Ie,h as I,i as w,F as y,_ as Y,f,g as S,j as Te,k as V,l as h,m as A,q as k,s as t,t as de,u as ue,v as Fe,x as U}from"./index-qGJ7EdzR.js";/**
 * Vue 3 Carousel 0.3.3
 * (c) 2024
 * @license MIT
 */const v={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},Ae={itemsToShow:{default:v.itemsToShow,type:Number},itemsToScroll:{default:v.itemsToScroll,type:Number},wrapAround:{default:v.wrapAround,type:Boolean},throttle:{default:v.throttle,type:Number},snapAlign:{default:v.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:v.transition,type:Number},breakpoints:{default:v.breakpoints,type:Object},autoplay:{default:v.autoplay,type:Number},pauseAutoplayOnHover:{default:v.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:v.mouseDrag,type:Boolean},touchDrag:{default:v.touchDrag,type:Boolean},dir:{default:v.dir,validator(e){return["rtl","ltr"].includes(e)}},i18n:{default:v.i18n,type:Object},settings:{default(){return{}},type:Object}};function Pe({config:e,slidesCount:a}){const{snapAlign:i,wrapAround:c,itemsToShow:r=1}=e;if(c)return Math.max(a-1,0);let o;switch(i){case"start":o=a-r;break;case"end":o=a-1;break;case"center":case"center-odd":o=a-Math.ceil((r-.5)/2);break;case"center-even":o=a-Math.ceil(r/2);break;default:o=0;break}return Math.max(o,0)}function Xe({config:e,slidesCount:a}){const{wrapAround:i,snapAlign:c,itemsToShow:r=1}=e;let o=0;if(i||r>a)return o;switch(c){case"start":o=0;break;case"end":o=r-1;break;case"center":case"center-odd":o=Math.floor((r-1)/2);break;case"center-even":o=Math.floor((r-2)/2);break;default:o=0;break}return o}function ce({val:e,max:a,min:i}){return a<i?e:Math.min(Math.max(e,i),a)}function Re({config:e,currentSlide:a,slidesCount:i}){const{snapAlign:c,wrapAround:r,itemsToShow:o=1}=e;let s=a;switch(c){case"center":case"center-odd":s-=(o-1)/2;break;case"center-even":s-=(o-2)/2;break;case"end":s-=o-1;break}return r?s:ce({val:s,max:i-o,min:0})}function $e(e){return e?e.reduce((a,i)=>{var c;return i.type===y?[...a,...$e(i.children)]:((c=i.type)===null||c===void 0?void 0:c.name)==="CarouselSlide"?[...a,i]:a},[]):[]}function J({val:e,max:a,min:i=0}){return e>a?J({val:e-(a+1),max:a,min:i}):e<i?J({val:e+(a+1),max:a,min:i}):e}function He(e,a){let i;return a?function(...c){const r=this;i||(e.apply(r,c),i=!0,setTimeout(()=>i=!1,a))}:e}function Qe(e,a){let i;return function(...c){i&&clearTimeout(i),i=setTimeout(()=>{e(...c),i=null},a)}}function Be(e="",a={}){return Object.entries(a).reduce((i,[c,r])=>i.replace(`{${c}}`,String(r)),e)}var Ve=K({name:"ARIA",setup(){const e=w("config",D(Object.assign({},v))),a=w("currentSlide",m(0)),i=w("slidesCount",m(0));return()=>I("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},Be(e.i18n.itemXofY,{currentSlide:a.value+1,slidesCount:i.value}))}}),Je=K({name:"Carousel",props:Ae,setup(e,{slots:a,emit:i,expose:c}){var r;const o=m(null),s=m([]),d=m(0),p=m(0),n=D(Object.assign({},v));let u=Object.assign({},v),z;const g=m((r=e.modelValue)!==null&&r!==void 0?r:0),q=m(0),me=m(0),L=m(0),N=m(0);let E,Z;C("config",n),C("slidesCount",p),C("currentSlide",g),C("maxSlide",L),C("minSlide",N),C("slideWidth",d);function ee(){z=Object.assign({},e.breakpoints),u=Object.assign(Object.assign(Object.assign({},u),e),{i18n:Object.assign(Object.assign({},u.i18n),e.i18n),breakpoints:void 0}),pe(u)}function F(){if(!z||!Object.keys(z).length)return;const l=Object.keys(z).map(_=>Number(_)).sort((_,j)=>+j-+_);let b=Object.assign({},u);l.some(_=>{const j=window.matchMedia(`(min-width: ${_}px)`).matches;return j&&(b=Object.assign(Object.assign({},b),z[_])),j}),pe(b)}function pe(l){Object.entries(l).forEach(([b,_])=>n[b]=_)}const _e=Qe(()=>{F(),P(),M()},16);function M(){if(!o.value)return;const l=o.value.getBoundingClientRect();d.value=l.width/n.itemsToShow}function P(){p.value<=0||(me.value=Math.ceil((p.value-1)/2),L.value=Pe({config:n,slidesCount:p.value}),N.value=Xe({config:n,slidesCount:p.value}),n.wrapAround||(g.value=ce({val:g.value,max:L.value,min:N.value})))}ze(()=>{Me(()=>M()),setTimeout(()=>M(),1e3),F(),be(),window.addEventListener("resize",_e,{passive:!0}),i("init")}),Oe(()=>{Z&&clearTimeout(Z),E&&clearInterval(E),window.removeEventListener("resize",_e,{passive:!0})});let x=!1;const X={x:0,y:0},R={x:0,y:0},T=D({x:0,y:0}),H=m(!1),te=m(!1),Ye=()=>{H.value=!0},Le=()=>{H.value=!1};function ge(l){["INPUT","TEXTAREA","SELECT"].includes(l.target.tagName)||(x=l.type==="touchstart",x||l.preventDefault(),!(!x&&l.button!==0||$.value)&&(X.x=x?l.touches[0].clientX:l.clientX,X.y=x?l.touches[0].clientY:l.clientY,document.addEventListener(x?"touchmove":"mousemove",ve,!0),document.addEventListener(x?"touchend":"mouseup",he,!0)))}const ve=He(l=>{te.value=!0,R.x=x?l.touches[0].clientX:l.clientX,R.y=x?l.touches[0].clientY:l.clientY;const b=R.x-X.x,_=R.y-X.y;T.y=_,T.x=b},n.throttle);function he(){const l=n.dir==="rtl"?-1:1,b=Math.sign(T.x)*.4,_=Math.round(T.x/d.value+b)*l;if(_&&!x){const j=Ce=>{window.removeEventListener("click",j,!0)};window.addEventListener("click",j,!0)}B(g.value-_),T.x=0,T.y=0,te.value=!1,document.removeEventListener(x?"touchmove":"mousemove",ve,!0),document.removeEventListener(x?"touchend":"mouseup",he,!0)}function be(){!n.autoplay||n.autoplay<=0||(E=setInterval(()=>{n.pauseAutoplayOnHover&&H.value||Q()},n.autoplay))}function fe(){E&&(clearInterval(E),E=null),be()}const $=m(!1);function B(l){const b=n.wrapAround?l:ce({val:l,max:L.value,min:N.value});g.value===b||$.value||(i("slide-start",{slidingToIndex:l,currentSlideIndex:g.value,prevSlideIndex:q.value,slidesCount:p.value}),$.value=!0,q.value=g.value,g.value=b,Z=setTimeout(()=>{if(n.wrapAround){const _=J({val:b,max:L.value,min:0});_!==g.value&&(g.value=_,i("loop",{currentSlideIndex:g.value,slidingToIndex:l}))}i("update:modelValue",g.value),i("slide-end",{currentSlideIndex:g.value,prevSlideIndex:q.value,slidesCount:p.value}),$.value=!1,fe()},n.transition))}function Q(){B(g.value+n.itemsToScroll)}function ae(){B(g.value-n.itemsToScroll)}const Se={slideTo:B,next:Q,prev:ae};C("nav",Se),C("isSliding",$);const xe=G(()=>Re({config:n,currentSlide:g.value,slidesCount:p.value}));C("slidesToScroll",xe);const Ee=G(()=>{const l=n.dir==="rtl"?-1:1,b=xe.value*d.value*l;return{transform:`translateX(${T.x-b}px)`,transition:`${$.value?n.transition:0}ms`,margin:n.wrapAround?`0 -${p.value*d.value}px`:"",width:"100%"}});function we(){ee(),F(),P(),M(),fe()}Object.keys(Ae).forEach(l=>{["modelValue"].includes(l)||re(()=>e[l],we)}),re(()=>e.modelValue,l=>{l!==g.value&&B(Number(l))}),re(p,P),i("before-init"),ee();const ye={config:n,slidesCount:p,slideWidth:d,next:Q,prev:ae,slideTo:B,currentSlide:g,maxSlide:L,minSlide:N,middleSlide:me};c({updateBreakpointsConfigs:F,updateSlidesData:P,updateSlideWidth:M,initDefaultConfigs:ee,restartCarousel:we,slideTo:B,next:Q,prev:ae,nav:Se,data:ye});const se=a.default||a.slides,ie=a.addons,je=D(ye);return()=>{const l=$e(se==null?void 0:se(je)),b=(ie==null?void 0:ie(je))||[];l.forEach((le,oe)=>le.props.index=oe);let _=l;if(n.wrapAround){const le=l.map((ne,O)=>Ie(ne,{index:-l.length+O,isClone:!0,key:`clone-before-${O}`})),oe=l.map((ne,O)=>Ie(ne,{index:l.length+O,isClone:!0,key:`clone-after-${O}`}));_=[...le,...l,...oe]}s.value=l,p.value=Math.max(l.length,1);const j=I("ol",{class:"carousel__track",style:Ee.value,onMousedownCapture:n.mouseDrag?ge:null,onTouchstartPassiveCapture:n.touchDrag?ge:null},_),Ce=I("div",{class:"carousel__viewport"},j);return I("section",{ref:o,class:{carousel:!0,"is-sliding":$.value,"is-dragging":te.value,"is-hover":H.value,"carousel--rtl":n.dir==="rtl"},dir:n.dir,"aria-label":n.i18n.ariaGallery,tabindex:"0",onMouseenter:Ye,onMouseleave:Le},[Ce,b,I(Ve)])}}}),ke;(function(e){e.arrowUp="arrowUp",e.arrowDown="arrowDown",e.arrowRight="arrowRight",e.arrowLeft="arrowLeft"})(ke||(ke={}));const Ke=()=>{const e=w("config",D(Object.assign({},v))),a=w("maxSlide",m(1)),i=w("minSlide",m(1)),c=w("currentSlide",m(1)),r=w("nav",{}),o=d=>J({val:c.value,max:a.value,min:0})===d,s=[];for(let d=i.value;d<a.value+1;d++){const p=I("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":o(d)},"aria-label":Be(e.i18n.ariaNavigateToSlide,{slideNumber:d+1}),onClick:()=>r.slideTo(d)}),n=I("li",{class:"carousel__pagination-item",key:d},p);s.push(n)}return I("ol",{class:"carousel__pagination"},s)};var Ue=K({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:a}){const i=w("config",D(Object.assign({},v))),c=w("currentSlide",m(0)),r=w("slidesToScroll",m(0)),o=w("isSliding",m(!1)),s=G(()=>e.index===c.value),d=G(()=>e.index===c.value-1),p=G(()=>e.index===c.value+1),n=G(()=>{const u=Math.floor(r.value),z=Math.ceil(r.value+i.itemsToShow-1);return e.index>=u&&e.index<=z});return()=>{var u;return I("li",{style:{width:`${100/i.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":e.isClone,"carousel__slide--visible":n.value,"carousel__slide--active":s.value,"carousel__slide--prev":d.value,"carousel__slide--next":p.value,"carousel__slide--sliding":o.value},"aria-hidden":!n.value},(u=a.default)===null||u===void 0?void 0:u.call(a,{isActive:s.value,isClone:e.isClone,isPrev:d.value,isNext:p.value,isSliding:o.value,isVisible:n.value}))}}});const We={},qe={class:"grid grid-cols-4 gap-2 absolute gallery p-5 mb-5 justify-center items-center w-full z-0 text-xs"},Ze=Te('<div class="bg-white shadow-lg p-5" data-v-10268cbb><h1 class="flex mb-3 pt-2 text-xl" data-v-10268cbb>Gaming Accessories</h1><div class="flex flex-wrap justify-center p-5 gap-6" data-v-10268cbb><div data-v-10268cbb><img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg" alt="Image 1" class="w-32" data-v-10268cbb><p data-v-10268cbb>Headsets</p></div><div data-v-10268cbb><img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg" alt="Image 1" class="w-32" data-v-10268cbb><p data-v-10268cbb>Keyboards</p></div><div data-v-10268cbb><img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg" alt="Image 1" class="w-32" data-v-10268cbb><p data-v-10268cbb>Computer Mice</p></div><div data-v-10268cbb><img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg" alt="Image 1" class="w-32" data-v-10268cbb><p data-v-10268cbb>Chairs</p></div></div><div class="p-5" data-v-10268cbb><a class="text-blue-400" data-v-10268cbb>See more</a></div></div><div class="bg-white shadow-lg p-5 pb-5" data-v-10268cbb><h1 class="flex pb-3 text-xl" data-v-10268cbb>Gaming accessories</h1><img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg" alt="" class="h-72" data-v-10268cbb><div class="p-2" data-v-10268cbb><a class="text-blue-400" data-v-10268cbb>See more</a></div></div><div class="bg-white shadow-lg p-5" data-v-10268cbb><h1 class="flex mb-4 pt-2 text-xl" data-v-10268cbb>Refresh your space</h1><div class="flex flex-wrap justify-center p-5 gap-6" data-v-10268cbb><div data-v-10268cbb><img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg" alt="Image 1" class="w-32" data-v-10268cbb><p data-v-10268cbb>Dining</p></div><div data-v-10268cbb><img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg" alt="Image 1" class="w-32" data-v-10268cbb><p data-v-10268cbb>Home</p></div><div data-v-10268cbb><img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg" alt="Image 1" class="w-32" data-v-10268cbb><p data-v-10268cbb>Kitchen</p></div><div data-v-10268cbb><img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg" alt="Image 1" class="w-32" data-v-10268cbb><p data-v-10268cbb>Health and Beauty</p></div></div><div class="p-4" data-v-10268cbb><a class="text-blue-400" data-v-10268cbb>See more</a></div></div><div class="bg-white shadow-lg p-3" data-v-10268cbb><h1 class="flex mb- pt-2 text-xl" data-v-10268cbb>Amazon Gadget Store</h1><div class="flex flex-wrap justify-center p-5 gap-6" data-v-10268cbb><div data-v-10268cbb><img src="https://m.media-amazon.com/images/I/41aF1Kpc1iL._SY160_.jpg" alt="" data-v-10268cbb><p data-v-10268cbb>Smartphones</p></div><div data-v-10268cbb><img src="https://m.media-amazon.com/images/I/316r7290SLL._SY75_.jpg" alt="Image 1" class="w-20 h-16" data-v-10268cbb><p data-v-10268cbb>Tablets</p></div><div data-v-10268cbb><img src="https://m.media-amazon.com/images/I/31qcGgiIK7L._SY75_.jpg" alt="Image 1" class="w-20 h-16" data-v-10268cbb><p data-v-10268cbb>Laptops</p></div><div data-v-10268cbb><img src="https://m.media-amazon.com/images/I/313zteqI9LL._SY75_.jpg" alt="Image 1" class="w-20 h-16" data-v-10268cbb><p data-v-10268cbb>TV</p></div></div><div class="p-5" data-v-10268cbb><a class="text-blue-400" data-v-10268cbb>See more</a></div></div>',4),et=[Ze];function tt(e,a){return f(),S("div",qe,et)}const at=Y(We,[["render",tt],["__scopeId","data-v-10268cbb"]]),st="/assets/slide-1-BPr44Ttk.jpg",it="/assets/slide-2-Fp0oaH3y.jpg",lt="/assets/slide-3-Dfn5sYZL.jpg",ot="/assets/slide-4-bl35EseN.jpg",nt="/assets/slide-5-CkphoOno.jpg",rt="/assets/slide-6-DyEwXiX8.jpg",ct=K({name:"Autoplay",components:{Carousel:Je,Gallery:at,Slide:Ue,Pagination:Ke}}),dt=t("div",{class:"carousel__item z-0"},[t("img",{src:st,alt:""})],-1),ut=t("div",{class:"carousel__item z-0"},[t("img",{src:it,alt:""})],-1),mt=t("div",{class:"carousel__item z-0"},[t("img",{src:lt,alt:""})],-1),pt=t("div",{class:"carousel__item z-0"},[t("img",{src:ot,alt:""})],-1),_t=t("div",{class:"carousel__item z-0"},[t("img",{src:nt,alt:""})],-1),gt=t("div",{class:"carousel__item z-0"},[t("img",{src:rt,alt:""})],-1);function vt(e,a,i,c,r,o){const s=V("Slide"),d=V("Pagination"),p=V("Carousel",!0),n=V("gallery");return f(),S(y,null,[h(p,{autoplay:2e3,"wrap-around":!0,class:"sticky"},{addons:A(()=>[h(d)]),default:A(()=>[(f(),S(y,null,k(1,u=>h(s,{key:u,class:"z-0"},{default:A(()=>[dt]),_:2},1024)),64)),(f(),S(y,null,k(1,u=>h(s,{key:u},{default:A(()=>[ut]),_:2},1024)),64)),(f(),S(y,null,k(1,u=>h(s,{key:u},{default:A(()=>[mt]),_:2},1024)),64)),(f(),S(y,null,k(1,u=>h(s,{key:u},{default:A(()=>[pt]),_:2},1024)),64)),(f(),S(y,null,k(1,u=>h(s,{key:u},{default:A(()=>[_t]),_:2},1024)),64)),(f(),S(y,null,k(1,u=>h(s,{key:u},{default:A(()=>[gt]),_:2},1024)),64))]),_:1}),h(n)],64)}const ht=Y(ct,[["render",vt]]),bt={data(){return{images:[{src:"/public/features/f1.jpg",alt:"Image 1"},{src:"/public/features/f2.jpg",alt:"Image 2"},{src:"/public/features/f3.jpg",alt:"Image 3"},{src:"/public/features/f3.jpg",alt:"Image 3"},{src:"/public/features/f3.jpg",alt:"Image 3"},{src:"/public/features/f3.jpg",alt:"Image 3"},{src:"/public/features/f3.jpg",alt:"Image 3"},{src:"/public/features/f3.jpg",alt:"Image 3"},{src:"/public/features/f3.jpg",alt:"Image 3"}],currentSlide:0}},methods:{nextSlide(){this.currentSlide=(this.currentSlide+1)%this.images.length,this.updateSlide()},prevSlide(){this.currentSlide=(this.currentSlide-1+this.images.length)%this.images.length,this.updateSlide()},updateSlide(){const e=this.$refs.slides;e.style.transform=`translateX(-${this.currentSlide*100}%)`}}},ft=e=>(de("data-v-e1bb7bee"),e=e(),ue(),e),St={class:"gallery"},xt={class:"slider"},wt={class:"slides",ref:"slides"},yt=ft(()=>t("h1",{class:"text-black header"},"Best Sellers in Clothing, Shoes and Jewelry",-1)),jt=["alt"],Ct=["alt"],It=["alt"],At=["alt"],kt=["alt"],zt=["alt"],Tt=["alt"],$t=["alt"];function Bt(e,a,i,c,r,o){return f(),S("div",St,[t("div",xt,[t("div",wt,[yt,(f(!0),S(y,null,k(r.images,(s,d)=>(f(),S("div",{key:d,class:"slide flex flex-nowrap gap-7"},[t("img",{src:"https://m.media-amazon.com/images/I/814hp8QMsjL._AC_SY200_.jpg",alt:s.alt,class:"h-56 w-56"},null,8,jt),t("img",{src:"https://m.media-amazon.com/images/I/81LPwvQLXJL._AC_SY200_.jpg",alt:s.alt,class:"h-56 w-56"},null,8,Ct),t("img",{src:"https://m.media-amazon.com/images/I/81uojej-XEL._AC_SY200_.jpg",alt:s.alt,class:"h-56 w-56"},null,8,It),t("img",{src:"https://m.media-amazon.com/images/I/71h2uXz9I1L._AC_SY200_.jpg",alt:s.alt,class:"h-56 w-56"},null,8,At),t("img",{src:"https://m.media-amazon.com/images/I/71ZtR65CG3L._AC_SY200_.jpg",alt:s.alt,class:"h-56 w-56"},null,8,kt),t("img",{src:"https://m.media-amazon.com/images/I/513fraGQXWL._AC_SY200_.jpg",alt:s.alt,class:"h-56 w-56"},null,8,zt),t("img",{src:"https://m.media-amazon.com/images/I/61JckjKagSL._AC_SY200_.jpg",alt:s.alt,class:"h-56 w-56"},null,8,Tt),t("img",{src:"https://m.media-amazon.com/images/I/810yz3XJoYS._AC_SY200_.jpg",alt:s.alt,class:"h-56 w-56"},null,8,$t)]))),128))],512),t("button",{onClick:a[0]||(a[0]=(...s)=>o.prevSlide&&o.prevSlide(...s)),class:"prev"},"❮"),t("button",{onClick:a[1]||(a[1]=(...s)=>o.nextSlide&&o.nextSlide(...s)),class:"next"},"❯")])])}const Yt=Y(bt,[["render",Bt],["__scopeId","data-v-e1bb7bee"]]),Lt={data(){return{images:[{src:"/public/features/f1.jpg",alt:"Image 1"},{src:"/public/features/f2.jpg",alt:"Image 2"},{src:"/public/features/f3.jpg",alt:"Image 3"},{src:"/public/features/f3.jpg",alt:"Image 3"},{src:"/public/features/f3.jpg",alt:"Image 3"},{src:"/public/features/f3.jpg",alt:"Image 3"},{src:"/public/features/f3.jpg",alt:"Image 3"},{src:"/public/features/f3.jpg",alt:"Image 3"},{src:"/public/features/f3.jpg",alt:"Image 3"}],currentSlide:0}},methods:{nextSlide(){this.currentSlide=(this.currentSlide+1)%this.images.length,this.updateSlide()},prevSlide(){this.currentSlide=(this.currentSlide-1+this.images.length)%this.images.length,this.updateSlide()},updateSlide(){const e=this.$refs.slides;e.style.transform=`translateX(-${this.currentSlide*100}%)`}}},Et=e=>(de("data-v-632ce2a4"),e=e(),ue(),e),Gt={class:"gallery"},Dt={class:"slider"},Nt={class:"slides",ref:"slides"},Mt=Et(()=>t("h1",{class:"text-black header"},"Best Sellers in Books for You",-1)),Ot=["alt"],Ft=["alt"],Pt=["alt"],Xt=["alt"],Rt=["alt"],Ht=["alt"],Qt=["alt"],Vt=["alt"],Jt=["alt"],Kt=["alt"];function Ut(e,a,i,c,r,o){return f(),S("div",Gt,[t("div",Dt,[t("div",Nt,[Mt,(f(!0),S(y,null,k(r.images,(s,d)=>(f(),S("div",{key:d,class:"slide flex flex-nowrap gap-7"},[t("img",{src:"https://m.media-amazon.com/images/I/414vz-WNrUL._AC_SY200_.jpg",alt:s.alt,class:""},null,8,Ot),t("img",{src:"https://m.media-amazon.com/images/I/71LkhJev11L._AC_SY200_.jpg",alt:s.alt,class:""},null,8,Ft),t("img",{src:"https://m.media-amazon.com/images/I/61Z5k8t+j1L._AC_SY200_.jpg",alt:s.alt,class:""},null,8,Pt),t("img",{src:"https://m.media-amazon.com/images/I/61Z5k8t+j1L._AC_SY200_.jpg",alt:s.alt,class:""},null,8,Xt),t("img",{src:"https://m.media-amazon.com/images/I/41grWA3f9-L._AC_SY200_.jpg",alt:s.alt,class:""},null,8,Rt),t("img",{src:"https://m.media-amazon.com/images/I/61M2130f5EL._AC_SY200_.jpg",alt:s.alt,class:""},null,8,Ht),t("img",{src:"https://m.media-amazon.com/images/I/71Xmkj9WoNL._AC_SY200_.jpg",alt:s.alt,class:""},null,8,Qt),t("img",{src:"https://m.media-amazon.com/images/I/610K8zRHVqL._AC_SY200_.jpg",alt:s.alt,class:""},null,8,Vt),t("img",{src:"https://m.media-amazon.com/images/I/610K8zRHVqL._AC_SY200_.jpg",alt:s.alt,class:""},null,8,Jt),t("img",{src:"https://m.media-amazon.com/images/I/51NBNxbDUZL._AC_SY200_.jpg",alt:s.alt,class:""},null,8,Kt)]))),128))],512),t("button",{onClick:a[0]||(a[0]=(...s)=>o.prevSlide&&o.prevSlide(...s)),class:"prev"},"❮"),t("button",{onClick:a[1]||(a[1]=(...s)=>o.nextSlide&&o.nextSlide(...s)),class:"next"},"❯")])])}const Wt=Y(Lt,[["render",Ut],["__scopeId","data-v-632ce2a4"]]),W=e=>(de("data-v-329ceb86"),e=e(),ue(),e),qt={class:"container text-xs"},Zt=W(()=>t("div",{class:"card"},[t("h3",null,"Creating Business Solutions"),t("img",{src:"https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/RBS-in-house-Graphics/cc_359_laptop_us_v1._SY304_CB576754001_.jpg",alt:"Product Image",class:"w-full h-72"}),t("button",{"data-tooltip-target":"tooltip-animation",type:"button",class:"text-blue-400 mt-5 bg-transparent"},"See more software products"),t("div",{id:"tooltip-animation",role:"tooltip",class:"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-blue-400 mt-5 transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"},[U(" Tooltip content "),t("div",{class:"tooltip-arrow","data-popper-arrow":""})])],-1)),ea=W(()=>t("div",{class:"card"},[t("h3",null,"A new way to work"),t("img",{src:"https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1622892_3373436_379x304_1X_en_US._SY304_CB597161294_.jpg",alt:"Product Image",class:"w-full h-72"}),t("button",{"data-tooltip-target":"tooltip-animation",type:"button",class:"text-blue-400 mt-5 bg-transparent"},"Shop personal computers"),t("div",{id:"tooltip-animation",role:"tooltip",class:"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-blue-400 mt-5 transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"},[U(" Tooltip content "),t("div",{class:"tooltip-arrow","data-popper-arrow":""})])],-1)),ta=W(()=>t("div",{class:"card"},[t("h3",null,"Upgrade your office furniture"),t("img",{src:"https://images-na.ssl-images-amazon.com/images/G/01/dex/2023/Roar/October/D_CC_Roar_OfficeDepot_1023_1X_Furnitrure_v2._SY304_CB577544739_.jpg",alt:"Product Image",class:"w-full h-72"}),t("button",{"data-tooltip-target":"tooltip-animation",type:"button",class:"text-blue-400 mt-5 bg-transparent"},"Animated tooltip"),t("div",{id:"tooltip-animation",role:"tooltip",class:"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-blue-400 mt-5 transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"},[U(" Tooltip content "),t("div",{class:"tooltip-arrow","data-popper-arrow":""})])],-1)),aa=W(()=>t("div",{class:"card"},[t("h3",null,"Product Title"),t("img",{src:"https://images-na.ssl-images-amazon.com/images/G/01/us-manual-merchandising/XCM_CUTTLE_1622894_3373440_379x304_1X_en_size1_US._SY304_CB597469214_.jpg",alt:"Product Image",class:"w-full h-72"}),t("button",{"data-tooltip-target":"tooltip-animation",type:"button",class:"text-blue-400 mt-5 bg-transparent"},"Animated tooltip"),t("div",{id:"tooltip-animation",role:"tooltip",class:"absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-blue-400 mt-5 transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"},[U(" Tooltip content "),t("div",{class:"tooltip-arrow","data-popper-arrow":""})])],-1)),sa=[Zt,ea,ta,aa],ia={__name:"SubGallery",setup(e){return ze(()=>{Fe()}),(a,i)=>(f(),S("div",qt,sa))}},la=Y(ia,[["__scopeId","data-v-329ceb86"]]),oa={};function na(e,a){return null}const ra=Y(oa,[["render",na]]),ca={},da={class:"grid grid-cols-4 gap-2 absolute gallery p-5 mb-5 mt-10 justify-center items-center w-full text-xs"},ua=Te('<div class="bg-white shadow-lg p-5"><h1 class="flex mb-2 pt-1 text-xl">Top Deal</h1><div class="flex flex-wrap justify-center"><div><img src="https://m.media-amazon.com/images/I/91pfLK9QKqL._AC_SY230_.png" alt="Image 1" class="w-full"></div></div><div class="pt-1"><div class="flex gap-2"><button class="p-1 w-1/4 text-center bg-red-600 text-white">50% off</button><a href="">Limited deal</a></div><p class="m-2">Bathroom items from Tens Home, SparkPod, Liba, and more</p><a class="text-blue-400">Shop now</a></div></div><div class="bg-white shadow-lg p-5"><h1 class="flex pb-3 text-xl">Gaming accessories</h1><img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg" alt="" class="h-72"><div class="pt-4"><a class="text-blue-400">Shop now</a></div></div><div class="bg-white shadow-lg p-1"><h1 class="flex mb-3 pt-4 pl-3 text-xl">Shop Deals in Fashion</h1><div class="flex flex-wrap justify-center mt-3 mb-3 p-5 gap-6"><div><img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg" alt="Image 1" class="w-36 h-full"><p>Dining</p></div><div><img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg" alt="Image 1" class="w-36 h-full"><p>Home</p></div><div><img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg" alt="Image 1" class="w-36 h-full"><p>Kitchen</p></div><div><img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg" alt="Image 1" class="w-36 h-full"><p>Health and Beauty</p></div></div><div class="p-4"><a class="text-blue-400">See more deals</a></div></div><div class="bg-white shadow-lg p-5"><h1 class="flex pb-3 text-xl">Gaming accessories</h1><img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg" alt="" class="h-72"><div class="pt-4"><a class="text-red-400">Shop now</a></div></div>',4),ma=[ua];function pa(e,a){return f(),S("div",da,ma)}const _a=Y(ca,[["render",pa]]),ha={__name:"Home",setup(e){return(a,i)=>(f(),S(y,null,[h(Ge),h(De),h(ht),h(_a),h(Yt),h(Wt),h(la),h(ra),h(Ne)],64))}};export{ha as default};