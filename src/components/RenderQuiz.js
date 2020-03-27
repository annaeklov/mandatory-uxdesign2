import React, { useState, useEffect } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function RenderQuiz() {
  const [questionsArr, setQuestionsArr] = useState([]);

  function handleAxios() {
    axios
      .get("https://opentdb.com/api.php?amount=10")
      .then(response => {
        console.log(response.data.results);
        setQuestionsArr(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    handleAxios();
  }, []);

  let mappedArr = questionsArr.map((quiz, idx) => {
    return <p>{quiz.question}</p>;
  });

  return (
    <Row>
      <Col>
        <p>{mappedArr}</p>
      </Col>
    </Row>
  );
}
