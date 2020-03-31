import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";


export default function ModalPopup({
  show,
  playAgain,
  exitQuiz,
  result,
  numberOfQuestions
}) {
  return (
    <Modal
      show
      onHide={playAgain}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      aria-modal="true"
      centered
      autoFocus
      backdrop="static"
    >
      <Modal.Body>
        <p>
          Your result is: {result}/{numberOfQuestions}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" onClick={exitQuiz}>
          Exit quiz
        </Button>
        <Button variant="outline-dark" onClick={playAgain}>
          Play again
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
