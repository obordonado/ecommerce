
import './login.scss'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userData } from '../userSlice';


const login = () => {

  const [credentials, setCredentials]= useState({email:'', password:''});
  const [msgError, setMsgError] = useState("");

  let navigate = useNavigate();
  const dispatch = useDispatch();
  
  const credenciales = useSelector(userData);
  
  const updateCredentials = (e) => {
    setCredentials(
      {
        ...credentials, 
        [e.target.name]: e.target.value
      })
}    

// useEffect(()=>{
// },[]);

const logIn = () => {
  const error = () => {
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        credentials.email
      )
    ) {
      setMsgError("Introduce un e-mail válido");
      return;
    }

    //Esta expresión regular ayuda a validar un password (numero + letras en este caso)

    if (credentials.password.length > 6) {
      if (!/[\d()+-]/g.test(credentials.password)) {
        setMsgError("Invalid password.");
        return;
      }
    } else {
      setMsgError("Password must be at least 6 characters.");
      return;
    }
  };

  setMsgError("");

  dispatch(
    loginUser({
      email: credentials.email,
      password: credentials.password,
    })
  );

  setTimeout(() => {
    navigate("/");
  }, 2000);
};
    
  return (
    
  <div className='login'>

    <div className='loginDesign'>
      {/* <pre>{JSON.stringify(credentials, null,2)}</pre> */}
      <input  type='email' name='email' onChange={updateCredentials} lenght='30'/>
      <input  type='password'  name='password' onChange={updateCredentials} lenght='30'/>
      <div className="btn" onClick={()=>logIn()}>Login</div>
      <div>{msgError}</div>
    </div>
</div>
  )
}

export default login