import axios from "axios";

const BASE_URL = "https://devos-ecommerce.herokuapp.com/api";

const register = (name, surname, phone_number, payment_type, address, email, password) => {
  return axios.post(BASE_URL + "/register", {
        name,
        surname,
        phone_number,
        payment_type,
        address,
        email,
        password
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const login = (email, password) => {
    
    return axios.post(BASE_URL + "/login", {email,password})
    .then((response) => {

        if (response.data.token) {
            
            localStorage.setItem("user", JSON.stringify(response.data));            
        }
        return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

// const getCurrentUser = () => {
//   return JSON.parse(localStorage.getItem("user"));
// };

const auth = {
  register,login,logout,//getCurrentUser
};


export default auth;