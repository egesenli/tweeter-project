// Responsible for the character counter in the tweet composer

$(document).ready(function() {
  var limit = 140;
  $('#tweet-text').keyup(function() {
    var text = $(this).val();
    var count = text.length;
    remaining = limit - count;
    if (remaining < 0) {
      $('#tweet-counter').addClass('exceeded');
      remaining = '-' + Math.abs(remaining);
    } else {
      $('#tweet-counter').removeClass('exceeded');
    }
    $('#tweet-counter').text(remaining);
  });
});