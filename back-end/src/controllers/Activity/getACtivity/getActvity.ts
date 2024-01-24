import { Activity } from "../../../models/activity/activity";
import { Request, Response } from "express";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";

export const getAlltActivities = async (req: Request, res: Response) => {
  try {
    /*  let createData: Activity = await Activity.create({
      ActivityName: "jose",
      description: "paseo en bote",
      qualification: 5,
      price: 1000,
      state: "Pago",
      type: "Deportivo",
      Active: true,
    }); */

    let requestData: Activity[] = await Activity.findAll();

    if (requestData.length < 0) {
      return res.status(404).send({ message: "el elemento no se ha encontrado" });
    }
    res.send({ requestData });
  } catch (error: any) {
    res.status(500).send({ success: false, message: error.message });
  }
};
