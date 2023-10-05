let prevScrollPos = window.pageYOffset;
const header = document.querySelector('.navbar');
const logo= document.querySelector('.llogo');
const title =  document.querySelector(".logo p");
window.addEventListener('scroll', () => {

    const currentScrollPos = window.pageYOffset;

    if(window.scrollY > 0){
       
        header.style.transform = "translate(0px)";
        header.style.marginTop = "0px";
       
        
    }
    if(window.scrollY == 0){
        header.style.transform = "translateY(53px)";
        header.style.backgroundColor = "#ffffff";

        title.style.color = "#242424";
    

        
        
    }
    prevScrollPos = currentScrollPos;
});

console.log(prevScrollPos);