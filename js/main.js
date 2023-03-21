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


const initialCoed = document.querySelector('.story_container-text');

const cord = initialCoed.getBoundingClientRect();

console.log(cord);



 svgCrab.style.bottom = `${window.pageYOffset +200}px`
 svgOctopus.style.bottom = `${window.pageYOffset + -1120}px`
 svgDex.style.bottom = `${window.pageYOffset + -950}px`
 seeUrchinSmall.style.bottom = `${window.pageYOffset + -1200}px`


window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrollTop);
    
    svgCrab.style.bottom = `${scrollTop * 3 / 22  + 200}px`
    svgFish.style.bottom = `${scrollTop * 3 / 22}px`
    svgOctopus.style.bottom = `${scrollTop * 3 / 22 + -1120}px`
    svgDex.style.bottom = `${scrollTop * 3 / 22 + -950}px`
    seeUrchinSmall.style.bottom = `${scrollTop * 3 / 22 + -1200}px`

  });


