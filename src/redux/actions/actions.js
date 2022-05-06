import { getToken, setBearer, userData } from '../../service/service';
import { saveLocal, clearStorage } from '../../service/storage';
/*import {
   loading,
   logginSuceed,
   logginFailure,
   logout,
   userProfile,
} from './types';
*/
/**
 * @typedef {('LOADING_IN_PROGRESS'
 * |'LOGIN_SUCEED'
 * |'LOGIN_FAILED'
 * |'LOGOUT_ACTION'
 * |'USER_PROFILE')} actionsTypes
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
         });

         setBearer(token);

         saveLocal(token, remember);

         const user = await userData();

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
