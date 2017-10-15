jQuery(document).ready(function($) {

  var offset = 40;

  $('.navbar li a').click(function(event) {
    if ( $(this).attr('href') && $(this).attr('href').charAt(0) == "#" ) {
      event.preventDefault();
      $(this).blur();
      $($(this).attr('href'))[0].scrollIntoView();
      scrollBy(0, -offset);

      if ($('.icon-bar').is(":visible")) {
        setTimeout(function() {
          $('.navbar-toggle').click()
        }, 100);
      }
    }
  });

});
