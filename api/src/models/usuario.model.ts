import { mysqlConnection } from "../databases/database.connect";


export class Usuario{

    private nombreApellido!:string;
    private nombreUsuario!:string;
    private contrasenaUsuario!:string;
    private cargoUsuario!:string;
    private creacion!:string;

    private objConnect;

    constructor() {

            this.objConnect = new mysqlConnection;
    }


    public async leerUsuario(){

        try{

            const query = "SELECT id_usuario, nombre_apellido, nombre_usuario, contrasena_usuario, cargo_usuario, creacion_usuario FROM usuarios WHERE borrado_logico  =  false";
            const resSql=await this.objConnect.prepareQuery(query);
            return resSql;

        }catch(err:any){

            throw new Error(err);

        }

    }

    public async leerUsuarioId(idUsuario:number){

        try{

            const query = "SELECT id_usuario, nombre_apellido, nombre_usuario, contrasena_usuario, cargo_usuario, creacion_usuario FROM usuarios WHERE id_usuario = ?";
            const resSql=await this.objConnect.prepareQuery(query, [idUsuario]);
            return resSql;

        }catch(err:any){

            throw new Error(err);

        }

    }
    public async crearUsuario(){

        try{

            const query = `INSERT INTO usuarios  (nombre_apellido, nombre_usuario, contrasena_usuario, cargo_usuario, creacion_usuario)
            VALUES (?, ?, ?,?, ?)`;
            const resSql=await this.objConnect.prepareQuery(query, [this.nombreApellido, this.nombreUsuario, this.contrasenaUsuario, this.cargoUsuario,this.creacion]);
            return resSql;

        }catch(err:any){

            throw new Error(err);

        }

    }

    public async eliminarUsuario(idUsuario:number){

        try{

            const query = `UPDATE  usuarios set borrado_logico = TRUE WHERE id_usuario = ?`;
            const resSql = await this.objConnect.prepareQuery(query, [idUsuario]);
            return resSql;

        }catch(err:any){

            throw new Error(err);

        }

    }
    public async actualizarUsuario(idUsuario:number){

        try{
            
            const query = `UPDATE usuarios SET  nombre_apellido = ?, nombre_usuario = ?, contrasena_usuario = ?, cargo_usuario = ?, creacion_usuario = ? WHERE id_usuario = ?`;
            const resSql = await this.objConnect.prepareQuery(query, [this.nombreApellido, this.nombreUsuario, this.contrasenaUsuario, this.cargoUsuario, this.creacion, idUsuario]);
            return resSql;

        }catch(err:any){
           
            throw new Error(err);

        }

    }

    public setAtribbutosUsuario(nombreApellido:string, nombreUsuario:string, contrasenaUsuario:string, cargoUsuario:string, creacion:string){

        this.nombreApellido = nombreApellido;
        this.nombreUsuario = nombreUsuario;
        this.contrasenaUsuario = contrasenaUsuario;
        this.cargoUsuario = cargoUsuario;
        this.creacion = creacion;


    }







}