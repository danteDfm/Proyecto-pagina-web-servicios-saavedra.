let tablaUser = document.querySelector(".tabla_user tbody");
let form2 = document.querySelector(".form_usuario");
let valores = document.querySelectorAll(".int1");
let usuario = document.querySelectorAll(".usuarios");
let servicio = document.querySelectorAll(".servicio");
let close = document.querySelector(".bt12");




document.querySelector(".cont_btn12 button").addEventListener("click", ()=>{
    form2.style.display = "flex";
});
document.querySelector(".bt12").addEventListener("click", ()=>{
    form2.style.display = "none";
});

function cerrarFormulario(){

    close.addEventListener("click", ()=>{

        for(i =0 ;i<valores.length; i++){

            valores[i].value = "";

        }

    });


}

async function fetchUsuario(){
  
    const leerDataUser = async ()=>{

        let template =  "";

        let resData= await fetch("http://localhost:3002/api/v1/usuario/leer", {method: "GET"})
        let dataUser = await resData.json();

        dataUser.msj.map(data=>{

            template+= `<tr>
                <td style='display:none' class="idUser ts">${data.id_usuario}</td>
                <td>${data.nombre_apellido}</td>
                <td>${data.nombre_usuario}</td>
                <td>${data.cargo_usuario}</td>
                <td>${data.creacion_usuario}</td>
                <td class='btn_actualizar'>Actualizar</td>
                <td class='btn_borrar'>Borrar</td>
                
            </tr>`;



        });

        tablaUser.innerHTML = template;
        return dataUser;
    }

   

    let dataMiner = await leerDataUser();
    let  actulizar  =document.querySelectorAll(".btn_actualizar");
    let  borrar =document.querySelectorAll(".btn_borrar");
    let  idUser =document.querySelectorAll(".idUser");
  

    const ingresarUsuario =()=>{

        form2.addEventListener("submit", (e)=>{
            
            let dataUser = {

                nombre: valores[0].value,
                usuario: valores[1].value,
                password: valores[2].value,
                cargo: valores[3].value,

            };
            
            fetch(`http://localhost:3002/api/v1/usuario/crear?idUsuario=${valores[4].value}`, {method: "POST",headers: {"Content-type": "application/json"} ,body: JSON.stringify(dataUser)})
            .then((res)=>res.json())
            .then((res)=>console.log(res    ))
            .catch((data)=>console.log(data))
            .finally(()=>{

                setTimeout(() => {
                    
                form2.style.display = "none"

                },1000);

                 valores[0].value = "";
                 valores[1].value = "";
                 valores[2].value = "";
                 valores[3].value = "";

            });  

     
                
        });


        
    }


    let borrarUsuario = ()=>{
        for(let i = 0; i< borrar.length; i++){

            borrar[i].style.cursor = "pointer";
            borrar[i].style.color = "red";
            borrar[i].addEventListener("click", (e)=>{
        
                    fetch(`http://localhost:3002/api/v1/usuario/delete/${idUser[i].textContent}`, {method:"delete"})
                    .then((res)=>res.json())
                    .then(res=> console.log(res))
                    .catch(err => console.log(err))
                    .finally(()=>{
                        location.reload();
                    });                   
            });
        
           }    
    }

    let actulizarUsuario = ()=>{

        for(let i = 0; i< actulizar.length; i++){

            actulizar[i].style.cursor = "pointer";
            actulizar[i].style.color = "blue";
            actulizar[i].addEventListener("click", ()=>{

                valores[0].value = dataMiner.msj[i].nombre_apellido;
                valores[1].value = dataMiner.msj[i].nombre_usuario;
                valores[2].value = dataMiner.msj[i].contrasena_usuario;
                valores[3].value = dataMiner.msj[i].cargo_usuario;
                valores[4].value = idUser[i].textContent;

                form2.style.display = "flex";                
            });
        
           }
        
    }

    actulizarUsuario();
    ingresarUsuario();
    borrarUsuario();

}

cerrarFormulario();
fetchUsuario();