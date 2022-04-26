import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1/user';

// GET TOKEN
export const getToken = async (email, password) => {
  // eslint-disable-next-line no-useless-concat
  console.log('Email : ' + email + ' /' + 'Password : ' + password);
  return await axios
    .post(baseURL + '/login', {
      email: email,
      password: password,
    })
    .then((response) => {
      return response.data.body;
    })
    .catch((err) => {
      console.log(err);
    });
};

// GET PROFIL
/*
export const getProfile = (token) => {
  const bodyParam = {
    key: 'value',
  };

  const config = {
    Headers: { authorization: `Bearer ${token}` },
  };

  return axios
    .post(baseURL + '/profile', bodyParam, config)
    .then(console.log)
    .catch(console.log);
};
*/
