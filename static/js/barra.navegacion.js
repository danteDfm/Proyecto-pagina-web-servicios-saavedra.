let prevScrollPos = window.pageYOffset;
const header = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    const currentScrollPos = window.pageYOffset;

    if(window.scrollY > 0){
        header.style.backgroundColor = "#0c1a22";
        header.style.marginTop = "0px";
        
    }
    if(window.scrollY == 0){
        header.style.marginTop = "14px";
        header.style.backgroundColor = "#00000000";
    }
    prevScrollPos = currentScrollPos;
});

console.log(prevScrollPos);