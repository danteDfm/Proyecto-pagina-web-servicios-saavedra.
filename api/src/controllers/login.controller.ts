import { Request, Response } from "express";
import { LoginModel } from "../models/login.model";
import { GenerateToken } from "../utils/jwt";
const objLogin = new LoginModel;
const objToken = new GenerateToken;


interface User {

    id_usuario: number,
    nombre_usuario: string,
    contrasena_usuario: string
}

export class LoginController{

  static async verficarCredenciales(req:Request, res:Response){

       try{
        const {nombre, password} = req.body;

     
        const resLogin:User= await objLogin.verficarUsuarios(nombre);
         

        if(!resLogin){
           
            throw({
                code: 11,
                msj: "El usuario no existe"
            });
        }   


        if(password != resLogin.contrasena_usuario){
          
            throw({
                code: 12,
                msj: "La contraseña no es correta"
            });
        }   
        


        let token= objToken.sign({id: resLogin.id_usuario, usuario: resLogin.nombre_usuario});


         res.setHeader("Authorization", `Bearer ${token}`);
         

        return res.json({
            res: "verificacion exitosa", 
        });
        
        
        
        
        
       } catch(err:any){

   
        return res.status(400).json({
                ok:false, 
                msj: err as Error
        });
       
    }


    }

}