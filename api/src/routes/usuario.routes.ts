import { Router } from "express";
const router = Router();
import { UsuarioController } from "../controllers/usuario.controller";

router.get("/leer", UsuarioController.leerUsuario);
router.get("/leer/:idUsuario", UsuarioController.leerUsuarioId);
router.post("/crear", UsuarioController.crearUsuario);
router.delete("/delete/:idUsuario", UsuarioController.borrarUsuario);
router.put("/actualizar/:idUsuario", UsuarioController.borrarUsuario);


export default router;