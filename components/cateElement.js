export default (cate) =>{
    const cateElement =document.createElement("div");
    cateElement.classList.add("row","pt-3");
    const categoria = document.createElement("div");
    const cont = `<div class="d-flex justify-content-between">
                        <h4 class="text-decoration-underline"><strong>${cate}</strong></h4>
                        <p><a class="text-decoration-none" href="./search.html?category=${cate}"><strong>Ver todo <i class="fa fa-arrow-right"></i></strong></a></p>
                </div>`
    cateElement.appendChild(categoria);
    categoria.innerHTML= cont
    return cateElement
} 


