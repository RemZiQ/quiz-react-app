import React from 'react';

const Question = ({ question }) => (
  <h2>{question ? `${question} ?` : 'Quiz ended. Now you can check your answers'}</h2>
);

export default Question;
