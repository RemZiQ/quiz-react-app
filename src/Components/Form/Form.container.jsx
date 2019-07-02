import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import { setInput, nextPage, countAnswers } from '../../Modules/actions';

const mapDispatchToProps = dispatch => ({
  onSubmitForm: (value) => {
    dispatch(setInput(value));
    dispatch(countAnswers());
    dispatch(nextPage());
  },
});

const mapStateToProps = (state) => {
  const { questions, questionNumber } = state;
  return (
    {
      asnwerVariantsProp: questions[questionNumber].answers,
    }
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
