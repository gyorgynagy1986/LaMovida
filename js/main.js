// Mobile menu


const mobilMenuClose = document.querySelector('.mobile-menu-close');
const mobilOpen = document.querySelector('.mobile-menu-open');

mobilMenuClose.addEventListener('click', ()=> {
  console.log('clicked');

  document.querySelector('.nav-mobile-container').classList.add('hidden')

})

mobilOpen.addEventListener('click', ()=> {
  console.log('clicked-open');
  
  document.querySelector('.nav-mobile-container').classList.remove('hidden')


})



// STICKY NAVIGATIOn

const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const prefixHeight = document.querySelector('.nav_container')
const navLogo = document.querySelector('.nav-logo');
const navLogoSticky = document.querySelector('.nav-logo-sticky');


console.log(navLogo);

const stickyNav = function(entries) {
  const [entry] = entries;
  if(!entry.isIntersecting) {
    nav.classList.add('sticky');
    nav.classList.add('slide-in-top');
    prefixHeight.classList.add('nav-c-10');
    navLogo.classList.add('display-none');
    navLogoSticky.classList.remove('display-none');
  } else {
    nav.classList.remove('sticky');
    nav.classList.remove('slide-in-top');
    prefixHeight.classList.remove('nav-c-10');
    navLogo.classList.remove('display-none');
    navLogoSticky.classList.add('display-none');

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


// STICKY NAVIGATION END


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



//const initialCoed = document.querySelector('.story_container-text');
//const cord = initialCoed.getBoundingClientRect();
//
//console.log(cord);

const mediaQuery = window.matchMedia('(min-width: 600px)');

// Add a listener to the media query
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
       console.log(scrollTop);
       
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
    // Do something else if the media query doesn't match
  }
}

// Call the function initially to check the media query
handleMediaQueryChange(mediaQuery);




