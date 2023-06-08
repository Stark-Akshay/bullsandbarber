importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyC3Gerzi6t8bqfR3gGEOLqRG4Ub7Wl-qCI",
  authDomain: "bulls-and-barber.firebaseapp.com",
  projectId: "bulls-and-barber",
  storageBucket: "bulls-and-barber.appspot.com",
  messagingSenderId: "566410836080",
  appId: "1:566410836080:web:546a6b4cce04b1724e1cb5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
