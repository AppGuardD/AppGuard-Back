import { Favorite } from "../../../models/favorite/favorite";
import { Request, Response } from "express";
import { User } from "../../../models/user/user";
import { Activity } from "../../../models/activity/activity";

export const postFavorites = async (req: Request, res: Response) => {
  try {
    if (!req.body?.idUser || !req.body.idActivity) {
      return res.status(400).send({
        success: false,
        message: "nno se puede añadir a favoritos, falta  el usuario o  la actividad",
      });
    }
    const { idUser, idActivity }: { idUser: User; idActivity: Activity } = req.body;
    const [user, activity] = await Promise.all([
      User.findOne({ where: { id: idUser } }),
      Activity.findOne({ where: { id: idActivity } }),
    ]);

    if (!user?.id || !activity?.id) {
      throw new Error(
        "El usuario y la actividad son necesarios para poder añadir a favoritos"
      );
    }

    const newData = await Favorite.create({ idActivity, idUser });
    res.status(201).send({
      success: true,
      message: "se ha añadido la actividad " + activity.activityName + " correctamente",
      requestData: newData,
    });
  } catch (error: any) {
    const string: string =
      "El usuario y la actividad son necesarios para poder añadir a favoritos";
    return res
      .status(error.message === string ? 400 : 500)
      .send({ success: false, message: error.message });
  }
};
