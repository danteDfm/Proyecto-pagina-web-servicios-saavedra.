import { Request, Response } from "express";
import {nodemailerConfig} from "../utils/nodemailers";


export class DataMailControiller{

    static sendEmail(req:Request, res:Response){

       try{
        const objValue = req.body;
    
    
        if(!objValue) {
    
            throw new Error("Objeto Vacio");
        };
    

         nodemailerConfig(objValue);
        return res.status(201).json({ok:true, msj: "email enviado con exito"});


       }catch(err:any){
        console.log(err);
        return res.status(400).json({
            of:false, 
            msj: "Error del servidor"
        });

       }
    
    }
    
    

}