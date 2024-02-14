import { Router } from "express";
import { imageController } from "../../controllers/image/imageController";
import { upload } from "../../helper/multer/multerConfig";

const uploadRoutes = Router();

uploadRoutes.post("/upload", upload.single("image"), imageController);

export default uploadRoutes;
