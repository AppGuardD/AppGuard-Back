import { Activity } from "../../../models/activity/activity";
import { Request, Response } from "express";

export const disableActivity = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    const Data: Activity | null = await Activity.findOne({ where: { id } });
    if (!Data) {
      return res.status(201).send({ success: false, message: "el elemento no existe" });
    }
    Data.active
      ? await Activity.update({ ...Data, active: false }, { where: { id } })
      : await Activity.update({ ...Data, active: true }, { where: { id } });

    res.status(201).send({
      success: true,
      message: Data.active
        ? "la actividad se ha desactivado correctamente"
        : "la actividad se ha activado correctamente",
    });
  } catch (error: any) {
    res.status(500).send({ success: false, message: error.message });
  }
};
