import React, {useEffect} from 'react';
import './Header.scss'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userData,  logout } from '../containers/userSlice'

const Header = () => {

  const credentials = useSelector(userData);
  console.log(credentials);

  const dispatch = useDispatch();
  const navegador = useNavigate();

  const viajar = (destino) => {
    navegador(destino)
  };


// useEffect(()=>{
  
//   console.log("este es el log de useffect", credentials.token);
    
  
// });

  if(credentials.token === "") {

    return (
      <div className='header'>
        <div className="textLink" onClick={()=>viajar("/")}> Home </div>
        <div className="textLink" onClick={()=>viajar("/register")}> Register </div>
        <div className="textLink" onClick={()=>viajar("/login")}> Login </div>
        <div className="textLink" onClick={()=>dispatch(logout())} > Log out </div>
      </div>
    )
  }else {
    return(
    <div className="header">
      <div className="textLink" onClick={()=>viajar("/profile")}> Credenciales </div>
    </div>
    )
  }
}

export default Header;