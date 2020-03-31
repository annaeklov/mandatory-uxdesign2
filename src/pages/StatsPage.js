import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { result$, updateResultInLocalStorage } from "../components/Store.js";

export default function StatsPage() {

 if (!result$.value) {
  updateResultInLocalStorage({
    gamesPlayed: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    correctPercentage: 0
  });
}
  return (
    <Row className="titleRow">
      <Col className="titleCo">
        <h1>Stats page</h1>

        <Card>
          <Card.Body>
            <Card.Title>Your stats</Card.Title>
            <Card.Text>Games played: {result$.value.gamesPlayed}</Card.Text>
            <Card.Text>
              Correct answers: {result$.value.correctAnswers}
            </Card.Text>
            <Card.Text>
              Incorrect answers: {result$.value.incorrectAnswers}
            </Card.Text>
            <Card.Text>
              Correct answers in percentage: {result$.value.correctPercentage}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
