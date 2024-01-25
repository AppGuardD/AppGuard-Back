import { RequestHandler } from "express";
import { User } from "../../../models/user/user";
import { Activity } from "../../../models/activity/activity";
import { Ticket } from "../../../models/ticket/ticket";

// Ruta para crear Ticket.
export const postTicket: RequestHandler = async (req, res) => {
  try {
    const { idUser, idActivity, price } = req.body;

    if (!idUser || !idActivity || !price) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios" });
    }

    const user: User | null = await User.findByPk(idUser);
    const activity: Activity | null = await Activity.findByPk(idActivity);

    if (!user || !activity) {
      return res
        .status(404)
        .json({ message: "Usuario o actividad no encontrados en la base de datos" });
    }

    const nameUser: string | number = user.userName;
    const nameActivity: string | number = activity.activityName;

    const ticket: Ticket = await Ticket.create({
      idUser: user,
      idActivity: activity,
      price: price,
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