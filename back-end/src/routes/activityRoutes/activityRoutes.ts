import { Router } from "express";
import { getActivities } from "../../controllers/activity/getActivities/getActivities";
import { getIdActivity } from "../../controllers/activity/getIdActivity/getIdActivity";
import { postActivity } from "../../controllers/activity/postActivity/postActivity";
import { putActivity } from "../../controllers/activity/putActivity/putActivity";
import { disableActivity } from "../../controllers/activity/disableActivity/disableActivity";
import { adminMiddleware } from "../../middlewares/adminMiddlewares/adminMiddleware";
import { adminActivity } from "../../controllers/activity/adminActivity/adminActivity";
import { getAllActividades } from "../../controllers/activity/bulkActivity/getAllActivities";

const ActivityRouter = Router();

//---------- con webtokens ------------------
ActivityRouter.get("/admin", adminMiddleware, adminActivity);
ActivityRouter.get("/search", getActivities);
ActivityRouter.get("/searchAll", getAllActividades);
ActivityRouter.get("/search/:id", getIdActivity);
ActivityRouter.put("/disable/:id", adminMiddleware, disableActivity);
ActivityRouter.put("/update/:id", adminMiddleware, putActivity);
ActivityRouter.post("/create", adminMiddleware, postActivity);
//--------------Desarollo----------------

export default ActivityRouter;
//<input type=file name = image>
