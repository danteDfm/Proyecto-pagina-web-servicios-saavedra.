import jwt from "jsonwebtoken"

export class GenerateToken{

    private secret_token = "soyUnSecretodejsonwebtoken";
   sign(payload:{}){

         let resToken= jwt.sign(payload, this.secret_token, {expiresIn: '5h'});
        return resToken;
    }

    verify(token:string){

        let resToken=  jwt.verify(token, this.secret_token);
        return resToken;
    }


}