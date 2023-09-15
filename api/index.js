const express  = require("express");
const cors  = require("cors");
const app = express();
const morgan = require("morgan");

const apiRouter = require("./routes");


//init
app.set("PORT", 3000);

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
apiRouter(app);

//servidor 
app.listen(app.get("PORT"), ()=>{

    console.log(`http://localhost:${app.get("PORT")}`);

});