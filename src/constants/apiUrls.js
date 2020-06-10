// Show credentials in https://reqres.in/

const restApi = 'https://reqres.in/api';

export default {
  login: `${restApi}/login`,
  register: `${restApi}/register`,
  defaultCredentials: {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  },
};
