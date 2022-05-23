(()=>{"use strict";var e,t={10:()=>{document.addEventListener("DOMContentLoaded",(function(e){let t=document.querySelector(".testimonials__sliderWrapper"),n=t.querySelectorAll(".testimonials__sliderItem"),r=document.querySelector(".circle_testimonials[data-left]"),o=document.querySelector(".circle_testimonials[data-right]"),l=0,i=window.innerWidth>700?2:1;function s(){let e=document.querySelectorAll(".testimonials__sliderDot"),r=t.offsetWidth/n.length,o=Math.floor(-l/r);e.forEach((e=>e.style.background="#7c7878")),e[o].style.background="black"}function a(e,n){l>=0||(t.style.transform=`translateX(${l+e+n}px)`,l+=e+n,s())}function c(e,r){l<=-(n.length-i)*e-r||(t.style.transform=`translateX(${l-e-r}px)`,l-=e+r,s())}function d(e){let t=parseInt(getComputedStyle(n[0]).width),r=parseInt(getComputedStyle(n[1]).marginLeft);e.target.dataset.left?a(t,r):c(t,r)}function u(e,t,n){let r;return function(){const o=this,l=arguments,i=function(){r=null,n||e.apply(o,l)},s=n&&!r;clearTimeout(r),r=setTimeout(i,t),s&&e.apply(o,l)}}t.addEventListener("touchstart",(function(e){const r=u(a,30),o=u(c,30),l=u((function(e){let n=e.touches[0].clientX;return n-d>i/3?(t.removeEventListener("touchmove",l),void r(i,s)):d-n>i/3?(t.removeEventListener("touchmove",l),void o(i,s)):void 0}),1);e.touches[0].clientX;let i=parseInt(getComputedStyle(n[0]).width),s=parseInt(getComputedStyle(n[1]).marginLeft),d=e.touches[0].clientX;t.addEventListener("touchmove",l),t.addEventListener("touchend",(function(e){t.removeEventListener("touchmove",l)}))})),r.addEventListener("click",d),o.addEventListener("click",d);let m=document.createElement("img");m.src="./assets/images/starBlack.svg",m.style.width="1.125rem",m.style.height="1.125rem";let f=document.createElement("img");f.src="./assets/images/starWhite.svg",f.style.width="1.125rem",f.style.height="1.125rem",n.forEach((e=>{let t=e.dataset.stars;if(t<5)for(let n=0;n<5-t;n++)e.prepend(f.cloneNode());for(let n=0;n<t;n++)e.prepend(m.cloneNode())}));let h=document.querySelector(".showModal"),v=document.querySelector(".overlay"),y=document.querySelector(".modal"),p=(y.querySelector(".modal__close"),y.querySelector(".form_modal")),g=p.querySelectorAll("input"),E=y.querySelector('[name="name"]'),L=y.querySelector('[name="telephone"]'),S=y.querySelector('[name="email"]'),q=y.querySelector(".modal__submit");function _(e){y.style.display="none",v.style.display="none"}h.addEventListener("click",(function(e){g.forEach((e=>e.value="")),y.style.display="flex",v.style.display="block",document.querySelector(".modal__close").addEventListener("click",_),v.addEventListener("click",_)})),q.addEventListener("click",(function(e){e.preventDefault();let t=["0","1","2","3","4","5","6","7","8","9"],n=L.value,r=S.value;if(p.querySelectorAll(".form__error").forEach((e=>e.remove())),E.value.length>0)for(let e of E.value)"abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстуфхцчшщъыьэя".includes(e.toLowerCase())||o("Name should only contain letters",E);if(n.length>0){for(let e of n.split(""))t.includes(e)||o("Telephone number should only contain numbers.",L);(n.length>12||n.length<6)&&o("This telephone number is too short",L)}if(r.length>0){let e=r.indexOf("@"),t=r.indexOf(".");(-1==e||-1==t||t==r.length-1||e==r.length-1||r.length<6)&&o("This email is invalid",S)}if(E.value&&n&&r||o("Please, fill in your personal information",S),!p.querySelector(".form__error")){y.innerHTML;let e=document.createElement("div");e.classList.add("thankYou"),e.textContent="Thank You! We will contact you soon",y.append(e),setTimeout((()=>{_(),e.remove()}),2500)}function o(e,t){let n=document.createElement("div");n.classList.add("form__error"),n.textContent=e,t.insertAdjacentHTML("afterend",n.outerHTML)}}));let w=document.querySelector(".pageUp");w.addEventListener("mouseover",(function(e){w.style.transform="translateY(-6px)"})),w.addEventListener("mouseleave",(function(e){w.style.transform="translateY(6px)"})),w.addEventListener("click",(function(e){window.scrollTo(0,0)}));let b=document.querySelectorAll(".requirements__descrWrapper"),k=document.querySelector(".requirements__img");b.forEach((e=>{e.addEventListener("click",(function(t){k.src=e.dataset.img}))}));let x=document.querySelectorAll("[data-section]"),O=document.querySelectorAll("img"),C=window.innerWidth>1200?"31.25rem":window.innerWidth>700?"26rem":"20rem";function T(e){return e.getBoundingClientRect().top-window.innerHeight}function A(e){O.forEach((e=>{"./assets/images/imgPlaceholder.png"==e.getAttribute("src")&&T(e)<500&&(e.src=e.dataset.imgsrc)}))}0==window.pageYOffset?(x.forEach((e=>{e.style.transform=`translateY(${C})`,e.style.transition="2s all"})),document.addEventListener("scroll",u((function(e){x.forEach((e=>{T(e)<200&&(e.style.visibility="visible",e.style.transform="translateY(0)")}))}),10))):x.forEach((e=>{e.style.visibility="visible"})),document.addEventListener("scroll",u(A,10)),A()}))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,r),l.exports}r.m=t,e=[],r.O=(t,n,o,l)=>{if(!n){var i=1/0;for(d=0;d<e.length;d++){for(var[n,o,l]=e[d],s=!0,a=0;a<n.length;a++)(!1&l||i>=l)&&Object.keys(r.O).every((e=>r.O[e](n[a])))?n.splice(a--,1):(s=!1,l<i&&(i=l));if(s){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[n,o,l]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0,343:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,l,[i,s,a]=n,c=0;if(i.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(a)var d=a(r)}for(t&&t(n);c<i.length;c++)l=i[c],r.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return r.O(d)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[343],(()=>r(10)));o=r.O(o)})();