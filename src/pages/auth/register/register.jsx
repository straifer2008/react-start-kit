import React from 'react';
import PropTypes from 'prop-types';
import {
  Checkbox,
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Grid,
  Box,
  Typography,
  Container,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Copyright } from '../../../components';
import useStyles from '../../../utils/styles/useStyles';

const Register = ({
  handleChange,
  handleBlur,
  handleSubmit,
  touched,
  errors,
  values,
}) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">Sign up</Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                error={!!errors.firstName && touched.firstName}
                helperText={!!errors.firstName && touched.firstName && errors.firstName}
                autoComplete="firstName"
                label="First Name"
                name="firstName"
                id="firstName"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                error={!!errors.lastName && touched.lastName}
                helperText={!!errors.lastName && touched.lastName && errors.lastName}
                autoComplete="lastName"
                label="Last Name"
                name="lastName"
                id="lastName"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                variant="outlined"
                error={!!errors.email && touched.email}
                helperText={!!errors.email && touched.email && errors.email}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={!!errors.password && touched.password}
                helperText={!!errors.password && touched.password && errors.password}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox onChange={handleChange} name="check" value={values.check} color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            onClick={handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="login">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}><Copyright /></Box>
    </Container>
  );
};

Register.defaultProps = {
  touched: {},
  errors: {},
  values: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    check: false,
  },
};

Register.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  touched: PropTypes.shape({
    firstName: PropTypes.bool,
    lastName: PropTypes.bool,
    email: PropTypes.bool,
    password: PropTypes.bool,
    check: PropTypes.bool,
  }),
  errors: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    check: PropTypes.bool,
  }),
  values: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    check: PropTypes.bool,
  }),
};

export default Register;
