import { Activity } from "../../../models/activity/activity";
import { Request, Response } from "express";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";

export const getIdActivity = async (req: Request, res: Response) => {
  try {
    let param: string = req.params.id;
    if (param?.length < 0) {
      throw new Error("se requiere el identificador de busqueda");
    }
    let requestData: Activity | null = await Activity.findOne({
      where: { id: parseInt(param) },
      /*   include: { model: Mangrullo }, */
    });
    if (requestData === null) {
      return res
        .status(404)
        .send({ success: false, message: "el elemento no se ha encontrado" });
    }

    res.send({ succes: true, requestData });
  } catch (error: any) {
    res.status(500).send({ success: false, message: error.message });
  }
};
