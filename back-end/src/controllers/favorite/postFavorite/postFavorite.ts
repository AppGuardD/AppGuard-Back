import { RequestHandler } from "express";
import { Favorite } from "../../../models/favorite/favorite";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";

//Ruta para crear Favorito.
export const postFavorites: RequestHandler = async (req, res) => {
  try {
    const { zone, dangerousness, image, qualification } = req.body;

    // Verificar que los campos no estén vacíos.
    if (!zone || !dangerousness || !image || !qualification) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios" });
    }

    //favorito esta definido como un objeto de favorito.
    const favorite: Favorite = await Favorite.create({
      zone: zone,
      dangerousness: dangerousness,
      state: "Activo",
      image: image,
      qualification: qualification,
    });

    return res.status(201).json(favorite);
  } catch (error: any) {
    return res
      .status(500)
      .json({
        message: "Algo salió mal, verifica la función",
        error: error.message,
      });
  }
};

