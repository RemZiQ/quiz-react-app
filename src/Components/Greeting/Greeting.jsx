import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Greeting = () => (
  <Fragment>
    <h2>Hello do you want to start quiz?</h2>
    <Link to="/quiz">
      <button type="button">Start quiz?</button>
    </Link>
  </Fragment>
);


export default Greeting;
