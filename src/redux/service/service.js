import axios from 'axios';

class Service {
   constructor() {
      axios.defaults.baseURL = 'http://localhost:3001/api/v1/user';
   }
   async getToken(email, password) {
      return await axios
         .post('/login', {
            email,
            password,
         })
         .then((response) => {
            return response.data.body.token;
         })
         .catch((error) => console.log(error));
   }
   async userData(token) {
      return (axios.defaults.headers.common = {
         Authorization: `bearer ${token}`,
      }
         .then((response) => {
            return response.data.body;
         })
         .catch((error) => console.log(error)));
   }
}

export default Service;
