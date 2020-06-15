var mqtt = require('mqtt')
const URL = 'mqtt://13.235.134.158';
const options = {
  clientId: 'mqttjs01',
  username: 'admin',
  password: "rooter",
  clean: true
}
var client  = mqtt.connect(URL, options);

client.on('connect', function () {
  client.subscribe('presence', function (err) {
    if (!err) {
      setInterval(function(){
        client.publish('presence', 'Hello mqtt')
      }, 5000);
    }
  })
});

client.on('error', function(err){
  console.log(err);
});
