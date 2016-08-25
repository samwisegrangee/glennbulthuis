$( document ).ready(function() {

//Lightbox Display with Clicked Image
  $('#lightBox').css('height', $(document).outerWidth() + 'px');//for when you click on an image
  $('.imgSm').click(function () {
      var src = $(this).attr('src'); //get the source attribute of the clicked image
      $('#lightBox img').attr('src', src); //assign it to the tag for your fullscreen div
      $('#lightBox').fadeIn();
  });
  $('#lightBox').click(function () {
    $(this).fadeOut(); //this will hide the fullscreen div if you click it
  });
  //$('.modal').click(function(){
  //  $(this).fadeOut();
//  })

  //Toggle visibility of Song Players by Id
  function toggleDiv(divId) {
    $("#"+divId).toggle(1000);
  };
});
