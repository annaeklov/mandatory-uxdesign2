import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import RenderQuiz from "../components/RenderQuiz.js";

export default function QuizPage() {
  const [startButtonIsClicked, updateStartButtonIsClicked] = useState(false);

  let show;

  function exitQuiz(){
    updateStartButtonIsClicked(false);
    console.log("startOver")
  }

  if (!startButtonIsClicked) {
    show = (
      <Button
        className="center"
        variant="outline-dark"
        onClick={() => {
          updateStartButtonIsClicked(true);
        }}
      >
        Start quiz
      </Button>
    );
  } else {
    show = <RenderQuiz exitQuiz={exitQuiz}/>;
  }

  return (
    <>
      <Row className="titleRow">
        <Col className="titleCol text-center">
          <h1>Quiz page</h1>
        </Col>
      </Row>
      <Row className="pageRow">
        <Col className="pageCol text-center">{show}</Col>
      </Row>
    </>
  );
}
