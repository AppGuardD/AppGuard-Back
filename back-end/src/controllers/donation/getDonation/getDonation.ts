import { RequestHandler } from "express";
import { Donation } from "../../../models/donation/donation";

//Ruta para consultar todos las Donaciones.
export const getDonations: RequestHandler = async (_req, res) => {
    try {
        //donation esta definido como un array de objetos del modelo Donation.
        const donation: Donation[] = await Donation.findAll();
        return res.status(201).json({ Donations: donation });
    } catch (error: any) {
        return res
            .status(500)
            .json({
                message: "Algo salió mal, verifica la función",
                error: error.message,
            });
    }
};

















