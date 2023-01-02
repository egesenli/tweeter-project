// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */

$(document).ready(function () {

  const createTweetElement = function (tweetData) {
    const $tweet = $(`<article class="tweet">
    <header class="container-row">
    <div class="profile container-row">
    <img class="th-header img" src=${tweetData.user.avatars} >
      <p>${tweetData.user.name}</p>
    </div>
    <p class="handle">${tweetData.user.handle}</p>
    </div>
  </header> 
<section class="tweet-content">
<p>${tweetData.content.text} </p>
</section>
<footer>
<p class="time-stamp">${timeago.format(tweetData.created_at)}</p> 
<div>
<i class="fa-solid fa-flag"></i>
<i class="fa-solid fa-retweet"></i>
<i class="fa-solid fa-heart"></i>
</div>
</footer>
</article>`)
    return $tweet;
  }

  const renderTweets = function (tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    $('#tweets-container').empty();
    for (const tweet of tweets) {
      $('#tweets-container').append(createTweetElement(tweet));
    }
  }

  const tweetLoader = async () => {
    try {
      const response = await $.ajax({
        url: '/tweets',
        method: 'GET',
      });
      renderTweets(response);
    } catch (error) {
      console.error(error);
    }
  };
  
  $(document).ready(async function () {
    await tweetLoader();
    $('.new-tweet form').submit(async function (event) {
      event.preventDefault();
  
      // Validation checks
      const tweetContent = $(this).find('textarea').val().trim();
      if (tweetContent === "" || tweetContent === null) {
        alert("Please enter some tweet content");
        return;
      }
        if (tweetContent.length > 140) {
        alert('Tweet cannot be more than 140 characters');
        return;
        }
  
      console.log('New tweet submitted');
      try {
        const response = await $.ajax({
          type: 'POST',
          url: '/tweets',
          data: $(this).serialize(),
        });
        tweetLoader();
      } catch (error) {
        console.error(error);
      }
    });
  });
});