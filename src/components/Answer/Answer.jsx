import React, { Component, useState } from "react";
function Answer(props) {
  const { answer } = props;
  return <div className="answer">{answer}</div>;
}

export default Answer;
