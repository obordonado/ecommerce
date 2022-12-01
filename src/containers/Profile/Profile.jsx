import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../auth.js";
import "./Profile.scss";

const Register = () => {

  const [phone_number, setPhone_number] = useState("");
  const [payment_type, setPayment_type] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [msgError, setMsgError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await auth
        .register(
          phone_number,
          payment_type,
          address,          
          password
        )
        .then(
          () => {
            setTimeout(() => {
              navigate("/icecommerce/login");
              window.location.reload();
            }, 1000);
          },
          (error) => {
            console.log(error);
            setMsgError(error.response.data);
          }
        );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <>
        <div className="contenedor">
          <div className="form">
            <form onSubmit={handleRegister}>
              <h2 className="personal">Update personal information</h2>

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
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="contact">In case of any other information or need, please contact support@cream.com</div>
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
};

export default Register;
