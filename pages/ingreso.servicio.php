<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="../static/styles/ingreso_servicio.css" rel="stylesheet" type="text/css">
    <title>Document</title>
</head>
<body>

    <div class="cont_general">
          


  <div class="content_main">
  <header class="header">

                  


</header>

    <main class="main">
          <section class="servicio">
              
              <form class="form_service">
                  <h1>Ingresar Informacion Del Servicio</h1>
                <div> 

                  <label id="nombre">Nombre Servicio</label>
                  <input type="text" name="nombre" class="name">
                
                  <label id="opc">Descripcion</label>
                  <textarea class="descript"></textarea>


                    <label id="opc">Area Servicio</label>
                    <select id="opciones" class="opc">
                      <option value="general">General</option>
                      <option value="transporte">Transporte</option>
                      <option value="obrasMenores">Obras menores</option>
                  </select>

                    <label id="img">Imagen Servicio</label>
                    <input type="file" name="img" class="img" accept="image/png">

                  <button>Guardar</button>
                </div>
              </form>
          </section>

          <section class="usuarios">
          <form class="form_service">
                  <h1>Ingresar Usuario</h1>
                <div>
                <input type="text" placeholder="nombre">
                  <input type="text" placeholder="contraseña">
                  <input type="text" placeholder="cargo">
                  <button type="submit">Guardar</button>
                </div>
              </form>
          </section>
      </main>


   
  </div>  

  <aside class="side">

<div class="perfil">
    <p>perfil</p>
</div>
<div class="nav_side">
  
        <ul>
            <li class="btn_nav">Servicios</li>
            <li class="btn_nav">Usuarios</li>
            <li>Salir</li>
        </ul>

</div>
</aside>


    </div>
  
    <script src="../static/js/nav_servicio.js"></script>
    <script src="../static/js/ingreso.js"></script>

</body>
</html>