import * as multer from "multer";
import { Request, Response } from "express";
import path from "path";
const storage = multer.diskStorage({
  destination: (req: Request, file, callback) => {
    callback(null, "uploads/");
  },
  filename: (req: Request, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer.default({ storage: storage });
export { upload };