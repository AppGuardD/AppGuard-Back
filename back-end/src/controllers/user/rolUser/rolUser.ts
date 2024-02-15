import { RequestHandler } from "express";
import { User } from "../../../models/user/user";

export const rolUser: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user)
      return res
        .status(400)
        .json({ message: "User no encontrado en la base de datos" });

    if (user.rol === "Cliente") {
      await User.update(
        {
          rol: "Admin",
        },
        {
          where: {
            id: id,
          },
        },
      );
      return res.status(201).json({ message: "Usuario es admin ahora" });
    } else {
      await User.update(
        {
          rol: "Cliente",
        },
        {
          where: {
            id: id,
          },
        },
      );
      return res.status(201).json({ message: "Usuario es cliente ahora" });
    }
  } catch (error: any) {
    return res.status(500).json({
      message: "Algo salió mal, verifica la función",
      error: error.message,
    });
  }
};
