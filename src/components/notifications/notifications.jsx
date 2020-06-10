import React from 'react';
import PropTypes from 'prop-types';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import { amber, green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const useStyles = makeStyles((theme) => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const Notifications = ({ variant, message, notificationHide, notification }) => {
  const classes = useStyles();
  const Icon = variantIcon[notification && notification.variant ? notification.variant : variant];

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') { return; } notificationHide();
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={!!notification}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <SnackbarContent
          className={classes[notification && notification.variant ? notification.variant : variant]}
          aria-describedby="client-snackbar"
          message={(
            <span id="client-snackbar" className={classes.message}>
              <Icon className={[classes.icon, classes.iconVariant].join(' ')} />
              {notification && notification.message ? notification.message : message}
            </span>
          )}
          action={[
            <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon className={classes.icon} />
            </IconButton>]}
        />
      </Snackbar>
    </div>
  );
};

Notifications.defaultProps = {
  notification: null,
  variant: 'error',
  message: '',
};
Notifications.propTypes = {
  variant: PropTypes.string,
  message: PropTypes.string,
  notificationHide: PropTypes.func.isRequired,
  notification: PropTypes.object,
};

export default Notifications;
