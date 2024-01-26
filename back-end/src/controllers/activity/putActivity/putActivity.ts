import { UploadApiErrorResponse } from "cloudinary";
import { createImage, handlerError } from "../../../cloudinary/getStarted";
import { Activity } from "../../../models/activity/activity";
import { Request, Response } from "express";

export const putActivity = async (req: Request, res: Response) => {
  try {
    let id: number = parseInt(req.params.id);
    let Data: Activity = req.body;
    let requestData: Activity | null = await Activity.findOne({
      where: { id },
    });
    if (!requestData) {
      return res.status(201).send({ success: false, message: "el elemento no existe " });
    }

    if (Data?.image) {
      let newImg = await createImage(Data.image);
      await Activity.update({ ...Data, image: newImg }, { where: { id } });
    } else {
      await Activity.update({ ...Data }, { where: { id } });
    }

    res.status(200).send({
      success: true,
      message: "los datos han sido actualizados correctamente",
    });
  } catch (error: any) {
    res.status(500).send({ success: false, message: error.message });
  }
};
