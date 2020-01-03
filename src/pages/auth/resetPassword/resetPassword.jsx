import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Avatar, Box,
  Button,
  Container,
  CssBaseline,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { Copyright } from '../../../components';
import useStyles from '../../../utils/styles/useStyles';


const ResetPassword = ({
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  errors,
  touched,
}) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}><LockOutlinedIcon /></Avatar>
        <Typography component="h1" variant="h5">Create password</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <FormControl
            variant="outlined"
            margin="normal"
            error={!!errors.password && touched.password}
            fullWidth
          >
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              name="password"
              autoComplete="password"
              required
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )}
              labelWidth={70}
            />
            {!!errors.password && touched.password && (
            <FormHelperText id="password-text">{errors.password}</FormHelperText>)}
          </FormControl>
          <FormControl
            variant="outlined"
            margin="normal"
            error={!!errors.confirmPassword && touched.confirmPassword}
            fullWidth
          >
            <InputLabel htmlFor="confirmPassword">Confirm password</InputLabel>
            <OutlinedInput
              id="confirmPassword"
              type={showPassword ? 'text' : 'password'}
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              name="confirmPassword"
              autoComplete="password"
              required
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
)}
              labelWidth={130}
            />
            {!!errors.confirmPassword && touched.confirmPassword && (
            <FormHelperText id="confirmPassword">{errors.confirmPassword}</FormHelperText>)}
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
Create password
          </Button>
        </form>
      </div>
      <Box mt={8}><Copyright /></Box>
    </Container>
  );
};

ResetPassword.defaultProps = {
  touched: {},
  errors: {},
};
ResetPassword.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  values: PropTypes.shape({
    password: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired,
  }).isRequired,
  touched: PropTypes.shape({
    password: PropTypes.bool,
    confirmPassword: PropTypes.bool,
  }),
  errors: PropTypes.shape({
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
  }),
};

export default ResetPassword;
