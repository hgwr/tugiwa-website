jQuery(document).ready(function($) {

  var offset = 40;

  $('.navbar li a').click(function(event) {
    event.preventDefault();
    $(this).blur();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
  });

});
