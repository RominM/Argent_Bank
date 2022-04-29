import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api/v1/user';
//axios.defaults.headers.common = {'Authorization': `bearer ${token}`}

// GET TOKEN
export const getToken = (email, password) => {
  // eslint-disable-next-line no-useless-concat
  console.log('Email : ' + email + ' /' + 'Password : ' + password);
  return axios.post('/login', {
    email: email,
    password: password,
  });
  /*
    .then((response) => {
      return console.log(response.data.body);
    })
    .catch((err) => {
      console.log(err);
    });
    */
};

/*
// GET PROFIL
export const getProfil = () => {
  return axios.post(
    baseURL + '/profile',
    {},
    {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
    }
  );
};

// UPDATE PROFIL
export const updateProfil = (firstName, lastName) => {
  return axios.put(
    baseURL + '/profile',
    {
      firstName: firstName,
      lastName: lastName,
    },
    {
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
    }
  );
};
*/
