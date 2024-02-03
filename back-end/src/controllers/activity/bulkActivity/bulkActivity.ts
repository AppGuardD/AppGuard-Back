//import { Request, Response } from "express";
//import { Activity } from "../../../models/activity/activity";
//import { Mangrullo } from "../../../models/mangrullo/mangrullo";
//import { ActivityMangrullo } from "../../../models/activity/ActivityMangrullo";
//import { createImage } from "../../../cloudinary/getStarted";
//import { verificatonJWT } from "../../../helper/jwt/jwt";
//
//en progreso
//export const bulkActivity = async (req: Request, res: Response) => {
//  try {
//    let Data: Activity = req.body;
//
//    const image: any = await createImage(
//      req.file?.path ? req.file.path : Data.image,
//    );
//    if (image?.error) {
//      return res.status(400).send({
//        succes: false,
//        message:
//          "la imagen no se puede crear, revisa la extencion de la imagen",
//        error: image.error,
//      });
//    }
//    await Activity.create({
//      ...Data,
//      active: true,
//      state: Data.state,
//      image: image,
//    });
//
//    if (req.body?.Mangrullo) {
//      for (let index = 0; index < req.body.Mangrullo.length; index++) {
//        let mangrullo: Mangrullo | null = await Mangrullo.findOne({
//          where: { id: req.body.Mangrullo[index] },
//        });
//        if (mangrullo?.id) {
//          await ActivityMangrullo.create({
//            activityId: requestNewData.id,
//            mangrulloId: mangrullo.id,
//          });
//        } else {
//          throw new Error(
//            "no se puede crear la actividad por que el magrullo asociado no existe",
//          );
//        }
//      }
//    }
//
//    let requestData = await Activity.findOne({
//      where: { activityName: Data.activityName },
//    });
//    res.status(201).send({
//      success: true,
//      message: "los  datos han sido creados correctamente",
//      requestData,
//    });
//  } catch (error: any) {
//    res.status(500).send({ success: false, message: error.message });
//  }
//};
