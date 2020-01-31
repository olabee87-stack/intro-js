(function() {
  var itemClassName = "slider__photo";
  (items = document.getElementsByClassName(itemClassName)),
    (totalItems = items.length),
    (slide = 0);

  // Set event listeners
  function setEventListeners() {
    var next = $(".slider__button--next")[0];
    //var next = document.getElementsByClassName("slider__button--next")[0],
    //prev = document.getElementsByClassName("slider__button--prev")[0];
    prev = $(".slider__button--prev")[0];

    next.addEventListener("click", getNext);
    //prev.addEventListener("click", getPrev);
    $(prev).on("click", getPrev); //jquery version
  }

  // TODO
  //get items with index of slide, remove active class from it
  //slide++ to increase the value of slide by 1
  //get items element with index of slide, add active class to it

  function getNext() {
    $(".slider__photo")
      .eq(slide)
      .removeClass("active");

    //items[slide].removeClass("active"); //This is the same as (items = document.getElementsByClassName(itemClassName)),

    if (slide === totalItems - 1) {
      slide = 0;
    } else {
      slide++;
    } // This is increasing the slide by 1 on each click
    items[slide].addClass("active");
  }

  function getPrev() {
    $(".slider__photo")
      .eq(slide)
      .removeClass("active");
    //items[slide].removeClass("active");

    if (slide === 0) {
      slide = totalItems - 1;
    } else {
      slide--;
    }
    $(".slider__photo")
      .eq(slide)
      .addClass("active");
    //items[slide].addClass("active");
  }

  function initSlider() {
    // setInitialClasses();
    setEventListeners();

    // Set moving to false so that the slider becomes interactive
    moving = false;
  }

  initSlider();
})();
