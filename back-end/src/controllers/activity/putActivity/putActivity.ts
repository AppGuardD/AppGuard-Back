import { Activity } from "../../../models/activity/activity";
import { Request, Response } from "express";

export const putActivity = async (req: Request, res: Response) => {
  try {
    let Data: Activity = req.body;
    let requestData: Activity | null = await Activity.findOne({
      where: { id: Data?.id },
    });
    if (!requestData) {
      return res
        .status(201)
        .send({ success: false, message: "el elemento no existe " });
    }

    await Activity.update({ ...Data }, { where: { id: Data.id } });

    res.status(200).send({
      success: true,
      message: "los datos han sido actualizados correctamente",
    });
  } catch (error: any) {
    res.status(500).send({ success: false, message: error.message });
  }
};
