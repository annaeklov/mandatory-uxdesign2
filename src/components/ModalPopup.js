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
  
  let title;

  if (result >= 0 && result <= 3) {
    title = "Naaah, you suck!";
  } else if (result > 3 && result <= 7) {
    title = "You're OK!";
  } else if (result > 7 && result < 10) {
    title = "WOW, you're the best!";
  } else if (result === 10) {
    title = "Oh my, you know it all!";
  } else title = "Your result";

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
        <Modal.Title>{title}</Modal.Title>
        <p>
          You had {result} correct answers of {numberOfQuestions} questions
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
