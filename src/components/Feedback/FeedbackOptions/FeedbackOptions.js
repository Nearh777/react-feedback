import React from "react";
import "./FeedbackOptions.scss";

const FeedbackOptions = ({ options , onLeaveFeedback}) => {
  return (
    <>
      {options.map(option => (
        <button key={option} onClick={() => onLeaveFeedback(option)} className="button_feedback">
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;

