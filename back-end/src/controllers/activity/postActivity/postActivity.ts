import { Request, Response } from "express";
import { Activity } from "../../../models/activity/activity";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";
import { ActivityMangrullo } from "../../../models/activity/ActivityMangrullo";
import { createImage } from "../../../cloudinary/getStarted";
import { verificatonJWT } from "../../../helper/jwt/jwt";

export const postActivity = async (req: Request, res: Response) => {
  try {
    let Data: Activity = req.body;

    if (!Data.activityName || !Data.description || !Data.qualification || !Data.type) {
      return res
        .status(400)
        .send({ success: false, message: "algunos de los campos no  puede estar vacio" });
    }

    if (!req.file?.path && !Data.image) {
      return res.status(400).send({
        success: false,
        message: "Falta la imagen por favor suba una o use una url",
      });
    }
    let searchData: Activity[] = await Activity.findAll({
      where: { activityName: Data.activityName },
    });

    if (searchData.length > 0) {
      return res.status(201).send({ success: false, message: "este objeto ya existe" });
    }

    const image: any = await createImage(req.file?.path ? req.file.path : Data.image);
    if (image?.error) {
      return res.status(400).send({
        succes: false,
        message: "la imagen no se puede crear, revisa la extencion de la imagen",
        error: image.error,
      });
    }
    await Activity.create({
      ...Data,
      active: true,
      state: Data.state,
      image: image,
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
        } else {
          throw new Error(
            "no se puede crear la actividad por que el magrullo asociado no existe"
          );
        }
      }
    }
    let requestData = await Activity.findOne({
      where: { activityName: Data.activityName },
    });
    res.status(201).send({
      success: true,
      message: "los  datos han sido creados correctamente",
      requestData,
    });
  } catch (error: any) {
    res.status(500).send({ success: false, message: error.message });
  }
};
