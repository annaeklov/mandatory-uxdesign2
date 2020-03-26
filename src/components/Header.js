import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

export default function Header({ onClickMenuButton }) {
  return (
    <Navbar variant="light" bg="light">
      <Button
        type="button"
        className="navbar-toggle"
        variant="light"
        onClick={onClickMenuButton}
        aria-label="Open menu"
      >
        <span className="navbar-toggler-icon"></span>
      </Button>
      <h1>My App</h1>
    </Navbar>
  );
}
