import { Request, Response } from "express";
import { createImage } from "../../cloudinary/getStarted";

export const imageController = async (req: Request, res: Response) => {
  try {
    if (!req.file?.path) {
      return res.status(400).send("No image uploaded");
    }

    const imageBuffer = req.file.path;
    console.log("This is the image buffer:", imageBuffer);

    const url = await createImage(imageBuffer);
    console.log("This is the URL:", url);

    res.status(200).send(url);
  } catch (error) {
    res.status(500).send(error);
    console.error("Error:", error);
  }
};
