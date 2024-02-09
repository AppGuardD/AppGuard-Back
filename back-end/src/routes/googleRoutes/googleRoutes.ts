import { Router } from "express";

import { authGoogle } from "./../../controllers/authGoogle/authgoogle";

const googleRoutes = Router();

googleRoutes.get("/google", authGoogle);


export default googleRoutes;