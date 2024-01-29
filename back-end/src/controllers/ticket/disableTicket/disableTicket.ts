import { RequestHandler } from "express";
import { Ticket } from "../../../models/ticket/ticket";


//Ruta para desactivar modelo Ticket.
export const disableTicket: RequestHandler = async (req, res) => {
  try {
    const id: string = req.params.id;

    //ticket esta definido como un objeto del modelo Ticket.
    const ticket = await Ticket.findByPk(id);

    if (!ticket)
      return res
        .status(200)
        .json({ message: "Ticket no encontrado en la base de datos" });

    if (ticket.state === "No Pago") {
      await Ticket.update(
        {
          state: "Pago",
        },
        {
          where: {
            id: id,
          },
        },
      );
      return res.status(201).json({ message: "Ticket Pagado" });
    } else {
      await Ticket.update(
        {
          state: "No Pago",
        },
        {
          where: {
            id: id,
          },
        },
      );
      return res.status(201).json({ message: "Ticket No Pagado" });
    }
  } catch (error: any) {
    return res
      .status(500)
      .json({
        message: "Algo salió mal, verifica la función",
        error: error.message,
      });
  }
};
