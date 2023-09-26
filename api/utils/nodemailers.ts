import nodemailer from "nodemailer";

export function nodemailerConfig(cuerpo){

        const transport = nodemailer.createTransport({
            service: "Gmail", 
            auth: {
                user: "dante.kiki569@gmail.com", 
                pass: "llahjgoffghpnztm"

            }
        });

        const option = {

            from: "dante.kiki569@gmail.com", 
            to: "dante.kiki569@gmail.com", 
            subject: "Solicitud de trabajo", 
            text: `Nombre: ${cuerpo.nombre} \n  email: ${cuerpo.email} \n numero: ${cuerpo.numero} \n solicitud: ${cuerpo.peticion}`

        }

        transport.sendMail(option, (err, info)=>{

            if(err){

                console.log(err);
            }

            console.log(info);
        });
}

module.exports = nodemailerConfig;