importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyCzEn0zLbVRMPvfTcr3Ch6QMi1QlAvUGEs",
    authDomain: "rabbit-bazaar.firebaseapp.com",
    projectId: "rabbit-bazaar",
    storageBucket: "rabbit-bazaar.appspot.com",
    messagingSenderId: "861515579498",
    appId: "1:861515579498:web:8e70c939e193cbcc6a0a13"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});