import { Router } from "express";
import { getActivities } from "../../controllers/activity/getActivities/getActivities";
import { getIdActivity } from "../../controllers/activity/getIdActivity/getIdActivity";
import { postActivity } from "../../controllers/activity/postActivity/postActivity";
import { putActivity } from "../../controllers/activity/putActivity/putActivity";
import { disableActivity } from "../../controllers/activity/disableActivity/disableActivity";
import { adminMiddleware } from "../../middlewares/adminMiddlewares/adminMiddleware";
import { upload } from "../../helper/multer/multerConfig";

const ActivityRouter = Router();

//---------- con webtokens ------------------
ActivityRouter.get("/search", getActivities);
ActivityRouter.get("/search/:id", getIdActivity);
ActivityRouter.post(
  "/create",
  adminMiddleware,
  upload.single("image"),
  postActivity,
);
ActivityRouter.put(
  "/update/:id",
  adminMiddleware,
  upload.single("image"),
  putActivity,
);
ActivityRouter.put("/desactive/:id", adminMiddleware, disableActivity);
//--------------Desarollo----------------

/*
ActivityRouter.get("/search", getActivities);
ActivityRouter.get("/search/:id", getIdActivity);
ActivityRouter.post("/create", upload.single("image"), postActivity);
ActivityRouter.put("/update/:id", upload.single("image"), putActivity);
ActivityRouter.put("/disable/:id", disableActivity); */

export default ActivityRouter;
//<input type=file name = image>
