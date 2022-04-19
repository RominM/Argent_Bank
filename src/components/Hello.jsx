import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Service
import { getProfil } from '../service/service';

const Hello = () => {

  const profilData = useSelector((state) => state.profile);
  console.log(profilData);

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {/* {user.name} */}
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
};

export default Hello;
