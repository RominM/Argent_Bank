// React
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Profil = () => {
   const userData = useSelector((state) => state.profil);

   const handleEdit = () => {};

   return (
      <div className="header">
         <h1>
            Welcome back
            <br />
            UserName
         </h1>
         <button className="edit-button" onClick={handleEdit}>
            Edit Name
         </button>
      </div>
   );
};

export default Profil;
