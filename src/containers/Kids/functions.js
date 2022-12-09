import axios from 'axios';

const allProducts= async (state)=>{
    const peticion = await axios.get('https://devos-ecommerce-laravel-backend-production.up.railway.app/api/getallproducts')
    // console.log(peticion.data.data);
    ///devuelve un array
    state(peticion.data.data)/// Lo mando a state para usarlo en Inicio
};

const productById = async (id, state)=>{
    const peticion = await axios.get(`https://devos-ecommerce-laravel-backend-production.up.railway.app/api/api/getproductbyid/${id}`)
    // console.log(peticion.data);
    ///devuelve un objeto
    state(peticion.data.data) 
}

export {allProducts, productById};