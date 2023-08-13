import React from "react";
import { Form, Button } from "react-bootstrap";

function Send(props) {
  return (
    <Form
      style={{ width: "50%", margin: "auto" }}
      onSubmit={props.handleSubmit}
    >
      <Form.Group>
        <Form.Label>Topic: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter topic"
          value={props.topic}
          onChange={props.onChangeTopic}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Message: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter message"
          value={props.message}
          onChange={props.onChangeMessage}
        />
      </Form.Group>
      {[
        {
          topic: "gapTest1",
          min: "0",
          max: "12",
          step: "0.1",
          onChange: props.onChangeSlider,
          value: props.height1,
        },
        {
          topic: "gapTest1",
          min: "0",
          max: "12",
          step: "0.1",
          onChange: props.onChangeSlider4,
          value: props.height2,
        },
        {
          topic: "speed",
          min: "0",
          max: "180",
          step: "1",
          onChange: props.onChangeSlider2,
          value: props.speed,
        },
        {
          topic: "position",
          min: "0",
          max: "400",
          step: "0.1",
          onChange: props.onChangeSlider3,
          value: props.position,
        },
      ].map((field) => {
        return (
          <div className="slidecontainer">
            <input
              type="range"
              min={field.min}
              max={field.max}
              step={field.step}
              onChange={field.onChange}
              value={field.value}
              className="slider"
              id="myRange"
            />
          </div>
        );
      })}
      <Button
        style={{
          position: "absolute",
          marginTop: "10px",
          width: "20vw",
          right: "25vw",
        }}
        variant="outline-primary"
        type="submit"
      >
        Send
      </Button>
    </Form>
    // <form onSubmit={props.handleSubmit}>
    //   <label>
    //     Topic
    //     <input type="text" value={props.topic} onChange={props.onChangeTopic} />
    //   </label>
    //   <label>
    //     Message
    //     <input
    //       type="text"
    //       value={props.message}
    //       onChange={props.onChangeMessage}
    //     />
    //   </label>
    //   <input type="submit" />
    // </form>
  );
}

export { Send };
