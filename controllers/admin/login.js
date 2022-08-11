import { AdminService } from "../../services/service-admin.js";
import { Validacion } from "../../services/validacion_contacto.js";
const form = document.querySelector("[data-form]");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    const emailcli = document.querySelector("[data-email]").value;  
    const passwordcli = document.querySelector("[data-password]").value; 
    AdminService.login(emailcli,passwordcli);
})

Validacion.validacioformularioContacto();