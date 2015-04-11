$( function(){

  setScroll();

  function setScroll(){
    $( "#contents" ).onepage_scroll({
      sectionContainer: "section",
      easing:           "ease",
      animationTime:    1000,
      pagination:       true,
      updateURL:        false
    });
  }
});