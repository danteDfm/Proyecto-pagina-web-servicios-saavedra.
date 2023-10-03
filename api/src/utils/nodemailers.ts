import nodemailer from "nodemailer";
import { Cuerpo } from "../models/interfaces/mail.interface";

export function nodeMailerConfig(nombre:string, email:string, numero:string, peticion:string){

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
            text: `Nombre: ${nombre} \n  email: ${email} \n numero: ${numero} \n solicitud: ${peticion}`

        }

        transport.sendMail(option, (err, info)=>{

            if(err){

                console.log(err);
                throw new Error("Error en node mailer");
            }

            return;
        });
}

