import { RequestHandler } from "express";
import { User } from "../../../models/user/user";

//Ruta para consultar todos los Users.
export const getUsers: RequestHandler = async (_req, res) => {
  try {
    //user esta definido como un array de objetos de mangrullos.
    const users: User[] = await User.findAll();
    return res.status(201).json(users);
  } catch (error: any) {
    return res
      .status(500)
      .json({
        message: "Algo salió mal, verifica la función",
        error: error.message,
      });
  }
};
