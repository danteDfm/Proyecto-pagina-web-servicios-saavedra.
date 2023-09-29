<!DOCTYPE html>
<html lang="en">

<?php require "./components/head.php" ?>

<header class="index_header" id="navb">

  <?php require("./components/navbar.php"); ?>

  <div class="contenedor_slider">
    
 
       
              <div class="descripcion">
            
                  <h2 class="car_title">SOCIEDAD DE TRANSPORTES Y SERVICIOS SAAVEDRA LTDA<span class="punto">.</span></h2>
                  <p class="car_descripcion">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate natus dolore.</p>
                  <a href="#quienes_somos" class="info">Mas informacion</a>

              </div>

     
  </div>
   

</header>




<?php require "./components/social.php"  ?>





<?php require("./components/quienes_somos.php"); ?>
 

<?php require("./components/menuService.php"); ?>



<section  class="contactanos">
  
  <div class="foot_contact" id="contactos">
    
      <form class="formulario_peticion">

        <h2 class="title_foot" >Envianos tu Peticion</h2>
     

       <div class="content_input">
          <input type="text" placeholder="Nombre Completo" name="nombre" class="i1">
          <input type="email" placeholder="email" name="email" class="i1">
          <input type="text" placeholder="Numero Telefonico" name="telefono" class="i1">
       </div>

        <textarea placeholder="peticion" name="peticion" class="t1">
        </textarea>

        <button class="btn_contact" type="submit">
          Enviar
        </button>
      </form>


     <?php require("./components/pie.php"); ?>

    

  </div>

</section>


  <script src="./static/js/barra.navegacion.js"></script>
  <script src="./static/js/cambio_img.js"></script>
  <script src="./static/js/form.email.js" type="module" src="tu-archivo.js"></script>
 <script src="./static/js/servicios.js"></script>
  <script src="./static/js/select.service.js"></script>
</body>
</html>

