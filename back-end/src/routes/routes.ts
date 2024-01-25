import { Router } from "express";
import mangrulloRoutes from "./mangrulloRoutes/mangrulloRoutes";
import activityRouter from "./activityRoutes/activityRoutes";
import advicesRoutes from "./adviceRoutes/adviceRoutes";
import favoritelloRoutes from "./favoritelloRoutes/favoritelloRoutes";
import userRoutes from "./userRoutes/userRoutes";
import reviewActivityRoutes from "./reviewActivityRoutes/reviewActivityRoutes";
import reviewMangrullosRoutes from "./reviewMangrullosRoutes/reviewMangrullosRoutes";


const routes = Router();

routes.use("/activities", activityRouter);
routes.use("/mangrullos", mangrulloRoutes);
routes.use("/advice", advicesRoutes);
routes.use("/favorite", favoritelloRoutes);
routes.use("/user", userRoutes);
routes.use("/reviewActivity", reviewActivityRoutes);
routes.use("/reviewMangrullos", reviewMangrullosRoutes);
routes.use("/ticket", ticketRoutes);



export default routes;
