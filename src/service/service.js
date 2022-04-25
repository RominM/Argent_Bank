import axios from 'axios';

// GET TOKEN
export const getToken = (email, password) => {
  return axios.post('http://localhost:3001/api/v1/user/login', {
    email: email,
    password: password,
  });
};

// GET PROFIL
export const getProfile = (token) => {
  const bodyParam = {
    key: 'value',
  };

  const config = {
    Headers: { authorization: `Bearer ${token}` },
  };

  return axios
    .post('http://localhost:3001/api/v1/user/profile', bodyParam, config)
    .then(console.log)
    .catch(console.log);
};
