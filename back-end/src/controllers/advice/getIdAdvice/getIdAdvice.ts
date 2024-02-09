import { RequestHandler } from "express";
import { Advice } from "../../../models/advice/advice";

export const searchIdAdvice: RequestHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const advice: Advice | null = await Advice.findByPk(id);
        return res.status(201).json(advice);
    } catch (error:any) {
        return res.status(500).json({ message: "Algo salió mal, verifica la función", error: error.message });
    }
}