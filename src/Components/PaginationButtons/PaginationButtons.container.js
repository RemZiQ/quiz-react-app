import { connect } from 'react-redux';
import PaginationButtons from './PaginationButtons';
import { nextPage, prevPage } from '../../Modules/actions';

const mapStateToProps = state => (
  { queue: state.queue }
);

const mapDispatchToProps = dispatch => ({
  nextPage: () => {
    dispatch(nextPage());
  },
  prevPage: () => {
    dispatch(prevPage());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(PaginationButtons);
