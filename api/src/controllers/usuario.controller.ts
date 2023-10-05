import { Request, Response } from "express";
import moment from "moment";
import { Usuario } from "../models/usuario.model";
const objUsuario = new Usuario();

export class UsuarioController {
  public static async leerUsuario(req: Request, res: Response) {
    try {
      const resModelUsuario = await objUsuario.leerUsuario();
      res.status(201).json({
        ok: true,
        msj: resModelUsuario![0],
      });
    } catch (err: any) {
      console.log(err);
      res.status(400).json({
        ok: false,
        msj: "Error al traer datos de usuario de la api",
      });
    }
  }
  public static async leerUsuarioId(req: Request, res: Response) {
    try {
      const { idUsuario } = req.params;

      const resModelUsuario = await objUsuario.leerUsuarioId(
        parseInt(idUsuario)
      );
      res.status(201).json({
        ok: true,
        msj: resModelUsuario![0],
      });
    } catch (err: any) {
      console.log(err);
      res.status(400).json({
        ok: false,
        msj: "Error al traer datos de usuario de la api",
      });
    }
  }
  public static async crearUsuario(req: Request, res: Response) {
    try {
      const { nombre, usuario, password, cargo } = req.body;
      const { idUsuario } = req.query;
        const formatId = idUsuario as string;
      const creacion = moment().format().toString();

      objUsuario.setAtribbutosUsuario(
        nombre,
        usuario,
        password,
        cargo,
        creacion
      );
      
  
      if (!formatId) {
        console.log("entra");
        await objUsuario.crearUsuario();

        return res.status(201).json({
          ok: true,
          msj: "data recibida",
        });
      }

      await objUsuario.actualizarUsuario(parseInt(formatId));

      return res.status(201).json({
        ok: true,
        msj: "data actualizada",
      });
    } catch (err: any) {
      console.log(err);
      res.status(400).json({
        ok: false,
        msj: "Error al crear el usuario",
      });
    }
  }
  public static async borrarUsuario(req: Request, res: Response) {
    try {
      const { idUsuario } = req.params;
      await objUsuario.eliminarUsuario(parseInt(idUsuario));
      res.status(201).json({
        ok: true,
        msj: "usuatio borrado",
      });
    } catch (err: any) {
      console.log(err);
      res.status(400).json({
        ok: false,
        msj: "Error al borrar campo",
      });
    }
  }
  public static async actualizarUsuario(req: Request, res: Response) {
    try {
      const { idUsuario } = req.params;

      const {
        nombreUsuario,
        nombreApellidoUsuario,
        contrasenaUsuario,
        cargoUsuario,
        creacion,
      } = req.body;
      objUsuario.setAtribbutosUsuario(
        nombreApellidoUsuario,
        nombreUsuario,
        contrasenaUsuario,
        cargoUsuario,
        creacion
      );

      await objUsuario.actualizarUsuario(parseInt(idUsuario));

      res.status(201).json({
        ok: true,
        msj: "data actualizada",
      });
    } catch (err: any) {
      console.log(err);
      res.status(400).json({
        ok: false,
        msj: "Error al actualizar usuario",
      });
    }
  }
}
