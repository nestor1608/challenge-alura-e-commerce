
const listProduct = () => fetch("http://localhost:3000/producto").then((response)=> response.json());


const detailProduct = (id)=>{
    return fetch(`http://localhost:3000/producto/${id}`).then((response)=> response.json());
}

const searchProduct = ()=>{
    return fetch(`http://localhost:3000/producto/`).then((response)=> response.json());
}

export const clientService = {
    listProduct,
    detailProduct,
    searchProduct,
}