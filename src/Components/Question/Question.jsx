import React, { Fragment } from 'react';

import Form from '../Form';

import './question.css';

const Question = ({
  question,
  lastQuestion,
  haveAnswer,
  message,
}) => (
  <Fragment>
    <h2>{question ? `${question} ?` : message}</h2>
    {(!lastQuestion && !haveAnswer) ? <Form /> : null}
    {haveAnswer && <p>You answer already counted</p>}
  </Fragment>
);


export default Question;
