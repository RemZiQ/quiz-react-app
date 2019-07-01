import { connect } from 'react-redux';
import Form from './Form';
import setInput from '../../Modules/actions';

const mapDispatchToProps = dispatch => ({
  onSubmitInput: (value) => {
    dispatch(setInput(value));
  },
});

export default connect(null, mapDispatchToProps)(Form);
