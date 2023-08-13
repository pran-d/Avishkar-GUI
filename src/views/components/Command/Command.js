import React from "react";
import { Button } from "react-bootstrap";
import "./Command.css";
import { useEffect, useState } from "react";

function Command(props) {
  // const [braked6, setBraked6] = useState(false);
  const sendData = (topic, message) => {
    if (props.client.connected === true) {
      props.client.subscribe(topic, function (err) {
        if (!err) {
          props.client.publish(topic, message, function () {
            console.log("Message pushed ", message);
          });
          // if (topic === "/TAH/Brake6_on") setBraked6(true);
          // if (topic === "/TAH/Brake6_off") setBraked6(false);
        }
      });
    }
  };
  return (
    <div
      className="white-text"
      style={{
        marginTop: "1rem",
        padding: "2rem 0rem 2rem 0rem",
        backgroundColor: "rgba(25,25,25,0.5)",
        boxShadow: "1px 2px 3px #22252B, inset 2px 2px 2px #35393F",
        textAlign: "center",
      }}
    >
      <h4 style={{ fontSize: "1.2em", marginBottom: "1em" }}>
        Command Station
      </h4>
      {[
        { topic: "/TAH/brakes_actuate", message: "1", title: "STOP POD" },
        { topic: "/TAH/reset", message: "1", title: "Pod Reset" },
        {
          topic: "/TAH/brakes_retract",
          message: "brakes retract",
          title: "RETRACT BRAKES",
        },
        {
          topic: "/TAH/friction_brakes",
          message: "1",
          title: "Friction Brakes",
        },
        { topic: "/TAH/dc_brake", message: "1", title: "DC Brakes" },
        { topic: "/TAH/stop_inverter", message: "1", title: "Stop Inverter" },
        { topic: "/TAH/Brake6_on", message: "1", title: "BRAKE 6 ON" },
        { topic: "/TAH/Brake6_off", message: "1", title: "BRAKE 6 OFF" },
        { topic: "/TAH/Start_Inverter", message: "1", title: "Start Inverter" },
        { topic: "/TAH/Toggle_Relay", message: "1", title: "Toggle Precharge Relay" },
        { topic: "/TAH/Toggle_Midpack", message: "1", title: "Toggle Mid Pack Contactors" },
        { topic: "/TAH/Toggle_Endpack", message: "1", title: "Toggle End Pack Contactors" },
        { topic:"/TAH/toggle_direction", message: "1", title: "Bidirectional run" },
        { topic:"/TAH/toggle_discharge_enable", message: "1", title: "Toggle Discharge Enable" },
        { topic:"/TAH/toggle_charge_enable", message: "1", title: "Toggle charge Enable" },

        { topic:"/TAH/toggle_direction", message: "1", title: "Bidirectional run" },
        { topic: "/TAH/Start_Lev", message: "1", title: "Levitate" },
        { topic: "/TAH/PingRequest", message: "1", title: "Ping Request" },
        {
          topic: "/TAH/Start_Data_Collection",
          message: "1",
          title: "Start Data Collection",
        },
      ].map((button) => {
        return (
          <div>
            <Button
              type="button"
              className="cmd-btn"
              // className={
              //   button.title === "BRAKE 6 ON" && braked6
              //     ? "cmd-btn dis"
              //     : button.title === "BRAKE 6 OFF" && !braked6
              //     ? "cmd-btn dis"
              //     : "cmd-btn"
              // }
              onClick={() => {
                sendData(button.topic, button.message);
              }}
            >
              {button.title}
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export { Command };
