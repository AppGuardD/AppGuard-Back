import { RequestHandler } from "express";
import { User } from "../../../models/user/user";

//Ruta para crear User.
export const postUser: RequestHandler = async (req, res) => {
  try {
    const { userName, email, password, typeIdentification, numberIdentification } = req.body;


    // Verificar que los campos no estén vacíos.
    if (!userName || !email || !password || !typeIdentification || !numberIdentification) {
      return res
        .status(400)
        .json({ message: "Todos los campos son obligatorios" });
    }

    const userDB: User | null = await User.findOne({
      where: {
        email: email,
      },
    });

    if (userDB) {
      return res
        .status(400)
        .json({ message: "El email ingresado ya existe" });
    }

    //user esta definido como un objeto de modelo User.
    const user: User = await User.create({
      userName: userName,
      email: email,
      password: password,
      typeIdentification: typeIdentification,
      numberIdentification: numberIdentification,
      rol: "Cliente",
      state: "Activo",
    });
    return res.status(201).json(user);
  } catch (error: any) {
    return res
      .status(500)
      .json({
        message: "Algo salió mal, verifica la función",
        error: error.message,
      });
  }
};
