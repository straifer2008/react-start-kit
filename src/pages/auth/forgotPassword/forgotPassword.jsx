import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar, Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-router-dom';
import useStyles from '../../../utils/styles/useStyles';
import { Copyright } from '../../../components';

const ForgotPassword = ({
  handleSubmit,
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
}) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}><LockOutlinedIcon /></Avatar>
        <Typography component="h1" variant="h5">Forgot password</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={!!errors.email && !!touched.email}
            helperText={!!errors.email && errors.email}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
          Forgot password
          </Button>
          <Grid container><Grid item><Link to="/login" variant="body2">Back</Link></Grid></Grid>
        </form>
      </div>
      <Box mt={5}><Copyright /></Box>
    </Container>
  );
};

ForgotPassword.defaultProps = {
  values: {
    email: '',
  },
  touched: {},
  errors: {},
};

ForgotPassword.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  values: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }),
  touched: PropTypes.shape({
    email: PropTypes.bool,
  }),
  errors: PropTypes.shape({
    email: PropTypes.string,
  }),
};

export default ForgotPassword;
