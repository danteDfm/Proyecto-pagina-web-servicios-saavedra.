let service = document.querySelector(".servicio");
let user = document.querySelector(".usuarios");
let btn = document.querySelectorAll(".btn_nav");






btn[1].addEventListener("click", ()=>{

    service.style.display = "none";
    user.style.display = "flex";

});

btn[0].addEventListener("click", ()=>{

    service.style.display = "flex";
    user.style.display = "none";

});

