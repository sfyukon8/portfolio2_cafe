
$(document).ready(function() {
$('.slider').bxSlider({
    auto: true,
    pause: 4000,
    pager: false,
    controls: false,
    mode: 'fade'
  });
});

$(function() {
  $('a[href^="#"]').click(function() {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
});

$(function(jQuery) {
  $(".pagetop").hide();
  $('body').append(
    $('<div class=".pagetop">')
    .append(
      $('<a href="#page"> </a>')
      .click(function() {
        $('html,body').animate({
          scrollTop: 0
        }, 'fast');
        return false
      })
    )
  );
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.pagetop').fadeIn();
    } else {
      $('.pagetop').fadeOut();
    }
  });

