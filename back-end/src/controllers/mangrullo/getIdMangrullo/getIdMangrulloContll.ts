import { RequestHandler } from "express";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";

export const searchIdMangrullo: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const mangrullo: Mangrullo | null = await Mangrullo.findByPk(id);
        return res.status(201).json(mangrullo);
    } catch (error: any) {
        return res.status(500).json({ message: "Algo salió mal, verifica la función", error: error.message });
    }
}
