import {Router}  from "express";
import { ServicioController } from "../controllers/servicio.controller";
const router = Router();
import upload from "../middlewares/multer";

router.post('/guardar',upload.single("imagen") ,ServicioController.crearServicio);

router.post('/leer', ServicioController.readServicio);
router.post('/leer/id/:id', ServicioController.readIdService);

export default router;