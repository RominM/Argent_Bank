const LOADING = { type: 'LOADING' };
const LOGIN_SUCEED = { type: 'LOGIN_SUCEED' };
const LOGIN_FAILED = { type: 'LOGIN_FAILED' };
const LOGOUT = { type: 'LOGOUT' };
const USER_PROFILE = { type: 'USER_PROFILE' };

export const loading = () => {
   return LOADING;
};

export const logginSuceed = () => {
   return LOGIN_SUCEED;
};

export const logginFailure = () => {
   return LOGIN_FAILED;
};

export const logout = () => {
   return LOGOUT;
};

export const userData = () => {
   return USER_PROFILE;
};

// export const CHECK_CREDENTIALS = 'CHECK_CREDENTIALS';
