import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner'

export default function RenderQuiz() {
  const [questionsArr, setQuestionsArr] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
      )
      .then(response => {
        console.log(response.data);
        setQuestionsArr(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  let mappedArr = questionsArr.map((quiz, idx) => {
    let number = (idx += 1);
    let question = quiz.question;

    let answers = [...quiz.incorrect_answers, quiz.correct_answer];
    let mixedAnswers = answers.sort(() => Math.random() - 0.5);

    return (
      <Card border="dark" key={idx}>
        <Card.Body>
          <Card.Title>Q{number}:</Card.Title>
          <Card.Text>{question}</Card.Text>

          {mixedAnswers.map((answer, index) => {
            return (
              <Card.Footer key={index}>
                <input
                  type="radio"
                  id={question}
                  value={answer}
                  name={question}
                />
                <label forhtml={question}>{answer}</label>
              </Card.Footer>
            );
          })}
        </Card.Body>
      </Card>
    );
  });

  return (
    <>
      {!mappedArr.length ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <>
          {mappedArr} <br />
          <Button className="btnDone" variant="outline-dark">
            Done
          </Button>
        </>
      )}
    </>
  );
}
