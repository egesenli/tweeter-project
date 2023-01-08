# Tweeter Project

Tweeter is a clone project of Twitter and it's a single-page web application that allows users to post short messages. The app is built using HTML, CSS, JavaScript, jQuery, and AJAX on the front end, and Node, Express, and MongoDB on the back end.

To use the app, install the necessary dependencies, start the web server, and visit the app in a web browser.

## Getting Started

1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>
3. Go to <http://localhost:8080/> in your browser.

## Dependencies

- express
- node 5.10.x or above
- body-parser
- chance
- md5

# Features

1) Each tweet includes the user's name, handle, and social media icons. 

!["Write a tweet and show it on time line"](https://user-images.githubusercontent.com/36883798/211216447-974e1f92-518a-47e0-bffb-a3c4394c5cf4.gif)

2) Tweeter is designed to be responsive, with the layout adjusting to fit different devices. On larger devices such as desktops and laptops with a screen width greater than 1024 pixels, the user's profile appears on the left and tweets are displayed on the right. On smaller devices like mobile phones and tablets, the sections are stacked with the profile on top and tweets below. 

!["Show responsiveness"](https://user-images.githubusercontent.com/36883798/211216445-5c1ce972-ddb0-4589-8bc5-5a90801a8339.gif)



3) The app has features such as tweet validation to prevent empty or excessively long tweets from being posted. 

!["Can't write an empty tweet"](https://user-images.githubusercontent.com/36883798/211216444-56bebd53-27c8-4535-9b2c-a92c8a3e6f30.gif)


4) The character limit for a tweet is limited to 140 characters. 

!["Character limit error"](https://user-images.githubusercontent.com/36883798/211216443-e1691bc7-f79d-403c-a65e-dd83c78716ab.gif)