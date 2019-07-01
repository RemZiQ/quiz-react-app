import { connect } from 'react-redux';
import EndQuiz from './EndQuiz';

const mapStateToProps = state => ({
  answers: state.answers,
  rightAnswers: state.rightAnswers,
  questions: state.questions,
});


export default connect(mapStateToProps, null)(EndQuiz);
