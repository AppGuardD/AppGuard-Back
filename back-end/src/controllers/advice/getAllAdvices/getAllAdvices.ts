import { RequestHandler } from "express";
import { Advice } from "../../../models/advice/advice";

export const getAllAdvices: RequestHandler = async (req, res) => {
  try {
    const response: Advice[] = await Advice.findAll({
      attributes: ["title", "comment", "image", "gravity"],
    });

    res.status(200).send(response);
  } catch (error: any) {
    return res.status(500).json({
      message: "Algo salió mal, verifica la función",
      error: error.message,
    });
  }
};
