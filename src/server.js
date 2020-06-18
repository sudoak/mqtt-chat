// var mqtt = require('mqtt')
// const URL = 'mqtt://13.235.134.158';
// const options = {
//   clientId: 'mqttjs01',
//   username: 'admin',
//   password: "rooter",
//   clean: true
// }
// var client  = mqtt.connect(URL, options);

// // client.on('connect', function () {
// //   // client.subscribe('presence', function (err) {
// //   //   if (!err) {
// //   //     setInterval(function(){
// //   //       client.publish('presence', 'Hello mqtt')
// //   //     }, 5000);
// //   //   }
// //   // })
// // });

// client.on('message', (topic, messsage) => {
//   console.log(topic, messsage);
// });

// client.on('error', function(err){
//   console.log(err);
// });

// setInterval(function(){
//   client.publish('presence', `Hello mqtt now ${Date.now()}`)
// }, 5000);

// client.publish('presence', `Hello mqtt now surprise ${Date.now()}`)

const MQTT = require('./index');

const porter = new MQTT()
porter.subscribe(['test']);
porter.pubMessage('presence', 'kutte');