// addItemController.ts
import { Request, Response } from "express";
import { Carrito } from "../../../models/carrito/carrito";
import { detalle_carrito } from "../../../models/carrito/detalle_carrito";
import { Activity } from "../../../models/activity/activity";

export const addItem = async (req: Request, res: Response) => {
  const { userId, ActivityId, cantidad } = req.body;
  try {
    let carrito = await Carrito.findOne({
      where: { userId },
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

    // Si no existe un carrito para el usuario, crear uno nuevo

    const activity = await Activity.findByPk(ActivityId);
    if (!activity) {
      return res.status(404).json({ error: true, message: "Actividad no encontrada" });
    }

    if (!carrito) {
      carrito = await Carrito.create({
        fecha: new Date().toISOString(),
        total: 0,
        userId,
      });
    }

    const itemExists = await detalle_carrito.findOne({
      where: { ActivityId: ActivityId, carritoId: carrito.id },
    });
    if (itemExists) {
      // Actualizar cantidad si ya existe en el carrito
      await itemExists.update({
        cantidad: (itemExists.cantidad += cantidad),
        subtotal: itemExists.cantidad * activity.price,
      });

      await carrito.update({
        total: carrito.total + activity.price,
      });
    } else {
      // Crear nuevo item en el carrito
      const newItem = await detalle_carrito.create({
        cantidad: cantidad,
        subtotal: cantidad * activity.price,
        ActivityId: ActivityId,
        carritoId: carrito.id,
      });
      await carrito.update({
        total: carrito.total + activity.price,
      });
      await newItem.save();
    }

    return res
      .status(201)
      .json({ carrito: carrito, message: "Artículo agregado al carrito" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al agregar artículo al carrito", error });
  }
};
