import express, {Express} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';

export class Server{

    private app:Express;
    private PORT:number| undefined;
    private Singleton:Server;

    private constructor(){

        this.app = express();
        this.PORT = process.env.PORT as number | undefined || 3001;
        this.middlewares();
        this.routes();
        this.init();
    }

    public constructSingleton(){

        if(!this.Singleton)  this.Singleton = new Server;
        return this.Singleton;
    }

    public middlewares(){

        this.app.use(cors());
        this.app.use(morgan('dev'));    
        this.app.use(express.json());

    }
    public routes(){


    }
    public init(){

        this.app.listen(this.PORT, ()=>{

            console.log(`http://localhost:${this.PORT}`);

        });

    }


}


