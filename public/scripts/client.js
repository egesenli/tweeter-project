// /*
//  * Client-side JS logic goes here
//  * jQuery is already loaded
//  * Reminder: Use (and do all your DOM work in) jQuery's document ready function
//  */


$(document).ready(function () {

  // Function to escape some text, and then use it inside .html() or $()
  const escape = str => {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // Show the error message
  const showErrorMessage = (message) => {
    $('#nt-error-msg').text(message);
    $('#new-tweet-error').show();
  };

  // Hide the error message
  const hideErrorMessage = () => {
    $('#new-tweet-error').hide();
    $('#nt-error-msg').text('');
  };

  // Function to create a tweet element on the timeline
  const createTweetElement = function (tweetData) {
    const $tweet = $(`<article class="tweet">
    <header class="container-row">
    <div class="profile container-row">
    <img class="th-header img" src=${escape(tweetData.user.avatars)} >
      <p id="username-position">${escape(tweetData.user.name)}</p>
    </div>
    <p class="handle">${escape(tweetData.user.handle)}</p>
    </div>
    </header>
    <section class="tweet-content">
      <p>${escape(tweetData.content.text)} </p>
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

  // Function to render tweets on the timeline. Loops through tweets. Calls createTweetElement for each tweet. Takes return value and appends it to the tweets container
  const renderTweets = (tweets) => {
    // Sorts tweets by most recent
    tweets.reverse();
    $('#tweets-container').empty();
    for (const tweet of tweets) {
      $('#tweets-container').append(createTweetElement(tweet));
    }
  }
  // Function to load tweets from the database and render them on the timeline using AJAX
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

  $(document).ready(async function() {
    await tweetLoader();
    $('.new-tweet form').submit(async function (event) {
      event.preventDefault();

      // Validation checks
      const tweetContent = $(this).find('textarea').val().trim();
      if (tweetContent === "" || tweetContent === null) {
        showErrorMessage('Please enter a tweet before tweeting!');
        return;
      }
      if (tweetContent.length > 140) {
        showErrorMessage('Please keep tweet within 140 characters in length!')
        return;
      }

      console.log('New tweet submitted');
      try {
        await $.ajax({
          type: 'POST',
          url: '/tweets',
          data: $(this).serialize(),
        });
        tweetLoader();
        hideErrorMessage();
        // Clear the textarea element after submitting new tweet
        $('.new-tweet form textarea').val('');
        // Reset the character counter or clear the textarea element
        $('#tweet-counter').text(140);
      } catch (error) {
        console.error(error);
      }
    });
  });
});