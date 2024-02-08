import { RequestHandler } from "express";
import { Car } from "../../../models/car/car";

//Ruta para consultar todos los Cars.
export const getCars: RequestHandler = async (_req, res) => {
    try {
        //car esta definido como un array de objetos del modelo Car.
        const car: Car[] = await Car.findAll();
        return res.status(201).json({ Cars: car });
    } catch (error: any) {
        return res
            .status(500)
            .json({
                message: "Algo salió mal, verifica la función",
                error: error.message,
            });
    }
};

