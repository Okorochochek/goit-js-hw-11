import{a as d,S as f,i as n}from"./assets/vendor-hdXJlIEV.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const m="52463480-0d50310a478010cdb93f02561",y="https://pixabay.com/api/";async function p(s){try{return(await d.get(y,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw console.error("Прмилка при запиті Pixabay:",t),t}}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");let h=new f(".gallery a");function g(s){const t=s.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${r.likes}</p>
          <p><b>Views:</b> ${r.views}</p>
          <p><b>Comments:</b> ${r.comments}</p>
          <p><b>Downloads:</b> ${r.downloads}</p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",t),h.refresh()}function b(){l.innerHTML=""}function L(){u.classList.remove("hidden")}function w(){u.classList.add("hidden")}const c=document.querySelector(".form");c.addEventListener("submit",async s=>{s.preventDefault();const t=c.elements["search-text"].value.trim();if(!t){n.warning({title:"Warning",message:"Please enter a search query"});return}b(),L();try{const r=await p(t);r.hits.length===0?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):g(r.hits)}catch(r){n.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error(r)}finally{w()}});
//# sourceMappingURL=index.js.map
