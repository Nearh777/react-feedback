import React from "react";
import './Statistic.scss'

const Statistics = ({ good, neutral, bad, total, positivePercentage}) => 
   (
    <div className="div_statistic">
      
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback:{positivePercentage ? positivePercentage : 0}%</p>
    </div>
  );


export default Statistics;
