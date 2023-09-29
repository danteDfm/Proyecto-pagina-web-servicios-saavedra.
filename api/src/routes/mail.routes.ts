
import {Router}  from "express";
import { DataMailControiller } from "../controllers/email.controller";
const router = Router();

router.post('/enviar', DataMailControiller.sendEmail);

export default router;