import { Router } from "express";
import { getAlltActivities } from "../../controllers/Activity/getACtivity/getActvity";
import { getIdActivity } from "../../controllers/Activity/getACtivity/getIdActivity";
import { createActivity } from "../../controllers/Activity/createActivity/createActivity";
import { updateActivity } from "../../controllers/Activity/updateActivity/updateActivity";
import { desactivedActivity } from "../../controllers/Activity/desactive/desactive";

const ActivityRouter = Router();

ActivityRouter.get("/search", getAlltActivities);
ActivityRouter.get("/search/:id", getIdActivity);
ActivityRouter.post("/create", createActivity);
ActivityRouter.put("/update", updateActivity);
ActivityRouter.put("/desactive/:id", desactivedActivity);

export default ActivityRouter;
