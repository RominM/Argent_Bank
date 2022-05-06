// React
import React from 'react';
import { useSelector } from 'react-redux';
import { userSelect } from '../redux/selectors/selectors';

const Profil = () => {
   //TODO Need "useEffect" ?
   const userAccess = useSelector(userSelect);

   const handleEdit = () => {
      //TODO Do someting
      console.log('Handle edit');
   };
   return (
      <div className="header">
         <h1>
            Welcome back
            <br />
            {/* {userAccess.firstName} {userAccess.lastName} */}
         </h1>
         <button className="edit-button" onClick={handleEdit}>
            Edit Name
         </button>
      </div>
   );
};

export default Profil;
