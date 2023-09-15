const nodemailerConfig = require("../utils/nodemailers");

const sendEmailController=(req, res)=>{

    const objValue = req.body;

    console.log(objValue);

    if(!objValue) {

        return  res.status(400).json({ok:false, msj: "el objeto viene vacio"});
    };


     nodemailerConfig(objValue);

  

    return res.status(201).json({ok:true, msj: "el objeto viene intacto"});

}


module.exports = sendEmailController;