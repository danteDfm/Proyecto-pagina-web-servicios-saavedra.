import { mysqlConnection } from "../databases/database.connect";

export class Email{

    nombre!:string;
    email!:string;
    numero!:string;
    peticion!:string;

    private objConnect = new mysqlConnection;


    saveEmail(){    

      try{
        const query = "INSERT INTO EMAILS VALUES(null, ?, ?, ?, ?)";
        const resSql=this.objConnect.prepareQuery(query, [this.nombre, this.email, this.numero, this.peticion]);
        return resSql;
      }catch(err:any){
        throw new Error("Error de la consulta");
      }

    }





    setCampos(nombre:string, email:string, numero:string, peticion:string){
        this.nombre = nombre;
        this.email = email;
        this.numero = numero;
        this.peticion = peticion;
    }


}