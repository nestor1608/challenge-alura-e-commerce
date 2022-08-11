import { clientService } from "../../services/service-client.js";

const NewCard = (img,name,price,id) =>{
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

const list = document.querySelector("[data-list-product]");

const search = async ()=>{
    const url = new URL(window.location);
    const cate = url.searchParams.get("category");
    const productos =  await clientService.searchProduct(cate);
    const titulo =document.createElement("h2");
    list.appendChild(titulo);
    productos.forEach(({img, name,price,category,id}) => {
        let nombre = name.toLowerCase()
        var bande =false
        if (category == cate){
            list.appendChild(NewCard(img,name,price,id));
            titulo.innerHTML=`Se encontraron estos resultados para '${cate}'`;
            bande=true
        }else if(nombre.includes(cate.toLowerCase())){
            list.appendChild(NewCard(img,name,price,id));
            titulo.innerHTML=`Se encontraron estos resultado para '${cate}'`;
            bande=true
        }else{
            if(bande = false){
                titulo.innerHTML=`No se encontraron resultados para '${cate}'`;
            }
        }
    });
}

search()