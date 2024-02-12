import { RequestHandler } from "express";
import { ReviewMangrullo } from "../../../models/reviewMangrullo/reviewMangrullo";

export const getReviewMangrullos: RequestHandler = async (req, res) => {
  try {
    // Consultar todos los ReviewActivity.
    const reviewActivity: ReviewMangrullo[] = await ReviewMangrullo.findAll();
    return res.status(201).json(reviewActivity);
  } catch (error: any) {
    return res.status(500).json({
      message: "Algo salió mal, verifica la función",
      error: error.message,
    });
  }
};
