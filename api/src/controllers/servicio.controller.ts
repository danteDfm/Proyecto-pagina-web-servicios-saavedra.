import { Request, Response } from "express";
import { Services } from "../models/servicios.model";
import moment, {Moment} from "moment";



export class ServicioController{

    static async readServicio(req:Request,res:Response) {

        try{    

         
            const objService = new Services();
            const dataService = await objService.readService();

            
            res.status(201).json({

                ok:true, 
                data: dataService![0]
            });

        }catch(err:any){

            res.status(400).json({
                ok:false, 
                msj: err.message
            });

        }

    }
         

    static async readIdService(req:Request, res:Response){

        const {id} = req.params;
        const objService = new Services();
        const dataService = await objService.readIdService(parseInt(id));
        res.status(201).json({
            ok:true, 
            data: dataService![0]
        });


    }


    static async crearServicio(req:any, res:Response){
        try{

            const { nombre, des, opc,creacion} = req.body;
            const imagen = req.filenameExtension;

            const objService = new Services(nombre, des, imagen, opc,creacion);

            await objService.insertService();

           return res.status(201).json({
               
                ok:true, 
                msj: "servicio creado correctamente"

            });

        }catch(err:any){

            return res.status(400).json({

                ok:false, 
                mjs:err.message
            });

        }

    }
    static async updateService(req:any | Request, res:Response){

      try{
        const { nombre, des, opc} = req.body;
        const {id} = req.params;
        const imagen = req.filenameExtension;
      
            

        const objService = new Services(nombre, des, imagen, opc, moment().format().toString());
        const response = await objService.updateService(id);
     
        res.status(200).json({
            ok:true, 
            msj: "Servicio Actulizado"
        });
      }catch(err){

        console.log(err);
        res.status(400).json({
            ok:false, 
            msj: "Error del Servidor"
        });

      }

    }

} 