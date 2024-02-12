import { Router } from "express";
import { getReviewActivitys } from "../../controllers/reviewActivity/getReviewActivity/getReviewActivity";
import { getIdReviewActivity } from "../../controllers/reviewActivity/getIdReviewActivity/getIdReviewActivity";
import { postReviewActivity } from "../../controllers/reviewActivity/postReviewActivity/postReviewActivity";
import { putReviewActivity } from "../../controllers/reviewActivity/putReviewActivity/putReviewActivity";
import { disableReviewActivity } from "../../controllers/reviewActivity/disableReviewActivity/disableReviewActivity";
import { userMiddleware } from "../../middlewares/userMiddlewares/userMiddleware";

const reviewActivityRoutes = Router();
//-----------con webtokens-------------
reviewActivityRoutes.get("/search", getReviewActivitys);
reviewActivityRoutes.get("/search/:id", getIdReviewActivity);
reviewActivityRoutes.post("/create", userMiddleware, postReviewActivity);
reviewActivityRoutes.put("/update/:id", userMiddleware, putReviewActivity);
reviewActivityRoutes.delete("/search/:id", userMiddleware, disableReviewActivity);
//----------Desarollo------------------
/* reviewActivityRoutes.get("/search", getReviewActivitys);
reviewActivityRoutes.get("/search/:id", getIdReviewActivity);
reviewActivityRoutes.post("/create", postReviewActivity);
reviewActivityRoutes.put("/update/:id", putReviewActivity);
reviewActivityRoutes.delete("/search/:id", disableReviewActivity); */

export default reviewActivityRoutes;
