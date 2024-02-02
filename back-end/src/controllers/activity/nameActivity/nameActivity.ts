import { Op } from "sequelize";
import { Activity } from "../../../models/activity/activity";
import { Request, Response } from "express";

export const nameActivity = async (req: Request, res: Response) => {
  try {
    let param: string = req.params.name;

    if (param?.length < 0) {
      throw new Error("Se requiere el identificador de busqueda");
    }

    let requestData: Activity[] | null = await Activity.findAll({
      where: {
        activityName: {
          [Op.iLike]: "%" + param + "%",
        },
      },
    });

    if (requestData.length === 0) {
      return res.status(404).send({
        success: false,
        message: "El elemento no se ha encontrado por nombre",
      });
    }

    res.send({ success: true, requestData });
  } catch (error: any) {
    res.status(500).send({ success: false, message: error.message });
  }
};
