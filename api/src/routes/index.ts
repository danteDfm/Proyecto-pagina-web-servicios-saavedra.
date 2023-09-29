import {Express} from "express";
import { Router } from "express";
import routerEmail from "./mail.routes";
import routerService from "./service.routes";


export function apiRouter(app:Express){

    const router = Router();
    
    app.use("/api/v1", router);
    
    router.use("/email", routerEmail);
    router.use("/servicio", routerService);
}

