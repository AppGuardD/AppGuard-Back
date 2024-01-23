import { Router } from "express";
import mangrulloRoutes from "./mangrulloRoutes/mangrulloRoutes";

const routes = Router();

routes.use("/mangrullos", mangrulloRoutes);
//routes.use("/activity", activityRoutes);

export default routes;