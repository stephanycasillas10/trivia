import React, { Component, useState } from "react";
import "../css/App.css";
import Question from "./Question/Question";
import NextQuestion from "./NextQuestion/NextQuestion";
import data from "../sample_data.json";

function App() {
  let questionNum = 0;
  return (
    <div className="app">
      Trivia!
      <Question
        correctChoiceIndex={data[questionNum].question.correct_choice_index}
        question={data[questionNum].question.text}
        choices={data[questionNum].question.choices}
      />
      <NextQuestion />
    </div>
  );
}

export default App;
