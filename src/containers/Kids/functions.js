import axios from 'axios';

const allProducts= async (state)=>{
    const peticion = await axios.get('https://devos-ecommerce.herokuapp.com/api/getallproducts')
    // console.log(peticion.data.data);
    ///devuelve un array
    state(peticion.data.data)/// Lo mando a state para usarlo en Inicio.jsx
};

const productById = async (id, state)=>{
    const peticion = await axios.get(`https://devos-ecommerce.herokuapp.com/api/getproductbyid/${id}`)
    // console.log(peticion.data);
    ///devuelve un objeto
    state(peticion.data.data) /// Lo mando al Personaje.jsx (justo debajo de la funcion const Personaje()
}

export {allProducts, productById};