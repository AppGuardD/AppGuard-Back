import { Router } from "express";
import mangrulloRoutes from "./mangrulloRoutes/mangrulloRoutes";
import activityRouter from "./activityRoutes/activityRoutes";
import adviceRoutes from "./adviceRoutes/adviceRoutes";
import favoritelloRoutes from "./favoritelloRoutes/favoritelloRoutes";
import userRoutes from "./userRoutes/userRoutes";
import reviewActivityRoutes from "./reviewActivityRoutes/reviewActivityRoutes";
import reviewMangrullosRoutes from "./reviewMangrullosRoutes/reviewMangrullosRoutes";
import ticketRoutes from "./ticketRoutes/ticketRoutes";
import authRoutes from "./authRoutes/authRoutes";

const routes = Router();

routes.use("/activities", activityRouter);
routes.use("/mangrullos", mangrulloRoutes);
routes.use("/advice", adviceRoutes);
routes.use("/favorite", favoritelloRoutes);
routes.use("/user", userRoutes);
routes.use("/reviewActivity", reviewActivityRoutes);
routes.use("/reviewMangrullos", reviewMangrullosRoutes);
routes.use("/ticket", ticketRoutes);
routes.use("/reviewActivity", reviewActivityRoutes);
routes.use("/auth", authRoutes);


export default routes;
