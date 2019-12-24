import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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

const Header = ({ title, navItems, children }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" className={classes.title}>{title}</Typography>
        { children }

        {
          navItems.length > 1 && (
            <>
              <Menu
                id="header-nav-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {
                  navItems.map((nav) => (
                    <MenuItem
                      key={`nav-item-${nav.id}`}
                      component={typeof nav.to === 'string' ? Link : 'li'}
                      to={typeof nav.to === 'string' ? nav.to : ''}
                      onClick={typeof nav.to === 'function' ? nav.to : handleClose}
                    >
                      {nav.title}
                    </MenuItem>
                  ))
                }
              </Menu>
              <IconButton
                onClick={handleClick}
                className={classes.menuButton}
                edge="end"
                color="inherit"
                aria-controls="header-nav-menu"
                aria-haspopup="true"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </>
          )
        }

        {
          navItems.length === 1 && (
            <Button
              color="inherit"
              onClick={navItems[0].to}
            >
              {navItems[0].title}
            </Button>
          )
        }
      </Toolbar>
    </AppBar>
  );
};

Header.defaultProps = {
  navItems: [],
  children: null,
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
      ]),
      title: PropTypes.string.isRequired,
      id: PropTypes.any.isRequired,
    }),
  ),
};

export default Header;
