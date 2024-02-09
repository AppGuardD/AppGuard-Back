import { RequestHandler } from "express";
import { Ticket } from "../../../models/ticket/ticket";

//Ruta de detalle del Ticket.
export const getIdTicket: RequestHandler = async (req, res) => {
  try {
    const id: string = req.params.id;
    //ticket esta definido como un objeto del modelo Ticket.
    const ticket: Ticket | null = await Ticket.findByPk(id);

    if (ticket) return res.status(201).json(ticket);

    return res
      .status(400)
      .json({ message: "El Ticket no existe en la Base de datos" });
  } catch (error: any) {
    return res
      .status(500)
      .json({
        message: "Algo salió mal, verifica la función",
        error: error.message,
      });
  }
};
