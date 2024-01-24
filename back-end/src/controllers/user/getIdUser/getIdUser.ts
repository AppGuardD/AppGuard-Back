import { RequestHandler } from "express";
import { User } from "../../../models/user/user";

//Ruta de detalle del User.
export const getIdUser: RequestHandler = async (req, res) => {
  try {
    const id: string = req.params.id;
    //user esta definodo como un objeto del modelo User.
    const user: User | null = await User.findByPk(id);

    if (user) return res.status(201).json(user);

    return res
      .status(201)
      .json({ message: "El User no existe en la Base de datos" });
  } catch (error: any) {
    return res
      .status(500)
      .json({
        message: "Algo salió mal, verifica la función",
        error: error.message,
      });
  }
};
