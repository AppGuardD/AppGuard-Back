import { Activity } from "../../../models/activity/activity";
import { Request, Response } from "express";

export const DesactivedActivity = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);
    const Data: Activity | null = await Activity.findOne({ where: { id } });
    if (!Data) {
      return res.status(201).send({ success: false, message: "el elemento no existe" });
    }
    Data.Active
      ? await Activity.update({ ...Data, Active: false }, { where: { id } })
      : await Activity.update({ ...Data, Active: true }, { where: { id } });

    res
      .status(201)
      .send({ success: true, message: "la Actividad ha sido Desactivada correctamente" });
  } catch (error: any) {
    res.status(500).send({ success: false, message: error.message });
  }
};
