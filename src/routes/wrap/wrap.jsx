import React, { Suspense, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import {
  Container, List, ListItem, ListItemText, ListItemIcon,
} from '@material-ui/core';
import { Restore, VerifiedUser, SupervisorAccount } from '@material-ui/icons';
import { Header, NotFoundPage } from '../../components';
import routeList from '../RouteList';
import { desktopDropItems, mobileDropItems } from '../dropdownItems';
import useWindowSize from '../../utils/helpers/useWindowSize';

const Wrap = ({ logout }) => {
  const [dropdownItems, setDropdownItems] = useState(desktopDropItems);
  const [width] = useWindowSize();

  useEffect(() => {
    if (width <= 768 && width !== 0) {
      setDropdownItems([...mobileDropItems, { title: 'Logout', to: logout, id: 6 }]);
    } else {
      setDropdownItems([...desktopDropItems, { title: 'Logout', to: logout, id: 6 }]);
    }
  }, [width, logout]);

  return (
    <div className="Wrap">
      <header className="header">
        <Header
          title="Estimates"
          navItems={dropdownItems}
        >
          {
            width > 768 ? (
              <List component="nav" aria-label="main mailbox folders" className="flex-row">
                <ListItem button component={Link} to="/">
                  <ListItemIcon color="inherit"><Restore /></ListItemIcon>
                  <ListItemText primary="Estimates" />
                </ListItem>
                <ListItem button component={Link} to="/roles">
                  <ListItemIcon><VerifiedUser /></ListItemIcon>
                  <ListItemText primary="Roles" />
                </ListItem>
                <ListItem button component={Link} to="/clients">
                  <ListItemIcon color="inherit"><SupervisorAccount /></ListItemIcon>
                  <ListItemText primary="Clients" />
                </ListItem>
              </List>
            ) : null
          }
        </Header>
      </header>

      <main className="main">
        <Suspense fallback={<h3 className="text-align-center">Loading...</h3>}>
          <Container>
            <Switch>
              {
                routeList.map((
                  route,
                  id,
                ) => route.component && (
                  <Route
                    key={`main-route-${id}`}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => <route.component {...props} />}
                  />
                ))
              }
              <Route component={NotFoundPage} />
            </Switch>
          </Container>
        </Suspense>
      </main>
    </div>
  );
};

Wrap.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Wrap;
