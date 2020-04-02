import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import ModalPopup from "./ModalPopup.js";
import { result$, updateResultInLocalStorage } from "./Store.js";

export default function RenderQuiz({ exitQuiz }) {
  const [questionsArr, setQuestionsArr] = useState([]);
  const [selectedRadios, setSelectedRadios] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [result, setResult] = useState(0);

  const entities = {
    "&#039;": "'",
    "&quot;": '"',
    "&ldquo;": '"',
    "&rdquo;": '"',
    "&ntilde;": "ñ",
    "&eacute;": "é",
    "&amp;": "&",
    "&uuml;": "ü",
    "&aring;": "å",
    "&auml;": "ä",
    "&ouml;": "ö",
    "&shy;": "-",
    "&rsquo;": "'"
  };

  useEffect(() => {
    newQuiz();
  }, []);

  function newQuiz() {
    axios
      .get("https://opentdb.com/api.php?amount=10")
      .then(response => {
        let arr = quizData(response.data.results);
        setQuestionsArr(arr);
      })

      .catch(error => {
        console.log(error);
      });
  }

  function quizData(arr) {
    return arr.map(x => {
      return {
        question: x.question,
        correctAnswer: x.correct_answer,
        answers: [x.correct_answer, ...x.incorrect_answers].sort(
          () => Math.random() - 0.5
        )
      };
    });
  }

  let mappedArr = questionsArr.map((quiz, idx) => {
    let number = (idx += 1);
    let question = quiz.question.replace(/&#?\w+;/g, match => entities[match]);

    return (
      <Card border="dark" key={idx}>
        <Card.Body autoFocus aria-labelledby="QuestionCard">
          <Card.Title aria-labelledby="QuestionTitle" tabIndex="1">
            Question {number}:
          </Card.Title>
          <Card.Text aria-labelledby="QuestionText" tabIndex="1">
            {question}
          </Card.Text>

          {quiz.answers.map((answer, index) => {
            answer = answer.replace(/&#?\w+;/g, match => entities[match]);
            return (
              <Card.Footer key={index} style={{ backgroundColor: "white" }}>
                <label forhtml={answer}>
                  <input
                    tabIndex="1"
                    type="radio"
                    id={answer}
                    value={answer}
                    name={number}
                    required
                    checked={selectedRadios[number] === answer}
                    onChange={handleChangeRadio}
                  />
                  {answer}
                </label>
              </Card.Footer>
            );
          })}
        </Card.Body>
      </Card>
    );
  });

  function getResult() {
    let countCorrect = 0;

    for (let i = 0; i < questionsArr.length; i++) {
      if (selectedRadios[i + 1] === questionsArr[i].correctAnswer)
        countCorrect++;
    }
    setResult(countCorrect);

    let statsResult = { ...result$.value };
    statsResult.gamesPlayed++;
    statsResult.correctAnswers += countCorrect;
    statsResult.incorrectAnswers += questionsArr.length - countCorrect;
    statsResult.correctPercentage =
      Math.round(
        (statsResult.correctAnswers /
          (statsResult.correctAnswers + statsResult.incorrectAnswers)) *
          100
      ) + "%";

    updateResultInLocalStorage(statsResult);
  }

  function handleChangeRadio(e) {
    setSelectedRadios({
      ...selectedRadios,
      ...{ [e.target.name]: e.target.value }
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    handleShow();
  }

  function handleClose() {
    setOpenModal(false);
    newQuiz();
  }
  function handleShow() {
    getResult();
    setOpenModal(true);
  }

  return (
    <>
      {!mappedArr.length ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <form
          onSubmit={onSubmit}
          aria-labelledby="questions, radio buttons and submit button"
        >
          {mappedArr} <br />
          <Button
            tabIndex="1"
            type="submit"
            className="btnDone"
            variant="outline-dark"
          >
            Done
          </Button>
        </form>
      )}
      {openModal && (
        <ModalPopup
          exitQuiz={exitQuiz}
          show={openModal}
          playAgain={handleClose}
          result={result}
          numberOfQuestions={questionsArr.length}
        />
      )}
    </>
  );
}
