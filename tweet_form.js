function addNewTweets() {
  $('.loader').show();

  window.setTimeout(function(){
    [1,2,3,4,5,6,7,8,9].forEach(function(n){
      var tweetMessage = 'Tweet #' + n;
      var tweet = $('<div class="tweet">' + tweetMessage + '</div>');

      tweet.appendTo('.tweets');
    });
    
    $('.loader').hide();
  }, 2000)
}

$(document).ready(function(){
  $('.profile form textarea').on('focus', function() {
    $('.actions').show();
  }).on('blur', function() {
    $('.actions').hide();
  });

  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      addNewTweets();
    }
  });
});