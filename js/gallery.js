
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
      
      var counter = `${item}`;

      bgImage.style.backgroundImage=`url(/assets/gallery/photos/${item}.webp)`;
      index.textContent = `${item}`
    
      photos =  function (c) {

        bgImage.style.backgroundImage=`url(/assets/gallery/photos/${c}.webp)`;
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

    let hasMoved = false;
    let hasTriggeredLC = false;
    let hasTriggeredRC = false;
    let startX;
    
    bgImage.addEventListener('touchstart', function(e) {
      startX = e.touches[0].clientX;
      hasMoved = false;
      hasTriggeredLC = false;
      hasTriggeredRC = false;
    });
    
    bgImage.addEventListener('touchmove', function(e) {
      var distX = e.touches[0].clientX - startX;
      
      if (distX < -50) {
        // User is moving finger to the left
        hasMoved = true;
        if (!hasTriggeredLC) {
          rc();
          hasTriggeredLC = true;
          hasTriggeredRC = false;
        }
      } else if (distX > 50) {
        // User is moving finger to the right
        hasMoved = true;
        if (!hasTriggeredRC) {
          lc();
          hasTriggeredRC = true;
          hasTriggeredLC = false;
        }
      }
    });
    
    bgImage.addEventListener('touchend', function(e) {
      if (hasMoved) {
        hasTriggeredLC = false;
        hasTriggeredRC = false;
      }
    });
}

// *****************************GALLERY ***********************************************//