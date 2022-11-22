import React from 'react'
import './Home.scss'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

const Home = () => {
  return (

<div className="container">

      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <img src="https://obordonado.github.io/web/img/IceCream.png" className="helado" alt="Helados"/>
            <div className="card-body">
              <h5 className="card-title">Helados</h5>
              <p className="card-text">Helados artesanales de fabricación propia con las mejores materias primas ideales para sofocar el calor.</p>
              <a href="#" className="btn btn-primary">Echar un vistazo!</a>
            </div>
          </div>
        </div>
      </div>

        <div className="col-lg-4">
          <div className="card">
            <img src="https://obordonado.github.io/web/img/waffle.jpg" className="waffle" alt="Waffles"/>
            <div className="card-body">
              <h5 className="card-title">Postres</h5>
              <p className="card-text">Exquisitos postres de materias primas insuperables recién salidas del horno. <br/>¡Pruébalos ahora!</p>
              <a href="#" className="btn btn-primary">Echar un vistazo!</a>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card">
            <img src="https://obordonado.github.io/web/img/ninos.jpg" className="waffle nino" alt="Infantil"/>
            <div className="card-body">
              <h5 className="card-title">Niñ@s</h5>
              <p className="card-text">Helados de fruta perfectos para los más pequeños.<br/> ¡ 10 minutos de calma Garantizada !</p>
              <a href="./html/ninos.html" className="btn btn-primary">Echar un vistazo!</a>
            </div>
          </div>
        </div>
    
     <div className="row bottom">

      <div className="col">
      <div className="small-text-bottom">© 1998-2022 Love IceCream SA Todos los derechos reservados.
      </div>
      </div>
   </div>
</div>








  )
}

export default Home