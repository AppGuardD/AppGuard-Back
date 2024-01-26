import { Router } from "express";
import { getReviewActivitys } from "../../controllers/reviewActivity/getReviewActivity/getReviewActivity";
import { getIdReviewActivity } from "../../controllers/reviewActivity/getIdReviewActivity/getIdReviewActivity";
import { postReviewActivity } from "../../controllers/reviewActivity/postReviewActivity/postReviewActivity";
import { putReviewActivity } from "../../controllers/reviewActivity/putReviewActivity/putReviewActivity";
import { disableReviewActivity } from "../../controllers/reviewActivity/disableReviewActivity/disableReviewActivity";


const reviewActivityRoutes = Router();

reviewActivityRoutes.get("/search", getReviewActivitys);
reviewActivityRoutes.get("/search/:id", getIdReviewActivity);
reviewActivityRoutes.post("/create", postReviewActivity);
reviewActivityRoutes.put("/update/:id", putReviewActivity);
reviewActivityRoutes.delete("/search/:id", disableReviewActivity);



export default reviewActivityRoutes;
