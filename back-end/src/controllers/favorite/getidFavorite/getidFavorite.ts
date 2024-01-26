import { Request, Response } from "express";
import { Favorite } from "../../../models/favorite/favorite";

export const getIdActivity = async (req: Request, res: Response) => {
  try {
    let param: string = req.params.id;
    if (!param) {
      throw new Error("se requiere el identificador de busqueda");
    }
    let requestData: Favorite | null = await Favorite.findOne({
      where: { id: parseInt(param) },
    });
    if (requestData === null) {
      return res.status(404).send({ message: "el elemento no se ha encontrado" });
    }

    res.send({ succes: true, requestData });
  } catch (error: any) {
    res.status(500).send({ success: false, message: error.message });
  }
};