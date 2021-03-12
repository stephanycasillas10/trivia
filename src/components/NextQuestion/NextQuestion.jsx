import React, { Component, useState } from "react";

function NextQuestion(props) {
  return <button onClick={props.onNextQuestion}>Next Question</button>;
}

export default NextQuestion;
