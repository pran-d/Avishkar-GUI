import React from "react";
import "./MessageBox.css";
import { Button, Container, Row, Modal, Col } from "react-bootstrap";
import { useState } from "react";

function MessageBox(props) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  return (
    <>
      <Container className="sub-section mt-1 white-text parent-box">
        <Row className="message-box">{props.content && props.content}</Row>
        <Row style={{ float: "right" }}>
          <Button variant="dark" onClick={handleShow}>
            ↗
          </Button>
        </Row>
      </Container>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Data Log</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg={6}>
              <span style={{ color: "red" }}>ERRORS:</span>
              {props.data.errors &&
                props.data.errors.map((error) => (
                  <div>
                    <div style={{ color: "#884444" }}>
                      {error.date.toLocaleString("en-US")}:
                    </div>
                    {error.message}
                  </div>
                ))}
            </Col>
            <Col lg={6}>
              <span style={{ color: "green" }}>MESSAGES:</span>
              {props.data.messages &&
                props.data.messages.map((message) => (
                  <div>
                    <div style={{ color: "#448844" }}>
                      {message.date.toLocaleString("en-US")}:
                    </div>
                    {message.message}
                  </div>
                ))}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  // if (props.type === "box") {
  //   return (
  //     <>
  //       <div className="sub-section mt-1">
  //         {props.content.error && props.content.error}
  //         {props.content.msg && props.content.msg}
  //       </div>
  //     </>
  //   );
  // }
  // return (
  //   <>
  //     <div
  //       style={
  //         props.type === "msg" ? { color: "#be0c0c" } : { color: "#0CBE46" }
  //       }
  //       className="msg-btn mt-3 msg-title px-4"
  //     >
  //       {props.type === "msg" ? "Errors" : "Messages"}
  //     </div>
  //   </>
  // );
}

export { MessageBox };
