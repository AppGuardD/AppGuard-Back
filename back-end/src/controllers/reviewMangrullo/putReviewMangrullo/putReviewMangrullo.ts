import { RequestHandler } from "express";
import { ReviewMangrullo } from "../../../models/reviewMangrullo/reviewMangrullo";

// Ruta para modificar reviewActivity.
export const putReviewMangrullo: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { qualification, idUsuario, idMangrullo, comment } = req.body;

        await ReviewMangrullo.update(
            {
                qualification,
                idUsuario,
                idMangrullo,
                comment
            },
            {
                where: {
                    id: id,
                },
            },
        );
        return res.status(201).json({ message: "ReviewMangrullo Modificado" });
    } catch (error: any) {
        return res
            .status(500)
            .json({
                message: "Algo salió mal, verifica la función",
                error: error.message,
            });
    }
};

