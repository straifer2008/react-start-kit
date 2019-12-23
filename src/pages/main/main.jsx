import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from '@material-ui/core';

const Main = ({ logout, user }) => (
  <Container>
    <h1>Main</h1>
    {user && <p>{JSON.stringify(user)}</p>}
    <Button onClick={logout} variant="outlined">logout</Button>
  </Container>
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
