import { Activity } from "../../../models/activity/activity";
import { Request, Response } from "express";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";
import { ActivityMangrullo } from "../../../models/activity/ActivityMangrullo";

export const CreateActivity = async (req: Request, res: Response) => {
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
    /* interface ActivityMangrullo extends Activity {
      Mangrullo: Activity[];
    } */

    let Data: Activity = req.body; // magrullo 1, mangrullo 2 {} {} [{},{}]
    // req.body.mangrullos = [{},{}]
    if (
      !Data.ActivityName ||
      !Data.price ||
      !Data.description ||
      !Data.qualification ||
      !Data.state
    ) {
    }
    let searchData: Activity[] = await Activity.findAll({
      where: { ActivityName: Data.ActivityName },
    });

    if (searchData.length > 0) {
      return res.status(201).send({ success: false, message: "este objeto ya existe" });
    }

    await Activity.create({
      ...Data,
      Active: true,
    });

    let requestNewData: Activity | null = await Activity.findOne({
      where: { ActivityName: Data.ActivityName },
    });
    if (!requestNewData) {
      return res
        .status(201)
        .send({ success: false, message: "este objeto no se pudo crear" });
    }
    for (let index = 0; index < req.body.Mangrullo.length; index++) {
      let mangrullo: Mangrullo | null = await Mangrullo.findOne({
        where: { id: req.body.Mangrullo[index].id },
      });
      if (mangrullo?.id) {
        await ActivityMangrullo.create({
          activityId: requestNewData.id,
          mangrulloId: mangrullo.id,
        });
      }
    }

    res.status(201).send({
      succes: true,
      message: "los  datos han sido creados correctamente",
    });
  } catch (error: any) {
    res.status(500).send({ success: false, message: error.message });
  }
};
