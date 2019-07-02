import { connect } from 'react-redux';
import Form from './Form';
import { setInput, nextPage, countAnswers } from '../../Modules/actions';

const mapDispatchToProps = dispatch => ({
  onSubmitInput: (value) => {
    dispatch(setInput(value));
    dispatch(countAnswers());
    dispatch(nextPage());
  },
});

const mapStateToProps = (state) => {
  const currentAnswer = state.answers[state.questionNumber];
  return (
    {
      moreQuestions: state.countOnAnswers !== state.questions.length,
      alreadyHaveAnswer: currentAnswer !== null && currentAnswer !== undefined,
      currentAnswer,
    }
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
