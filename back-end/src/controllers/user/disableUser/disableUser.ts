import { RequestHandler } from "express";
import { User } from "../../../models/user/user";


//Ruta para desactivar modelo User.
export const disableUser: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    //user esta definido como un objeto de modelo User.
    const user = await User.findByPk(id);

    if (!user)
      return res
        .status(200)
        .json({ message: "User no encontrado en la base de datos" });

    if (user.state === "Activo") {
      await User.update(
        {
          state: "No Activo",
        },
        {
          where: {
            id: id,
          },
        },
      );
      return res.status(201).json({ message: "User Desactivado" });
    } else {
      await User.update(
        {
          state: "Activo",
        },
        {
          where: {
            id: id,
          },
        },
      );
      return res.status(201).json({ message: "User Activado" });
    }
  } catch (error: any) {
    return res
      .status(500)
      .json({
        message: "Algo salió mal, verifica la función",
        error: error.message,
      });
  }
};
