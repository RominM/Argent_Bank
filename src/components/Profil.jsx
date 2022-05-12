// React
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userData, userEdit } from '../service/service';

const Profil = () => {
   const dispatch = useDispatch();
   const store = useSelector((state) => state);

   const [edit, setEdit] = useState(false);
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');

   //TODO Fix the display of user data
   useEffect(() => {
      if (store.token) {
         const getUser = async () => {
            const user = await userData(store.token);
            setFirstName(user.firstName);
            setLastName(user.lastName);
         };
         getUser();
      }
   }, [store]);

   const handleEdit = () => {
      setEdit(true);
   };

   //TODO Fix the profil edited
   const saveProfile = (e) => {
      e.preventDefault();
      const editFirstName = document.querySelector('#editFirstName').value;
      const editLastName = document.querySelector('#editLastName').value;
      if (store.token) {
         const getEdit = async () => {
            await userEdit(
               setFirstName(editFirstName),
               setLastName(editLastName),
               store.token
            );
         };
         getEdit();
      }
      setEdit(false);
   };

   const cancelEdit = () => {
      console.log('Cancel edit');
      setEdit(false);
   };

   return (
      <div>
         {!edit ? (
            <div className="header">
               <h1>
                  Welcome back
                  <br />
                  {firstName} {lastName}
               </h1>
               <button
                  className="edit-button sheen-btn sheen"
                  onClick={handleEdit}
               >
                  Edit Name
               </button>
            </div>
         ) : (
            <div className="header">
               <h1>
                  Welcome back
                  <br />
                  <div className="zone-edit">
                     <input
                        type="text"
                        placeholder={firstName}
                        id="editFirstName"
                     />
                     <input
                        type="text"
                        placeholder={lastName}
                        id="editLastName"
                     />
                  </div>
                  <div className="edit-btn">
                     <button
                        className="edit-button sheen-btn sheen"
                        onClick={saveProfile}
                     >
                        &nbsp;Save&nbsp;
                     </button>
                     <button
                        className="edit-button sheen-btn sheen"
                        onClick={cancelEdit}
                     >
                        Cancel
                     </button>
                  </div>
               </h1>
            </div>
         )}
      </div>
   );
};

export default Profil;
