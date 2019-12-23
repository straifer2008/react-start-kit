import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Button, IconButton, Toolbar, Typography,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const Header = ({ rightBtn, title }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h5" className={classes.title}>{title}</Typography>
        <Button onClick={rightBtn.click} color="inherit">{rightBtn.title}</Button>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  rightBtn: PropTypes.shape({
    title: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
