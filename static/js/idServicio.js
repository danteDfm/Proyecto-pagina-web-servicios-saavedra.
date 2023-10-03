const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let titulo = document.querySelector(".ante");
let descripcion = document.querySelector(".title_info");
let img = document.querySelector(".pre1");

async function resService(){

    const resService = await fetch(`http://localhost:3002/api/v1/servicio/leer/id/${id}`, {method: "GET"});
    const dataService = await resService.json();
    return dataService;
}

async function main(){

    const urlImage = "../static/img/servicios";
       
   const res = await resService();
    const servicio = res.data[0];
 
  

    const des =servicio.descript_servicio
    titulo.textContent = servicio.title_servicio.toUpperCase();
    descripcion.innerText = des;
    img.style.backgroundImage = `url(${urlImage+servicio.img_servicio})`;
  

   

}

main();