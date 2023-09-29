let prevScrollPos = window.pageYOffset;
const header = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    const currentScrollPos = window.pageYOffset;

    if(window.scrollY > 0){
        header.style.backgroundColor = "#0c1a22";
    }
    if(window.scrollY == 0){
        header.style.backgroundColor = "#00000000";
    }
    prevScrollPos = currentScrollPos;
});

console.log(prevScrollPos);