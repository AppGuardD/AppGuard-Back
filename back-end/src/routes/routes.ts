import { Router } from "express";
import mangrulloRoutes from "./mangrulloRoutes/mangrulloRoutes";
import activityRouter from "./activityRoutes/activityRoutes";

const routes = Router();

routes.use("/activities", activityRouter);
routes.use("/mangrullos", mangrulloRoutes);

export default routes;
