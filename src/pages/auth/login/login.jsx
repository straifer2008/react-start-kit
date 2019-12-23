import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Button } from '@material-ui/core';
import { Header } from '../../../containers';

const Login = ({ loginHandler }) => (
  <div>
    <Header
      title="Login"
      rightBtn={{
        title: 'Login',
        click: loginHandler,
      }}
    />
    <Container>
      <h1>Auth</h1>
      <Link to="/register"><Button variant="outlined">Register</Button></Link>
    </Container>
  </div>
);

Login.defaultProps = {
  loginHandler: null,
};
Login.propTypes = {
  loginHandler: PropTypes.func,
};

export default Login;
