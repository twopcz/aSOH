$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

$(function() {
  $('#hide').hide();
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('#hide').fadeIn();
  } else {
    $('#hide').fadeOut();
  }
});