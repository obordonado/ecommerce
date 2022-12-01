import React, {useEffect} from 'react';
import './Header.scss'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userData,  logout } from '../containers/userSlice'


const Header = () => {

  const credentials = useSelector(userData);
  const dispatch = useDispatch();
  const navegador = useNavigate();

  const navigate = (destino) => {
    setTimeout(() => {
      navegador(destino);      
    }, 200);
  };

  const out =()=>{
    setTimeout(() => {
      dispatch(logout());  
      localStorage.removeItem("user");  
    }, 1000);
    setTimeout(() => {
      navigate("/");
      }, 200);  
  }

useEffect(()=>{ 
  navigate ("/")  
});


  if(credentials.token === "") {

    return (

      <div className='header'>
        
        <div className="left">

        <img className='logo' src="https://obordonado.github.io/web/img/logo.jpg" alt="logo" />
        <div className="textLink" onClick={()=>navigate("/")}> Home </div>
        <div className="textLink" onClick={()=>navigate("/register")}> Register </div>
        <div className="textLink" onClick={()=>navigate("/login")}> Login </div>

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
      <img className='logo' src="https://obordonado.github.io/web/img/logo.jpg" alt="logo" />
      <div className="textLink" onClick={()=>navigate("/")}> Home </div>
      <div className="textLink" onClick={()=>navigate("/profile")}> Personal settings </div>
      <div className="textLink" onClick={()=>out()} > Log out </div>
    </div>
    )
  }
}

export default Header;