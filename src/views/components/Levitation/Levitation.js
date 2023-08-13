import React, { useEffect, useState } from "react";
import "./Levitation.css";
import { Container, Row, Col } from "react-bootstrap";
import magnet from "../../../assets/magnet.svg";
import magnetgr from "../../../assets/magnet_green.svg";
import "../commonStyles.css";

const Progressbar = ({ height, gap }) => {
  const [airgap, setAirgap] = React.useState(8);
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setAirgap(gap);
    setValue(gap * 2 - 4);
  });

  return (
    <Container>
      <Container className="align-items-center sub-section white-text">
        <h4>Levitation</h4>
        <Row
          className="sub-sub-section"
          style={{
            height: `${height}px`,
          }}
        >
          <Col>
            <div style={{ color: "rgb(250,150,150)", textAlign: "right" }}>
              &#8594;&#8594;
            </div>
          </Col>
          <Col style={{ textAlign: "left" }}>
            <img src={magnetgr} style={{ marginTop: "-55px" }} />
            <img
              src={magnet}
              style={{
                transform: "rotate(180deg)",
                position: "absolute",
                marginLeft: "-36px",
                marginTop: `${value}px`,
              }}
            />
            {/* <div>
            <div style={{ marginTop: `${value}px` }}>
              <div
                className="pod-lev"
                style={{
                  width: "60%",
                  height: "16px",
                  backgroundColor: "white",
                  border: "solid 3px green",
                }}
              ></div>
            </div>
          </div> */}
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="center">
              <span style={{ fontWeight: "600" }}>Air gap: </span>
              <span
                style={{
                  marginLeft: "0.5rem",
                  border: "red solid 1px",
                  borderRadius: "5px",
                  padding: "0.3rem",
                }}
              >
                {airgap ? airgap : 0} mm
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );

  // return (
  //   <Container className="sub-section white-text" style={{ width: "200px" }}>
  //     <h4>Levitation</h4>
  //     <Row
  //       style={{
  //         border: "#088000 solid 2px",
  //         margin: "1rem",
  //         borderRadius: "1rem",
  //         backgroundColor: "#333333",
  //       }}
  //     >
  //       <Col style={{ width: "60px", paddingRight: "0px" }}>
  //         <div
  //           className="progress-div"
  //           style={{
  //             height: `${height}px`,
  //             paddingRight: "0px",
  //           }}
  //         >
  //           <div
  //             style={{
  //               textAlign: "right",
  //               color: "white",
  //               // marginTop: `${height / 2 - 9}px`,
  //             }}
  //           >
  //             {/* <img src={pointer} alt="-" style={{ width: "40px" }} /> */}
  //             <div
  //               style={{
  //                 paddingTop: `${height / 2 + 10}px`,
  //                 marginRight: "2px",
  //               }}
  //             >
  //               &#8594;&#8594;
  //             </div>
  //           </div>
  //         </div>
  //       </Col>
  //       <Col style={{ paddingLeft: "0px" }}>
  //         {/* <div style={{ height: `${value}px` }} className="progress" /> */}
  //         <div
  //           className="pod-lev"
  //           style={{
  //             width: "60%",
  //             height: "16px",
  //             backgroundColor: "white",
  //             border: "solid 3px green",
  //             marginTop: `${height - value}px`,
  //           }}
  //         ></div>
  //       </Col>
  //     </Row>
  //     <Row>
  //       <Col>
  //         <div className="center">
  //           <span style={{ fontWeight: "600" }}>Air gap: </span>
  //           <span
  //             style={{
  //               marginLeft: "0.5rem",
  //               border: "red solid 1px",
  //               borderRadius: "5px",
  //               padding: "0.3rem",
  //             }}
  //           >
  //             {(percent * 12).toFixed(1)} mm
  //           </span>
  //         </div>
  //       </Col>
  //     </Row>
  //   </Container>
  // );
};

function Levitation(props) {
  return (
    <div>
      <Progressbar style={{ margin: "auto" }} height={100} gap={props.height} />
    </div>
    // <motion.div>
    //   Levitation
    //   <Progressbar bgcolor="red" progress="60" />
    // </motion.div>
  );
}

export { Levitation };
