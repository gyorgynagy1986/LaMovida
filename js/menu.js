const photoWork = document.querySelectorAll(".forefect");    
const cursorMove = document.querySelector(".cursor"); 
photoWork.forEach(element => {

  element.addEventListener("mousemove" , cursor);

  function cursor(e) {

    console.log(e);
  
  cursorMove.style.top = e.pageY + 'px';
  cursorMove.style.left = e.pageX + 'px';
}
      
element.addEventListener("mouseleave", () => {
  cursorMove.classList.remove("cursor-addclass");
  cursorMove.classList.add("cursor");

          
      });
    
element.addEventListener("mouseover", () => {
  cursorMove.classList.add("cursor-addclass");
  cursorMove.classList.add("cursor");

      });

}); 


console.log('hello');