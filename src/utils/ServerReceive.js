import React from "react";
import { useState, useRef, useEffect } from "react";
import errsound from "../assets/errorSound2.mp3";
import msgsound from "../assets/msgSound.wav";
import { Command } from "../views/components/Command/Command.js";
import { LeftNav } from "../views/components/Command/LeftNav.js";
import { Row, Col, Container, Button } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles.css";
import { MessageBox } from "../views/components/MessageBox/MessageBox.js";
import "../views/components/MessageBox/MessageBox.css";
import { Graph } from "./Graph";
let mqtt = require("mqtt");
let { Home } = require("../views/pages/Home.js");
let { Levitation } = require("../views/pages/Levitation.js");
let { Propulsion } = require("../views/pages/Propulsion.js");
let { Battery } = require("../views/pages/Battery.js");
let host = "localhost";
let port = 1884;
const url = `ws://${host}:${port}/mqtt`;
const options = {
  keepalive: 3600,
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

// let client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
let client = mqtt.connect(url, options);

function ServerReceive() {
  console.log("re-rendered SERVERRECEIVE");
  const labels = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];
  function play(sound) {
    new Audio(sound).play();
  }
  const data = useRef({ errors: [], messages: [] });
  const plotData = useRef({
    ems1_gaps: [],
    ems2_gaps: [],
    ems3_gaps: [],
    ems4_gaps: [],
  });
  const [isError, setIsError] = useState(true);
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState(12);
  const [message4, setMessage4] = useState("");
  const [message5, setMessage5] = useState("");
  const [message6, setMessage6] = useState("");
  const [message7, setMessage7] = useState("");
  const [message8, setMessage8] = useState(0);
  const [message9, setMessage9] = useState("");
  const [message10, setMessage10] = useState("");
  const [message11, setMessage11] = useState("");
  const [message12, setMessage12] = useState("");
  const [message13, setMessage13] = useState("");
  const [message14, setMessage14] = useState("");
  const [message15, setMessage15] = useState("");
  const [message16, setMessage16] = useState("");
  const [message17, setMessage17] = useState("");
  const [message18, setMessage18] = useState("");
  const [message19, setMessage19] = useState("");
  const [message20, setMessage20] = useState("");
  const [message21, setMessage21] = useState("");
  const [message22, setMessage22] = useState("");
  const [message23, setMessage23] = useState("");
  const [message24, setMessage24] = useState("");
  const [message25, setMessage25] = useState("");
  const [message26, setMessage26] = useState("");
  const [message27, setMessage27] = useState("");
  const [message28, setMessage28] = useState("");
  const [message29, setMessage29] = useState("");
  const [message30, setMessage30] = useState("");
  const [message31, setMessage31] = useState("");
  const [message32, setMessage32] = useState("");
  const [message33, setMessage33] = useState("");
  const [message34, setMessage34] = useState("");
  const [message35, setMessage35] = useState("");
  const [message36, setMessage36] = useState("");
  const [message37, setMessage37] = useState("");
  const [message38, setMessage38] = useState("");
  const [message39, setMessage39] = useState("");
  const [message40, setMessage40] = useState("");
  const [message41, setMessage41] = useState("");
  const [message42, setMessage42] = useState("");
  const [message43, setMessage43] = useState("");
  const [message44, setMessage44] = useState("");
  const [message45, setMessage45] = useState("");
  const [message46, setMessage46] = useState("");
  const [message47, setMessage47] = useState("");
  const [message48, setMessage48] = useState("");
  const [message49, setMessage49] = useState("");
  const [message50, setMessage50] = useState("");
  const [message51, setMessage51] = useState("");
  const [message52, setMessage52] = useState("");
  const [message53, setMessage53] = useState("");
  const [message54, setMessage54] = useState("");
  const [message55, setMessage55] = useState("");
  const [message56, setMessage56] = useState("");
  const [timer, setTimer] = useState(0);
  const [plotCount, setPlotCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      if (client.connected === true) {
        client.subscribe("/TAH/PingRequest", function (err) {
          if (!err) {
            client.publish("/TAH/PingRequest", "1", function () {
              console.log("Ping sent");
            });
          }
        });
      }
      setTimer((timer) => timer);
    }, 750);
  }, [timer]);

  const getMinimumNumber = (arr) => {
    if (arr.length === 0) {
      return null;
    }
    return Math.min(...arr);
  };

  client.on("connect", function () {
    console.log("Connected");
    [
      "/TAH/BusData",
      "/TAH/IRVelDataRx",
      "/TAH/PingResponse",
      "/TAH/RotaryDataRx",
      "position",
      "emsTemp",
      "limTemp",
      "busbarVoltage",
      "VLev_cursen_1",
      "VLev_cursen_2",
      "VLev_cursen_3",
      "VLev_cursen_4",
      "/TAH/VGapFDataRx",
      "/TAH/LGapFDataRx",
      "VLev_gapsen_1",
      "VLev_gapsen_2",
      "VLev_gapsen_3",
      "VLev_gapsen_4",
      "VLev_tempsen_1",
      "VLev_tempsen_2",
      "VLev_tempsen_3",
      "VLev_tempsen_4",
      "/TAH/fault",
      "/TAH/state",
      "bp1_current",
      "bp1_voltage",
      "bp1_max_volt",
      "bp1_min_volt",
      "bp1_charge",
      "bp2_current",
      "bp2_voltage",
      "bp2_max_volt",
      "bp2_min_volt",
      "bp2_charge",
      "bp3_current",
      "bp3_voltage",
      "bp3_max_volt",
      "bp3_min_volt",
      "bp3_charge",
      "bp4_current",
      "bp4_voltage",
      "bp4_max_volt",
      "bp4_min_volt",
      "bp4_charge",
      "bp5_current",
      "bp5_voltage",
      "bp5_max_volt",
      "bp5_min_volt",
      "bp5_charge",
      "bp6_current",
      "bp6_voltage",
      "bp6_max_volt",
      "bp6_min_volt",
      "bp6_charge",
      "bp7_current",
      "bp7_voltage",
      "bp7_max_volt",
      "bp7_min_volt",
      "bp7_charge",
      "bp8_current",
      "bp8_voltage",
      "bp8_max_volt",
      "bp8_min_volt",
      "bp8_charge",
      "lmu1_temp1",
      "lmu1_temp2",
      "lmu2_temp1",
      "lmu2_temp2",
      "reed1",
      "reed2",
      "reed3",
      "reed4",
      "height",
      "pressure1",
      "pressure2",
      "gapTest1",
      "gapTest2",
      "gapTest3",
      "gapTest4",
      "speed"
    ].map((topic) => {
      client.subscribe(topic);
    });
    client.on("message", function (topic, message, packet) {
      console.log('Received "' + message + '" on "' + topic + '"');
      if (topic === "/TAH/BusData") {
        switch (message.toString()[0]) {
          case "2":
            break;
          case "4":
            break;
          case "1":
            setMessage51(message.slice(-1).toString());
            setMessage52(message.slice(-2, -1).toString());
            setMessage53(message.slice(-3, -2).toString());
            setMessage54(message.slice(-4, -3).toString());
            //setMessage5((256*parseInt(message.slice(18,21)) + parseInt(message.slice(22,26))).toString());
            //setMessage5(message.slice(18,21).toString());
            //setMessage4((256*parseInt(message.slice(10,13)) + parseInt(message.slice(14,17))).toString());
            setMessage55(message.slice(2, 5).toString());
            setMessage56(message.slice(6, 9).toString());
            break;
          case "3":
            setMessage2(message.toString());
            break;
          case "0":
            setMessage4(
              (
                256 * parseInt(message.slice(2, 5)) +
                parseInt(message.slice(6, 9))
              ).toString()
            );
            setMessage5(message.slice(10, 13).toString());
            break;
          case "5":
            setMessage2(message.toString());
            break;
          case "6":
            setMessage2(message.toString());
            break;
          default:
            break;
        }
      }
      if (topic === "topic2") {
        setMessage2(message.toString());
      }
      if (topic === "height") {
        setMessage3(message.toString());
      }
      if (topic === "/TAH/VGapFDataRx") {
        setMessage3(
          message.slice(6, 8) + "." + message.slice(9, 11).toString()
        );
      }
      if (topic === "speed") {
        setMessage4(message.toString());
      }
      if (topic === "position") {
        setMessage5(message.toString());
      }
      if (topic === "emsTemp") {
        setMessage6(message.toString());
      }
      if (topic === "limTemp") {
        setMessage7(message.toString());
      }
      if (topic === "busbarVoltage") {
        setMessage8(message.toString());
      }
      if (topic === "/TAH/VGapFDataRx") {
        setMessage9(
          (message.slice(0, 2) + "." + message.slice(3, 5)).toString()
        );
      }
      if (topic === "/TAH/VGapFDataRx") {
        setMessage10(
          (message.slice(6, 8) + "." + message.slice(9, 11)).toString()
        );
      }
      if (topic === "/TAH/VGapBDataRx") {
        setMessage11(
          (message.slice(0, 2) + "." + message.slice(3, 5)).toString()
        );
      }
      if (topic === "/TAH/VGapBDataRx") {
        setMessage12(
          (message.slice(6, 8) + "." + message.slice(9, 11)).toString()
        );
      }
      if (topic === "VLev_gapsen_1") {
        setMessage13(message.toString());
      }
      if (topic === "VLev_gapsen_2") {
        setMessage14(message.toString());
      }
      if (topic === "VLev_gapsen_3") {
        setMessage15(message.toString());
      }
      if (topic === "VLev_gapsen_4") {
        setMessage16(message.toString());
      }
      if (topic === "VLev_tempsen_1") {
        setMessage17(message.toString());
      }
      if (topic === "VLev_tempsen_2") {
        setMessage18(message.toString());
      }
      if (topic === "VLev_tempsen_3") {
        setMessage19(message.toString());
      }
      if (topic === "VLev_tempsen_4") {
        setMessage20(message.toString());
      }
      if (topic === "/TAH/fault") {
        setMessage21(message.toString());
        data.errors = data.errors
          ? [...data.errors, { date: new Date(), message: message.toString() }]
          : [{ date: new Date(), message: message.toString() }];
        console.log(data.errors);
        setIsError(true);
        play(errsound);
      }
      if (topic === "gapTest1") {
        plotData.ems1_gaps = plotData.ems1_gaps
          ? plotData.ems1_gaps.length < labels.length
            ? [...plotData.ems1_gaps, message.toString()]
            : [
                plotData.ems1_gaps[plotData.ems1_gaps.length - 2],
                plotData.ems1_gaps[plotData.ems1_gaps.length - 1],
                message.toString(),
              ]
          : [message.toString()];
        setPlotCount(plotData.ems1_gaps.length);
      }
      if (topic === "gapTest2") {
        plotData.ems2_gaps = plotData.ems2_gaps
          ? plotData.ems2_gaps.length < labels.length
            ? [...plotData.ems2_gaps, message.toString()]
            : [
                plotData.ems2_gaps[plotData.ems2_gaps.length - 2],
                plotData.ems2_gaps[plotData.ems2_gaps.length - 1],
                message.toString(),
              ]
          : [message.toString()];
        setPlotCount(plotData.ems2_gaps.length);
      }
      if (topic === "/TAH/PingResponse") {
        setMessage22(message.toString());
        data.messages = data.messages
          ? [
              ...data.messages,
              { date: new Date(), message: message.toString() },
            ]
          : [{ date: new Date(), message: message.toString() }];
        console.log(data.messages);
        play(msgsound);
      }
      if (topic === "bp1_current") {
        setMessage23(message.toString());
      }
      if (topic === "bp1_voltage") {
        setMessage24(message.toString());
      }
      if (topic === "bp1_charge") {
        setMessage25(message.toString());
      }
      if (topic === "bp2_current") {
        setMessage26(message.toString());
      }
      if (topic === "bp2_voltage") {
        setMessage27(message.toString());
      }
      if (topic === "bp2_charge") {
        setMessage28(message.toString());
      }
      if (topic === "bp3_current") {
        setMessage29(message.toString());
      }
      if (topic === "bp3_voltage") {
        setMessage30(message.toString());
      }
      if (topic === "bp3_charge") {
        setMessage31(message.toString());
      }
      if (topic === "bp4_current") {
        setMessage32(message.toString());
      }
      if (topic === "bp4_voltage") {
        setMessage33(message.toString());
      }
      if (topic === "bp4_charge") {
        setMessage34(message.toString());
      }
      if (topic === "bp5_current") {
        setMessage35(message.toString());
      }
      if (topic === "bp5_voltage") {
        setMessage36(message.toString());
      }
      if (topic === "bp5_charge") {
        setMessage37(message.toString());
      }
      if (topic === "bp6_current") {
        setMessage38(message.toString());
      }
      if (topic === "bp6_voltage") {
        setMessage39(message.toString());
      }
      if (topic === "bp6_charge") {
        setMessage40(message.toString());
      }
      if (topic === "bp7_current") {
        setMessage41(message.toString());
      }
      if (topic === "bp7_voltage") {
        setMessage42(message.toString());
      }
      if (topic === "bp7_charge") {
        setMessage43(message.toString());
      }
      if (topic === "bp8_current") {
        setMessage44(message.toString());
      }
      if (topic === "bp8_voltage") {
        setMessage45(message.toString());
      }
      if (topic === "bp8_charge") {
        setMessage46(message.toString());
      }
      if (topic === "lmu1_temp1") {
        setMessage47(message.toString());
      }
      if (topic === "lmu1_temp2") {
        setMessage48(message.toString());
      }
      if (topic === "lmu2_temp1") {
        setMessage49(message.toString());
      }
      if (topic === "lmu2_temp2") {
        setMessage50(message.toString());
      }
      if (topic === "reed1") {
        setMessage51(message.toString());
      }
      if (topic === "reed2") {
        setMessage52(message.toString());
      }
      if (topic === "reed3") {
        setMessage53(message.toString());
      }
      if (topic === "reed4") {
        setMessage54(message.toString());
      }
      if (topic === "pressure1") {
        setMessage55(message.toString());
      }
      if (topic === "pressure2") {
        setMessage56(message.toString());
      }
    });
  });

  return (
    <BrowserRouter>
      <Container className="fullscreen">
        <Row className="mx-0 px-0">
          <Col lg={2} className="mx-0 px-0">
            <Row>
              <LeftNav />
            </Row>
            <Row align="center">
              <Col lg={6} className="mx-0 px-0">
                <Button
                  onClick={() => setIsError(true)}
                  className="msg-btn mt-3 msg-title"
                  style={
                    isError
                      ? {
                          color: "#be0c0c",
                          borderColor: "#be0c0c",
                          backgroundColor: "#45383e",
                        }
                      : {
                          color: "#be0c0c",
                          borderColor: "#be0c0c",
                          backgroundColor: "#292c31",
                        }
                  }
                >
                  Errors
                </Button>
              </Col>
              <Col lg={6} className="mx-0 px-0">
                <Button
                  onClick={() => setIsError(false)}
                  className="msg-btn mt-3 msg-title"
                  style={
                    isError
                      ? {
                          color: "#0CBE46",
                          borderColor: "#0CBE46",
                          backgroundColor: "#292c31",
                        }
                      : {
                          color: "#0CBE46",
                          borderColor: "#0CBE46",
                          backgroundColor: "#34493e",
                        }
                  }
                >
                  Messages
                </Button>
              </Col>
            </Row>
            <Row>
              {isError ? (
                <MessageBox data={data} content={message21} type="box" />
              ) : (
                <MessageBox data={data} content={message22} type="box" />
              )}
            </Row>
          </Col>
          <Col lg={8}>
            <Route exact path="/data">
              <Home
                message1={message1}
                message2={message2}
                height={message3}
                speed={message4}
                position={message5}
                emsTemp={message6}
                limTemp={message7}
                client={client}
                reed1={message51}
                reed2={message52}
                reed3={message53}
                reed4={message54}
                pressure1={message55}
                pressure2={message56}
                packvoltage={getMinimumNumber([
                  message24,
                  message27,
                  message30,
                  message33,
                  message36,
                  message39,
                  message42,
                  message45,
                ])}
                packcurrent={getMinimumNumber([
                  message23,
                  message26,
                  message29,
                  message32,
                  message35,
                  message38,
                  message41,
                  message44,
                ])}
              />
            </Route>
            <Route exact path="/data/levitation">
              <Levitation
                currentsensor1={message13}
                currentsensor2={message14}
                currentsensor3={message15}
                currentsensor4={message16}
                gapsensor1={message9}
                gapsensor2={message10}
                gapsensor3={message11}
                gapsensor4={message12}
                temp1={message17}
                temp2={message18}
                temp3={message19}
                temp4={message20}
              />
            </Route>
            <Route exact path="/data/propulsion">
              <Propulsion speed={message4} busbarVoltage={message8} />
            </Route>
            <Route exact path="/data/battery">
              <Battery
                bp1={{
                  current: message23,
                  voltage: message24,
                  state_of_charge: message25,
                }}
                bp2={{
                  current: message26,
                  voltage: message27,
                  state_of_charge: message28,
                }}
                bp3={{
                  current: message29,
                  voltage: message30,
                  state_of_charge: message31,
                }}
                bp4={{
                  current: message32,
                  voltage: message33,
                  state_of_charge: message34,
                }}
                bp5={{
                  current: message35,
                  voltage: message36,
                  state_of_charge: message37,
                }}
                bp6={{
                  current: message38,
                  voltage: message39,
                  state_of_charge: message40,
                }}
                bp7={{
                  current: message41,
                  voltage: message42,
                  state_of_charge: message43,
                }}
                bp8={{
                  current: message44,
                  voltage: message45,
                  state_of_charge: message46,
                }}
                lmu1={{
                  temp1: message47,
                  temp2: message48,
                }}
                lmu2={{
                  temp1: message49,
                  temp2: message50,
                }}
              />
            </Route>
            <Route exact path="/data/plot">
              <Graph
                client={client}
                gapData={{ ems1: plotData.ems1_gaps, ems2: plotData.ems2_gaps }}
                labels={labels}
                plotCount={plotCount}
              />
            </Route>
          </Col>
          <Col lg={2} className="mx-0 px-0">
            <Command client={client} />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export { ServerReceive };