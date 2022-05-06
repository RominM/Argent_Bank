// SAVE
const saveLocal = (token, rememberMe) => {
   if (rememberMe) {
      localStorage.setItem('token', token);
      return;
   }
   sessionStorage.setItem('token', token);
};
// CLEAR
const clearStorage = () => {
   localStorage.clear();
   sessionStorage.clear();
};

export { clearStorage, saveLocal };
