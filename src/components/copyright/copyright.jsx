import React from 'react';
// import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    <span>Copyright © </span>
    <Link color="inherit" to="https://material-ui.com/">Artem Ivanovich</Link>
    {` ${new Date().getFullYear()}.`}
  </Typography>
);

export default Copyright;
