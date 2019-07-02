import React from 'react';
import { Link } from 'react-router-dom';


const EndQuiz = () => (
  <Link to="/results">
    <button type="button">End quiz and check answers</button>
  </Link>
);


export default EndQuiz;
