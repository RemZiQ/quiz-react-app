import React, { Fragment } from 'react';


// TODO: replace for only button component!

const PaginationButtons = ({ prevPage, nextPage, queue, questionsCount }) => (
  <Fragment>
    <button
      onClick={prevPage}
      disabled={!(queue > 0)}
      type="button"
    >
      Previus question
    </button>
    <button
      onClick={nextPage}
      disabled={!!(queue >= questionsCount)}
      type="button"
    >
      Next question
    </button>
  </Fragment>
);

export default PaginationButtons;
