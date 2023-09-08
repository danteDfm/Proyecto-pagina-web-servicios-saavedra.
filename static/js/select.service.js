let servicios = document.querySelectorAll(".servicio");
let opcion = document.querySelectorAll(".opcion_servicio");


console.log(servicios);




opcion[0].addEventListener("click", ()=>{

    servicios[0].style.display = "flex";
    servicios[1].style.display = "none";
    servicios[2].style.display = "none";
 
});

opcion[1].addEventListener("click", ()=>{

    servicios[0].style.display = "none";
    servicios[1].style.display = "flex";
    servicios[2].style.display = "none";



});

opcion[2].addEventListener("click", ()=>{

    servicios[0].style.display = "none  ";
    servicios[1].style.display = "none";
    servicios[2].style.display = "flex";

  

});