import {Router}  from "express";
import { ServicioController } from "../controllers/servicio.controller";
const router = Router();
import upload from "../middlewares/multer";

router.post('/guardar', upload.single("img") ,ServicioController.crearServicio);
router.post('/actualizar/:id', upload.single("img") ,ServicioController.updateService);

router.get('/leer', ServicioController.readServicio);
router.get('/leer/id/:id', ServicioController.readIdService);

export default router;