
let container1 = document.querySelector(".ser1");
let container2 = document.querySelector(".ser2");
let container3 = document.querySelector(".ser3");



async function obtenerServicio(param){
  
    const res=await fetch(`http://localhost:3001/api/v1/servicio/leer/${param}`, {method: "POST"}, headers = { 'Content-Type': 'application/json' });
    const data =  await res.json();
    return data;
}


async function servicio(){

    const ruta_img = './static/img/servicios';
    const servicios1 = await obtenerServicio("general");
    const servicios2 = await obtenerServicio("transporte");
    const servicios3 = await obtenerServicio("obrasMenores");
    
    const servicio1 = servicios1.data;
    const servicio2 = servicios2.data;
    const servicio3 = servicios3.data;
    let etiqueta1 = "";
    let etiqueta2 = "";
    let etiqueta3 = "";

    
    for(let i = 0; i <servicio1.length; i++){


            etiqueta1 = etiqueta1 +  `<div class="cont_card card1">
                <div class="img_card"></div>
                <div class="descript">
                    <h2 class="title_card">${servicio1[i].title_servicio}</h2>
                    <a href="http://localhost/servicios/pages/servicios.php?id=${servicio1[i].id_servicio}" class="info_ser">mas info</a>  
                </div>
             </div> `;
             

    }   
    for(let i = 0; i <servicio2.length; i++){


            etiqueta2 = etiqueta2 +  `<div class="cont_card card2">
                <div class="img_card"></div>
                <div class="descript">
                    <h2 class="title_card">${servicio2[i].title_servicio}</h2>
                    <a href="http://localhost/servicios/pages/servicios.php?id=${servicio2[i].id_servicio}" class="info_ser">mas info</a>  
                </div>
             </div> `;
             

    }   
    for(let i = 0; i <servicio3.length; i++){


            etiqueta3 = etiqueta3 +  `<div class="cont_card card3">
                <div class="img_card"></div>
                <div class="descript">
                    <h2 class="title_card">${servicio3[i].title_servicio}</h2>
                    <a href="http://localhost/servicios/pages/servicios.php?id=${servicio3[i].id_servicio}" class="info_ser">mas info</a>  
                </div>
             </div> `;
             

    }   
    
    container1.innerHTML = etiqueta1;
    container2.innerHTML = etiqueta2;
    container3.innerHTML = etiqueta3;


    const card1 = document.querySelectorAll(".card1");
    const card2 = document.querySelectorAll(".card2");
    const card3 = document.querySelectorAll(".card3");

    

    for(let i = 0; i <servicio1.length; i++){


        card1[i].style.backgroundImage = `url(${ruta_img+servicio1[i].img_servicio})`;

    }   

    for(let i = 0; i <servicio2.length; i++){


        card2[i].style.backgroundImage = `url(${ruta_img+servicio2[i].img_servicio})`;

    }   

    for(let i = 0; i <servicio3.length; i++){


        card3[i].style.backgroundImage = `url(${ruta_img+servicio3[i].img_servicio})`;

    }   


}
servicio();

