import { AdminService } from "../../services/service-admin.js";
import { Validacion } from "../../services/validacion_contacto.js";

const form = document.querySelector("[data-form-create]");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const inputsVal= document.querySelectorAll(".input");
    const validacion = Validacion.validarInput(inputsVal);
    if(validacion){
        const img = document.querySelector("[data-img]").value;
        const product = document.querySelector("[data-producto]").value;
        const category = document.querySelector("[data-categoria]").value;
        const price = document.querySelector("[data-price]").value;
        const description = document.querySelector("[data-descripcion]").value;
        AdminService.creatNewProduct(img,product,category,price,description).then(response =>{
            window.location.href="./list_producto.html";
        })
        .catch((err)=> alert("ocurrio un error" + err))
    }
    
});


Validacion.validacioformularioContacto();