import React from 'react';
// import PropTypes from 'prop-types';
import {
  List, ListSubheader, ListItem, ListItemText, ListItemAvatar, Avatar, Typography,
} from '@material-ui/core';
import TestAvatar1 from '../../assets/1.jpg';
import TestAvatar2 from '../../assets/3.jpg';

const Roles = () => (
  <div>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={(
        <ListSubheader component="h1" id="nested-list-subheader">Roles</ListSubheader>
      )}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="F" src={TestAvatar1} />
        </ListItemAvatar>
        <ListItemText
          primary="Front end developer"
          secondary={(
            <>
              <Typography component="span" variant="body2" color="textPrimary">
                Artem Oktisyuk
              </Typography>
              {' — typo ibashim'}
            </>
          )}
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="B" src={TestAvatar2} />
        </ListItemAvatar>
        <ListItemText
          primary="Back end developer"
          secondary={(
            <>
              <Typography component="span" variant="body2" color="textPrimary">
                Sveta Batkovna
              </Typography>
              {' — blya budu ibashim'}
            </>
          )}
        />
      </ListItem>
    </List>
  </div>
);

// Roles.propTypes = {};

export default Roles;
