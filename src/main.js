import './output.css'
import drawers from './images/drawers.jpg'
import { loadSvg } from './load-svg.js'
import { setupFooter } from './footer.js'
import { setupAttribution } from './attribution.js'

document.querySelector('#app').innerHTML = /* html */`
  <div class="flex flex-col w-4/5 min-w-[326px] max-w-[730px] mx-auto rounded-lg overflow-hidden md:flex-row md:overflow-visible">
    <header class="relative h-0 pb-[max(50%,_199px)] md:basis-2/5 md:max-w-[285px] md:flex-shrink-0 md:h-auto md:pb-0 md:rounded-l-lg md:overflow-hidden">
      <img class="absolute w-full h-full object-cover md:static md:object-left" src=${drawers} alt="Drawers">
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
`

setupFooter(document.querySelector('#footer'))
setupAttribution(document.querySelector('#attribution'))
loadSvg()
