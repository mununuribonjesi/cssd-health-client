import Pusher from 'pusher-js/react-native';

// TODO: Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher('5e56500a81479b57db25', {
  cluster: 'eu',
  forceTLS: true,
  authEndpoint: "https://shu-helth.azurewebsites.net/api/pusher",
  auth: {
      headers: {
          "authorization": "Bearer " + authToken
      }
  }
});

// TODO: Yo Muni when ur ready let me know when we can implement this 
// The idea is when you load a users page we will listen to their private channel for events
// and update their graphs and stuff
var channel = pusher.subscribe(`private-${userId}`);
channel.bind('measurements.updated', function() { /* TODO: Go fetch new data and update charts */ });