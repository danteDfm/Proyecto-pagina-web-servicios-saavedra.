const express  = require("express");
const router = express.Router();
const sendEmailController = require("../controllers/enviar.correo.controller");

router.post('/email', sendEmailController);
module.exports = router;