import { Request, Response } from "express";
import { Favorite } from "../../../models/favorite/favorite";

export const deleteFavorite = async (req: Request, res: Response) => {
  try {
    if (!req.params?.id) {
      return res.status(400).send({
        success: false,
        message: "no se puede eliminar el favorito sin el id ",
      });
    }
    const id: number = parseInt(req.params?.id);
    const viewData: Favorite | null = await Favorite.findOne({
      where: { id: req.params?.id },
    });
    if (!viewData) {
      return res.status(400).send({
        success: false,
        message: "El elemento a eliminar no existe ",
      });
    }

    await Favorite.destroy({ where: { id } });

    res
      .status(201)
      .send({ success: true, message: "el favorito se ha eliminado correctamente" });
  } catch (error: any) {
    return res.status(400).send({ success: true, message: error.message });
  }
};
