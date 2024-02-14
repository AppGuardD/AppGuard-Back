import { Activity } from "../../../models/activity/activity";
import { Request, Response } from "express";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";

export const getAllActividades = async (req: Request, res: Response) => {
  try {
    const dbItems: Activity[] = await Activity.findAll({
      attributes: [
        "activityName",
        "description",
        "image",
        "price",
        "state",
        "type",
      ],
      include: [
        {
          model: Mangrullo,
          attributes: ["id"], // Only include the id attribute from Mangrullos
          through: {
            attributes: [], // Exclude the join table attributes
          },
        },
      ],
    });

    const response = dbItems.map((activity) => ({
      activityName: activity.activityName,
      description: activity.description,
      image: activity.image,
      price: activity.price,
      state: activity.state,
      type: activity.type,
      mangrullos: activity.mangrullo.map((mangrullo) => mangrullo.id),
    }));

    res.status(200).send(response);
  } catch (error: any) {
    res.status(500).send({ success: false, message: error.message });
  }
};
