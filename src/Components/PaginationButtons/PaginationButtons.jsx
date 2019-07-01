import React, { Fragment } from 'react';

const PaginationButtons = ({ prevPage, nextPage, queue }) => (
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
      disabled={!!(queue > 1)}
      type="button"
    >
      Next question
    </button>
  </Fragment>
);

export default PaginationButtons;
