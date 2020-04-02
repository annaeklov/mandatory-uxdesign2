import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { updateResultInLocalStorage } from "../components/Store.js";

import RenderQuiz from "../components/RenderQuiz.js";

export default function QuizPage() {
  const [startButtonIsClicked, setStartButtonIsClicked] = useState(false);

  let show;
  let showTitle;

  function exitQuiz() {
    setStartButtonIsClicked(false);
    updateResultInLocalStorage(null);
  }

  function startQuiz() {
    setStartButtonIsClicked(true);
  }

  if (!startButtonIsClicked) {
    showTitle = "Main page";
    show = (
      <Button className="center" variant="outline-dark" onClick={startQuiz}>
        Start quiz
      </Button>
    );
  } else {
    showTitle = "Quiz page";
    show = <RenderQuiz exitQuiz={exitQuiz} />;
  }

  return (
    <>
      <Row className="titleRow">
        <Col className="titleCol text-center">
          <h1>{showTitle}</h1>
        </Col>
      </Row>
      <Row className="pageRow">
        <Col className="pageCol text-center">{show}</Col>
      </Row>
    </>
  );
}
