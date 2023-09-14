let nav = document.querySelector(".index_header");


const img= [
    'static/img/pexels-mikael-blomkvist-8961555.jpg',
    'static/img/pexels-pok-rie-1188532.jpg',
    "static/img/pexels-los-muertos-crew-8853537.jpg",
   
];
let contador = 0;

function cambio(){


    nav.style.backgroundImage = `url('${img[contador]}')`;
   
    contador++;


    if(contador === 3) contador = 0;
}


setInterval(()=>{
    cambio();
}, 8000);