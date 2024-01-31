import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
import * as dotenv from "dotenv";
dotenv.config();

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true,
});

export interface handlerError {
  error: string;
}

export const createImage = async (img: string): Promise<any> => {
  try {
    let re = /\.(jpg|jpeg|png|gif|bmp|tiff|webp)$/i;
    if (!re.test(img)) {
      throw new Error("el formato de la imagen no es valido");
    }
    const { secure_url }: UploadApiResponse = await cloudinary.uploader.upload(img);
    return secure_url;
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};
