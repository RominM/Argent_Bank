import { getToken, /*setBearer,*/ userData } from '../../service/service';
import { saveLocal, clearStorage } from '../../service/storage';

/**
 * @typedef {(
 * 'LOADING_IN_PROGRESS'
 * |'LOGIN_SUCEED'
 * |'LOGIN_FAILED'
 * |'LOGOUT_ACTION'
 * |'USER_PROFILE'
 * )} actionsTypes
 */

// Handler
const checkCredentials = (email, password, remember) => {
   return async (dispatch) => {
      dispatch({
         /** @type {actionsTypes} */
         type: 'LOADING_IN_PROGRESS',
         payload: true,
      });

      try {
         const token = await getToken(email, password);

         dispatch({
            /** @type {actionsTypes} */
            type: 'LOGIN_SUCEED',
            payload: { token },
            loader: true,
            error: false,
         });

         // setBearer(token);

         const user = await userData(token);
         const firstName = user.firstName;
         const lastName = user.lastName;
         saveLocal(token, remember, firstName, lastName);

         dispatch({
            /** @type {actionsTypes} */
            type: 'USER_PROFILE',
            payload: { user },
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

export { checkCredentials };
