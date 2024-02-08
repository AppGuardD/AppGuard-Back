import { RequestHandler } from "express";
import { User } from "../../../models/user/user";
import { Activity } from "../../../models/activity/activity";
import { Ticket } from "../../../models/ticket/ticket";

// Ruta para modificar Ticket.
export const putTicket: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, price, activityId } = req.body;

    if (!userId || !activityId || !price) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios" });
    }

    const user: User | null = await User.findByPk(userId);
    const activity: Activity | null = await Activity.findByPk(activityId);

    if (!user || !activity) {
      return res
        .status(404)
        .json({ message: "Usuario o actividad no encontrados en la base de datos" });
    }

    await Ticket.update(
      {
        userId: userId,
        activityId: activityId,
        price: price,
        date: new Date().toISOString().split('T')[0],
        state: "No Pago",
      },
      {
        where: {
          id: id,
        },
      },
    );
    return res.status(201).json({ message: "Ticket Modificado" });
  } catch (error: any) {
    return res
      .status(500)
      .json({
        message: "Algo salió mal, verifica la función",
        error: error.message,
      });
  }
};

