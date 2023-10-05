let data = document.querySelectorAll(".data");
let msj = document.querySelector(".msj");
console.log(window.innerWidth);
console.log(window.scrollY);
function sendData(){

    document.querySelector(".btn_log").addEventListener("submit", (e)=>{

        e.preventDefault();

        
        let objData = {
            nombre: data[0].value,
            password: data[1].value
        
        }


        fetch("http://localhost:3002/api/v1/login/verificar",
         {
          method:"POST",
          headers: {
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify(objData)
        }).then(async(res)=>{
            
            const token = res.headers.get("Authorization");

            localStorage.setItem("userToken", token);

            if(res.ok) return res.json();
            throw new Error("la Solcicitud ha fallado");
        })
        .then(res =>{

            console.log(res);   
            
       

        })
        .catch(err=>{
            msj.innerText = err;
            msj.parentElement.style.background = "red";
        });

    
    
    });
}

sendData();