import{a as b,S as $,i as n}from"./assets/vendor-eded45c0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const S=e=>e.reduce((r,{tags:o,webformatURL:a,largeImageURL:t,likes:s,views:d,comments:M,downloads:R})=>r+=`<li class="photo-container gallery-item">
    <a href=${t} class="card-link js-card-link">
        <img class="photo" src="${a}" alt="${o}" >
    </a>
    <div class="info-cont">
        <div class="info-item">
            <span class="title">Likes</span>
            <span class="info">${s}</span>
        </div>
        <div class="info-item">
            <span class="title">Views</span>
            <span class="info">${d}</span>
        </div>
        <div class="info-item">
            <span class="title">Comments</span>
            <span class="info">${M}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="info">${R}</span>
        </div>
    </div>
</li>
    `,""),A="33935915-442e02dd22c1a8a84f5950f15",D="https://pixabay.com/api/",v=15;b.defaults.baseURL=D;const P=async(e,r=1)=>(await b.get("",{params:{key:A,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:v,page:r}})).data,q=e=>{e.classList.remove("display-none")},u=e=>{e.classList.add("display-none")},w=e=>{e.classList.remove("load-more-none")},g=e=>{e.classList.add("load-more-none")},O=e=>{e.classList.add("btn-search-disable")},f=e=>{e.classList.remove("btn-search-disable")},l=document.querySelector(".form-search"),L=document.querySelector(".gallery"),h=document.querySelector(".btn-search"),i=document.querySelector(".loader"),c=document.querySelector(".load-more"),E=new $(".gallery a",{captionsData:"alt",captionsDelay:250});let m=0,y="",p=1;const T=async e=>{if(e.preventDefault(),y=e.currentTarget.elements.searchWords.value.trim(),L.innerHTML="",p=1,y===""){g(c),n.error({message:"Field cannot be empty!"}),l.reset();return}try{q(i),O(h);const{hits:o,totalHits:a}=await P(y,p);if(a===0){f(h),n.error({message:"Sorry, there are no images matching your search query. Please try again!"}),l.reset(),u(i);return}L.insertAdjacentHTML("beforeend",S(o)),B(),E.refresh(),f(h),u(i),m=Math.ceil(a/v),m>1&&w(c),m===1&&(g(c),n.error({message:"Sorry, there are no images matching your search query. Please try again!"}))}catch{f(h),u(i),n.error({message:"Search params is not valid!",position:"topRight"}),l.reset();return}l.reset()};l.addEventListener("submit",T);const B=()=>{const o=document.querySelector(".photo-container:last-child").getBoundingClientRect().height*2;window.scrollBy({top:o,left:0,behavior:"smooth"})},H=async e=>{try{e.preventDefault(),q(i),p+=1;const{hits:r,totalHits:o}=await P(y,p);if(L.insertAdjacentHTML("beforeend",S(r)),E.refresh(),B(),u(i),o===0){f(h),n.error({message:"Sorry, there are no images matching your search query. Please try again!"}),l.reset(),u(i);return}if(m=Math.ceil(o/v),p>=m){w(c),c.removeEventListener("click",H),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}}catch{g(c),n.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}};c.addEventListener("click",H);
//# sourceMappingURL=commonHelpers.js.map
