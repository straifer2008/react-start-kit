import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { Header } from '../../containers';

const Main = ({ logout }) => {
  return (
    <div>
      <Header
        rightBtn={{ title: 'Logout', click: logout }}
        title="Main"
      />
      <Container>
        <h1>Main</h1>
      </Container>
    </div>
  );
};

Main.defaultProps = { logout: null };
Main.propTypes = { logout: PropTypes.func };

export default Main;
