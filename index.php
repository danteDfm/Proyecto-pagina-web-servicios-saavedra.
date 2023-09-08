<!DOCTYPE html>
<html lang="en">

<?php require "./pages/head.php" ?>

<header class="index_header" id="navb">
  <nav class="navbar">
    <h1 class="navbar_title">Servicios</h1>
    <ul class="navbar_navigation">
      <li><a href="#navb" class="nabvar_link">Inicio</a></li>
      <li><a href="#quienes_somos" class="nabvar_link">Perfil</a></li>
      <li><a href="#servicios" class="nabvar_link">Servicios</a></li>
      <li><a href="#contactos" class="nabvar_link">Contactos</a></li>
    </ul>
  </nav>


  <div class="contenedor_slider">
    
  
    <div class="carrusel">
  

        <div class="carrusel_content">
              
              <div class="semi_carrosel car1"></div>

              <div class="descripcion">
            
                  <h2 class="car_title">SOCIEDAD DE <br> TRANSPORTES Y SERVICIOS SAAVEDRA LTDA<span class="punto">.</span></h2>
                  <p class="car_descripcion">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate natus dolore voluptatum consequatur doloremque, consequuntur, quae, enim porro eveniet aspernatur dolorem eos tempore laudantium. Rerum maxime amet eius nam dolore?</p>

              </div>

        </div>

        <div class="carrusel_content">
              
              <div class="semi_carrosel car2"></div>

              <div class="descripcion">
            
                  <h2 class="car_title"> Comprometidos con tu causa<span class="punto">.</span></h2>
                  <p class="car_descripcion">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate natus dolore voluptatum consequatur doloremque, consequuntur, quae, enim porro eveniet aspernatur dolorem eos tempore laudantium. Rerum maxime amet eius nam dolore?</p>

              </div>

        </div>

        <div class="carrusel_content ">
              
              <div class="semi_carrosel car3"></div>

              <div class="descripcion">
            
                  <h2 class="car_title">Llevando nuestro espiritu hasta tus calles<span class="punto">.</span></h2>
                  <p class="car_descripcion">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate natus dolore voluptatum consequatur doloremque, consequuntur, quae, enim porro eveniet aspernatur dolorem eos tempore laudantium. Rerum maxime amet eius nam dolore?</p>

              </div>

        </div>



        <div class="carrusel_content ">
              
              <div class="semi_carrosel car1"></div>

              <div class="descripcion">
            
                  <h2 class="car_title">SOCIEDAD DE <br> TRANSPORTES Y SERVICIOS SAAVEDRA LTDA<span class="punto">.</span></h2>
                  <p class="car_descripcion">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate natus dolore voluptatum consequatur doloremque, consequuntur, quae, enim porro eveniet aspernatur dolorem eos tempore laudantium. Rerum maxime amet eius nam dolore?</p>

              </div>

        </div>

     </div>
  </div>
   

</header>




<?php require "./pages/social.php"  ?>





<section id="quienes_somos" class="quienes_somos">
  
  <div class="perfil">

    <div class="titulo_des"></div>
  </div>
 
</section>



<?php require("./pages/menuService.php"); ?>



<section  class="contactanos">
  
  <div class="foot_contact" id="contactos">
    
      <form class="formulario_peticion" >

        <h2 class="title_foot">Envianos tu Peticion</h2>

       <div class="content_input">
          <input type="text" placeholder="Nombre Completo">
          <input type="email" placeholder="email">
          <input type="text" placeholder="Numero Telefonico">
       </div>

        <textarea placeholder="peticion">
        </textarea>

        <button class="btn_contact">
          Enviar
        </button>
      </form>


      <footer class="pie_pagina">
        <ul>
          <li>texto de prueba</li>
          <li>texto de prueba</li>
          <li>texto de prueba</li>
          
        </ul>
        <ul>
          <li>texto de prueba</li>
          <li>texto de prueba</li>
          <li>texto de prueba</li>
        </ul>
        <ul>
          <li>texto de prueba</li>
          <li>texto de prueba</li>
          <li>texto de prueba</li>
        </ul>
      </footer>


 


    

  </div>

</section>


  <script src="./static/js/barra.navegacion.js"></script>
  <script src="./static/js/carrusel.js"></script>
  <script src="./static/js/select.service.js"></script>
</body>
</html>