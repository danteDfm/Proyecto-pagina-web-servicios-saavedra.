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
            
        
            console.log(err);
            throw new Error(err);
        }

    }   
    async dataUser(idUsuario:number){

        try{
            interface Data  {
                nombre_apellido:string,
                cargo:string 
            }

            const query = "SELECT nombre_apellido, cargo_usuario FROM   usuarios  WHERE id_usuario = ? AND borrado_logico = false";
            const data:any = await this.objConnection.prepareQuery(query, [idUsuario]);

            let newData =  data![0][0] as Data;
           
            return newData;



        }catch(err:any){
            console.log(err);
            throw new Error();
        }


    }


}