// Mobile menu

//const loader = document.getElementById('preloader');
//
//window.addEventListener('load', function(load) {
//  window.removeEventListener('load', load, false);               
//  setTimeout(function(){loader.style.display = 'none'},0);
//
//},false);





const mobilMenuClose = document.querySelector('.mobile-menu-close');
const mobilOpen = document.querySelector('.mobile-menu-open');

mobilMenuClose.addEventListener('click', ()=> {
  console.log('clicked');

  document.querySelector('.nav-mobile-container').classList.add('hidden')
  document.querySelector('html').classList.remove('overflow-hidden')

})

mobilOpen.addEventListener('click', ()=> {
  console.log('clicked-open');
  
  document.querySelector('.nav-mobile-container').classList.remove('hidden')
  document.querySelector('html').classList.add('overflow-hidden')

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




// *****************************GALLERY ***********************************************//

const galleryContainer = document.querySelector('.gallery');
const bgImage = document.querySelector('.gallery-container-photos');
const right = document.querySelector('.gallery-next-right');
const left = document.querySelector('.gallery-next-left');
const index = document.querySelector('.number-of-photo');
const galleryClose = document.querySelector('.gallery-container-close');
const ClickEffectL = document.querySelector('.click-effect-left');
const ClickEffectR = document.querySelector('.click-effect-right');


// Some effect on the left, and right button

ClickEffectL.addEventListener('click', ()=> {
  ClickEffectL.style.transform = "translateX(-1px)";

  setTimeout(()=> {
    ClickEffectL.style.transform = "translateX(1px)";
  }, 150)
})

ClickEffectR.addEventListener('click', ()=> {
  ClickEffectR.style.transform = "translateX(1px)";

  setTimeout(()=> {
    ClickEffectR.style.transform = "translateX(-1px)";
  }, 150)
})

  // Close the gallery
galleryClose.addEventListener('click', ()=> {
  console.log('close');
  document.querySelector('.gallery').classList.add('hidden');
  document.querySelector('html').classList.remove('overflow-hidden');

})

// Colse the gallery if click the background

galleryContainer.addEventListener('click', (e)=> {

  if(e.target.id === 'gallery') {
    document.querySelector('.gallery').classList.add('hidden')
  }
})

  // Photo Gallery logic
document.querySelector('.gallery-covers').addEventListener('click', (e) => {
  
  // Check the ID of the photo clicked
  const selectedItem = Number(e.target.id)
  
  // Checked that the clicked element is a number above 0
  if(selectedItem !== 0) {
    
  // If > 0 then the gallery is OPEN   
    document.querySelector('.gallery').classList.remove('hidden')
    document.querySelector('html').classList.add('overflow-hidden')
    console.log('go to gallery', selectedItem);
    
  // This function handles the the gallery. SelectedItem holds the number of the photo which will be the start point of the gallery  
    galerryHandeling(selectedItem) 
    
  } else {
    console.log('opsss');
    }
  })
  
  function galerryHandeling(item) {
      
      let counter = `${item}`;

      bgImage.style.backgroundImage=`url(/assets/gallery/photos/${item}.png)`;
      index.textContent = `${item}`
    
      photos =  function (c) {

        bgImage.style.backgroundImage=`url(/assets/gallery/photos/${c}.png)`;
        bgImage.style.transition = ('.3s all');
    }
    
    numP = function () {
      index.textContent = `${counter}`
    }
    
    const rc = () => {
      if(counter > 7) {
        counter = 1; 
      } else {
        counter++;
      }
      photos(counter);
      numP();
    }
    
    const lc = () => {
      if(counter < 2) {
        counter = 8; 
      } else {
        counter--;
      }
      photos(counter);
      numP();
    }
    
    right.addEventListener('click', rc)
    left.addEventListener('click', lc)
    
    document.addEventListener('keydown', function (e) {
      if(e.key === 'ArrowLeft') lc()
      if(e.key === 'ArrowRight') rc()
     
      // Close the gallery using Escape
      if(e.key === 'Escape') {
        document.querySelector('html').classList.remove('overflow-hidden')
        document.querySelector('.gallery').classList.add('hidden')
      }
    })

}

// *****************************GALLERY ***********************************************//


