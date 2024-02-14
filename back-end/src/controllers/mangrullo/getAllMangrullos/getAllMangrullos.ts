import { RequestHandler } from "express";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";

export const getAllMangrullos: RequestHandler = async (req, res) => {
  try {
    const response: Mangrullo[] = await Mangrullo.findAll({
      attributes: ["zone", "dangerousness", "image", "description"],
    });

    res.status(200).send(response);
  } catch (error: any) {
    return res.status(500).json({
      message: "Algo salió mal, verifica la función",
      error: error.message,
    });
  }
};
