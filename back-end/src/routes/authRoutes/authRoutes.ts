import { Router } from "express";

import { loginUser } from "../../controllers/auth/auth";

const authRoutes = Router();

authRoutes.post("/login", loginUser);


export default authRoutes;