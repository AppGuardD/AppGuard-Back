import { Reviewactivitys } from "../../../models/reviewActivity/reviewActivity";
import { Request, Response } from "express";

export const postReviewactivity = async (req: Request, res: Response) => {
  try {
    if (!req.body?.qualification || !req.body?.idUsuario || !req.body?.idActivity) {
      return res.status(200).send({
        success: false,
        message:
          "no se puede crear la reseña sin la calificacion, el id del usuario o el id de la actividad",
      });
    }
    let Data: Reviewactivitys = req.body;
    await Reviewactivitys.create({ ...Data });
    res
      .status(201)
      .send({ success: true, message: "se ha creado la review correctamente" });
  } catch (error: any) {
    res.status(501).send({ success: false, message: error.message });
  }
};
