import { connect } from 'react-redux';
import Form from './Form';
import { setInput, nextPage } from '../../Modules/actions';

const mapDispatchToProps = dispatch => ({
  onSubmitInput: (value) => {
    dispatch(setInput(value));
    dispatch(nextPage());
  },
});

const mapStateToProps = state => ({
  queue: state.queue,
  questionsCount: state.questions.length,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
