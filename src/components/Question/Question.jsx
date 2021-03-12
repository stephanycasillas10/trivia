import React, { Component, useState } from "react";
import AnswerChoice from "../AnswerChoice/AnswerChoice";
import Answer from "../Answer/Answer";
function Question(props) {
  const { question, choices,correctChoiceIndex } = props;
  const answerChoices = choices.map((choice) => (
    <AnswerChoice answer={choice} />
  ));
  return (
    <div className="question">
      {question}
      {answerChoices}
      <Answer correctAnswer={choices[correctChoiceIndex]} />
    </div>
  );
}

export default Question;

