import { RequestHandler } from "express";
import { Car } from "../../../models/car/car";

export const allDeleteCars: RequestHandler = async (req, res) => {
    try {
        //El metodo destroy devuelve un numero de filas eliminadas.
        const cars: number = await Car.destroy({ where: {} });
        if (cars === 0) {
            return res
                .status(302)
                .json({ message: "No hay cars creadas en la base de datos" });
        } else {
            return res
                .status(201)
                .json({ message: "Carritos eliminado con exito" });
        }
    } catch (error: any) {
        return res
            .status(500)
            .json({
                message: "Algo salió mal, no se pudo eliminar el consejo",
                error: error.message
            })
    }
}




















