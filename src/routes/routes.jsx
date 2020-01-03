import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  isAuthenticated,
  noAuthenticated,
} from '../utils/helpers/authHelper';
import { NotFoundPage } from '../components';
import { Auth } from '../pages';
import Wrap from './wrap';

const Routes = () => (
  <Switch>
    <Route component={noAuthenticated(Auth.Login)} path="/login" />
    <Route component={noAuthenticated(Auth.Register)} path="/register" />
    <Route component={noAuthenticated(Auth.ForgotPassword)} path="/forgot-password" />
    <Route component={noAuthenticated(Auth.ResetPassword)} path="/reset-password" />

    <Route component={isAuthenticated(Wrap)} path="/" />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;
