import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import Routes from './routes';

const enhance = compose(withRouter);
export default enhance(Routes);
