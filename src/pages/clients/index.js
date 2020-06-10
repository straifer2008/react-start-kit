import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import Clients from './clients';
import { estimatesAction } from '../../store/estimates';
import { normalizedData } from '../../store/estimates/schema';

const mapStateToProps = ({ estimates }) => ({ estimates });
const mapDispatchToProps = { testAddNormalize: estimatesAction.testAddNormalize };
const normalizeHandlerTest = ({ testAddNormalize }) => () => {
	console.log(normalizedData);
	testAddNormalize(normalizedData);
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({ normalizeHandlerTest }),
);
export default enhance(Clients);
