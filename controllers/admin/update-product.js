import { AdminService } from "../../services/service-admin.js";
import { clientService } from "../../services/service-client.js";
import { Validacion } from "../../services/validacion_contacto.js";
const form = document.querySelector("[data-form-edit]")

const infoEditProduct = async ()=>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const img = document.querySelector("[data-img]");
    const product = document.querySelector("[data-producto]");
    const category = document.querySelector("[data-categoria]");
    const price = document.querySelector("[data-price]");
    const description = document.querySelector("[data-descripcion]");
    try{
        const productEdit = await clientService.detailProduct(id);
        if(productEdit){
            img.value = productEdit.img;
            product.value = productEdit.name;
            category.value = productEdit.category;
            price.value = productEdit.price
            description.value = productEdit.descripcion
        }else{
            throw new Error()
        }
    }catch(err){
        alert("Ocurrio un error al obtener el producto");
        window.location.href ="./list_producto.html"
    }
};
infoEditProduct();

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const inputs = document.querySelectorAll(".input");
    if(Validacion.validarInput(inputs)){
        const img = document.querySelector("[data-img]").value;
        const product = document.querySelector("[data-producto]").value;
        const category = document.querySelector("[data-categoria]").value;
        const price = document.querySelector("[data-price]").value;
        const description = document.querySelector("[data-descripcion]").value;
        AdminService.updateProduct(img, product,category, price, description ,id).then(()=>{
            window.location.href = "./list_producto.html";
        }).catch((err)=> {
            alert("Ocurrio un Error",err);
        })
    }    
    
});

Validacion.validacioformularioContacto();