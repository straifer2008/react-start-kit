import { compose, withState } from 'recompose';
import Map from './map';

const enhance = compose(
  withState('zoom', 'setZoom', 10),
  withState('bounds', 'setBounds', null),
  withState('center', 'setCenter', { lat: 59.95, lng: 30.33 }),
);
export default enhance(Map);
