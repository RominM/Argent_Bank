import axios from 'axios';
import { setUserData } from '../redux/actions/actions';
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
   return response.data.body;
};

// EDITION
const userEdit = async (firstName, lastName) => {
   const response = await axios.put('/profile', {
      firstName,
      lastName,
   });
   console.log(response.data.body);
   return response.data.body;
};

// BEARER
const setBearer = (token) => {
   axios.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
   };
};

export { getToken, userData, userEdit, setBearer };
