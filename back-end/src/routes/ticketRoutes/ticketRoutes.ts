import { Router } from "express";
import { getTickets } from "../../controllers/ticket/getTickets/getTickets";
import { getIdTicket } from "../../controllers/ticket/getIdTicket/getIdTicket";
import { postTicket } from "../../controllers/ticket/postTicket/postTicket";
import { putTicket } from "../../controllers/ticket/putTicket/putTicket";
import { disableTicket } from "../../controllers/ticket/disableTicket/disableTicket";

const ticketRoutes = Router();

ticketRoutes.get("/search", getTickets);
ticketRoutes.get("/search/:id", getIdTicket);
ticketRoutes.post("/create", postTicket);
ticketRoutes.put("/modify/:id", putTicket);
ticketRoutes.put("/deactivate/:id", disableTicket);

export default ticketRoutes;