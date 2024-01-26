import { Router } from "express";

import { getReviewMangrullos } from "../../controllers/reviewMangrullo/getReviewMangrullo/getReviewMangrullo";
import { getIdReviewMangrullo } from "../../controllers/reviewMangrullo/getIdReviewMangrullo/getIdReviewMangrullo";
import { postReviewMangrullo } from "../../controllers/reviewMangrullo/postReviewMangrullo/postReviewMangrullo";
import { putReviewMangrullo } from "../../controllers/reviewMangrullo/putReviewMangrullo/putReviewMangrullo";
import { disableReviewMangrullo } from "../../controllers/reviewMangrullo/disableReviewMangrullo/disableReviewMangrullo";


const reviewMangrulloRoutes = Router();

reviewMangrulloRoutes.get("/search", getReviewMangrullos);
reviewMangrulloRoutes.get("/search/:id", getIdReviewMangrullo);
reviewMangrulloRoutes.post("/create", postReviewMangrullo);
reviewMangrulloRoutes.put("/update/:id", putReviewMangrullo);
reviewMangrulloRoutes.delete("/search/:id", disableReviewMangrullo);



export default reviewMangrulloRoutes;