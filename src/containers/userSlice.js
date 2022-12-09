import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";

<<<<<<< HEAD
=======

>>>>>>> master
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: "",
  },
  reducers: {
<<<<<<< HEAD
=======

    register: (state, action) => {
      return {
          ...state,
          isRegister: true,
      };
    },
>>>>>>> master
    
    login: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },

    logout: (state, action) =>{
      return {
        token : '',
      }
    },
  },
});

<<<<<<< HEAD
=======



// const registerUser = (name, surname, phone_number, payment_type, address, email, password) => async (dispatch) =>{

//   try {

//     const user = await axios.post("https://devos-ecommerce.herokuapp.com/api/register",
//     {
//           name,
//           surname,
//           phone_number,
//           payment_type,
//           address,
//           email,
//           password
//       })
//       let response = user;

//         if (response.status === 200 || response.status === 201) {
//           dispatch(register( response.data ))
//           // localStorage.setItem("user", JSON.stringify(response.data));
//         }
//         // return response.data;   
//   } catch (error) {
//     console.log(error);    
//   }
// };


>>>>>>> master
export const loginUser = (body) => async (dispatch) =>{

  try {

<<<<<<< HEAD
    const user = await axios.post("https://devos-ecommerce.herokuapp.com/api/login",body);

    const decodificada = jwtDecode(user.data.token);

    if(user.status ===200)
=======
    const user = await axios.post("https://devos-ecommerce-laravel-backend-production.up.railway.app/api/login",body);

    const decodificada = jwtDecode(user.data.token);

    if(user.status === 200 )
>>>>>>> master
    {     
      dispatch(login(
        {
          ...decodificada,
          token: user.data.token,
        }
<<<<<<< HEAD
        ))
    }    
  } catch (error) {
    console.log(error)    
  }  
=======
        ));

    } 
  } catch (error) {
    console.log(error);
  }  

>>>>>>> master
}

export const logOut = ()=> {
  dispatch(logout());
};

<<<<<<< HEAD

export const {login, logout } = userSlice.actions;
=======
export const { login, logout, register } = userSlice.actions;
>>>>>>> master
export const userData = (state) => state.user;
export default userSlice.reducer;

