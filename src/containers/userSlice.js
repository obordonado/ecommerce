import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: "",
  },
  reducers: {
    
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

export const loginUser = (body) => async (dispatch) =>{

  try {

    const user = await axios.post("https://devos-ecommerce.herokuapp.com/api/login",body);

    const decodificada = jwtDecode(user.data.token);

    if(user.status ===200)
    {     
      dispatch(login(
        {
          ...decodificada,
          token: user.data.token,
        }
        ))
    }    
  } catch (error) {
    console.log(error)    
  }  
}

export const logOut = ()=> {
  dispatch(logout());
};


export const {login, logout } = userSlice.actions;
export const userData = (state) => state.user;
export default userSlice.reducer;

