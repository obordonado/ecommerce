import React from 'react'
import './Profile.scss'
import { useSelector, useDispatch } from 'react-redux';
import { userData, logout } from '../userSlice';
import { useNavigate } from 'react-router';





const Profile = () => {

  const credentials = useSelector(userData);
  const dispatch = useDispatch();
  const navegador = useNavigate();

  const viajar =(destino) =>{
    navegador(destino);
  }



  return (
    <div className='profile'> Profile
      <p></p>


    </div>
  )
}

export default Profile