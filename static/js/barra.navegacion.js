let prevScrollPos = window.pageYOffset;
const header = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
       
        header.style.transform = 'translateY(0)';
        header.style.opacity = '1';
        
        
    } else {
  
        header.style.transform = 'translateY(-100%)';
        header.style.opacity = '0';
    }


    if(window.scrollY > 0){
        header.style.backgroundColor = " #002e47";
    }
    if(window.scrollY == 0){
        header.style.backgroundColor = "#00000000";
    }
    prevScrollPos = currentScrollPos;
});

console.log(prevScrollPos);