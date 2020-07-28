import React from 'react';
import PropTypes from 'prop-types';

const Cluster = ({ children }) => children;

Cluster.defaultProps = { children: PropTypes.any };
Cluster.propTypes = { children: PropTypes.any };

export default Cluster;
