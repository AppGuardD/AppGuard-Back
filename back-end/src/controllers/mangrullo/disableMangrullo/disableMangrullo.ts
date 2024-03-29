import { RequestHandler } from "express";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";

//Ruta para desactivar Mangrullos.
export const disableMangrullo: RequestHandler = async (req, res) => {
  try {
    const id: number = parseInt(req.params.id);

    //mangrullo esta definido como un objeto de mangrullo.
    const mangrullo = await Mangrullo.findByPk(id);

    if (!mangrullo)
      return res
        .status(400)
        .json({ message: "Mangrullo no encontrado en la base de datos" });

    if (mangrullo.state === "Activo") {
      await Mangrullo.update(
        {
          state: "No Activo",
        },
        {
          where: {
            id: id,
          },
        },
      );
      return res.status(201).json({ message: "Mangrullo Desactivado" });
    } else {
      await Mangrullo.update(
        {
          state: "Activo",
        },
        {
          where: {
            id: id,
          },
        },
      );
      return res.status(201).json({ message: "Mangrullo Activado" });
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
