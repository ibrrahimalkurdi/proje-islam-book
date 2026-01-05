importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyB8-7RLi1UbixK8d-LGmH-K-SfR-GaMZ2E",
    projectId: "projeislambook",
    messagingSenderId: "577300732966",
    appId: "1:577300732966:web:df3000e0db45adf4e51ae7"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
