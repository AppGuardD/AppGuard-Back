import { Request, Response } from "express";
import { detalle_carrito } from "../../../models/carrito/detalle_carrito";
import { Carrito } from "../../../models/carrito/carrito";
import { Activity } from "../../../models/activity/activity";

export const deleteItem = async (req: Request, res: Response) => {
  const { userId, ActivityId } = req.query;
  try {
    const carrito = await Carrito.findOne({
      where: { userId: parseInt(userId as string) },
      include: [
        {
          model: detalle_carrito,
          include: [
            {
              model: Activity,
            },
          ],
        },
      ],
    });

    if (!carrito) {
      return res.status(404).json({ message: "Carrito no encontrado" });
    }

    const reserveData = await detalle_carrito.findOne({
      where: { ActivityId: ActivityId, carritoId: carrito.id },
    });

    if (reserveData) {
      // Restar el subtotal del item del total del carrito
      carrito.total -= reserveData.subtotal;
      // Actualizar el total del carrito
      await carrito.save();
      // Eliminar el item del carrito
      await reserveData.destroy();
      return res.status(200).json({ message: "Ítem eliminado del carrito" });
    } else {
      return res.status(404).json({ message: "Ítem no encontrado en el carrito" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Error al eliminar ítem del carrito", error });
  }
};
