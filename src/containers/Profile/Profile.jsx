import React from 'react'
import './Profile.scss'
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';





const Profile = () => {

  const datosUsuario = useSelector(userData);



  return (
    <div className='profile'> Profile
      <p>{datosUsuario}</p>


    </div>
  )
}

export default Profile