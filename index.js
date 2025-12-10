import{a as p,S as y,i as c}from"./assets/vendor-CNqCr-V-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="53458561-7a242f881cc334c9983cae72b",h="https://pixabay.com/api/";async function b(i){try{return(await p.get(h,{params:{key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(r){throw console.error("Error fetching images:",r),r}}const l=document.querySelector(".gallery"),L=new y(".gallery a",{captionsData:"alt",captionDelay:250});function w(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:d,downloads:m})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${o}" alt="${e}" />
        </a>
        <ul class="info">
          <li><b>Likes:</b> ${t}</li>
          <li><b>Views:</b> ${s}</li>
          <li><b>Comments:</b> ${d}</li>
          <li><b>Downloads:</b> ${m}</li>
        </ul>
      </li>`).join("");l.insertAdjacentHTML("beforeend",r),L.refresh()}function S(){l.innerHTML=""}const u=document.querySelector(".loader");function q(){u.classList.remove("hidden")}function P(){u.classList.add("hidden")}const f=document.querySelector(".form"),a=f.querySelector('input[name="search-text"]');f.addEventListener("submit",async i=>{i.preventDefault();const r=a.value.trim();if(!r){c.error({title:"Error",message:"Please enter a search term!",position:"topRight"}),a.focus();return}S(),q();try{const o=await b(r);if(!o.hits.length){c.warning({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.focus();return}w(o.hits)}catch{c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),a.focus()}finally{P()}});
//# sourceMappingURL=index.js.map
