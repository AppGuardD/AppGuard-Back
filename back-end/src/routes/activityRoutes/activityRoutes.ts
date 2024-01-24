import { Router } from "express";
import { getAlltActivities } from "../../controllers/Activity/getACtivity/getActvity";
import { CreateActivity } from "../../controllers/Activity/CreateActivity/CreateActivity";
import { UpdateActivity } from "../../controllers/Activity/UpdateActivity/UpdateActivity";
import { DesactivedActivity } from "../../controllers/Activity/Desactive/Desactive";
import { getIdActivity } from "../../controllers/Activity/getACtivity/getIdActivity";

const ActivityRouter = Router();

ActivityRouter.get("/search", getAlltActivities);
ActivityRouter.get("/search/:id", getIdActivity);
ActivityRouter.post("/create", CreateActivity);
ActivityRouter.put("/update", UpdateActivity);
ActivityRouter.put("/desactive/:id", DesactivedActivity);

export default ActivityRouter;
