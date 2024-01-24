import { Router } from "express";
import mangrulloRoutes from "./mangrulloRoutes/mangrulloRoutes";
import ActivityRouter from "./activityRoutes/activityRoutes";

const routes = Router();

routes.use("/activities", ActivityRouter);
routes.use("/mangrullos", mangrulloRoutes);

export default routes;
