import { RequestHandler } from "express";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";

export const getMangrullos: RequestHandler = async (req, res) => {
  try {
    const { page = 1, pageSize = 6, qualification } = req.query;

    // Construir condiciones de búsqueda
    const conditions: any = {
      state: "Activo",
    };

    if (qualification) {
      conditions.qualification = qualification;
    }

    // Consultar el número total de Mangrullos que cumplen con las condiciones
    const totalCount: number = await Mangrullo.count({
      where: conditions,
    });

    const totalPages: number = Math.ceil(totalCount / parseInt(pageSize.toString()));

    const offset = (parseInt(page.toString()) - 1) * parseInt(pageSize.toString());

    // Consultar los Mangrullos con paginación y filtro
    const mangrullos: Mangrullo[] = await Mangrullo.findAll({
      where: conditions,
      limit: parseInt(pageSize.toString()),
      offset: offset,
    });

    // Devolver la lista de Mangrullos y la información de paginación
    return res.status(201).json({
      pagination: {
        totalItems: totalCount,
        totalPages: totalPages,
        currentPage: parseInt(page.toString()),
      },
      mangrullos
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Algo salió mal, verifica la función",
      error: error.message,
    });
  }
};