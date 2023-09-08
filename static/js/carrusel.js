let carrusel = document.querySelector(".carrusel");
let sliders = document.querySelectorAll(".carrusel_content");



let largo = sliders[0].clientWidth;
let contador = 1;
let interval = 6000;


window.addEventListener("resize", ()=>{

    largo = sliders[0].clientHeight;

});


function slides(){

    carrusel.style.transform = `translateX(-${largo * contador}px)`
    carrusel.style.transition = "3s linear";

    contador++;

    if(contador == sliders.length){

   setTimeout(()=>{

    carrusel.style.transform = `translateX(0px)`
    carrusel.style.transition = "0s";
    contador = 1;

   }, 3000);

    }

}


setInterval(()=>{

    slides();

}, interval);