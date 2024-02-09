import { Router } from "express";
import { postFavorites } from "../../controllers/favorite/postFavorite/postFavorite";
import { disableFavorite } from "../../controllers/favorite/disableFavorite/disableFavorite";
import { userMiddleware } from "../../middlewares/userMiddlewares/userMiddleware";

const favoritelloRoutes = Router();
//-----------con webtokens-------------
favoritelloRoutes.post("create", userMiddleware, postFavorites);
favoritelloRoutes.put("delete/:id", userMiddleware, disableFavorite);
//----------Desarollo------------------
/* favoritelloRoutes.post("create", postFavorites);
favoritelloRoutes.put("delete/:id", disableFavorite); */

export default favoritelloRoutes;
