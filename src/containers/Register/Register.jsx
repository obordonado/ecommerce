import React from 'react'
import './Register.scss'
import { useSelector } from 'react-redux';
import { userData } from '../userSlice';


const Register = () => {
  const datosUsuario = useSelector(userData);
  return (
    <div className='register'>
     Register
    </div>
  )
}

export default Register