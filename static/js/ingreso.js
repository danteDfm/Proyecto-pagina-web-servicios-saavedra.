let form = document.querySelector(".form_service");
let tabla = document.querySelector(".table tbody");
let cerrar = document.querySelector(".cerrar");

let nombre = document.querySelector(".name");
let des = document.querySelector(".descript");
let opc = document.querySelector(".opc");
let img = document.querySelector(".img");
let id = document.querySelector(".id_servicio");

const date = new Date();

console.log(date.toISOString());
console.log(date.getHours());
function actualizarServicio(){
  
  form.addEventListener("submit", (e)=>{


    const formData = new FormData(form);

    formData.append("creacion", Date.now());

    const idServicio = id.value;



      fetch(`http://localhost:3002/api/v1/servicio/actualizar/${idServicio}`, {

      method: "POST", 

      body: formData
      })
      .then((res)=>res.json())
      .then((res)=>{

   

        setTimeout(()=>{
          form.style.display = "none";
        },2000);

        nombre.value = "";
        opc.value = "";
        des.value = "";
        id.value = "";
      })
      .catch(err=>console.log(err));
      
  });

  
 

}



function desplegarLista(){

    let list = "";

    fetch("http://localhost:3002/api/v1/servicio/leer", {
      method: "GET"
    })
    .then((res)=>res.json())
    .then((res)=>{

        res.data.map(data=>{
         
          list+= `<tr class='trd'>

              
              <th class="id_servicio" style="display:none">${data.id_servicio}</th>
              <th>${data.title_servicio}</th>
              <th>${data.creacion}</th>
              <th><button class="act_servicio">Actualizar</button></th>
          </tr>`

        });

      
        tabla.innerHTML = list;
            
        let bt_act = document.querySelectorAll(".act_servicio");
        let id_act = document.querySelectorAll(".id_servicio");
  
    
        let data ={} ;
  
  
        for(let i = 0; i<id_act.length; i++){

          
  
              bt_act[i].addEventListener("click", ()=>{
  
                 data = res.data[i];
                 
              
                   nombre.value = data.title_servicio;
                   opc.value = data.area_servicio;
                   des.value = data.descript_servicio;
                   id.value = data.id_servicio;
             

                   form.style.display = "flex";
                   
              });
  
        }

        
     

    })
    .catch(err=>console.log(err));

}

desplegarLista();
actualizarServicio();


cerrar.addEventListener("click", ()=>{

  form.style.display = "none";

});