const validacioformularioContacto = ()=>{
    const form =document.querySelector("[data-form]");

    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        const validar = document.querySelectorAll("[data-tipo]");
        if(validarInput(validar)){
            alert("mensaje enviado");
            location.reload()
    }
})
};

const validarInput = (inputs)=>{
    let enviar = true
    inputs.forEach((input)=>{
        if (input.value ==""){
            input.parentElement.querySelector(".input-message-error").innerHTML = "El campo no puede estar vacio";
            enviar=false
        }else{
            input.parentElement.querySelector(".input-message-error").innerHTML = ""
        }
    })
    return enviar
}
export const Validacion = {
    validacioformularioContacto,
    validarInput,
}
