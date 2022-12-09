import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import auth from "../auth.js";
import { userData } from "../userSlice.js";
import "./Profile.scss";

const Profile = (props) => {

  const navigate = useNavigate();
  const credentials = useSelector(userData);
  const myProfile = credentials.data;

  if (credentials === ""){

    return (
      <div className="profile">
          <div className="contenedor">        
            <div className="name"> SE CAMBIARÁ PAGINA A HOME </div>
          </div>
      </div>
    );

  }else{
    
    return(
      <div className="profile"> SALE ESTA PORQUE TIENE CREDENCIALES

      <div className="name">{props.data.name}</div>
      </div>
    );
  }
};

export default Profile;
