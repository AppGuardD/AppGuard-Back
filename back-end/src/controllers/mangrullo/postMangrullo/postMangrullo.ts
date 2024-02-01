import { RequestHandler } from "express";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";
import { createImage } from "../../../cloudinary/getStarted";

//Ruta para crear Mangrullos.
export const postMangrullos: RequestHandler = async (req, res) => {
  try {
    console.log(req.body);
    const { zone, dangerousness, image, qualification, description } = req.body;
    // Verificar que los campos no estén vacíos.
    if (!zone || !dangerousness || !qualification || !description) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    const mangrulloDB: Mangrullo | null = await Mangrullo.findOne({
      where: {
        zone: zone,
      },
    });

    if (mangrulloDB) {
      return res
        .status(400)
        .json({ message: "El nombre de la zona ingresada ya existe" });
    }
    if (!image && !req.file?.path) {
      return res
        .status(400)
        .json({ message: "Falta la imagen por favor suba una o use una url" });
    }
    const imgUrl = await createImage(image ? image : req.file?.path);

    //mangrullo esta definido como un objeto de mangrullo.
    const mangrullo: Mangrullo = await Mangrullo.create({
      zone: zone,
      dangerousness: dangerousness,
      state: "Activo",
      image: imgUrl,
      qualification: qualification,
      description: description,
    });
    return res.status(201).json(mangrullo);
  } catch (error: any) {
    return res.status(500).json({
      message: "Algo salió mal, verifica la función",
      error: error.message,
    });
  }
};
