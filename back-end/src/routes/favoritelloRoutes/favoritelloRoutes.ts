import { Router } from "express";
import { postFavorites } from "../../controllers/favorite/postFavorite/postFavorite";
import { disableFavorite } from "../../controllers/favorite/disableFavorite/disableFavorite";

const favoritelloRoutes = Router();

favoritelloRoutes.post("create", postFavorites);
favoritelloRoutes.put("delete/:id", disableFavorite);

export default favoritelloRoutes;
