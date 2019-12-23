import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  isAuthenticated,
  noAuthenticated,
} from '../utils/helpers/authHelper';
import {
  Auth,
  Estimates,
  Roles,
  Main,
} from '../pages';
import { NotFoundPage } from '../components';

const Routes = () => (
  <Switch>
    <Route exact component={noAuthenticated(Auth.Login)} path="/login" />
    <Route exact component={noAuthenticated(Auth.Register)} path="/register" />
    <Route exact component={noAuthenticated(Auth.ResetPassword)} path="/reset-password" />
    <Route exact component={isAuthenticated(Main)} path="/" />
    <Route exact component={isAuthenticated(Roles)} path="/roles" />
    <Route exact component={isAuthenticated(Estimates)} path="/estimates" />
    <Route component={NotFoundPage} />
    <Redirect to="/" />
  </Switch>
);

export default Routes;
