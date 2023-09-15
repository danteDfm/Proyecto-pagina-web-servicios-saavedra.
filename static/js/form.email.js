const form = document.querySelector(".formulario_peticion");
const inputAll = document.querySelectorAll(".i1");
const txt = document.querySelector(".t1");
const bt1 = document.querySelector(".btn_contact");


let objValue = {};

form.addEventListener("submit", (e)=>{

    e.preventDefault();


    asignarValorSeguro(txt.value);

    objValue = {

        nombre: inputAll[0].value, 
        email: inputAll[1].value, 
        numero: inputAll[2].value, 
        peticion: txt.value

    }


    console.log(objValue);
    
    fetch("http://localhost:3000/api/v1/enviar/email",{

        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objValue)        


    }).then(res=>res.json()).then((res)=>console.log(res)).catch(err=>console.log(err));



});


function asignarValorSeguro(valor) {
    
  
    const insultos = /ctm|hijo de perra|cabeza de huevo/gi; 
  
    const contieneInsulto = insultos.test(valor.trim());

  
    if (!contieneInsulto) {
    
      return  valor;

    } else {
      console.log('El valor contiene un insulto y no se asignará.');
        return false;
        
    }
  }