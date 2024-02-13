import { Request, Response } from "express";
import { detalle_carrito } from "../../../models/carrito/detalle_carrito";
import { Activity } from "../../../models/activity/activity";
import { Carrito } from "../../../models/carrito/carrito";

export const removeItem = async (req: Request, res: Response) => {
  const { carritoId, ActivityId } = req.query;
  try {
    const existingItem = await detalle_carrito.findOne({
      where: {
        ActivityId,
        carritoId,
      },
    });

    const carrito = await Carrito.findOne({
      where: {
        id: carritoId,
      },
    });

    const activity = await Activity.findOne({ where: { id: ActivityId } });

    if (!activity) {
      return res
        .status(404)
        .json({ error: true, message: "Actividad no encontrada" });
    }

    if (!carrito) {
      return res
        .status(404)
        .json({ error: true, message: "Carrito no encontrada" });
    }

    if (!existingItem) {
      return res
        .status(404)
        .json({ error: true, message: "La actividad no existe en el carrito" });
    }

    existingItem.cantidad = existingItem.cantidad - 1;
    existingItem.subtotal = existingItem.cantidad * activity.price;

    carrito.total -= activity.price;
    await carrito.save();

    if (existingItem.cantidad === 0) {
      await existingItem.destroy();
    } else {
      await existingItem.save();
    }

    res.status(200).json({ message: "Ítem removido del carrito" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "BE: Error al remover ítem del carrito", error });
  }
};
