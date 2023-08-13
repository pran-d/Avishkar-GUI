import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import vtems from "../../assets/wvtems.png";
import "./Levitation.css";
import lems from "../../assets/whlems.png";

function Levitation(props) {
  return (
    <Container>
      <Container className="levitation-container">
        <Col className="first-col">
          <h3 className="heading">Vertical EMS</h3>
          <Row>
            <Col lg={1}></Col>
            <Col lg={4} className="data-btn">
              <h3 className="data">{props.currentsensor1} Amp</h3>
              <h3 className="data">{props.gapsensor1} mm</h3>
              <h3 className="data">{props.temp1} °C</h3>
            </Col>
            <Col lg={2}></Col>
            <Col lg={4} className="data-btn">
              <h3 className="data">{props.currentsensor2} Amp</h3>
              <h3 className="data">{props.gapsensor2} mm</h3>
              <h3 className="data">{props.temp2}°C</h3>
            </Col>
            <Col lg={1}></Col>
          </Row>

          <Row>
            <Col lg={3}></Col>
            <Col lg={1} className="box-shadow-small">
              <h4 className="sub-heading">1</h4>
            </Col>
            <Col lg={4}></Col>
            <Col lg={1} className="box-shadow-small ">
              <h4 className="sub-heading">2</h4>
            </Col>
          </Row>
          <Row>
            <Image className="pod-img" src={vtems} />
          </Row>
          <Row>
            <Col lg={3}></Col>
            <Col lg={1} className="box-shadow-small ">
              <h4 className="sub-heading">3</h4>
            </Col>
            <Col lg={4}></Col>
            <Col lg={1} className="box-shadow-small">
              <h4 className="sub-heading">4</h4>
            </Col>
          </Row>

          <Row>
            <Col lg={1}></Col>
            <Col lg={4} className="data-btn">
              <h3 className="data">{props.currentsensor3} Amp</h3>
              <h3 className="data">{props.gapsensor3} mm</h3>
              <h3 className="data">{props.temp3} °C</h3>
            </Col>
            <Col lg={2}></Col>
            <Col lg={4} className="data-btn">
              <h3 className="data">{props.currentsensor4} Amp</h3>
              <h3 className="data">{props.gapsensor4} mm</h3>
              <h3 className="data">{props.temp4} °C</h3>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </Col>
        <Col>
          <h3 className="heading" style={{ paddingTop: "7rem" }}>
            Lateral EMS
          </h3>
          <Row>
            <Col lg={3}></Col>
            <Col
              lg={1}
              className="box-shadow-small"
              style={{ marginTop: "10px" }}
            >
              <h4 className="sub-heading">1</h4>
            </Col>
            <Col lg={4}></Col>
            <Col
              lg={1}
              className="box-shadow-small"
              style={{ marginTop: "10px" }}
            >
              <h4 className="sub-heading">2</h4>
            </Col>
          </Row>
          <Row>
            <Col lg={1}></Col>
            <Col lg={4} className="data-btn">
              <h3 className="data">Amp</h3>
              <h3 className="data"> mm</h3>
              <h3 className="data">°C</h3>
            </Col>
            <Col lg={2}></Col>
            <Col lg={4} className="data-btn">
              <h3 className="data">Amp</h3>
              <h3 className="data">mm</h3>
              <h3 className="data">°C</h3>
            </Col>
            <Col lg={1}></Col>
          </Row>
          <Row>
            <Image className="pod-img1" src={lems} />
          </Row>
          <Row>
            <Col lg={3}></Col>
            <Col lg={1} className="box-shadow-small ">
              <h4 className="sub-heading">3</h4>
            </Col>
            <Col lg={4}></Col>
            <Col lg={1} className="box-shadow-small">
              <h4 className="sub-heading">4</h4>
            </Col>
          </Row>

          <Row>
            <Col lg={1}></Col>
            <Col lg={4} className="data-btn">
              <h3 className="data">Amp</h3>
              <h3 className="data">mm</h3>
              <h3 className="data">°C</h3>
            </Col>
            <Col lg={2}></Col>
            <Col lg={4} className="data-btn">
              <h3 className="data">Amp</h3>
              <h3 className="data">mm</h3>
              <h3 className="data">°C</h3>
            </Col>
            <Col lg={1}></Col>
          </Row>
          <Row style={{ marginTop: "400px" }}></Row>
        </Col>
      </Container>
    </Container>
  );
}

export { Levitation };
