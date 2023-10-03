import { Request, Response } from "express";
import {nodeMailerConfig} from "../utils/nodemailers";
import { Email } from "../models/email.model";


export class DataMailControiller{




    static sendEmail(req:Request, res:Response){

       try{

          
        const  {nombre, email, numero, peticion} = req.body;    

        if(!nombre || !email ||  !numero || !peticion) {

            throw new Error("Objeto Vacio");
        };
        

        const objEmail = new Email();
        objEmail.setCampos(nombre, email, numero, peticion)
        objEmail.saveEmail();
        nodeMailerConfig(nombre, email, numero, peticion);


        return res.status(201).json({ok:true, msj: "email enviado con exito"});


       }catch(err:any){
        console.log(err);
        return res.status(400).json({
            ok:false, 
            msj: "Error del servidor"
        });

       }
    
    }
    
    

}