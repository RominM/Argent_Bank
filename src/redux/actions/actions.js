import axios from 'axios';
// Default
axios.defaults.baseURL = 'http://localhost:3001/api/v1/user';

// ACTIONS CREATOR
const LOGOUT_ACTION = 'LOGOUT_ACTION';
const LOGIN_SUCEED = 'LOGIN_SUCEED';
const LOGIN_FAILED = 'LOGIN_FAILED';
// Handler
const checkCredentials = (email, password, rememberMe) => {
  return async (dispatch) => {
    try {
      // Request POST from api to get token
      const response = await axios.post('/login', {
        email: email,
        password: password,
      });
      // put the token in localStorage...
      if (rememberMe) localStorage.setItem('token', response.data.token);
      //...or in SessionStorage
      else sessionStorage.setItem('token', response.data.token);
      //TODO: have to defined the "axios.defaults.headers.common" concept
      axios.defaults.headers.common = {
        Authorization: `bearer ${response.data.token}`,
      };
      //TODO: Why is dealt with here shouldn't in other actions ?
      // if token then will be logged
      dispatch(LOGIN_SUCEED, { token: response.data.token });
      // Else catch error and login is failed
    } catch (err) {
      console.error(err);
      dispatch(LOGIN_FAILED);
    }
  };
};

export const getProfil = () => {
  return axios.post(
    '/profile',
    {},
    {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
    }
  );
};

// UPDATE PROFIL
export const updateProfil = (firstName, lastName) => {
  return axios.put(
    '/profile',
    {
      firstName: firstName,
      lastName: lastName,
    },
    {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
    }
  );
};

export { LOGIN_SUCEED, LOGIN_FAILED, LOGOUT_ACTION, checkCredentials };
