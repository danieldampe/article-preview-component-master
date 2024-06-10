export function setupAttribution (element) {
  const parentClass = 'absolute left-0 bottom-0 w-full text-center text-[11px] [&_a]:text-[hsl(228,_45%,_44%)]'

  element.classList.add(...parentClass.split(' '))

  element.innerHTML = /* html */`
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/danieldampe">danieldampe</a>.
  `
}
