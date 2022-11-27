
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
  }, 1000);
};
    
  return (

    <div className="register">
    <>
      <div className="contenedor">
        <div className="form">
          <form onSubmit={handleRegister}>
            <h2 className="register">Register</h2>
            <input
              required
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Phone number"
              value={phone_number}
              onChange={(e) => setPhone_number(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Bizum / Paypal"
              value={payment_type}
              onChange={(e) => setPayment_type(e.target.value)}
            />
            <input
              required
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="submit" type="submit" value="Enviar">
              Send
            </button>
          </form>
          <div className="error">{msgError}</div>
        </div>
      </div>
    </>
  </div>
);






    
//   <div className='login'>

//     <div className='loginDesign'>
//       <input  type='email' name='email' placeholder='email' onChange={updateCredentials} lenght='30'/>
//       <input  type='password'  name='password' placeholder='password' onChange={updateCredentials} lenght='30'/>
//       <div className="button" onClick={()=>logIn()}>Login</div>
//       <div>{msgError}</div>
//     </div>
// </div>
//   )
}

export default login