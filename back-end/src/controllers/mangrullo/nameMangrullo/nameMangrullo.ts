import { Op } from "sequelize";
import { Request, Response } from "express";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";

export const nameMangrullo = async (req: Request, res: Response) => {
  try {
    let param: string = req.params.name;

    if (param?.length < 0) {
      throw new Error("Se requiere el identificador de busqueda");
    }

    let requestData: Mangrullo[] | null = await Mangrullo.findAll({
      where: {
        zone: {
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
