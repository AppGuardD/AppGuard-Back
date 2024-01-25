"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mangrulloRoutes_1 = __importDefault(require("./mangrulloRoutes/mangrulloRoutes"));
const activityRoutes_1 = __importDefault(require("./activityRoutes/activityRoutes"));
//import adviceRoutes from "./adviceRoutes/adviceRoutes";
//import favoritelloRoutes from "./favoritelloRoutes/favoritelloRoutes";
const userRoutes_1 = __importDefault(require("./userRoutes/userRoutes"));
const reviewActivityRoutes_1 = __importDefault(require("./reviewActivityRoutes/reviewActivityRoutes"));
//import reviewMangrullosRoutes from "./reviewMangrullosRoutes/reviewMangrullosRoutes";
const routes = (0, express_1.Router)();
routes.use("/activities", activityRoutes_1.default);
routes.use("/mangrullos", mangrulloRoutes_1.default);
/* routes.use("/advice", adviceRoutes);
routes.use("/favorite", favoritelloRoutes); */
routes.use("/user", userRoutes_1.default);
/* routes.use("/reviewActivity", reviewActivityRoutes);
routes.use("/reviewMangrullos", reviewMangrullosRoutes);
routes.use("/ticket", ticketRoutes); */
routes.use("/reviewActivity", reviewActivityRoutes_1.default);
exports.default = routes;
