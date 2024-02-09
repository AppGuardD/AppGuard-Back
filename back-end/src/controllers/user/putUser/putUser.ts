import { RequestHandler } from "express";
import { User } from "../../../models/user/user";

// Ruta para modificar Users.
export const putUser: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { userName, email, password, typeIdentification, numberIdentification } = req.body;

    await User.update(
      {
        userName,
        email,
        password,
        typeIdentification,
        numberIdentification,
        rol: "Cliente",
        state: "Activo"
      },
      {
        where: {
          id: id,
        },
      },
    );
    return res.status(201).json({ message: "User Modificado" });
  } catch (error: any) {
    return res
      .status(500)
      .json({
        message: "Algo salió mal, verifica la función",
        error: error.message,
      });
  }
};

