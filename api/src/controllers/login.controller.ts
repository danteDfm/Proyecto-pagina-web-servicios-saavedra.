import { Request, Response } from "express";
import { LoginModel } from "../models/login.model";
import { GenerateToken } from "../utils/jwt";
const objLogin = new LoginModel();
const objToken = new GenerateToken();

interface User {
  id_usuario: number;
  nombre_usuario: string;
  contrasena_usuario: string;
}
interface DataToken {
     id: number, usuario: string, iat: number, exp: number
}
export class LoginController {
  static async verficarCredenciales(req: Request, res: Response) {
    try {
      const { nombre, password } = req.body;

      const resLogin: User = await objLogin.verficarUsuarios(nombre);

      if (!resLogin) {
        throw {
          code: 404,
          msj: "El usuario no existe",
        };
      }

      if (password != resLogin.contrasena_usuario) {
        throw {
          code: 401,
          msj: "La contraseña no es correta",
        };
      }

      let token = objToken.sign({
        id: resLogin.id_usuario,
        usuario: resLogin.nombre_usuario,
      });

      res.setHeader("Authorization", `Bearer ${token}`);

      return res.json({
        res: "verificacion exitosa",
      });
    } catch (err: any) {
      err = err as Error;

      if (err.code == 404) {
        return res.status(404).json({
          ok: false,
          msj: "Usuario no existe",
        });
      }
      if (err.code == 401) {
        return res.status(401).json({
          ok: false,
          msj: "Error en la contraseña",
        });
      }

      console.log(err);

      return res.status(400).json({
        ok: false,
        msj: err,
      });
    }
  }

  static async  dataUser(req:Request, res:Response){

    try{

        let token = req.headers.authorization?.split(" ").pop();
  
        if(!token) throw({code: 404})

         let verifyToken:DataToken = objToken.verify(token) as DataToken;

          const dataUser= await objLogin.dataUser(verifyToken.id);
        
       
        res.status(201).json({
            ok: true, 
            msj: "Datos de usuario", 
            data: dataUser
        });
    
    }catch(err:any){
        err = err as Error;
        if(err.code == 404){

            res.status(404).json({
                ok:false, 
                msj: "Token no recibido"
            });
        }
    }
    


  }
}
