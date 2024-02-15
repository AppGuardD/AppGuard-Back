import { Request, Response } from "express";
import { Carrito } from "../../../models/carrito/carrito";

export const deleteAll = async (req: Request, res: Response) => {
  try {
    console.log(req.query);
    const userId = req.query.userId;

    await Carrito.destroy({
      where: { userId: userId },
    });
    return res.status(200).json({ message: "Carrito limpio!!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al eliminar ítem del carrito", error });
  }
};
