const  express = require("express");
const router = express.Router();
const routerEmail = require("./mail.routes");

function apiRouter(app){

    app.use("/api/v1", router);
    router.use("/enviar", routerEmail);
}

module.exports = apiRouter;