import { Activity } from "../../../models/activity/activity";
import { Request, Response } from "express";

export const getActivities = async (req: Request, res: Response) => {
  try {
    let requestData: Activity[] = await Activity.findAll();

    if (requestData.length < 0) {
      return res
        .status(404)
        .send({ message: "el elemento no se ha encontrado" });
    }
    res.send({ requestData });
  } catch (error: any) {
    res.status(500).send({ success: false, message: error.message });
  }
};
