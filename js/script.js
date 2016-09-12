$( document ).ready(function() {

//Lightbox Display with Clicked Image
  $('#lightBox').css('height', $(document).outerWidth() + 'vh');//for when an image is clicked
  $('.imgSm').click(function () {
      var src = $(this).attr('src'); //get the source attribute of the clicked image
      var title=$(this).attr('title'); //get the title attribut of clicked image
      $('#lightBox img').attr('src', src); //assign src to the fullscreen div tag
      $('#lightBox img').attr('title', title); //assign title to the fullscreen div tag
      $('#img-capt').html(title);
      $('#lightBox').fadeIn();
  });

  $('#lightBox').click(function () {
    $(this).fadeOut(); //this will hide the fullscreen div if you click it
  });
});


  //$('.modal').click(function(){
  //  $(this).fadeOut();
//  })

//Toggle visibility of Song Players by Id
function toggleDiv(divId) {
  $("#"+divId).toggle(1000);
};
