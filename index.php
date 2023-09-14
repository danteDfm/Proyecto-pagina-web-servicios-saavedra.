<!DOCTYPE html>
<html lang="en">

<?php require "./pages/head.php" ?>

<header class="index_header" id="navb">

  <?php require("./pages/navbar.php"); ?>

  <div class="contenedor_slider">
    
  
    <div class="carrusel">
  
        <div class="carrusel_content">
       
              <div class="descripcion">
            
                  <h2 class="car_title">SOCIEDAD DE TRANSPORTES Y SERVICIOS SAAVEDRA LTDA<span class="punto">.</span></h2>
                  <p class="car_descripcion">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate natus dolore.</p>
                  <a href="#quienes_somos" class="info">Mas informacion</a>

              </div>

        </div>

     
     </div>
  </div>
   

</header>




<?php require "./pages/social.php"  ?>





<?php require("./pages/quienes_somos.php"); ?>
 

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


     <?php require("./pages/pie.php"); ?>

    

  </div>

</section>


  <script src="./static/js/barra.navegacion.js"></script>
  <script src="./static/js/cambio_img.js"></script>

 <script src="./static/js//servicios.jss"></script>
  <script src="./static/js/select.service.js"></script>
</body>
</html>

