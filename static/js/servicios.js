
let container1 = document.querySelector(".ser1");
let container2 = document.querySelector(".ser2");
let container3 = document.querySelector(".ser3");



async function obtenerServicio(){
  
    const res=await fetch(`http://localhost:3002/api/v1/servicio/leer`, {method: "GET"}, headers = { 'Content-Type': 'application/json' });
    const data =  await res.json();
    console.log("hola mundo");
    return data;
}


function areaServicio(tipoServicio){

    let etiqueta = "";  
    let clase;

    switch(tipoServicio[0].area_servicio){

        case "general":clase = "card1"; break;
        case "transporte":clase = "card2"; break;
        case "obrasMenores":clase = "card3"; break; 
    }   

    
    for(let i = 0; i <tipoServicio.length; i++){

        etiqueta = etiqueta +  `<div class="cont_card ${clase}">
            <div class="img_card"></div>
            <div class="descript">
                <h2 class="title_card">${tipoServicio[i].title_servicio}</h2>
                <a href="http://127.0.0.1:5502/pages/servicios.html?id=${tipoServicio[i].id_servicio}" class="info_ser">mas info</a>  
            </div>
         </div> `;     
    }   

    return etiqueta;
}


function innerContainer(card, service){

    const ruta_img = './static/img/servicios';
  
    for(let i = 0; i <card.length; i++){

        card[i].style.backgroundImage = `url(${ruta_img+service[i].img_servicio})`
    
    };
}

async function servicio(){
  
    const servicios = await obtenerServicio();
 
    const servicio = servicios.data;

     const general = servicio.filter(data => data.area_servicio == "general");
     const transporte = servicio.filter(data => data.area_servicio == "transporte");
     const obras = servicio.filter(data => data.area_servicio == "obrasMenores");
    
    container1.innerHTML =  areaServicio(general);
    container2.innerHTML = areaServicio(transporte);
    container3.innerHTML = areaServicio(obras);

    
    const card1 = document.querySelectorAll(".card1");
    const card2 = document.querySelectorAll(".card2");
    const card3 = document.querySelectorAll(".card3");
    
    innerContainer(card1, general);
    innerContainer(card2, transporte);
    innerContainer(card3, obras);
  

}
servicio();

