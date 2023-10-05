import { OkPacket, OkPacketParams } from "mysql2";
import { mysqlConnection } from "../databases/database.connect";
interface User {

    id_usuario: number,
    nombre_usuario: string,
    contrasena_usuario: string
}


export class LoginModel{

    private objConnection;

    constructor(){

        this.objConnection = new mysqlConnection;

    }


    async verficarUsuarios(nombre:string){

        try{

            const query:string = "SELECT id_usuario, nombre_usuario, contrasena_usuario FROM usuarios WHERE nombre_usuario = ? and borrado_logico = false";
            let resDbs:any = await this.objConnection.prepareQuery(query, [nombre]);

            let data = resDbs![0][0] as User;
 
            return data;
        

        }catch(err:any){
            
        
     
            throw new Error(err);
        }

    }


}