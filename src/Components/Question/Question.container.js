import { connect } from 'react-redux';
import Question from './Question';


const mapStateToProps = state => (
  {
    question: state.questions[state.questionNumber],
    countOnAnswers: state.countOnAnswers,
    countOfQuestions: state.questions.length,
  }
);

export default connect(mapStateToProps, null)(Question);
