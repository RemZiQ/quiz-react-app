import { connect } from 'react-redux';
import Results from './Results';
import { reload } from '../../Modules/actions';

const mapDispatchToProps = dispatch => ({
  reloadApp: () => {
    dispatch(reload());
  },
});

const mapStateToProps = state => ({
  answers: state.answers,
  rightAnswers: state.questions.map(elem => elem.correctAnswer),
  questions: state.questions,
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);

// correctAnswer
