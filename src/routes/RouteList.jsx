import React from 'react';

const Estimates = React.lazy(() => import('../pages/estimates'));
const Roles = React.lazy(() => import('../pages/roles'));
const Clients = React.lazy(() => import('../pages/clients'));
const MyAccount = React.lazy(() => import('../pages/myAccount'));

const routeList = [
  {
    path: '/',
    exact: true,
    name: 'Estimates',
    component: Estimates,
  },
  {
    path: '/roles',
    exact: false,
    name: 'Roles',
    component: Roles,
  },
  {
    path: '/clients',
    exact: false,
    name: 'Clients',
    component: Clients,
  },
  {
    path: '/my-account',
    exact: false,
    name: 'My Account',
    component: MyAccount,
  },
];

export default routeList;
