<<<<<<< HEAD
import React from 'react'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>Home page</div>
  )
}

export default Home
=======
import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router";
const Home = () => {

  const navegador = useNavigate();

  const viajar = (destino) => {
    setTimeout(() => {
      navegador(destino);      
    }, 200);
  };


  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <img
              src="https://obordonado.github.io/web/img/IceCream.png"
              className="helado"
              alt="Helados"
            />
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">
                Kids favorites icecreams!
                <br />10 peaceful minutes for yourself.
              </p>
              <a href="#" className="btn btn-primary">
                GO
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card">
            <img
              src="https://obordonado.github.io/web/img/waffle.jpg"
              className="waffle"
              alt="Waffles"
              />
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">
                Straight out of the oven. <br />
                Try them now!
              </p>
              <a href="#" className="btn btn-primary">
              GO 
              </a>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card">
            <img
              src="https://obordonado.github.io/web/img/helado470.jpg"
              className="nino"
              alt="Infantil"
              />
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">
              State of the art hand made creams.<br/>
              For the real deal icecream lovers...
              </p>
              <div className="btn btn-primary" onClick={()=>viajar("/kids")}>
              GO 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
>>>>>>> master
