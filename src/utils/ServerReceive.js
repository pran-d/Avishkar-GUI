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
  function play(sound) {
    new Audio(sound).play();
  }
  const data = useRef({ errors: [], messages: [] });
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
  const [message57, setMessage57] = useState("");
  const [message58, setMessage58] = useState("");
  const [message59, setMessage59] = useState("");
  const [message60, setMessage60] = useState("");
  const [message61, setMessage61] = useState("");
  const [message62, setMessage62] = useState("");
  const [message63, setMessage63] = useState("");
  const [message64, setMessage64] = useState("");
  const [message65, setMessage65] = useState("");
  const [message66, setMessage66] = useState("");
  const [message67, setMessage67] = useState("");
  const [message68, setMessage68] = useState("");
  const [timer, setTimer] = useState(0);

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

  /** MAPPING FOR CAN IDs AND MQTT MESSAGE ENCODING **/
/*
 Permanent IDs:
 0 - Inverter/Rotary       Send 0x013, Recv 0x011
 1 - IR Velocity           Send 0x012, Recv 0x015
 2 - Front Vertical gap    Send 0x021, Recv 0x010
 3 - Back Vertical gap     Send 0x019, Recv 0x017
 4 - Front Lateral gap     Send 0x023, Recv 0x020
 5 - Back Lateral Gap      Send 0x025, Recv 0x022
 6 - BMS                   Send N/A, Recv N/A
 7 - MQTT                  Send N/A, Recv N/A
 8 - Pressure              Send N/A, Recv N/A
 9 - Reed                  Send N/A, Recv N/A
 */
  client.on("connect", function () {
    console.log("Connected");
    [
      "/TAH/BusData",
      "/TAH/PingResponse",
      "/TAH/fault",
      "/TAH/state",
    ].map((topic) => {
      client.subscribe(topic);
    });
    client.on("message", function (topic, message, packet) {
      console.log('Received "' + message + '" on "' + topic + '"');
      if (topic === "/TAH/BusData") {
        switch (message.toString()[0]) {

          // VELOCITY AND POSITION (AND PRESSURE AND REED)
          case "1":
            setMessage51(message.slice(-1).toString());
            setMessage52(message.slice(-2,-1).toString());
            setMessage53(message.slice(-3,-2).toString());
            setMessage54(message.slice(-4,-3).toString());
            setMessage5((256*parseInt(message.slice(13,16)) + parseInt(message.slice(16,19))).toString());
            //setMessage5(message.slice(18,21).toString());
            setMessage4((256*parseInt(message.slice(7,10)) + parseInt(message.slice(10,13))).toString());
            setMessage55(message.slice(1,4).toString());
            setMessage56(message.slice(4,7).toString());
            break;
          
          // IPM DATA
          case "0":
            // BUSBAR VOLTAGE
            setMessage8((256*parseInt(message.slice(1,4)) + parseInt(message.slice(4,7))).toString());

            // 3- PHASE CURRENT AND TEMP
            setMessage59(parseInt(message.slice(7,10)));
            setMessage60(parseInt(message.slice(10,13)));
            setMessage61(parseInt(message.slice(13,16)));
            setMessage62(parseInt(message.slice(16,19)));
            setMessage7(parseInt(message.slice(16,19)));

            // FLAGS
            setMessage63(parseInt(message.slice(19,22)) & 1);
            setMessage64((parseInt(message.slice(19,22)) & 2)>>1);
            setMessage65((parseInt(message.slice(19,22)) & 4)>>2);
            setMessage66((parseInt(message.slice(19,22)) & 8)>>3);

            // MI and FREQUENCY
            if (parseInt(message.slice(22,25))>>7 == 0)
            {
              setMessage67(parseInt(message.slice(22,25)) & 127);
            }
            else
            {
              setMessage68((parseInt(message.slice(22,25)) & 127)/100);
            }
            break;

          // BMS DATA
          case "6":
            switch (message.toString()[1]) 
            {
              // CAN ID 0x012
              case "0":
                // PACK VOLTAGE and MIN/MAX CELL VOLTAGES
                setMessage1(((256*parseInt(message.slice(2,5)) + parseInt(message.slice(5,8)))/10).toString());
                setMessage43((256*parseInt(message.slice(14,17)) + parseInt(message.slice(17,20))).toString());
                setMessage46((256*parseInt(message.slice(20,23)) + parseInt(message.slice(23,26))).toString());
                // PACK CURRENT (WITH SIGN)
                if (parseInt(message.slice(8,11))>>7 == 1) {
                  setMessage2((-(~(256*parseInt(message.slice(8,11)) + parseInt(message.slice(11,14))) + 1)<<16>>16)/10);
                }
                else
                {
                  setMessage2((256*parseInt(message.slice(8,11)) + parseInt(message.slice(11,14)))/10);
                }
                break;

              // CAN ID 0x014
              case "1":
                // MAX/MIN PACK TEMPS
                setMessage37(parseInt(message.slice(2,5)).toString());
                setMessage40(parseInt(message.slice(5,8)).toString());
                // SOC
                setMessage49(parseInt(message.slice(8,11)).toString());
                // LMU TEMPS
                switch (parseInt(message.slice(11,14))) 
                {
                  case 1:
                    setMessage23(parseInt(message.slice(14,17)).toString());
                    setMessage24(parseInt(message.slice(17,20)).toString());
                    break;
                  case 2:
                    setMessage26(parseInt(message.slice(14,17)).toString());
                    setMessage27(parseInt(message.slice(17,20)).toString());
                    break;
                  case 3:
                    setMessage29(parseInt(message.slice(14,17)).toString());
                    setMessage30(parseInt(message.slice(17,20)).toString());
                    break;
                  case 4:
                    setMessage32(parseInt(message.slice(14,17)).toString());
                    setMessage33(parseInt(message.slice(17,20)).toString());
                    break;
                  case 5:
                    setMessage35(parseInt(message.slice(14,17)).toString());
                    setMessage36(parseInt(message.slice(17,20)).toString());
                    break;
                  case 6:
                    setMessage38(parseInt(message.slice(14,17)).toString());
                    setMessage39(parseInt(message.slice(17,20)).toString());
                    break;
                  case 7:
                    setMessage41(parseInt(message.slice(14,17)).toString());
                    setMessage42(parseInt(message.slice(17,20)).toString());
                    break;
                  case 8:
                    setMessage44(parseInt(message.slice(14,17)).toString());
                    setMessage45(parseInt(message.slice(17,20)).toString());
                    break;
                  case 9:
                    setMessage47(parseInt(message.slice(14,17)).toString());
                    setMessage48(parseInt(message.slice(17,20)).toString());
                    break;
                  case 10:
                    setMessage25(parseInt(message.slice(14,17)).toString());
                    setMessage28(parseInt(message.slice(17,20)).toString());
                    break;
                  case 11:
                    setMessage31(parseInt(message.slice(14,17)).toString());
                    setMessage34(parseInt(message.slice(17,20)).toString());
                    break;
                  case 12:
                    setMessage57(parseInt(message.slice(14,17)).toString());
                    setMessage58(parseInt(message.slice(17,20)).toString());
                    break;
                }
                break;
            }
            break;
          
          // UNCOMMENT TO GET LEV DATA
          //case "3":
            //setMessage2(message.toString());
            break;
          //case "2":
          
            break;
          //case "4":
            
            break;
          //case "5":
            //setMessage2(message.toString());
            break;

          default:
            break;
        }
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
      if (topic === "/TAH/PingResponse") {
        setMessage22(message.toString());
        data.messages = data.messages
          ? [
              ...data.messages,
              { date: new Date(), message: message.toString() },
            ]
          : [{ date: new Date(), message: message.toString() }];
        console.log(data.messages);
        //setIsError(false);
        play(msgsound);
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
                busbarVoltage={message8}
                sinefreq = {message67}
                modindex = {message68}
                client={client}
                reed1={message51}
                reed2={message52}
                reed3={message53}
                reed4={message54}
                pressure1={message55}
                pressure2={message56}
                packvoltage={message1}
                packcurrent={message2}
                maxpacktemp={message37}
                minpacktemp = {message40}
                maxcellvoltage = {message43}
                mincellvoltage = {message46}
                soc = {message49}
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
              <Propulsion 
              speed={message4}
              busbarVoltage={message8} 
              ipmdata = {{
                Ia: message59,
                Ib: message60,
                Ic: message61,
                ipmtemp: message62,
                overtemp: message66,
                Ia_error: message63,
                Ib_error: message64,
                Ic_error: message65,
              }} />
            </Route>
            <Route exact path="/data/battery">
              <Battery
                lmu1={{
                  temp1: message23,
                  temp2: message24,
                }}
                lmu2={{
                  temp1: message26,
                  temp2: message27,
                }}
                lmu3={{
                  temp1: message29,
                  temp2: message30,
                }}
                lmu4={{
                  temp1: message32,
                  temp2: message33,
                }}
                lmu5={{
                  temp1: message35,
                  temp2: message36,
                }}
                lmu6={{
                  temp1: message38,
                  temp2: message39,
                }}
                lmu7={{
                  temp1: message41,
                  temp2: message42,
                }}
                lmu8={{
                  temp1: message44,
                  temp2: message45,
                }}
                lmu9={{
                  temp1: message47,
                  temp2: message48,
                }}
                lmu10={{
                  temp1: message25,
                  temp2: message28,
                }}
                lmu11={{
                  temp1: message31,
                  temp2: message34,
                }}
                lmu12={{
                  temp1: message57,
                  temp2: message58,
                }}
                minvolt={getMinimumNumber([
                  message24,
                  message27,
                  message30,
                  message33,
                  message36,
                  message39,
                  message42,
                  message45,
                ])}
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