import React from 'react';
import { Link } from 'react-router-dom';


const EndQuiz = ({ answers, rightAnswers, questions }) => {
  const checkAnswers = () => {
    console.log('answers', answers);
    console.log('rightAnswers', rightAnswers);
    console.log('questions', questions);
  };
  return (
    <Link to="/results">
      <button
        type="button"
        onClick={checkAnswers}
      >
      End quiz and check answers
      </button>
    </Link>
  );
};


export default EndQuiz;
