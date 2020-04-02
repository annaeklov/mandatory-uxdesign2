import React from "react";
import { Helmet } from "react-helmet";
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
      correctPercentage: 0 + "%"
    });
  }
  return (
    <Row className="titleRow">
      <Helmet>
        <title>Stats page</title>
      </Helmet>
      <Col className="titleCo">
        <h1>Stats page</h1>
        <Card>
          <Card.Body>
            <Card.Title tabIndex="1">Your stats</Card.Title>
            <Card.Text tabIndex="1">
              Games played: {result$.value.gamesPlayed}
            </Card.Text>
            <Card.Text tabIndex="1">
              Correct answers: {result$.value.correctAnswers}
            </Card.Text>
            <Card.Text tabIndex="1">
              Incorrect answers: {result$.value.incorrectAnswers}
            </Card.Text>
            <Card.Text tabIndex="1">
              Correct answers in percentage: {result$.value.correctPercentage}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
