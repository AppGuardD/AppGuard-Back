import { RequestHandler } from "express";
import { ReviewMangrullo } from "../../../models/reviewMangrullo/reviewMangrullo";

export const postReviewActivity: RequestHandler = async (req, res) => {
  try {
    const { qualification, idUsuario, idMangrullo, comment } = req.body
    if (!qualification || !idUsuario || !idMangrullo || !comment) {
      return res.status(400).json({
        message: "No pueden ir datos vacios",
      });
    }
    const review: ReviewMangrullo | null = await ReviewMangrullo.create({
      qualification: qualification,
      idUsuario: idUsuario,
      idMangrullo: idMangrullo,
      comment: comment,
      state: "Activo"
    });
    res
      .status(201)
      .send({ message: "se ha creado la reviewMangrullo correctamente", review });
  } catch (error: any) {
    res
      .status(500)
      .send({ message: "Algo salio mal, verifique la funcion", error: error.message });
  }
};
