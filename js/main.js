
const svgCrab = document.querySelector('.parallax-img-crab');
const svgFish = document.querySelector('.svg-container-fish');
const svgOctopus = document.querySelector('.svg-container-octopus');
const svgDex = document.querySelector('.svg-container-dec');
const seeUrchinSmall = document.querySelector('.svg-container-seaurchinsmall');
const fishSteak = document.querySelector('.svg-container-fishSteak');
const flower = document.querySelector('.svg-container-flower');
const shell = document.querySelector('.svg-container-shell');
const something = document.querySelector('.svg-container-something');
const smshell = document.querySelector('.svg-container-smshell');
const bgseaurchinsmall = document.querySelector('.svg-container-bgseaurchinsmall');

const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const prefixHeight = document.querySelector('.nav_container')
const navLogo = document.querySelector('.nav-logo');
const navLogoSticky = document.querySelector('.nav-logo-sticky');
const logoContainer = document.querySelector('.logo-container');
const mobilMenuClose = document.querySelector('.mobile-menu-close');
const mobilOpen = document.querySelector('.mobile-menu-open');

const navMobile = document.querySelector('.nav-mobile');
const stickyMmobileLogo = document.querySelector('.sticky-mobile-logo');
const mobileLogo = document.querySelector('.nav-logo-sticky-mobile');

const navMobileContainerHeader = document.querySelector('.nav-mobile-container-header');

// MOBILE 

mobilMenuClose.addEventListener('click', ()=> {

  document.querySelector('.nav-mobile-container').classList.add('hidden')
  document.querySelector('html').classList.remove('overflow-hidden')

})

mobilOpen.addEventListener('click', ()=> {
  
  document.querySelector('.nav-mobile-container').classList.remove('hidden')
  document.querySelector('html').classList.add('overflow-hidden')

})

// STICKY NAV DESKTOP

const stickyNav = function(entries) {
  const [entry] = entries;
  if(!entry.isIntersecting) {
    nav.classList.add('sticky');
    nav.classList.add('slide-in-top');
    navMobile.classList.add('sticky-tablet');
    prefixHeight.classList.add('nav-c-10');
    navLogo.classList.add('display-none');
    logoContainer.classList.add('display-none');
    navLogoSticky.classList.remove('display-none');
    mobileLogo.classList.remove('display-none-mobile');
    stickyMmobileLogo.classList.add('display-none-mobile');
    navMobileContainerHeader.classList.add('h-7');
  } else {
    nav.classList.remove('sticky');
    navMobile.classList.remove('sticky-tablet');
    nav.classList.remove('slide-in-top');
    prefixHeight.classList.remove('nav-c-10');
    navLogo.classList.remove('display-none');
    logoContainer.classList.remove('display-none');
    navLogoSticky.classList.add('display-none');
    mobileLogo.classList.add('display-none-mobile');
    stickyMmobileLogo.classList.remove('display-none-mobile');
    navMobileContainerHeader.classList.remove('h-7');
  }
}

const headerObserver = new IntersectionObserver(
  stickyNav, {
    root:  null,
    threshold: 0,
    rootMargin : '-90px'
  }
);

headerObserver.observe(header);

// Parallax < 600 PX

const mediaQuery = window.matchMedia('(min-width: 1200px)');

mediaQuery.addListener(handleMediaQueryChange);

function handleMediaQueryChange(event) {

  if (event.matches) {

    svgCrab.style.top = `${window.pageYOffset + 300}px`
    svgFish.style.bottom = `${window.pageYOffset -700}px`
    svgOctopus.style.bottom = `${window.pageYOffset + -1120}px`
    svgDex.style.bottom = `${window.pageYOffset + -950}px`
    seeUrchinSmall.style.top = `${window.pageYOffset  + 1000}px`
    fishSteak.style.top = `${window.pageYOffset + 1450}px`
    flower.style.top = `${window.pageYOffset + 1600}px`
    shell.style.top = `${window.pageYOffset + 2400}px`
    something.style.top = `${window.pageYOffset + 1800}px`
    smshell.style.top = `${window.pageYOffset + 2500}px`
    bgseaurchinsmall.style.top = `${window.pageYOffset + 2350}px`
   
   
   window.addEventListener('scroll', function() {
       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
       
       svgCrab.style.top = `${scrollTop * 3 / 26  + 300}px`
       svgFish.style.bottom = `${scrollTop * 3 / 22 + -700}px`
       svgOctopus.style.bottom = `${scrollTop * 3 / 22 + -1120}px`
       svgDex.style.bottom = `${scrollTop * 3 / 28 + -950}px`
       seeUrchinSmall.style.top = `${scrollTop * 3 / 22 + 1000}px`
       fishSteak.style.top = `${scrollTop * 3 / 20 + 1450}px`
       flower.style.top = `${scrollTop * 3 / 20 + 1600}px`
       shell.style.top = `${scrollTop * 3 / 20 + 2400}px`
       something.style.top = `${scrollTop * 5 / 18 + 1800}px`
       smshell.style.top = `${scrollTop * 3 / 20 + 2500}px`
       bgseaurchinsmall.style.top = `${scrollTop * 3 / 20 + 2350}px`
   
     });
  } else {
    console.log('hello, where is the parralax ? :( ');
  }

}

handleMediaQueryChange(mediaQuery);





