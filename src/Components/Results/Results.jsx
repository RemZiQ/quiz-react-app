import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Results = ({ reloadApp, answers, rightAnswers }) => {
  console.log('answers', answers);
  console.log('rightAnswers', rightAnswers);
  const checkedAnswers = answers.map((elem, index) => (
    <li>{+elem === rightAnswers[index] ? `Correct!${elem}` : `Wrong! The correct answer is ${rightAnswers[index]}`}</li>
  ));
  return (
    <Fragment>
      <h2>HEre will be answers</h2>
      <ul>
        {checkedAnswers}
      </ul>
      <Link to="/quiz">
        <button type="button" onClick={reloadApp}>Try again</button>
      </Link>
    </Fragment>
  );
};

export default Results;

// onClick={handler}
