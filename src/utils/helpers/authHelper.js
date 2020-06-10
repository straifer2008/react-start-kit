import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';

const locationHelper = locationHelperBuilder({});

const isAuthenticated = connectedRouterRedirect({
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/login',
  authenticatedSelector: ({ user: { token } }) => !!token,
  allowRedirectBack: false,
  wrapperDisplayName: 'isAuthenticated',
});

const noAuthenticated = connectedRouterRedirect({
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/',
  authenticatedSelector: ({ user: { token } }) => !token,
  allowRedirectBack: false,
  wrapperDisplayName: 'noAuthenticated',
});

export { isAuthenticated, noAuthenticated };
