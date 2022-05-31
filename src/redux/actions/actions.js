import { getToken, userData, userEdit } from '../../service/service';
import { saveLocal, clearStorage } from '../../service/storage';

/**
 * @typedef {(
 * 'LOADING_IN_PROGRESS'
 * |'LOGIN_SUCEED'
 * |'LOGIN_FAILED'
 * |'USER_PROFILE'
 * |'SAVE_SUCCEED'
 * |'SAVE_FAILED'
 * |'PROFILE_FAILED'
 * )} actionsTypes
 */

/**
 * Check if user exist
 * @param { string } email
 * @param { string } password
 * @returns { function }
 */

const checkCredentials = (email, password) => {
   return async (dispatch) => {
      try {
         dispatch({
            /** @type {actionsTypes} */
            type: 'LOADING_IN_PROGRESS',
            payload: true,
         });
         // sent to axios
         const token = await getToken(email, password);
         saveLocal(token);

         dispatch({
            /** @type {actionsTypes} */
            type: 'LOGIN_SUCEED',
            payload: { token },
            loader: true,
            error: false,
         });
      } catch (err) {
         clearStorage();
         console.error(err);
         dispatch({
            /** @type {actionsTypes} */
            type: 'LOGIN_FAILED',
            payload: true,
         });
      }
   };
};

/**
 * Get informations of logged user
 * @returns { function }
 */

const getUserData = () => {
   return async (dispatch) => {
      try {
         dispatch({
            /** @type {actionsTypes} */
            type: 'LOADING_IN_PROGRESS',
            payload: true,
         });
         // sent to axios
         const user = await userData();
         userEdit(user.firstName, user.lastName);
         dispatch({
            /** @type {actionsTypes} */
            type: 'USER_PROFILE',
            payload: { user },
         });
      } catch (err) {
         console.log(err);
         dispatch({
            /** @type {actionsTypes} */
            type: 'PROFILE_FAILED',
         });
      }
   };
};

/**
 * Update the user informations
 * @param { string } firstName
 * @param { string } lastName
 * @returns { function }
 */

const setUserData = (firstName, lastName) => {
   return async (dispatch) => {
      try {
         dispatch({
            /** @type {actionsTypes} */
            type: 'SAVE_SUCCEED',
            payload: {
               user: { firstName, lastName },
            },
         });
         // sent to axios
         await userEdit(firstName, lastName);
      } catch (err) {
         console.error(err);
         dispatch({
            /** @type {actionsTypes} */
            type: 'SAVE_FAILED',
         });
      }
   };
};

export { checkCredentials, getUserData, setUserData };
