import React, { Component, useState } from "react";
import "../css/App.css";
import Question from "./Question/Question";
import data from "../sample_data.json";

function App() {
  let questionNum = 0;
  return (
    <div className="app">
      Trivia!
      <Question question={data[questionNum].question.text} />
    </div>
  );
}

export default App;
