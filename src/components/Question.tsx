import React from "react";

const Question = () => {
  return (
    <div className="backgroundQuestion">
      <div className="descriptionText">Text question</div>
      <div className="optionsArea">
        <span className="optionButton">option</span>
        <span className="optionButton">option</span>
        <span className="optionButton">option</span>
        <span className="optionButton">option</span>
      </div>
      <div>
        <button className="mainButton">Submit</button>
      </div>
    </div>
  );
};

export default Question;
