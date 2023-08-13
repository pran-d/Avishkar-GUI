import React from "react";
import { Table } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import "../commonStyles.css";

function TabulatedData({ title, data }) {
  return (
    <Container className="white-text">
      <h4 style={{ marginTop: "0.6rem" }}>{title}</h4>
      <Table
        style={{ width: "90%", borderRadius: "1rem", margin: "auto" }}
        bordered
        variant="dark"
      >
        <tbody>
          {data.map((reading, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{reading}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export { TabulatedData };
