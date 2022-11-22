import React, {useEffect} from 'react';
import './Header.scss'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userData,  logout } from '../containers/userSlice'


const Header = () => {

  const credentials = useSelector(userData);
  const dispatch = useDispatch();
  const navegador = useNavigate();

  const viajar = (destino) => {
    navegador(destino);
  };

  const out =()=>{
    dispatch(logout);
    viajar("/");
  }

// useEffect(()=>{ 
//   console.log("este es el log de useffect", credentials.token);  
// });


  if(credentials.token === "") {

    return (

      <div className='header'>
        
        <div className="left">

        <img className='logo' src="https://obordonado.github.io/web/img/logo.jpg" alt="logo" />
        <div className="textLink" onClick={()=>viajar("/")}> Home </div>
        <div className="textLink" onClick={()=>viajar("/register")}> Register </div>
        <div className="textLink" onClick={()=>viajar("/login")}> Login </div>

        </div>

        <div className="right">

        <div className="icons"><img src="https://obordonado.github.io/web/img/facebook.png" alt="facebook"/></div>
        <div className="icons"><img src="https://obordonado.github.io/web/img/Twitter.png" alt="Twitter"/></div>
        <div className="icons"><img src="https://obordonado.github.io/web/img/instagram.png" alt="instagram"/></div>

        </div>
      </div>
    )

  }else {
    
    return(
      <div className="header">
      <div className="textLink" onClick={()=>viajar("/profile")}> Credenciales </div>
      <div className="textLink" onClick={()=>out()} > Log out </div>
    </div>
    )
  }
}

export default Header;