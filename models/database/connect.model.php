<?php 

require("../../config/configuration.php");

class connection{

    private $podConnect; 

    function __construct()
    {   
        $this->podConnect = null;
        $this->connect();
    }

    function connect(){
        try{

         
            $this->podConnect = new PDO('mysql:host='.CONFIG_CONNECT["host"].'; dbname='.CONFIG_CONNECT["dbname"].';', CONFIG_CONNECT["user"], CONFIG_CONNECT["password"]);
            

        }catch(PDOException $e){

            print("ERROR DE CONEXION --> ". $e);
            die();
        }

    }

}


error_log("hola");