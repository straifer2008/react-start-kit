import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const Login = ({ loginHandler }) => (
  <>
    <h1>Auth</h1>
    <Button onClick={loginHandler} variant="outlined">Login</Button>
  </>
);

Login.defaultProps = {
  loginHandler: null,
};
Login.propTypes = {
  loginHandler: PropTypes.func,
};

export default Login;
