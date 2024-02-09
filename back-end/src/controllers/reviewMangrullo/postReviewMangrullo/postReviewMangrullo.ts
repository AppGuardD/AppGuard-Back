import { RequestHandler } from "express";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";
import { ReviewMangrullo } from "../../../models/reviewMangrullo/reviewMangrullo";
import { User } from "../../../models/user/user";

export const postReviewMangrullo: RequestHandler = async (req, res) => {
  try {
    const { qualification, comment, userId, mangrulloId } = req.body
    if (!qualification || !userId || !comment || !mangrulloId) {
      return res.status(400).json({
        message: "No pueden ir datos vacios",
      });
    }

    const mangrullo: object | null = await Mangrullo.findByPk(mangrulloId);
    const user: object | null = await User.findByPk(userId);

    if (!mangrullo || !user) {
      return res.status(400).json({ message: "El mangrullo o el usuario con ese id no existe en la base de datos" })
    }

    const review: ReviewMangrullo | null = await ReviewMangrullo.create({
      qualification: qualification,
      userId: userId,
      comment: comment,
      state: "Activo",
      mangrulloId: mangrulloId
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
