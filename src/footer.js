import avatar from './images/avatar-michelle.jpg'
import iconFacebook from './images/icon-facebook.svg'
import iconTwitter from './images/icon-twitter.svg'
import iconPinterest from './images/icon-pinterest.svg'
import iconShare from './images/icon-share.svg'

export function setupFooter (element) {
  const parentClass = 'flex items-start overflow-hidden md:relative md:overflow-visible'

  element.classList.add(...parentClass.split(' '))

  element.innerHTML = /* html */`
    <div id="author" class="flex justify-between items-center basis-full flex-shrink-0 pt-3 pb-5 px-8 bg-white transition-transform md:p-0 md:translate-x-0">
      <div class="flex gap-x-4">
        <img class="w-10 aspect-square rounded-full" src=${avatar} alt="Michelle">
        <div>
          <div class="font-bold text-body text-very-dark-grayish-blue">Michelle Appleton</div>
          <div class="text-body text-desaturated-dark-blue">28 Jun 2020</div>
        </div>
      </div>
      <div>
        <button class="p-2 rounded-full bg-light-grayish-blue hover:bg-grayish-blue [&:hover_path]:fill-white" data-load=${iconShare} data-button></button>
      </div>
    </div>
    <div id="social" class="flex justify-between items-center basis-full flex-shrink-0 py-[1.1rem] px-8 bg-very-dark-grayish-blue rounded-b-lg transition-transform md:absolute md:top-0 md:right-0 md:z-50 md:rounded-lg md:translate-x-[43.25%] md:-translate-y-[140%] after:absolute after:hidden after:w-4 after:aspect-square after:left-2/4 after:bottom-0 after:bg-inherit after:-translate-x-2/4 after:translate-y-2/4 after:rotate-45 md:after:block">
      <div class="flex gap-x-[1.125rem]">
        <div class="uppercase font-bold text-body tracking-[.275rem] text-desaturated-dark-blue">Share</div>
        <div class="flex items-center gap-x-4">
          <div data-load=${iconFacebook}></div>
          <div data-load=${iconTwitter}></div>
          <div data-load=${iconPinterest}></div>
        </div>
      </div>
      <div class="md:hidden">
        <button class="p-2 rounded-full bg-light-grayish-blue hover:bg-grayish-blue [&:hover_path]:fill-white" data-load=${iconShare} data-button></button>
      </div>
    </div>
  `

  const social = document.querySelector('#social')
  const author = document.querySelector('#author')
  const buttons = document.querySelectorAll('[data-button]')

  buttons.forEach((elm) => {
    elm.addEventListener('click', () => {
      author.classList.toggle('-translate-x-full')
      social.classList.toggle('-translate-x-full')
      social.classList.toggle('md:hidden')
    })
  })
}
