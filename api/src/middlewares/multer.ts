import { NextFunction, Request } from "express";
import multer from "multer";
import { Services } from "../models/servicios.model";
const objService = new Services();

interface Custom extends Request{
    custom: string;
}

const storage = multer.diskStorage({

    destination: function(req,file, cb){
    

        cb(null, "D:\\desarrollo\\web\\servicios\\static\\img\\servicios");
    },
    filename: async function(req:Custom,  file, cb){

        const extension = file.originalname.split('.').pop();


        const filename = file.fieldname;
        const date = Date.now();
        const exten = "."+extension;
        const field = "/"+filename + date + exten;
        console.log("Multer");
     

        const {id} = req.params;
        const objService = new Services(req.body.nombre, req.body.des, field, req.body.opc, "2022/09/05");
        await objService.updateService(parseInt(id));
        
        console.log(id);

        cb(null, field);
    }

});

const upload = multer({
    storage:storage, 
    fileFilter: function(req, file, cb){
        cb(null, true);
    },
    limits:{
        fileSize: Infinity
    }
});
export default upload;