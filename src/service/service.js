import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1/user';

// GET TOKEN
export const getToken = async (email, password) => {
  console.log(email + ' ' + password);
  return await axios
    .post(baseURL + '/login', {
      email,
      password,
    })
    .then(console.log)
    .catch(console.log);
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
