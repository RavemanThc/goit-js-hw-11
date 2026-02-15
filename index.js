import{a as f,S as p,i as n}from"./assets/vendor--6n4cVRZ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",y="21399489-be148a7d0b86f7d0e4ef4262d";async function g(r){return(await f.get(m,{params:{key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(r){return r.map(({webformatURL:o,largeImageURL:i,tags:a,likes:e,views:t,comments:s,downloads:d})=>`
      <li class="gallery-item">
        <a href="${i}">
          <img src="${o}" alt="${a}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${e}</p>
          <p><b>Views</b> ${t}</p>
          <p><b>Comments</b> ${s}</p>
          <p><b>Downloads</b> ${d}</p>
        </div>
      </li>
    `).join("")}function L(r){l.insertAdjacentHTML("beforeend",b(r)),h.refresh()}function w(){l.innerHTML=""}function S(){u.classList.remove("is-hidden")}function q(){u.classList.add("is-hidden")}const c=document.querySelector(".form");c.addEventListener("submit",async r=>{r.preventDefault();const o=r.target.elements["search-text"].value.trim();if(!o){n.warning({message:"Please enter a search query!",position:"topRight"});return}w(),S();try{const i=await g(o);if(i.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(i.hits)}catch{n.error({message:"Something went wrong. Try again later!",position:"topRight"})}finally{q(),c.reset()}});
//# sourceMappingURL=index.js.map
