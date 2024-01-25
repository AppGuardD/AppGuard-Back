import { Request, Response } from "express";
import { Activity } from "../../../models/activity/activity";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";
import { ActivityMangrullo } from "../../../models/activity/ActivityMangrullo";

export const postActivity = async (req: Request, res: Response) => {
  try {
    let Data: Activity = req.body; // magrullo 1, mangrullo 2 {} {} [{},{}]
    // req.body.mangrullos = [{},{}]
    if (
      !Data.activityName ||
      !Data.price ||
      !Data.description ||
      !Data.qualification ||
      !Data.state
    ) {
    }
    let searchData: Activity[] = await Activity.findAll({
      where: { activityName: Data.activityName },
    });

    if (searchData.length > 0) {
      return res.status(201).send({ success: false, message: "este objeto ya existe" });
    }

    await Activity.create({
      ...Data,
      Active: true,
    });

    let requestNewData: Activity | null = await Activity.findOne({
      where: { activityName: Data.activityName },
    });
    if (!requestNewData) {
      return res
        .status(201)
        .send({ success: false, message: "este objeto no se pudo crear" });
    }
    if (req.body?.Mangrullo) {
      for (let index = 0; index < req.body.Mangrullo.length; index++) {
        let mangrullo: Mangrullo | null = await Mangrullo.findOne({
          where: { id: req.body.Mangrullo[index] },
        });
        if (mangrullo?.id) {
          await ActivityMangrullo.create({
            activityId: requestNewData.id,
            mangrulloId: mangrullo.id,
          });
        }
      }
    }

    res.status(201).send({
      success: true,
      message: "los  datos han sido creados correctamente",
    });
  } catch (error: any) {
    res.status(500).send({ success: false, message: error.message });
  }
};
