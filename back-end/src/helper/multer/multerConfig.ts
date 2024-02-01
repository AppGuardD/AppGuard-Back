import * as multer from "multer";
import { Request, Response } from "express";
import path from "path";
const storage: multer.StorageEngine = multer.diskStorage({
  destination: (req: Request, file, callback) => {
    callback(null, path.join(__dirname, "../../uploads"));
  },
  filename: (req: Request, file: Express.Multer.File, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer.default({ storage: storage });
export { upload };
