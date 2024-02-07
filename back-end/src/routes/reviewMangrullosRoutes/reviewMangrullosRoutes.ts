import { Router } from "express";

import { getReviewMangrullos } from "../../controllers/reviewMangrullo/getReviewMangrullo/getReviewMangrullo";
import { getIdReviewMangrullo } from "../../controllers/reviewMangrullo/getIdReviewMangrullo/getIdReviewMangrullo";
import { postReviewMangrullo } from "../../controllers/reviewMangrullo/postReviewMangrullo/postReviewMangrullo";
import { putReviewMangrullo } from "../../controllers/reviewMangrullo/putReviewMangrullo/putReviewMangrullo";
import { disableReviewMangrullo } from "../../controllers/reviewMangrullo/disableReviewMangrullo/disableReviewMangrullo";
import { userMiddleware } from "../../middlewares/userMiddlewares/userMiddleware";

const reviewMangrulloRoutes = Router();
//-----------con webtokens-------------
// reviewMangrulloRoutes.get("/search", userMiddleware, getReviewMangrullos);
// reviewMangrulloRoutes.get("/search/:id", userMiddleware, getIdReviewMangrullo);
// reviewMangrulloRoutes.post("/create", userMiddleware, postReviewMangrullo);
// reviewMangrulloRoutes.put("/update/:id", userMiddleware, putReviewMangrullo);
// reviewMangrulloRoutes.delete("/search/:id", userMiddleware, disableReviewMangrullo);
//----------Desarollo------------------
reviewMangrulloRoutes.get("/search", getReviewMangrullos);
reviewMangrulloRoutes.get("/search/:id", getIdReviewMangrullo);
reviewMangrulloRoutes.post("/create", postReviewMangrullo);
reviewMangrulloRoutes.put("/update/:id", putReviewMangrullo);
reviewMangrulloRoutes.delete("/search/:id", disableReviewMangrullo);

export default reviewMangrulloRoutes;
