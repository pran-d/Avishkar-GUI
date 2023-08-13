import React from "react";
import { Row, Col } from "react-bootstrap";
import { CChart } from "@coreui/react-chartjs";
import "./styles.css";

function Graph({ gapData, labels }) {
  const options = {
    animation: {
      duration: 0,
    },
    scales: {
      y: {
        min: 0, // Minimum value for the y-axis
        max: 12, // Maximum value for the y-axis
      },
    },
  };
  return (
    <Row>
      <Col lg={6}>
        <CChart
          height="150"
          type="line"
          data={{
            labels: labels,
            datasets: [
              {
                label: "Air Gap 1",
                borderColor: "green",
                pointBorderColor: "green",
                data: gapData.ems1,
              },
            ],
          }}
          options={options}
        />
      </Col>
      <Col lg={6}>
        <CChart
          height="150"
          type="line"
          data={{
            labels: labels,
            datasets: [
              {
                label: "Air Gap 2",
                borderColor: "green",
                pointBorderColor: "green",
                data: gapData.ems2,
              },
            ],
          }}
          options={options}
        />
      </Col>
    </Row>
  );
}

export { Graph };
