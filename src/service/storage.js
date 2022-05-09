// SAVE
const saveLocal = (token, rememberMe) => {
   if (rememberMe) {
      localStorage.setItem('token', token);
      return;
   }
   sessionStorage.setItem('token', token);
};
// CLEAR
const clearStorage = (token) => {
   localStorage.removeItem('token', token);
   sessionStorage.removeItem('token', token);
};

export { clearStorage, saveLocal };
