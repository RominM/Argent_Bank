const LOADING_IN_PROGRESS = { type: 'LOADING_IN_PROGRESS' };
const LOGIN_SUCEED = { type: 'LOGIN_SUCEED' };
const LOGIN_FAILED = { type: 'LOGIN_FAILED' };
const LOGOUT_ACTION = { type: 'LOGOUT_ACTION' };
const USER_PROFILE = { type: 'USER_PROFILE' };

export const loading = () => {
   return LOADING_IN_PROGRESS;
};

export const logginSuceed = () => {
   return LOGIN_SUCEED;
};

export const logginFailure = () => {
   return LOGIN_FAILED;
};

export const logout = () => {
   return LOGOUT_ACTION;
};

export const userProfile = () => {
   return USER_PROFILE;
};
