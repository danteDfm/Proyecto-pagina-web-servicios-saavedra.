import mysql from "mysql2/promise"
import { Servicios} from "../models/interfaces/servicio.interface";
export class mysqlConnection{



   async connection() {

       try{
        const objConnect=await mysql.createConnection({

            host: "localhost", 
            database: "PAGINA_WEB_SERVICIOS", 
            user: "root", 
            password: ""
        });

        return objConnect;
       }catch(err:any){

        console.log("Error de conexion", err);
       }

    }
    

    async prepareQuery(consulta:string, prepare?: (string | Date | number)[]){

       try{


            const objConnect = await this.connection();
            let  res = await  objConnect?.query(consulta, prepare);
            return res;

       }catch(err:any){

            throw new Error(err);

       }
    }




}