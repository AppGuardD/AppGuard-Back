import { Router } from "express";
import mangrulloRoutes from "./mangrulloRoutes/mangrulloRoutes";
import activityRouter from "./activityRoutes/activityRoutes";
import adviceRoutes from "./adviceRoutes/adviceRoutes";
import favoritelloRoutes from "./favoritelloRoutes/favoritelloRoutes";
import userRoutes from "./userRoutes/userRoutes";
import reviewActivityRoutes from "./reviewActivityRoutes/reviewActivityRoutes";
import reviewMangrullosRoutes from "./reviewMangrullosRoutes/reviewMangrullosRoutes";
import ticketRoutes from "./ticketRoutes/ticketRoutes";
import authRoutes from "./authRoutes/authRoutes";
import googleRoutes from "./googleRoutes/googleRoutes";
//google
import passport from 'passport';
import { Strategy as GoogleStragy } from 'passport-google-oauth20';



const routes = Router();

routes.use("/activities", activityRouter);
routes.use("/mangrullos", mangrulloRoutes);
routes.use("/advice", adviceRoutes);
routes.use("/favorite", favoritelloRoutes);
routes.use("/user", userRoutes);
routes.use("/reviewActivity", reviewActivityRoutes);
routes.use("/reviewMangrullos", reviewMangrullosRoutes);
routes.use("/ticket", ticketRoutes);
routes.use("/reviewActivity", reviewActivityRoutes);
routes.use("/auth", authRoutes);

//ruta de google, maneja un middleware para 
routes.use("/authgoogle", passport.authenticate("google", {
    scope: [
        'email',
        'profile',
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
    ]
}), googleRoutes);

//desde aqui pa bajo.



export default routes;
