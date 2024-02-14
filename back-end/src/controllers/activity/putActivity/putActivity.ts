import { Activity } from "../../../models/activity/activity";
import { Request, Response } from "express";

export const putActivity = async (req: Request, res: Response) => {
  try {
    let id: number = parseInt(req.params.id);

    let updateData = req.body;
    console.log(updateData);

    let requestData: Activity | null = await Activity.findOne({
      where: { id },
    });

    if (!requestData) {
      return res
        .status(201)
        .send({ success: false, message: "el elemento no existe " });
    }

    await Activity.update({ ...updateData }, { where: { id } });

    res.status(200).send({
      success: true,
      message: "los datos han sido actualizados correctamente",
    });
  } catch (error: any) {
    res.status(500).send({ success: false, message: error.message });
  }
};
