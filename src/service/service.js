import axios from 'axios';
// Default
axios.defaults.baseURL = 'http://localhost:3001/api/v1/user';

// GET TOKEN
const getToken = async (email, password) => {
   const response = await axios.post('/login', {
      email: email,
      password: password,
   });
   return response.data.body.token;
};
// USER DATA
const userData = async () => {
   const response = await axios.post('/profile');
   console.log('USER DATA FUNC : ');
   console.log(response.data.body);
   return response.data.body;
};

// EDITION
const userEdit = async (firstName, lastName) => {
   console.log('axios');
   await axios.put('/profile', {
      firstName,
      lastName,
   });
};

// BEARER
const setBearer = (token) => {
   axios.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
   };
};

export { getToken, userData, userEdit, setBearer };
