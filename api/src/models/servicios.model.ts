import { mysqlConnection } from "../databases/database.connect";
import  {Moment} from "moment";


export class Services{

  
    private borrado?:boolean;
    private titleService?:string;
    private desService?:string;
    private imgService?:string;
    private area?:string;
    private times?:string;

    private objDatabase;

    constructor( titleService?:string, desService?:string, imgService?:string, area?:string,times?:string, borrado?:boolean,) {

     
        this.borrado = borrado;
        this.titleService = titleService;
        this.desService = desService;
        this.imgService = imgService;
        this.times = times;
        this.area = area;

        this.objDatabase = new mysqlConnection;

    }

    async readService(){

       try{
        


        const query:string = "SELECT id_servicio, title_servicio, descript_servicio ,img_servicio, creacion, area_servicio FROM REGISTRO_SERVICIO WHERE borrado = false";
        const res=await this.objDatabase.prepareQuery(query);
        return res;
        
       }catch(err:any){

            throw new Error(err);
       }
    }





    public async updateService(id:number){

       try{

          let query:string = "";
          let res;
          
          if(this.imgService == undefined){

            query = "UPDATE REGISTRO_SERVICIO SET title_servicio = ?, descript_servicio = ?,  area_servicio = ? ,creacion = ? WHERE id_servicio = ?";
            res = await this.objDatabase.prepareQuery(query, [this.titleService!, this.desService!, this.area!, this.times!, id]);
            console.log("si actualiza");
          }else{

            query = "UPDATE REGISTRO_SERVICIO SET title_servicio = ?, descript_servicio = ?, img_Servicio = ?, area_servicio = ? ,creacion = ? WHERE id_servicio = ?";
            res = await this.objDatabase.prepareQuery(query, [this.titleService!, this.desService!, this.imgService!, this.area!, this.times!, id]);
          }
          
       
          return res;    
                
       }catch(err:any){
        throw new Error(err);
       }

    }


    async insertService(){

        try{    

            const query:string = "INSERT INTO REGISTRO_SERVICIO (title_servicio, descript_servicio, img_servicio, area_servicio ,creacion) VALUES (?, ?, ?, ?, ?)";
            const res = await this.objDatabase.prepareQuery(query, [this.titleService!, this.desService!, this.imgService!, this.area!,this.times!]);
            return res;

        }catch(err:any){

            throw new Error(err);

        }
    }
    
    async readIdService(id:number){

      try{

        const query:string = "Select title_servicio, descript_servicio, img_servicio, creacion from REGISTRO_SERVICIO WHERE id_servicio = ?";
        const res = await this.objDatabase.prepareQuery(query, [id]);
        return res;

      }catch(err:any){

        throw new Error(err);
      }

    }
}