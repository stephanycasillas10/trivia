import React, { Component, useState } from "react";
import "../css/App.css";
import Question from "./Question/Question";
import NextQuestion from "./NextQuestion/NextQuestion";
import data from "../sample_data.json";

function App() {
  const [isAnswered, setIsAnswered] = useState("unanswered");
  function answerclickhandler() {
    var correctChoiceIndex = data[questionNum].question.correct_choice_index;
    var choices = data[questionNum].question.choices;
    setIsAnswered(choices[correctChoiceIndex]);
  }
  const [questionNum, setQuestionNum] = useState(0);
  function clickhandler() {
    setQuestionNum(questionNum + 1);
    setIsAnswered("unanswered");
  }

  return (
    <div className="app">
      Trivia!
      <Question
        question={data[questionNum].question.text}
        choices={data[questionNum].question.choices}
      />
      <NextQuestion onNextQuestion={clickhandler} />
      <button onClick={answerclickhandler}> Answer Button</button> Answer:
      {isAnswered}
    </div>
  );
}

export default App;
