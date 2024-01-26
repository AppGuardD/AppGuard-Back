import { RequestHandler } from "express";
import { ReviewMangrullo } from "../../../models/reviewMangrullo/reviewMangrullo";

//Ruta de detalle del reviewMangrullo
export const getIdReviewMangrullo: RequestHandler = async (req, res) => {
    try {
        const id: string = req.params.id;
        //reviewMangrullo esta definodo como un objeto de ReviewMangrullo.
        const reviewMangrullo: ReviewMangrullo | null = await ReviewMangrullo.findByPk(id);

        if (reviewMangrullo) {
            return res.status(201).json(reviewMangrullo);
        }

        return res
            .status(400)
            .json({ message: "El reviewMangrullo no existe en la Base de datos" });
    } catch (error: any) {
        return res
            .status(500)
            .json({
                message: "Algo salió mal, verifica la función",
                error: error.message,
            });
    }
};
