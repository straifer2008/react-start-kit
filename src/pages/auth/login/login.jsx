import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Button } from '@material-ui/core';

const Login = ({ loginHandler }) => (
  <Container>
    <h1>Auth</h1>
    <Button onClick={loginHandler} variant="outlined">Login</Button>
    <Link to="/register"><Button variant="outlined">Register</Button></Link>
  </Container>
);

Login.defaultProps = {
  loginHandler: null,
};
Login.propTypes = {
  loginHandler: PropTypes.func,
};

export default Login;
