import { useEffect, useState } from "react";
import { allProducts } from "./functions";
import './Kids.css';

const Kids = () => {

    const [products, setProducts] = useState(null)
  
    useEffect(()=>{
      allProducts(setProducts)
    },[])
  
    return (
      <div className='body'>
  
  
        {products != null
          ? products.map((product) => (
              <div key={product.id} className="inicio">
                <div className="card">
                  <img src={product.img_url} className="card-img-top" />
  
                  <div className="card-body">
                    <a href={`/product/${product.id}`} className="btn btn-primary">{product.brand}</a>                  
                    <div className="card-title">Flavour : {product.name}</div> <br/>
                    <h5 className="card-price">Price {product.price}0€</h5>
                  </div>
  
                </div>
              </div>
            ))
          : <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>        
          </div>
        </div>}
      </div>
    );
    }
  
  export default Kids;