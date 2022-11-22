
import './login.scss'
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userData } from '../userSlice';


const login = () => {

  const [credentials, setCredentials]= useState({email:'', password:''});
  const [msgError, setMsgError] = useState("");

  let navigate = useNavigate();
  const dispatch = useDispatch();
  
  const credenciales = useSelector(userData);
  // console.log(credenciales);
  
  
  const updateCredentials = (e) => {
    setCredentials(
      {
        ...credentials, 
        [e.target.name]: e.target.value
      })
}    

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
}

export default login