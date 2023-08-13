import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import pod from "../../../assets/pod.svg";
import "../commonStyles.css";

function Position(props) {
  const [position, setPos] = useState(0);
  useEffect(() => {
    setPos(props.position);
  });
  return (
    <Container>
      <Container className="sub-section white-text">
        <h4>Position</h4>
        <div
          style={{
            boxShadow:
              "1px 1px 2px rgba(64, 68, 76, 0.3), -1px -1px 2px rgba(18, 20, 22, 0.5), inset -3px 3px 6px rgba(18, 20, 22, 0.2),  inset 3px -3px 6px rgba(18, 20, 22, 0.2), inset -3px -3px 6px rgba(64, 68, 76, 0.9), inset 3px 3px 8px rgba(18, 20, 22, 0.9)",
            margin: "1rem 1.5rem 2rem 1.5rem",
            borderRadius: "1rem",
            backgroundColor: "#333333",
            padding: "0.6rem 0rem 2rem 0rem",
          }}
        >
          <div
            style={{
              position: "relative",
              height: "0.2rem",
              borderRadius: "0.2rem",
              margin: "2rem 1rem 0rem 1rem",
              backgroundColor: "rgb(140,140,140)",
            }}
          >
            {[0, 80, 160, 240, 320, 400].map((dist) => (
              <div
                style={{
                  backgroundColor: "white",
                  position: "absolute",
                  left: `${(dist / 400) * 99}%`,
                  width: "0.2rem",
                  height: "0.4rem",
                  borderRadius: "1rem",
                }}
              ></div>
            ))}
            <img
              style={{
                height: "1rem",
                position: "absolute",
                top: "-1rem",
                left: `${(position / 400) * 95}%`,
              }}
              src={pod}
            />
          </div>
        </div>
        <Row>
          <Col>
            <span
              className="center"
              style={{
                marginLeft: "0.5rem",
                border: "red solid 1px",
                borderRadius: "5px",
                padding: "0.3rem",
              }}
            >
              {position ? position : 0} mm
            </span>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export { Position };
