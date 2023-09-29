import {Router}  from "express";
import { ServicioController } from "../controllers/servicio.controller";
const router = Router();

router.post('/guardar', ServicioController.crearServicio);

router.post('/leer', ServicioController.readServicio);
router.post('/leer/id/:id', ServicioController.readIdService);

export default router;