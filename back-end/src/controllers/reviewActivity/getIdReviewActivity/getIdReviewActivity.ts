import { RequestHandler } from "express";
import { ReviewActivity } from "../../../models/reviewActivity/reviewActivity";

//Ruta de detalle del reviewActivity
export const getIdReviewActivity: RequestHandler = async (req, res) => {
    try {
        const id: string = req.params.id;
        //reviewActivity esta definodo como un objeto de ReviewActivity.
        const reviewActivity: ReviewActivity | null = await ReviewActivity.findByPk(id);

        if (reviewActivity) {
            return res.status(201).json(reviewActivity);
        }

        return res
            .status(400)
            .json({ message: "El reviewActivity no existe en la Base de datos" });
    } catch (error: any) {
        return res
            .status(500)
            .json({
                message: "Algo salió mal, verifica la función",
                error: error.message,
            });
    }
};
