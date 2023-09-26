import express  from "express";
const router = express.Router();
import { DataMailControiller } from "../controllers/enviar.correo.controller";

router.post('/email', sendEmailController);
module.exports = router;