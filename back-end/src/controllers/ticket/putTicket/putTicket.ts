import { RequestHandler } from "express";
import { User } from "../../../models/user/user";
import { Activity } from "../../../models/activity/activity";
import { Ticket } from "../../../models/ticket/ticket";

// Ruta para modificar Ticket.
export const putTicket: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
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

    const nameUser: string = user.userName;
    const nameActivity: string = activity.activityName;

    await Ticket.update(
      {
        idUser: nameUser,
        idActivity: nameActivity,
        price: price,
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

