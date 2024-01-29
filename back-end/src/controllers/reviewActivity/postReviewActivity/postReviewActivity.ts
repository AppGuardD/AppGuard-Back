import { RequestHandler } from "express";
import { ReviewMangrullo } from "../../../models/reviewMangrullo/reviewMangrullo";
import { Activity } from "../../../models/activity/activity";
import { User } from "../../../models/user/user";

export const postReviewActivity: RequestHandler = async (req, res) => {
  try {
    const { qualification, comment, activityId, userId } = req.body
    if (!qualification || !comment || activityId || userId) {
      return res.status(400).json({
        message: "No pueden ir datos vacios",
      });
    }

    const activity: Activity | null = await Activity.findByPk(activityId);
    const user: User | null = await User.findByPk(userId);

    if (!activity || !user) {
      return res.status(400).json({ message: "La Actividad o el Usuario con ese id no existe en la base de datos" })
    }

    const review: ReviewMangrullo | null = await ReviewMangrullo.create({
      qualification: qualification,
      comment: comment,
      state: "Activo",
      activityId: activityId,
      userId: userId
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
