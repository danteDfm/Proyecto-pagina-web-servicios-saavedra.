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

    prevScrollPos = currentScrollPos;
});
