let data = document.querySelectorAll(".data");
let msj = document.querySelector(".msj");
let cont = document.querySelector(".con_msj");


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
            if(res.status == 404) throw({
                msj: "Usuario no existe", 
                code: 404
            });
            if(res.status == 401) throw({
                msj: "Contraseña incorrecta", 
                code: 401
            });
            return;            
        })
        .then(res =>{

           
           window.location.href = "http://127.0.0.1:5502/pages/ingreso.servicio.html";
       

        })
        .catch(err=>{

            
            if(err.code == 404 || err.code == 401){

            
                cont.style.opacity= "1";
                console.log(err);
                msj.innerText = err.msj;
                msj.parentElement.style.background = "red";
                setTimeout(()=>{
                    cont.style.opacity = "0";
                }, 1000);

            }

            console.log(err);
            return;
          
        });

    
    
    });
}

sendData();