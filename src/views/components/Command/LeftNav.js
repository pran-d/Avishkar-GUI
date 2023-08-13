import React from "react";
import "./Command.css";
import { Link } from "react-router-dom";
function LeftNav(props) {
  return (
    <div
      className="white-text"
      style={{
        marginTop: "1rem",
        height: "fit-content",
        padding: "3rem 1rem",
        backgroundColor: "rgba(25,25,25,0.5)",
        boxShadow: "1px 2px 3px #22252B, inset 2px 2px 2px #35393F",
        textAlign: "center",
      }}
    >
      <div className="mb-5">
        <h4 style={{ marginBottom: "0.5rem", fontSize: "1.2em" }}>Pages</h4>
        <Link className="nav-link" to="/data">
          <div>Home</div>
        </Link>
      </div>
      <h4 style={{ marginBottom: "0.5rem", fontSize: "1.2em" }}>Sub-Modules</h4>
      {[
        { href: "/data/levitation", label: "Levitation" },
        { href: "/data/battery", label: "Battery Packs" },
        { href: "/data/propulsion", label: "Propulsion" },
        { href: "/data/plot", label: "Graphs" },
      ].map((subpage) => {
        return (
          <Link className="nav-link" to={subpage.href}>
            <div>{subpage.label}</div>
          </Link>
        );
      })}
    </div>
  );
}

export { LeftNav };
