$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('#hide').fadeIn();
  } else {
    $('#hide').fadeOut();
  }
});