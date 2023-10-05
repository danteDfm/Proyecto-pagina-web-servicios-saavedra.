
import {Router}  from "express";
import { LoginController } from "../controllers/login.controller";
const router = Router();

router.post('/verificar', LoginController.verficarCredenciales);

export default router;