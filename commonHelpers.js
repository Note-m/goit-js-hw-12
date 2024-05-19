import{a as b,S as R,i as l}from"./assets/vendor-eded45c0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const S=e=>e.reduce((r,{tags:o,webformatURL:a,largeImageURL:t,likes:s,views:d,comments:B,downloads:H})=>r+=`<li class="photo-container gallery-item">
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
            <span class="info">${B}</span>
        </div>
        <div class="info-item">
            <span class="title">Downloads</span>
            <span class="info">${H}</span>
        </div>
    </div>
</li>
    `,""),$="33935915-442e02dd22c1a8a84f5950f15",A="https://pixabay.com/api/",v=15;b.defaults.baseURL=A;const P=async(e,r=1)=>(await b.get("",{params:{key:$,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:v,page:r}})).data,w=e=>{e.classList.remove("display-none")},p=e=>{e.classList.add("display-none")},q=e=>{e.classList.remove("load-more-none")},g=e=>{e.classList.add("load-more-none")},D=e=>{e.classList.add("btn-search-disable")},h=e=>{e.classList.remove("btn-search-disable")},c=document.querySelector(".form-search"),L=document.querySelector(".gallery"),u=document.querySelector(".btn-search"),n=document.querySelector(".loader"),i=document.querySelector(".load-more"),E=new R(".gallery a",{captionsData:"alt",captionsDelay:250});let m=0,y="",f=1;const O=async e=>{if(e.preventDefault(),y=e.currentTarget.elements.searchWords.value.trim(),L.innerHTML="",f=1,y===""){g(i),l.error({message:"Field cannot be empty!"}),c.reset();return}try{w(n),D(u);const{hits:o,totalHits:a}=await P(y,f);if(a===0){h(u),l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),c.reset(),p(n);return}L.insertAdjacentHTML("beforeend",S(o)),M(),E.refresh(),h(u),p(n),m=Math.ceil(a/v),m>1&&q(i),m===1&&g(i)}catch{h(u),p(n),l.error({message:"Search params is not valid!",position:"topRight"}),c.reset();return}c.reset()};c.addEventListener("submit",O);const M=()=>{document.querySelector(".photo-container:last-child").getBoundingClientRect().height,window.scrollBy({top:1e3,left:0,behavior:"smooth"})},T=async e=>{try{e.preventDefault(),w(n),f+=1;const{hits:r,totalHits:o}=await P(y,f);if(L.insertAdjacentHTML("beforeend",S(r)),E.refresh(),M(),p(n),o===0){h(u),l.error({message:"Sorry, there are no images matching your search query. Please try again!"}),c.reset(),p(n);return}if(m=Math.ceil(o/v),f>=m){q(i),i.removeEventListener("click",onLoadMorePress),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}}catch{g(i),l.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}};i.addEventListener("click",T);
//# sourceMappingURL=commonHelpers.js.map
