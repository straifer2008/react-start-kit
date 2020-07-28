import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { Map } from '../../components';

const Clients = ({ estimates, normalizeHandlerTest }) => (
  <div>
    <h1>Clients</h1>
    <p>{JSON.stringify(estimates)}</p>
    <div>
      <Button onClick={normalizeHandlerTest}>Normalize</Button>
    </div>

    <div className="padding-bottom-10 padding-top-10">
      <div className="flex-row-center">
        <Map />
      </div>
    </div>
  </div>
);

Clients.defaultProps = {
  estimates: {},
  normalizeHandlerTest: '',
};
Clients.propTypes = {
  estimates: PropTypes.object,
  normalizeHandlerTest: PropTypes.string,
};

export default Clients;
