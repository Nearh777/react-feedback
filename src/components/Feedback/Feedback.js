import React, { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";
import "./Feedback.scss";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleStateChange = (name) => {
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };

  
  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);

  countPositiveFeedbackPercentage = () =>
    Math.floor(
      (this.state.good /
        this.countTotalFeedback()) *
        100
    );

  render() {
    const { good, neutral, bad } = this.state;
    const countTotal = this.countTotalFeedback(this.props);
    const positiveFeedback = this.countPositiveFeedbackPercentage(this.props);
    return (
      <>
        
<Section title="Please leave feedback" />
<div className="div_feedback ">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.handleStateChange}
          />
        </div>
        <div>
        <Section title="Statistic" />
        {countTotal ? (
          <>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotal}
              positivePercentage={positiveFeedback}
            />
          </>
        ) : (
          <Notification message="There is no feedback" />
        )}
        </div>
      </>
    );
  }


}

export default Feedback;
