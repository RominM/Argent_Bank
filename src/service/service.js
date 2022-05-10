import axios from 'axios';

// Default
axios.defaults.baseURL = 'http://localhost:3001/api/v1/user';

const getToken = async (email, password) => {
   const response = await axios.post('/login', {
      email: email,
      password: password,
   });
   return response.data.body.token;
};

//TODO Have to understand that
/*
const userData = async() => {
   const response = await axios.post('/profile');
   return response.data.body;
}

const userEdit = async(firstName, lastName) => {
   const response = await axios.post('/profile'),{
            firstName,
            lastName,
         },;
   return response.data.body;
}

const setBearer = (token) => {
   axios.defaults.headers.common = {
      Authorization: `bearer ${token}`,
   };
};
*/

// Working with this way
const userData = async (token) => {
   return await axios
      .post(
         'http://localhost:3001/api/v1/user/profile',
         {},
         {
            headers: {
               Authorization: 'Bearer' + token,
            },
         }
      )
      .then((response) => {
         return response.data.body;
      })
      .catch((error) => console.log(error));
};

async function userEdit(firstName, lastName, token) {
   return await axios
      .put(
         'http://localhost:3001/api/v1/user/profile',
         {
            firstName,
            lastName,
         },
         {
            headers: {
               Authorization: 'Bearer' + token,
            },
         }
      )
      .then((response) => {
         return response.data.body;
      })
      .catch((error) => console.log(error));
}

export { getToken, userData, userEdit };
