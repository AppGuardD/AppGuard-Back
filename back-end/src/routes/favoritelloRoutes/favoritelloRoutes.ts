import { Router } from "express";
import { getFavorites } from "../../controllers/favorite/getFavorites/getFavorites";
import { getIdFavorite } from "../../controllers/favorite/getidFavorite/getidFavorite";
import { postFavorites } from "../../controllers/favorite/postFavorite/postFavorite";
import { putFavorite } from "../../controllers/favorite/putFavorite/putFavorite";
import { deleteFavorite } from "../../controllers/favorite/deleteFavorite/deleteFavorite";

const favoritelloRoutes = Router();

favoritelloRoutes.get("search", getFavorites);
favoritelloRoutes.get("search/:id", getIdFavorite);
favoritelloRoutes.post("create", postFavorites);
favoritelloRoutes.put("update/:id", putFavorite);
favoritelloRoutes.put("delete/:id", deleteFavorite);

export default favoritelloRoutes;
