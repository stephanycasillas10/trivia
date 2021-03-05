import React, { Component, useState } from "react";
function AnswerChoice(props) {
  const { answer } = props;
  return <div className="answer">{answer}</div>;
}

export default AnswerChoice;
