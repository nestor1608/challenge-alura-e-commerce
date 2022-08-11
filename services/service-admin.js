
const creatNewProduct = ( img, name, category, price, descripcion)=>{
    return fetch("http://localhost:3000/producto",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({id:uuid.v4(), img, name, category, price, descripcion}),
    })
}

const deleteProduct = (id) => {
        return fetch(`http://localhost:3000/producto/${id}`,{
        method: "DELETE",
    })
}
const updateProduct = (img, name, category, price, descripcion,id)=>{
    return fetch(`http://localhost:3000/producto/${id}`,{
        method:"PUT",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify({img, name, category, price, descripcion})
    }).then((resp) => resp)
    .catch((err)=> console.log(err))
};

const usuarios = ()=> fetch("http://localhost:3000/usuario").then(res => res.json());

const login = async ( emailcli, passwordcli) =>{
    const list = await usuarios();
    list.forEach((lis) => {
        if(lis.email == emailcli && lis.password == passwordcli){
            window.location.href="../../views/list_producto.html"
        }else{
            alert("Usuario o Contraseña Incorrecto")
        }
    });
}

export const AdminService ={
    creatNewProduct,
    deleteProduct,
    updateProduct,
    login,
    usuarios,
}
