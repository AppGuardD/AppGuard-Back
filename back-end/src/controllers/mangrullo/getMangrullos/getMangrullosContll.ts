import { RequestHandler } from "express";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";


export const searchMangrullos: RequestHandler = async (_req, res) => {
    try {
        const mangrullos: Mangrullo[] = await Mangrullo.findAll();
        return res.status(201).json(mangrullos);
    } catch (error: any) {
        return res.status(500).json({ message: "Algo salió mal, verifica la función", error: error.message });
    }
}






















