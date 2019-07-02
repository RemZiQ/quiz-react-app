import React from 'react';

const Question = ({ question, countOnAnswers, countOfQuestions }) => {
  const message = countOnAnswers === countOfQuestions ? 'Quiz ended. Now you can check your answers'
    : 'It`s last question go back, and answer on skiped questions';
  return (
    <h2>{question ? `${question} ?` : message}</h2>
  );
};

export default Question;
