 const dataPerfil=document.querySelectorAll(".dataPerfil");
 const salir=document.querySelector(".salir");




    window.addEventListener("DOMContentLoaded", ()=>
    {

        console.log("holaa mundo");
        
        let nombre = localStorage.getItem("nombre");
        let cargo = localStorage.getItem("cargo");

        if(nombre == undefined){

            location.reload();
        }

        dataPerfil[0].textContent = nombre;
        dataPerfil[1].textContent = cargo;

        


    }
);

(function(){
    
    salir.addEventListener("click", ()=>{

        localStorage.removeItem("userToken");
        localStorage.removeItem("nombre");
        localStorage.removeItem("cargo");

        window.location.href = "http://127.0.0.1:5502/pages/login.html";
    });


})();