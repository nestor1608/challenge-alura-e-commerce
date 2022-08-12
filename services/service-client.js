
const listProduct = () => fetch("http://ecommerse.herokuapp.com/producto").then((response)=> response.json());


const detailProduct = (id)=>{
    return fetch(`http://ecommerse.herokuapp.com/producto/${id}`).then((response)=> response.json());
}

const searchProduct = ()=>{
    return fetch(`http://ecommerse.herokuapp.com/producto`).then((response)=> response.json());
}

export const clientService = {
    listProduct,
    detailProduct,
    searchProduct,
}