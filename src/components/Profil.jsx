// React
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userData } from '../service/service';

const Profil = () => {
   const store = useSelector((state) => state);

   const [edit, setEdit] = useState(false);
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');

   useEffect(() => {
      if (store.token) {
         const fetchData = async () => {
            const user = await userData(store.token);
            setFirstName(user.firstName);
            setLastName(user.lastName);
         };
         fetchData();
      }
   }, [store]);

   const handleEdit = () => {
      console.log('Handle edit');
      setEdit(true);
   };

   const saveProfile = (e) => {
      console.log('Save profile');
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
                     <input type="text" placeholder={firstName} />
                     <input type="text" placeholder={lastName} />
                  </div>
                  <div className="edit-btn">
                     <button
                        className="edit-button sheen-btn sheen"
                        onClick={saveProfile}
                     >
                        Save
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
