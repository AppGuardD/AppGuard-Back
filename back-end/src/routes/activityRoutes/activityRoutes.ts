import { Router } from "express";
import { getActivities } from "../../controllers/activity/getActivities/getActivities";
import { getIdActivity } from "../../controllers/activity/getIdActivity/getIdActivity";
import { postActivity } from "../../controllers/activity/postActivity/postActivity";
import { putActivity } from "../../controllers/activity/putActivity/putActivity";
import { disableActivity } from "../../controllers/activity/disableActivity/disableActivity";

const ActivityRouter = Router();

ActivityRouter.get("/search", getActivities);
ActivityRouter.get("/search/:id", getIdActivity);
ActivityRouter.post("/create", postActivity);
ActivityRouter.put("/update", putActivity);
ActivityRouter.put("/desactive/:id", disableActivity);

export default ActivityRouter;
