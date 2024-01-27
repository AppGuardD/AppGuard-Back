import { Request, Response } from "express";
import { Favorite } from "../../../models/favorite/favorite";

export const putFavorite = async (req: Request, res: Response) => {
  try {
    if (!req.params?.id) {
      return res.status(400).send({
        success: false,
        message: "no se puede actualizar el favorito sin el id",
      });
    }
    const param: number = parseInt(req.params?.id);
    const Data: Favorite = req.body;
    const upFavorite: Favorite | null = await Favorite.findOne({
      where: { id: req.params?.id },
    });
    if (!upFavorite) {
      return res.status(400).send({
        success: false,
        message: "el elemento favorito no existe",
      });
    }
    await Favorite.update({ ...Data }, { where: { id: req.params?.id } });
    res
      .status(201)
      .send({ success: true, message: "los datos han sido actualizados correctamente" });
  } catch (error: any) {
    return res.status(500).send({ success: false, message: error.message });
  }
};
