import { RequestHandler } from "express";
import { Car } from "../../../models/car/car";

export const deleteCar: RequestHandler = async (req, res) => {
    try {
        const id: string = req.params.id;
        const car = await Car.destroy({
            where: {
                id: id
            }
        });
        if (!car) {
            return res
                .status(302)
                .json({ message: "Car no encontrado en la base de datos" });
        } else {
            return res
                .status(201)
                .json({ message: "Carrito eliminado con exito", Car: car });
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




















