let form = document.querySelector(".form_service");
let name = document.querySelector(".name");
let des = document.querySelector(".descript");
let tipo = document.querySelector(".opc");
let img = document.querySelector(".img");



form.addEventListener("submit", (e)=>{

    e.preventDefault();
 
    const formData = new FormData(form);
    console.log(formData);

     
});