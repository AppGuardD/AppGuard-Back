import { RequestHandler } from "express";
import { Donation } from "../../../models/donation/donation";

//Ruta para crear Donacion.
export const postDonation: RequestHandler = async (req, res) => {
    try {
        const { value, userId } = req.body;
        // Verificar que los campos no estén vacíos.
        if (!value || !userId) {
            return res.status(302).json({ message: "Todos los campos son requeridos" });
        }

        //donation esta definido como un objeto de donation.
        const donation: Donation | null = await Donation.create({
            date: new Date().toISOString(),
            value: value,
            userId: userId
        });
        return res
            .status(201)
            .json({
                message: "Donacion realizada con exito", Donation: donation
            });
    } catch (error: any) {
        return res
            .status(500)
            .json({
                message: "Algo salió mal, verifica la función", error: error.message,
            });
    }
};
