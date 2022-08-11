import cateElement from "../../components/cateElement.js";
import { uniqueDate } from "../../components/product.js";
import { clientService } from "../../services/service-client.js";
import { Validacion } from "../../services/validacion_contacto.js";


const createNewCard = (img,name,price,id) =>{
    const card = document.createElement("div");
    card.classList.add("col-lg-2","pb-4");
    let precioFinal = numeral(price).format('$0,0.00') 
    const contenido = `
        <div class="card text-center">
            <img class="img-fluid" id="img-card" src="${img}">
            <div class="card-body">
            <h5><strong id="producto">${name}</strong></h5>
            <p> ${precioFinal}</p>
            </div>
            <div class="card-footer">
            <a href="./detail_product.html?id=${id}">Ver producto</a>
            </div>
        </div>
    `;
    card.innerHTML =contenido;

    return card
}



const listProduct = document.querySelector("[data-list-product]");
const productos = async ()=>{
    try{
        const productosList = await clientService.listProduct();
        const categorias =uniqueDate(productosList);
        categorias.forEach((date) => {
            listProduct.appendChild(cateElement(date));
            productosList.forEach(({img, name, price, id, category})=>{
                let cont = 1;
                if(cont <= 6){
                    if(date == category){
                        listProduct.appendChild(createNewCard(img, name, price, id))
                        cont++
                    }
                }
                
            })
        });
    }catch(err){
        alert("Hubo un error", err)
    }
    
}
productos()

Validacion.validacioformularioContacto();

