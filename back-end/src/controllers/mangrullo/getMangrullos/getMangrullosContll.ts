import { RequestHandler } from "express";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";

//Ruta para consultar todos los Mangrullos.
export const searchMangrullos: RequestHandler = async (_req, res) => {
  try {
    //mangrullos esta definido como un array de objetos de mangrullos.
    const mangrullos: Mangrullo[] = await Mangrullo.findAll({
      where: {
        state: "Activo",
      },
    });
    return res.status(201).json(mangrullos);
  } catch (error: any) {
    return res.status(500).json({ message: "Algo salió mal, verifica la función", error: error.message });
  }
}






















