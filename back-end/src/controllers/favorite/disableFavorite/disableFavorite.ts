import { Request, Response } from "express";
import { Favorite } from "../../../models/favorite/favorite";

export const disableFavorite = async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id);

    const favorite: Favorite | null = await Favorite.findByPk(id);
    if (!favorite) {
      return res.status(400).json({
        message: "El elemento a eliminar no existe ",
      });
    }

    if (favorite.state === "Activo") {
      await Favorite.update(
        {
          state: "No Activo",
        },
        {
          where: {
            id: id,
          },
        },
      );
      return res.status(201).json({ message: "Favorito Desactivado" });
    } else {
      await Favorite.update(
        {
          state: "Activo",
        },
        {
          where: {
            id: id,
          },
        },
      );
      return res.status(201).json({ message: "Favorito Activado" });
    }
  } catch (error: any) {
    return res
      .status(500)
      .send({ success: true, message: error.message });
  }
};
