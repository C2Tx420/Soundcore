const slide1 = document.querySelector('.review__slide1-wrap')
const slide1Prev = document.querySelector('.review__slide1 .arrow:first-child')
const slide1Next = document.querySelector('.review__slide1 .arrow:last-child')
const slide2 = document.querySelector('.review__slide2')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal .modal__item-close')
const sheroButton = document.querySelector('.shero .button.--main')
const menu = document.querySelector('.menu')
const mobileNav = document.querySelector('.nav')
const navClose = document.querySelector('.nav .nav__close')
const adsClose = document.querySelector('.ads__close')
const ads = document.querySelector('.ads')

var slider1 = new Flickity( slide1, {
    cellAlign: 'center',
    contain: false,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    autoPlay: 1500,
  });
  slide1Prev.addEventListener('click', () => {
      slider1.previous()
  })
  slide1Next.addEventListener('click', () => {
    slider1.next()
})

var slider2 = new Flickity( slide2, {
    cellAlign: 'center',
    contain: false,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    autoPlay: 1500,
    freeScroll: true,
    imagesLoaded: true
  });


sheroButton.addEventListener('click',()=>{
    modal.classList.add('--active')
})

modalClose.addEventListener('click',()=>{
    modal.classList.remove('--active')
})

menu.addEventListener('click',()=>{
    mobileNav.classList.add('--active')
})

navClose.addEventListener('click',()=>{
    mobileNav.classList.remove('--active')
})

adsClose.addEventListener('click', ()=>{
    ads.style.display = 'none'
})