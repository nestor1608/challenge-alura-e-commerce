import { AdminService } from "../../services/service-admin.js";
import { clientService } from "../../services/service-client.js";
import { Validacion } from "../../services/validacion_contacto.js";

const createCardlist = (img,name,price,id) =>{
    const card = document.createElement("div");
    card.classList.add("col-lg-2","pt-3","pb-2");
    let precioFinal = numeral(price).format('$0,0.00') 
    const contenido = `
    
        <div class="card text-center">
            <img class="img-fluid" id="img-card" src="${img}">
            
            <h6><strong>${name}</strong></h6>
            <p>${precioFinal}</p>
            
            <div class="btn-group" >
            <button class="btn bg-danger" id="${id}"><i class="material-icons text-light">delete</i></button>
            <a class="btn bg-success text-light" href="./edit_product.html?id=${id}"><i class="material-icons" >mode_edit</i></a>
            </div>
        </div>
    `;
    card.innerHTML =contenido;
    const btn = card.querySelector("button");
    btn.addEventListener("click", ()=>{
        const id = btn.id;
        AdminService.deleteProduct(id).then(response=> {

        }).catch(err=> alert("ocurrio algo"))
    });
    return card
}

const list = document.querySelector("[data-list-product]");


clientService.listProduct().then((data)=>{
    data.forEach(({img, name,price , id}) => {
        const newCard =createCardlist(img,name,price,id);
        list.appendChild(newCard);
    });
}).catch((err)=> alert("Ocurrio un error"))

Validacion.validacioformularioContacto();
