import { connect } from 'react-redux';
import Question from './Question';


const mapStateToProps = state => (
  {
    question: state.questions[state.queue],
  }
);

export default connect(mapStateToProps, null)(Question);
