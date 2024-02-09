import { Router } from "express";
import { getTickets } from "../../controllers/ticket/getTickets/getTickets";
import { getIdTicket } from "../../controllers/ticket/getIdTicket/getIdTicket";
import { postTicket } from "../../controllers/ticket/postTicket/postTicket";
import { putTicket } from "../../controllers/ticket/putTicket/putTicket";
import { disableTicket } from "../../controllers/ticket/disableTicket/disableTicket";
import { adminMiddleware } from "../../middlewares/adminMiddlewares/adminMiddleware";

const ticketRoutes = Router();
// -------con web tokens -------------
// ticketRoutes.get("/search", adminMiddleware, getTickets);
// ticketRoutes.get("/search/:id", adminMiddleware, getIdTicket);
// ticketRoutes.post("/create", adminMiddleware, postTicket);
// ticketRoutes.put("/update/:id", adminMiddleware, putTicket);
// ticketRoutes.put("/disable/:id", adminMiddleware, disableTicket);
// -------Desarollo -------------
ticketRoutes.get("/search", getTickets);
ticketRoutes.get("/search/:id", getIdTicket);
ticketRoutes.post("/create", postTicket);
ticketRoutes.put("/update/:id", putTicket);
ticketRoutes.put("/disable/:id", disableTicket);

export default ticketRoutes;
