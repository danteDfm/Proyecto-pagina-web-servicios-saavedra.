
import {Router}  from "express";
import { LoginController } from "../controllers/login.controller";
const router = Router();

router.post('/verificar', LoginController.verficarCredenciales);
router.post('/data', LoginController.dataUser);

export default router;