import { RequestHandler } from "express";
import { Advice } from "../../../models/advice/advice";

export const searchAdvice: RequestHandler = async (req, res ) => {
    try {
        const advice: Advice [] = await Advice.findAll();
        return res.status(200).json(advice)
    } catch (error:any) {
        return res.status(500).json({ message:"Algo salió mal, verifica la función", error: error.message})
    }
}