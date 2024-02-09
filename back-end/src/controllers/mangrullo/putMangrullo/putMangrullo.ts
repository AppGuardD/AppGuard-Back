import { RequestHandler } from "express";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";
import { createImage } from "../../../cloudinary/getStarted";

// Ruta para modificar Mangrullos.
export const putMangrullo: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { zone, dangerousness, image, qualification, descripcion } = req.body;

    const imgUrl = await createImage(image);

    // Realiza la actualización y obtén el número de filas afectadas
    await Mangrullo.update(
      {
        zone: zone,
        dangerousness: dangerousness,
        image: imgUrl,
        qualification: qualification,
        descripcion: descripcion
      },
      {
        where: {
          id: id,
        },
        returning: true, // Habilita la opción de devolver las filas actualizadas
      },
    );
    return res.status(201).json({ message: "Mangrullo Modificado" });
  } catch (error: any) {
    return res
      .status(500)
      .json({
        message: "Algo salió mal, verifica la función",
        error: error.message,
      });
  }
};

