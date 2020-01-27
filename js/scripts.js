(function() {
  var itemClassName = "slider__photo";
  (items = document.getElementsByClassName(itemClassName)),
    (totalItems = items.length),
    (slide = 0);

  // Set event listeners
  function setEventListeners() {
    var next = document.getElementsByClassName("slider__button--next")[0],
      prev = document.getElementsByClassName("slider__button--prev")[0];

    next.addEventListener("click", getNext);
    prev.addEventListener("click", getPrev);
  }

  
    // TODO
      //get items with index of slide, remove active class from it
        //slide++ to increase the value of slide by 1
        //get items element with index of slide, add active class to it

    function getNext() {  
    items[slide].classList.remove("active"); //This is the same as (items = document.getElementsByClassName(itemClassName)),
    
    if (slide === totalItems - 1){
    slide = 0;
    } else{
    slide++;
    } // This is increasing the slide by 1 on each click
    items[slide].classList.add("active");
}
  

  function getPrev() {
      items[slide].classList.remove('active');

      if (slide === 0){
          slide = totalItems - 1;
      } else {
        slide--;
      }
     
      items[slide].classList.add('active');
  }

  
  function initSlider() {
    // setInitialClasses();
    setEventListeners();

    // Set moving to false so that the slider becomes interactive
    moving = false;
  }

  initSlider();
})();
