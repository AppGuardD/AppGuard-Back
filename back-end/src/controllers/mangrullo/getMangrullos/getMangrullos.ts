import { RequestHandler } from "express";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";

// Ruta para consultar todos los Mangrullos con paginación y filtro por qualification.
export const getMangrullos: RequestHandler = async (req, res) => {
  try {
    const { page = 1, pageSize = 12, qualification } = req.query;

    // Construir condiciones de búsqueda
    const conditions: any = {
      state: "Activo",
    };

    if (qualification) {
      conditions.qualification = qualification;
    }

    const offset = (parseInt(page.toString()) - 1) * parseInt(pageSize.toString());

    // Consultar los Mangrullos con paginación y filtro
    const mangrullos: Mangrullo[] = await Mangrullo.findAll({
      where: conditions,
      limit: parseInt(pageSize.toString()),
      offset: offset,
    });

    return res.status(200).json(mangrullos);
  } catch (error: any) {
    return res.status(500).json({
      message: "Algo salió mal, verifica la función",
      error: error.message,
    });
  }
};