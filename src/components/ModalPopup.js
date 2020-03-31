import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ModalPopup({ show, hide, exitQuiz }) {
 

  return (
    <Modal
      show
      onHide={hide}
      animation={true}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      aria-modal="true"
      centered
      autoFocus
      backdrop="static"
    >
      <Modal.Header>Modal</Modal.Header>
      <Modal.Body>
        <p>text text text</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={exitQuiz}>
          Exit quiz
        </Button>
        <Button variant="outline-dark" onClick={hide}>
          Play again
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
