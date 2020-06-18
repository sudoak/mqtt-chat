const MQTT = require("mqtt");
const URL = 'mqtt://13.235.134.158';
const options = {
  clientId: 'mqttjs01',
  username: 'admin',
  password: "rooter",
  clean: true
}

const ERROR = 'error';
const MESSAGE = 'message'
class MQTTServer {
  constructor(){
    this.client = MQTT.connect(URL, options);
    this.client.addListener(ERROR,this.handleError);
    this.client.addListener(MESSAGE,this.handleMessage);
  }
  handleError(err) {
    console.log('====================================');
    console.log(err);
    console.log('====================================');
  }

  handleMessage(msg) {
    console.log('====================================');
    console.log(`msg: ${msg}`);
    console.log('====================================');
  }

  subscribe(topics) {
    topics.map(function(topic){
      this.client.subscribe(topic);
    }.bind(this));
  }
  pubMessage(topic, message) {
    this.client.publish(topic, message)
  }
}

module.exports = MQTTServer;