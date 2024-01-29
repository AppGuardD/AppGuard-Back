import { RequestHandler } from "express";
import { User } from "../../../models/user/user";
import { Activity } from "../../../models/activity/activity";
import { Ticket } from "../../../models/ticket/ticket";

// Ruta para crear Ticket.
export const postTicket: RequestHandler = async (req, res) => {
  try {
    const { userId, activityId, price } = req.body;

    if (!userId || !activityId || !price) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios" });
    }

    const user: User | null = await User.findByPk(userId);
    const activity: Activity | null = await Activity.findByPk(activityId);

    if (!user || !activity) {
      return res
        .status(400)
        .json({ message: "Usuario o actividad no encontrados en la base de datos" });
    }

    const ticket: Ticket = await Ticket.create({
      userId: userId,
      activityId: activityId,
      price: price,
      date: new Date().toISOString().split('T')[0],
      state: "No Pago",
    });

    return res.status(201).json(ticket);
  } catch (error: any) {
    return res
      .status(500)
      .json({
        message: "Algo salió mal, verifica la función",
        error: error.message,
      });
  }
};


