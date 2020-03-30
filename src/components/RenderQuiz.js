import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

export default function RenderQuiz() {
  const [questionsArr, setQuestionsArr] = useState([]);
  const [selectedRadios, setSelectedRadios] = useState({});

  const entities = {
    "&#039;": "'",
    "&quot;": '"',
    "&ldquo;": "“",
    "&rdquo;": "”",
    "&ntilde;": "ñ",
    "&eacute;": "é",
    "&amp;": "&",
    "&uuml;": "ü"
  };

  useEffect(() => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
      )
      .then(response => {
        let arr = quizData(response.data.results);
        setQuestionsArr(arr);
        console.log(arr);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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
        <Card.Body>
          <Card.Title>Q{number}:</Card.Title>
          <Card.Text>{question}</Card.Text>

          {quiz.answers.map((answer, index) => {
            answer = answer.replace(/&#?\w+;/g, match => entities[match]);
            return (
              <Card.Footer key={index}>
                <label forhtml={answer}>
                  <input
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

  function handleChangeRadio(e) {
    setSelectedRadios({
      ...selectedRadios,
      ...{ [e.target.name]: e.target.value }
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(selectedRadios);
  }

  return (
    <>
      {!mappedArr.length ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <form onSubmit={onSubmit}>
          {mappedArr} <br />
          <Button type="submit" className="btnDone" variant="outline-dark">
            Done
          </Button>
        </form>
      )}
    </>
  );
}

/* const [value, updateValue] = useState(null);
    const items = [
        "a", 
        "b", 
        "c", 
        "d"
    ]
            {items.map((currentValue, idx) => (
                <input 
                checked= {value === currentValue}
                    type="radio"
                    name="radio"
                    onChange={() => updateValue(currentValue)}
                    />
            ))}
                <p>{value}</p> */
