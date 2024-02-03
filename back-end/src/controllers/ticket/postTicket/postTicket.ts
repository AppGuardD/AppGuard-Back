import { RequestHandler } from "express";
import { User } from "../../../models/user/user";
import { Ticket } from "../../../models/ticket/ticket";
import { Activity } from "../../../models/activity/activity";

// Ruta para crear Ticket.
export const postTicket: RequestHandler = async (req, res) => {
  try {
    const { userId, price, activities } = req.body;

    // Validación de activities no puede estar vacío
    if (!activities || activities.length === 0) {
      return res.status(302).send({
        success: false,
        message: "La propiedad 'activities' no puede estar vacía",
      });
    }

    let arrayActivities: Activity[] = [];
    for (const activityId of activities) {

      const activity = await Activity.findOne({
        where: {
          id: activityId
        }
      });

      if (!activity) {
        return res.status(302).send({ message: "La actividad no existe en la base de datos" });
      } else {
        arrayActivities.push(activity);
      }
    }

    if (!userId || !price) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios" });
    }

    const user: User | null = await User.findByPk(userId);

    if (!user) {
      return res
        .status(302)
        .json({ message: "Usuario no encontrado en la base de datos" });
    }

    const ticket: Ticket = await Ticket.create({
      userId: userId,
      price: price,
      date: new Date().toISOString().split('T')[0],
      state: "No Pago",
    });

    // Asociar actividad con ticket.
    await ticket.$add('Activity', arrayActivities);

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


