import mqtt from "precompiled-mqtt";


let mqttClient;


function connectClient() {
    function connectToBroker() {
        const t = Math.random().toString(36).substring(7)
        const clientIdd = "client".concat(t)
    
        const hostURL = "ws://test.mosquitto.org:8081"
    
        const options = {
            clientId: clientIdd,
            protocolId: "MQTT",
            protocolVersion: 4,
            clean: true,
        }
     
        mqttClient = mqtt.connect(hostURL, options)
    
        mqttClient.on("error", (err) => {
            console.log("Error: ", err);
            mqttClient.end();
        })
    
        mqttClient.on("reconnect", () => {
            console.log("Reconnecting...");
        })
    
        mqttClient.on("connect", () => {
            // console.log("Client connected: " + clientId);
        })
    
        mqttClient.on("message", (topic, message, packet) => {
            const test = JSON.parse(message)
            localStorage.setItem("message", test)
            // console.log("I'm messsage " + localStorage.getItem("message"))
            // console.log("Received message: " + message.toString() + "\nOn topic: " + topic);
        })
    }
    
    function sub(){
        const topic = "cvtestcrowd"
        console.log(`sub to topic: ${topic}`)
     
        mqttClient.subscribe(topic, {qos: 0})
    }   
    
    connectToBroker();
    sub();
}

export default connectClient;