const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

let titulo = document.querySelector(".titulo_servicio");
let descripcion = document.querySelector(".descripcion_servicio");
let img = document.querySelector(".img_ser");

async function resService(){

    const resService = await fetch(`http://localhost:3002/api/v1/servicio/leer/id/${id}`, {method: "POST"});
    const dataService = await resService.json();
    return dataService;
}

async function main (){

    const urlImage = "../static/img/servicios";
    
   const res = await resService();
    const servicio = res.data[0];
    
    console.log(urlImage+servicio.img_servicio);

    titulo.textContent = servicio.title_servicio;
    descripcion.textContent = servicio.descript_servicio;
    img.style.backgroundImage = `url(${urlImage+servicio.img_servicio})`;
  

   

}

main();