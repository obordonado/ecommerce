
import './login.scss'
<<<<<<< HEAD
import {useState, useEffect} from 'react';
=======
import { useState, useEffect } from 'react';
>>>>>>> master
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userData } from '../userSlice';


const login = () => {

  const [credentials, setCredentials]= useState({email:'', password:''});
  const [msgError, setMsgError] = useState("");

  let navigate = useNavigate();
  const dispatch = useDispatch();
  
  const credenciales = useSelector(userData);
<<<<<<< HEAD
  // console.log(credenciales);
  
=======
>>>>>>> master
  
  const updateCredentials = (e) => {
    setCredentials(
      {
        ...credentials, 
        [e.target.name]: e.target.value
      })
}    

<<<<<<< HEAD
useEffect(()=>{
  
  if(credenciales?.token !== ''){
    setTimeout(() => {
      navigate("/login");
    }, 10000);
    
  };
},[]);

const logeame = () => {
  
  dispatch(loginUser(
    {
      email: credentials.email,
      password: credentials.password
    }
    ));
    
    // setTimeout(()=>{
      //   navigate("/");
      // },5000)
      
    };
    
    console.log(credentials);
    return (
    
  <div className='login'>

    <div className='loginDesign'>
      {/* <pre>{JSON.stringify(credentials, null,2)}</pre> */}
      <input  type='email' name='email' onChange={updateCredentials} lenght='30'/>
      <input  type='password'  name='password' onChange={updateCredentials} lenght='30'/>
      <div className="btn" onClick={()=>logeame()}>Login</div>
      <div>{msgError}</div>
    </div>

</div>
  )
=======
const logIn = () => {

  setMsgError("");

  dispatch(
    loginUser({
      email: credentials.email,
      password: credentials.password,
    })
  );

  setTimeout(() => {
    navigate("/");
  }, 1000);
};
    
  return (
    <div className="login">
      <div className="loginDesign">
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={updateCredentials}
          lenght="30"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={updateCredentials}
          lenght="30"
        />
        <div className="button" onClick={() => logIn()}>
          Login
        </div>
        <div>{msgError}</div>
      </div>
    </div>
  );
>>>>>>> master
}

export default login