import { Router } from "express";
import { postReviewactivity } from "../../controllers/reviewActivity/postReview/postReview";

const reviewActivityRoutes = Router();

reviewActivityRoutes.post("/create", postReviewactivity);

export default reviewActivityRoutes;
