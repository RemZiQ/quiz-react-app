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
  rightAnswers: state.rightAnswers,
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);
