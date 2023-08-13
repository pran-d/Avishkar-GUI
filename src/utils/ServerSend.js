import React from "react";
import { useState, useEffect } from "react";
let { Send } = require("../views/pages/Send.js");
let mqtt = require("mqtt");
let host = "localhost";
let port = 1884;
const url = `ws://${host}:${port}/mqtt`;
const options = {
  keepalive: 30,
  protocolId: "MQTT",
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  will: {
    topic: "WillMsg",
    payload: "Connection Closed abnormally..!",
    qos: 0,
    retain: false,
  },
  rejectUnauthorized: false,
};
// let client = mqtt.connect('mqtt://127.0.0.1', options);

function ServerSend() {
  const [currentSocket, setCurrentSocket] = useState(null);
  useEffect(() => {
    let client = mqtt.connect(url, options);
    setCurrentSocket(client);
    client.on("connect", function () {
      console.log("Connected");
    });
    return () => {
      client.disconnect();
    };
  }, []);

  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [height1, setHeight1] = useState(0);
  const [height2, setHeight2] = useState(0);
  const [position, setPosition] = useState(0);
  const [speed, setSpeed] = useState(0);
  const handleTopic = (event) => setTopic(event.target.value);
  const handleMessage = (event) => setMessage(event.target.value);
  const handleChange = (e) => {
    setHeight1(e.target.value);
    sendOne("gapTest1", height1);
  };
  const handleChange2 = (e) => {
    setSpeed(e.target.value);
    sendOne("speed", speed);
  };
  const handleChange3 = (e) => {
    setPosition(e.target.value);
    sendOne("position", position);
  };
  const handleChange4 = (e) => {
    setHeight2(e.target.value);
    sendOne("gapTest2", height2);
  };
  const sendOne = (topic, message) => {
    if (currentSocket.connected === true) {
      currentSocket.subscribe(topic, function (err) {
        if (!err) {
          currentSocket.publish(topic, message, function () {
            console.log("Message pushed ", message);
          });
        }
      });
    }
  };
  const sendMessage = (event) => {
    event.preventDefault();
    console.log("connecting");

    if (currentSocket.connected === true) {
      currentSocket.subscribe(topic, function (err) {
        if (!err) {
          currentSocket.publish(topic, message, function () {
            console.log("Message pushed");
          });
        }
      });
    }
  };
  return (
    <Send
      topic={topic}
      message={message}
      height1={height1}
      height2={height2}
      handleSubmit={sendMessage}
      onChangeTopic={handleTopic}
      onChangeMessage={handleMessage}
      onChangeSlider={handleChange}
      onChangeSlider4={handleChange4}
      onChangeSlider2={handleChange2}
      onChangeSlider3={handleChange3}
    />
  );
}

export { ServerSend };
