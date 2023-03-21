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

console.log(svgCrab);



// svgCrab.style.bottom = `${window.pageYOffset + 0}px`

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrollTop);
    
    svgCrab.style.bottom = `${scrollTop * 3 / 22 + 0}px`
    svgFish.style.bottom = `${scrollTop * 3 / 22}px`
  });


