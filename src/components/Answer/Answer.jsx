import React, { Component, useState } from "react";
export default Answer;
function Answer(props) {
  const [isAnswered, setIsAnswered] = useState("unanswered");
  function clickhandler() {
    setIsAnswered(props.correctAnswer);
  }
  return (
    <div>
      <button onClick={clickhandler}> Answer Button</button> Answer:{isAnswered}
    </div>
  );
}
