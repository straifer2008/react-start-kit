import React from 'react';
import { Button } from '@material-ui/core';
// import PropTypes from 'prop-types';

const Clients = ({ estimates, normalizeHandlerTest }) => (
  <div>
    <h1>Clients</h1>
    <p>{JSON.stringify(estimates)}</p>
    <div>
      <Button onClick={normalizeHandlerTest}>Normalize</Button>
    </div>
  </div>
);

// Clients.propTypes = {};

export default Clients;
