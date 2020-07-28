import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { Marker } from './components';
import './styles.scss';

const Map = ({ zoom, bounds, center }) => (
  <div className="Map">
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
      defaultCenter={center}
      defaultZoom={zoom}
    >
      <Marker lat={center.lat} lng={center.lng}>
        <span>1</span>
      </Marker>
    </GoogleMapReact>
  </div>
);

Map.defaultProps = { bounds: null };
Map.propTypes = {
  zoom: PropTypes.number.isRequired,
  center: PropTypes.object.isRequired,
  bounds: PropTypes.any,
};

export default Map;
