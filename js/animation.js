$(function() {
  $('#trigger01').on('inview', function(event, isInView) {
    if (isInView) {
      $(".pyon1").animate({
        opacity: 1,
        'left': '15%'
      }, 700);
    }
  });
  $('#trigger02').on('inview', function(event, isInView) {
    if (isInView) {
      $(".pyon2").animate({
        opacity: 1,
        'right': '14%'
      }, 700);
    }
  });
  $('#trigger03').on('inview', function(event, isInView) {
    if (isInView) {
      $(".pyon3").animate({
        opacity: 1,
        'left': '15%'
      }, 700);
    }
  });
});
