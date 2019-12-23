import React from 'react';
// import PropTypes from 'prop-types';
import { Button, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Register = () => (
  <Container>
    <h1>Register</h1>
    <Link to="/reset-password"><Button variant="outlined">Reset password</Button></Link>
  </Container>
);

Register.propTypes = {};

export default Register;
