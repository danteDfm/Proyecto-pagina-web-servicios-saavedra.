import multer from "multer";

const storage = multer.diskStorage({

    destination: function(req,file, cb){
        cb(null, "C:\\xampp\\htdocs\\servicios\\static\\img\\servicios");
    },
    filename: function(req:any, file, cb){

        const extension = file.originalname.split('.').pop();
        const filename = file.fieldname;
        const date = Date.now();
        const exten = "."+extension;
        const field = filename + date + exten;
        req.filenameExtension = field;
        cb(null, field);
    }

});

const upload = multer({storage:storage});
export default upload;