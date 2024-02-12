import { Router } from "express";
import { getDonations } from "../../controllers/donation/getDonation/getDonation";
import { postDonation } from "../../controllers/donation/postDonation/postDonation";
import { adminMiddleware } from "../../middlewares/adminMiddlewares/adminMiddleware";

const danationRoutes = Router();
//-----------con webtokens-------------
danationRoutes.get("search", adminMiddleware, getDonations);
danationRoutes.post("create", adminMiddleware, postDonation);
//----------Desarollo------------------
/* danationRoutes.get("/search", getDonations);
danationRoutes.post("/create", postDonation); */

export default danationRoutes;
