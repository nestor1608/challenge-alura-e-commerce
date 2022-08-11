import { clientService } from "../../services/service-client.js";
import { Validacion } from "../../services/validacion_contacto.js";

const product = document.querySelector("#product_detail");
const productDetail = (img, name, descripcion, price) =>{
    let precioFinal = numeral(price).format('$0,0.00') 

        const cajaProduct = document.createElement("div");
        const contenido =  `
                                <div class="card" id="product-detail">
                                    <div class="row">
                                        <div class="col-6">
                                            <img class="img-fluid" src="${img}" id="img-product">
                                        </div>
                                        <div class="col-5 text-center p-1" id="description-card">
                                            <h2>${name}</h2>
                                            <p>${descripcion}</p>
                                            <h5>${precioFinal}</h5>
                                        </div>
                                    </div>
                                </div>
                            `;
                            cajaProduct.classList.add("col-lg-10","col-sm-11")
        cajaProduct.innerHTML = contenido;
        product.appendChild(cajaProduct)
        return cajaProduct
};


const infoProduct = async ()=>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    try{
        const producto = await clientService.detailProduct(id);
        if (producto.name){
            productDetail(producto.img, producto.name, producto.descripcion, producto.price);
        }else{
            throw new Error();
        };
    }catch(err){
        alert("hubo un error", err)
    }

}

infoProduct()
Validacion.validacioformularioContacto();