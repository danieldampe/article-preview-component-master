(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const i="https://danieldampe.github.io/article-preview-component-master/assets/drawers-Dp_c42v-.jpg";function n(){document.querySelectorAll("[data-load]").forEach(async r=>{try{const a=await fetch(r.dataset.load);if(!a.ok)throw a;const s=await a.text();r.innerHTML=s}catch(a){console.error(a)}finally{delete r.dataset.load}})}const c="https://danieldampe.github.io/article-preview-component-master/assets/avatar-michelle-GPnPjUAe.jpg",u="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%3e%3cpath%20fill='%23FFF'%20d='M18.896%200H1.104C.494%200%200%20.494%200%201.104v17.793C0%2019.506.494%2020%201.104%2020h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583%201.578-3.99%203.883-3.99%201.104%200%202.052.082%202.329.119v2.7h-1.598c-1.254%200-1.496.597-1.496%201.47v1.928h2.989l-.39%203.018h-2.6V20h5.098c.608%200%201.102-.494%201.102-1.104V1.104C20%20.494%2019.506%200%2018.896%200z'/%3e%3c/svg%3e",h="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='17'%3e%3cpath%20fill='%23FFF'%20d='M20%202.172a8.192%208.192%200%2001-2.357.646%204.11%204.11%200%20001.804-2.27%208.22%208.22%200%2001-2.605.996A4.096%204.096%200%200013.847.248c-2.65%200-4.596%202.472-3.998%205.037A11.648%2011.648%200%20011.392%201a4.109%204.109%200%20001.27%205.478%204.086%204.086%200%2001-1.858-.513c-.045%201.9%201.318%203.679%203.291%204.075a4.113%204.113%200%2001-1.853.07%204.106%204.106%200%20003.833%202.849A8.25%208.25%200%20010%2014.658a11.616%2011.616%200%20006.29%201.843c7.618%200%2011.922-6.434%2011.663-12.205A8.354%208.354%200%200020%202.172z'/%3e%3c/svg%3e",m="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%3e%3cpath%20fill='%23FFF'%20d='M10%200C4.478%200%200%204.477%200%2010c0%204.237%202.636%207.855%206.356%209.312-.088-.791-.167-2.005.035-2.868.182-.78%201.172-4.97%201.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428%201.81-2.428.852%200%201.264.64%201.264%201.408%200%20.858-.545%202.14-.828%203.33-.236.995.5%201.807%201.48%201.807%201.778%200%203.144-1.874%203.144-4.58%200-2.393-1.72-4.068-4.177-4.068-2.845%200-4.515%202.135-4.515%204.34%200%20.859.331%201.781.745%202.281a.3.3%200%2001.069.288l-.278%201.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874%200-3.154%202.292-6.052%206.608-6.052%203.469%200%206.165%202.473%206.165%205.776%200%203.447-2.173%206.22-5.19%206.22-1.013%200-1.965-.525-2.291-1.148l-.623%202.378c-.226.869-.835%201.958-1.244%202.621.937.29%201.931.446%202.962.446%205.522%200%2010-4.477%2010-10S15.522%200%2010%200z'/%3e%3c/svg%3e",d="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='15'%20height='13'%3e%3cpath%20fill='%236E8098'%20d='M15%206.495L8.766.014V3.88H7.441C3.33%203.88%200%207.039%200%2010.936v2.049l.589-.612C2.59%2010.294%205.422%209.11%208.39%209.11h.375v3.867L15%206.495z'/%3e%3c/svg%3e";function f(r){r.classList.add(..."flex items-start overflow-hidden md:relative md:overflow-visible".split(" ")),r.innerHTML=`
    <div id="author" class="flex justify-between items-center basis-full flex-shrink-0 pt-3 pb-5 px-8 bg-white transition-transform md:p-0 md:translate-x-0">
      <div class="flex gap-x-4">
        <img class="w-10 aspect-square rounded-full" src=${c} alt="Michelle">
        <div>
          <div class="font-bold text-body text-very-dark-grayish-blue">Michelle Appleton</div>
          <div class="text-body text-desaturated-dark-blue">28 Jun 2020</div>
        </div>
      </div>
      <div>
        <button class="p-2 rounded-full bg-light-grayish-blue hover:bg-grayish-blue [&:hover_path]:fill-white" data-load=${d} data-button></button>
      </div>
    </div>
    <div id="social" class="flex justify-between items-center basis-full flex-shrink-0 py-[1.1rem] px-8 bg-very-dark-grayish-blue rounded-b-lg transition-transform md:absolute md:top-0 md:right-0 md:z-50 md:rounded-lg md:translate-x-[43.25%] md:-translate-y-[140%] after:absolute after:hidden after:w-4 after:aspect-square after:left-2/4 after:bottom-0 after:bg-inherit after:-translate-x-2/4 after:translate-y-2/4 after:rotate-45 md:after:block">
      <div class="flex gap-x-[1.125rem]">
        <div class="uppercase font-bold text-body tracking-[.275rem] text-desaturated-dark-blue">Share</div>
        <div class="flex items-center gap-x-4">
          <div data-load=${u}></div>
          <div data-load=${h}></div>
          <div data-load=${m}></div>
        </div>
      </div>
      <div class="md:hidden">
        <button class="p-2 rounded-full bg-light-grayish-blue hover:bg-grayish-blue [&:hover_path]:fill-white" data-load=${d} data-button></button>
      </div>
    </div>
  `;const s=document.querySelector("#social"),l=document.querySelector("#author");document.querySelectorAll("[data-button]").forEach(t=>{t.addEventListener("click",()=>{l.classList.toggle("-translate-x-full"),s.classList.toggle("-translate-x-full"),s.classList.toggle("md:hidden")})})}function p(r){r.classList.add(..."absolute left-0 bottom-0 w-full text-center text-[11px] [&_a]:text-[hsl(228,_45%,_44%)]".split(" ")),r.innerHTML=`
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/danieldampe">danieldampe</a>.
  `}document.querySelector("#app").innerHTML=`
  <div class="flex flex-col w-4/5 min-w-[326px] max-w-[730px] mx-auto rounded-lg overflow-hidden md:flex-row md:overflow-visible">
    <header class="relative h-0 pb-[max(50%,_199px)] md:basis-2/5 md:max-w-[285px] md:flex-shrink-0 md:h-auto md:pb-0 md:rounded-l-lg md:overflow-hidden">
      <img class="absolute w-full h-full object-cover md:static md:object-left" src=${i} alt="Drawers">
    </header>
    <div class="md:py-8 md:px-10 md:bg-white md:rounded-r-lg">
      <div class="pt-9 pb-5 px-8 bg-white md:p-0 md:mb-6 md:bg-transparent">
        <h1 class="mb-3 font-bold text-very-dark-grayish-blue md:text-[1.275rem] md:leading-7">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
        <p class="w-[98%] text-body leading-5 text-desaturated-dark-blue md:w-full md:text-[13.25px]">Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
      </div>
      <footer id="footer"></footer>
    </div>
  </div>
  <div id="attribution"></div>
`;f(document.querySelector("#footer"));p(document.querySelector("#attribution"));n();
