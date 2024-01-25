import { RequestHandler } from "express";
import { Ticket } from "../../../models/ticket/ticket";

//Ruta para consultar todos los Tickets.
export const getTickets: RequestHandler = async (_req, res) => {
  try {
    //tickets esta definido como un array de objetos del modelo Ticket.
    const tickets: Ticket[] = await Ticket.findAll();
    return res.status(201).json(tickets);
  } catch (error: any) {
    return res
      .status(500)
      .json({
        message: "Algo salió mal, verifica la función",
        error: error.message,
      });
  }
};
