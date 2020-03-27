import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import RenderQuiz from "../components/RenderQuiz.js";

export default function QuizPage() {
  const [startButtonIsClicked, updateStartButtonIsClicked] = useState(false);

  let show;

  if (!startButtonIsClicked) {
    show = (
      <Button
        variant="outline-dark"
        onClick={() => {
          updateStartButtonIsClicked(true);
        }}
      >
        Start quiz
      </Button>
    );
  } else {
    show = <RenderQuiz />;
  }

  return (
    <Row>
    <Col>
      <h1>QuizPage</h1>
      <div>{show}</div>
      </Col>
    </Row>
  );
}
