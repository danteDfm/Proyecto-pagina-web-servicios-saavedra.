import express, {Express} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';
import { apiRouter } from '../routes';
import { mysqlConnection } from '../databases/database.connect';


export class Server{

    private app:Express;
    private PORT:number| undefined;
    private static Singleton:Server;

    private constructor(){

        this.app = express();
        this.PORT = process.env.PORT as number | undefined || 3002;
        this.middlewares();
        this.routes();
        this.connectSql();
        this.init();
    }

public async connectSql(){

        const objConnect =  new mysqlConnection;
        await  objConnect.connection();
}
    public static constructSingleton(){

        if(!Server.Singleton)  Server.Singleton = new Server;
        return Server.Singleton;
    }

    public middlewares(){

        this.app.use(cors());
        this.app.use(morgan('dev'));    
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));

    }
    public routes(){

        apiRouter(this.app);
    }
    public init(){

        this.app.listen(this.PORT, ()=>{

            console.log(`http://localhost:${this.PORT}`);

        });

    }


}


