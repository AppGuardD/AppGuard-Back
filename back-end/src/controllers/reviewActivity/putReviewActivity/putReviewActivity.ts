import { RequestHandler } from "express";
import { ReviewActivity } from "../../../models/reviewActivity/reviewActivity";

// Ruta para modificar reviewActivity.
export const putReviewActivity: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { qualification, userId, activityId, comment } = req.body;

        await ReviewActivity.update(
            {
                qualification,
                userId,
                activityId,
                comment
            },
            {
                where: {
                    id: id,
                },
            },
        );
        return res.status(201).json({ message: "ReviewActivity Modificado" });
    } catch (error: any) {
        return res
            .status(500)
            .json({
                message: "Algo salió mal, verifica la función",
                error: error.message,
            });
    }
};

