import axios from 'axios';

// Default
axios.defaults.baseURL = 'http://localhost:3001/api/v1/user';

async function getToken(email, password) {
   const response = await axios.post('/login', {
      email: email,
      password: password,
   });
   return response.data.body.token;
}
/*
async function userData() {
   const response = await axios.post('/profile');
   return response.data.body;
}

const setBearer = (token) => {
   axios.defaults.headers.common = {
      Authorization: `bearer ${token}`,
   };
};
*/

async function userData(token) {
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
}
export { getToken, userData };
