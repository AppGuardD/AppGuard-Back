import { RequestHandler } from "express";
import { Ticket } from "../../../models/ticket/ticket";
import { Activity } from "../../../models/activity/activity";
import { User } from "../../../models/user/user";

//Ruta para consultar todos los Tickets.
export const getTickets: RequestHandler = async (_req, res) => {
  try {
    //tickets esta definido como un array de objetos del modelo Ticket.
    const tickets: Ticket[] = await Ticket.findAll({
      include: [
        {
          model: Activity,
          attributes: ["activityName", "description", "price", "type"],
          through: {
            attributes: [],
          },
        },
        { model: User, attributes: ["userName"] },
      ],
    });
    return res.status(201).json(tickets);
  } catch (error: any) {
    return res.status(500).json({
      message: "Algo salió mal, verifica la función",
      error: error.message,
    });
  }
};
