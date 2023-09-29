import { Request, Response } from "express";
import {nodemailerConfig} from "../utils/nodemailers";


export class DataMailControiller{

    static sendEmail(req:Request, res:Response){

        const objValue = req.body;
    
    
        if(!objValue) {
    
            return  res.status(400).json({ok:false, msj: "el objeto viene vacio"});
        };
    
    
         nodemailerConfig(objValue);
    
      
    
        return res.status(201).json({ok:true, msj: "el objeto viene intacto"});
    
    }
    
    

}