import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Box, TextField } from '@material-ui/core';

const Login = ({
  handleSubmit,
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
}) => (
  <div className="flex-column-center" style={{ height: '100vh' }}>
    <h1 className="text-align-center padding-bottom-10">Login</h1>
    <div className="flex-row-center">
      <form
        noValidate
        autoComplete="off"
        className="flex-column-center"
        onSubmit={handleSubmit}
      >
        <Box component="div" m={1} className="margin-bottom-10">
          <TextField
            name="email"
            type="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            label="Login or email"
            variant="outlined"
            error={!!errors.email && touched.email}
            helperText={!!errors.email && errors.email}
          />
        </Box>
        <Box component="div" m={1} className="margin-bottom-10">
          <TextField
            name="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            className="margin-bottom-10"
            type="password"
            label="Password"
            variant="outlined"
            error={!!errors.password && touched.password}
            helperText={!!errors.password && errors.password}
          />
        </Box>
        <Box component="div" m={1} className="margin-bottom-10">
          <Button
            variant="outlined"
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Box>
      </form>
    </div>
    <div className="flex-row-center">
      <Link to="/register" className="margin-right-20">Register</Link>
      <Link to="reset-password">reset password</Link>
    </div>
  </div>
);

Login.defaultProps = {
  touched: {},
  errors: {},
};
Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  touched: PropTypes.shape({
    email: PropTypes.bool,
    password: PropTypes.bool,
  }),
  errors: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default Login;
