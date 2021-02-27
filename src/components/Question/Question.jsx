import React, { Component, useState } from "react";
import Answer from "../Answer/Answer";
import AnswerButton from "../AnswerButton/AnswerButton";
function Question(props) {
  const { question, choices } = props;
  const answerChoices = choices.map((choice) => <Answer answer={choice} />);
  return (
    <div className="question">
      {question}
      {answerChoices}
      <AnswerButton />
    </div>
  );
}

export default Question;
