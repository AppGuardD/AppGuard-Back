import { RequestHandler } from "express";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";

//Ruta para crear Mangrullos.
export const postMangrullos: RequestHandler = async (req, res) => {
  try {
    const { zone, dangerousness, state, image, qualification } = req.body;

    // Verificar que los campos no estén vacíos.
    if (!zone || !dangerousness || !image || !qualification) {
      return res
        .status(200)
        .json({ message: "Todos los campos son obligatorios" });
    }

    const mangrulloDB: Mangrullo | null = await Mangrullo.findOne({
      where: {
        zone: zone,
      },
    });

    if (mangrulloDB) {
      return res
        .status(200)
        .json({ message: "El nombre de la zona ingresada ya existe" });
    }

    //mangrullo esta definido como un objeto de mangrullo.
    const mangrullo: Mangrullo = await Mangrullo.create({
      zone: zone,
      dangerousness: dangerousness,
      state: "Activo",
      image: image,
      qualification: qualification,
    });
    return res.status(201).json(mangrullo);
  } catch (error: any) {
    return res
      .status(500)
      .json({
        message: "Algo salió mal, verifica la función",
        error: error.message,
      });
  }
};
