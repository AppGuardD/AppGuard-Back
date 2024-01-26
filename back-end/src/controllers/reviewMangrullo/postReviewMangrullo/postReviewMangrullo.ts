import { RequestHandler } from "express";
import { ReviewActivity } from "../../../models/reviewActivity/reviewActivity";

export const postReviewMangrullo: RequestHandler = async (req, res) => {
  try {
    const { qualification, idUsuario, idActivity, comment } = req.body
    if (!qualification || !idUsuario || !idActivity || !comment) {
      return res.status(400).json({
        message: "No pueden ir datos vacios",
      });
    }
    const review: ReviewActivity | null = await ReviewActivity.create({
      qualification: qualification,
      idUsuario: idUsuario,
      idActivity: idActivity,
      comment: comment,
      state: "Activo"
    });
    res
      .status(201)
      .send({ message: "se ha creado la reviewActivity correctamente", review });
  } catch (error: any) {
    res
      .status(500)
      .send({ message: "Algo salio mal, verifique la funcion", error: error.message });
  }
};
