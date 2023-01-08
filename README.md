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

!["Write a tweet and show it on time line"](https://user-images.githubusercontent.com/36883798/211178044-03b7c69d-a0a9-475b-9b61-04bf3321a0d0.gif)

2) Tweeter is designed to be responsive, with the layout adjusting to fit different devices. On larger devices such as desktops and laptops with a screen width greater than 1024 pixels, the user's profile appears on the left and tweets are displayed on the right. On smaller devices like mobile phones and tablets, the sections are stacked with the profile on top and tweets below. 

!["Show responsiveness"](https://user-images.githubusercontent.com/36883798/211177895-92117eec-ae64-462e-9546-a725e1ba492b.gif)



3) The app has features such as tweet validation to prevent empty or excessively long tweets from being posted. 

!["Can't write an empty tweet"](https://user-images.githubusercontent.com/36883798/211177958-b4e895e3-bfbf-4310-b46c-ed8f1842efa7.gif)


4) The character limit for a tweet is limited to 140 characters. 

!["Character limit error"](https://user-images.githubusercontent.com/36883798/211177989-1a8a2105-43f2-4b12-9d88-b0a15a487a3e.gif)







