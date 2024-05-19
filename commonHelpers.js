import{a as v,S as R,i as c}from"./assets/vendor-eded45c0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const b=e=>e.reduce((r,{tags:o,webformatURL:a,largeImageURL:t,likes:s,views:d,comments:B,downloads:H})=>r+=`<li class="photo-container gallery-item">
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
    `,""),$="33935915-442e02dd22c1a8a84f5950f15",A="https://pixabay.com/api/",L=15;v.defaults.baseURL=A;const S=async(e,r=1)=>(await v.get("",{params:{key:$,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:L,page:r}})).data,P=e=>{e.classList.remove("display-none")},p=e=>{e.classList.add("display-none")},w=e=>{e.classList.remove("load-more-none")},q=e=>{e.classList.add("load-more-none")},D=e=>{e.classList.add("btn-search-disable")},h=e=>{e.classList.remove("btn-search-disable")},i=document.querySelector(".form-search"),g=document.querySelector(".gallery"),u=document.querySelector(".btn-search"),n=document.querySelector(".loader"),l=document.querySelector(".load-more"),E=new R(".gallery a",{captionsData:"alt",captionsDelay:250});let y=0,f="",m=1;const O=async e=>{if(e.preventDefault(),f=e.currentTarget.elements.searchWords.value.trim(),g.innerHTML="",m=1,f===""){q(l),c.error({message:"Field cannot be empty!"}),i.reset();return}try{P(n),D(u);const{hits:o,totalHits:a}=await S(f,m);if(a===0){h(u),c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),i.reset(),p(n);return}g.insertAdjacentHTML("beforeend",b(o)),M(),E.refresh(),h(u),p(n),y=Math.ceil(a/L),y>1&&w(l)}catch{h(u),p(n),c.error({message:"Search params is not valid!",position:"topRight"}),i.reset();return}i.reset()};i.addEventListener("submit",O);const M=()=>{document.querySelector(".photo-container:last-child").getBoundingClientRect().height,window.scrollBy({top:1e3,left:0,behavior:"smooth"})},T=async e=>{try{e.preventDefault(),P(n),m+=1;const{hits:r,totalHits:o}=await S(f,m);if(g.insertAdjacentHTML("beforeend",b(r)),E.refresh(),M(),p(n),o===0){h(u),c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),i.reset(),p(n);return}if(y=Math.ceil(o/L),m>=y){w(l),l.removeEventListener("click",onLoadMorePress),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}}catch{q(l),c.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}};l.addEventListener("click",T);
//# sourceMappingURL=commonHelpers.js.map
