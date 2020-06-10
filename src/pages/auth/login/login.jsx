import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button,
  Box,
  TextField,
  Avatar,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  Container,
  Paper,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Copyright } from '../../../components';
import useStyles from '../../../utils/styles/useStyles';

const Login = ({
  handleSubmit,
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
}) => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.signInBgImage} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
            <Avatar className={classes.avatar}><LockOutlinedIcon /></Avatar>
            <Typography component="h1" variant="h5">Sign in</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={!!errors.email && !!touched.email}
                helperText={!!errors.email && errors.email}
                type="email"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={!!errors.password && !!touched.password}
                helperText={!!errors.password && errors.password}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox onChange={handleChange} value={values.remember} name="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/forgot-password" variant="body2">Forgot password?</Link>
                </Grid>
                <Grid item>
                  <Link to="/register" variant="body2">Do not have an account? Sign Up</Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}><Copyright /></Box>
        </Container>
      </Grid>
    </Grid>
  );
};

Login.defaultProps = {
  touched: {},
  errors: {},
};
Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  values: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    remember: PropTypes.bool,
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
