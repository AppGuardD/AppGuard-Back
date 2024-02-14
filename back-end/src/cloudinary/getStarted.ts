import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
import * as dotenv from "dotenv";
import { deleteImage } from "../helper/deleteImg/deleteImage";
import path from "path";
dotenv.config();

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
  process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true,
});

export const createImage = async (image: any): Promise<any> => {
  try {
    let validate = /\.(jpg|jpeg|png|webp)$/i;

    if (!validate.test(image)) {
      throw new Error("El formato de la imagen no es valido");
    }

    const { secure_url }: UploadApiResponse =
      await cloudinary.uploader.upload(image);

    deleteImage(path.join(__dirname, "../uploads"));

    return secure_url;
  } catch (error) {
    return error;
  }
};
