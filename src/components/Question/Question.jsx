import React, { Component, useState } from "react";
import Answer from "../Answer/Answer";
function Question(props) {
  const { question, choices } = props;
  return (
    <div className="question">
      {question}
      <Answer />
    </div>
  );
}

export default Question;
