var mqtt = require('mqtt')
const URL = 'mqtt://localhost';
const options = {
  clientId: 'mqttjs012',
  username: 'admin',
  password: "rooter",
  clean: true
}
var client  = mqtt.connect(URL, options);

client.on('connect', function () {
  console.log("connected");
  client.subscribe('presence', (err)=>console.log(err))
});

client.on('error', function(err){
  console.log(err);
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  //client.end()
})