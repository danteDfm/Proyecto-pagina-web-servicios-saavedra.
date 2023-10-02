const form = document.querySelector(".formulario_peticion");
const inputAll = document.querySelectorAll(".i1");
const txt = document.querySelector(".t1");
const bt1 = document.querySelector(".btn_contact");
const err = document.querySelector(".error");
const contenedor = document.querySelector(".contenedor_error");


let objValue = {};

form.addEventListener("submit", (e)=>{



    e.preventDefault();

  try{  
    
      objValue = {

        nombre: inputAll[0].value, 
        email: inputAll[1].value, 
        numero: inputAll[2].value, 
        peticion: txt.value

    }


    asignarValorSeguro(objValue.peticion);


      mensaje("correo enviado", "#1e4ff0");
    fetch("http://localhost:3000/api/v1/enviar/email",{

        method: "POST", 
        headers: {

            "Content-Type": "application/json"
        },
        body: JSON.stringify(objValue)        


    }).then(res=>res.json()).then((res)=>{

      console.log(res);

    }).catch(err=>console.log(err));

  }catch(err){

    if(err.codigo == 11){
      mensaje("no se permiten insultos", "red");
    }
   

  }



});


function asignarValorSeguro(valor) {
    
  
    const insultos = /ctm|hijo de perra|maricon|zorra|asqueroso|concha de tu madre|pico|poto|hijo de la maraca|maraca/gi; 
  
    const contieneInsulto = insultos.test(valor.trim());

  
    if (!contieneInsulto) {
    
      return  valor;

    } else {

      throw ({
        codigo: 11
      });
        
    }
  }


  function mensaje(mensaje, back){


    err.innerText = mensaje;
    contenedor.style.opacity = "1"
    contenedor.style.backgroundColor = back;
    contenedor.style.top= "40%";


      setTimeout(()=>{
        contenedor.style.opacity = "0"
        contenedor.style.top= "70%";
        contenedor.style.backgroundColor = "white";
      }, 3000);

  }