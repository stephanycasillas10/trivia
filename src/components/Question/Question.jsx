import React, { Component, useState } from "react";

function Question(props) {
  const { question } = props;
  return <div className="question">{question}</div>;
}

export default Question;
