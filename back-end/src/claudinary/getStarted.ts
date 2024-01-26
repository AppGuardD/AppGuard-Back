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
      error: error.message
        ? error.message
        : "Error desconocido relacionado con cloudinary",
    };
  }
};

export const updateImage = async (oldUrl: string, newUrl: string) => {
  try {
    let destroyUrl: string[] = oldUrl.split("/");
    let url: string = destroyUrl[destroyUrl.length - 1];
    let result: UploadApiResponse = await cloudinary.uploader.destroy(url);
    let data: UploadApiResponse = await createImage(newUrl);
    return data;
  } catch (error: any) {
    return {
      error: error.message
        ? error.message
        : "Error desconocido relacionado con cloudinary",
    };
  }
};
/* export const createImage = async (imagePath: string) => {
  const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
    process.env;

  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
    secure: true,
  });

  // Use the uploaded file's name as the asset's public ID and
  // allow overwriting the asset with new versions
     const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
  }; 

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(imagePath);
    console.log(result);
    return result.public_id;
  } catch (error) {
    console.error(error);
  }
};
 */
