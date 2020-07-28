import React from 'react';
import PropTypes from 'prop-types';

const Marker = ({ children, className }) => children;

Marker.defaultProps = {
  children: PropTypes.any,
  className: '',
};
Marker.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Marker;
