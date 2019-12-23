import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const Main = ({ logout, user }) => (
  <div>
    Main
    {user && <p>{JSON.stringify(user)}</p>}
    <Button onClick={logout} variant="outlined">logout</Button>
  </div>
);

Main.defaultProps = {
  logout: null,
  user: null,
};
Main.propTypes = {
  logout: PropTypes.func,
  user: PropTypes.object || null,
};

export default Main;
