import { RequestHandler } from "express";
import { ReviewActivity } from "../../../models/reviewActivity/reviewActivity";

//Ruta para desactivar ReviewActivity.
export const disableReviewActivity: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        //reviewActivity esta definido como un objeto de reviewActivity.
        const reviewActivity: ReviewActivity | null = await ReviewActivity.findByPk(id);

        if (!reviewActivity) {
            return res
                .status(400)
                .json({ message: "ReviewActivity no encontrado en la base de datos" });
        };

        if (reviewActivity.state === "Activo") {
            await ReviewActivity.update(
                {
                    state: "No Activo",
                },
                {
                    where: {
                        id: id,
                    },
                },
            );
            return res.status(201).json({ message: "ReviewActivity Desactivado" });
        } else {
            await ReviewActivity.update(
                {
                    state: "Activo",
                },
                {
                    where: {
                        id: id,
                    },
                },
            );
            return res.status(201).json({ message: "ReviewActivity Activado" });
        }
    } catch (error: any) {
        return res
            .status(500)
            .json({
                message: "Algo salió mal, verifica la función",
                error: error.message,
            });
    }
};
