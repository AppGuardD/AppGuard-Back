import { RequestHandler } from "express";
import { ReviewMangrullo } from "../../../models/reviewMangrullo/reviewMangrullo";

//Ruta para desactivar ReviewMangrullo.
export const disableReviewMangrullo: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params;
        //reviewMangrullo esta definido como un objeto de reviewMangrullo.
        const reviewMangrullo: ReviewMangrullo | null = await ReviewMangrullo.findByPk(id);

        if (!reviewMangrullo) {
            return res
                .status(400)
                .json({ message: "ReviewMangrullo no encontrado en la base de datos" });
        };

        if (reviewMangrullo.state === "Activo") {
            await ReviewMangrullo.update(
                {
                    state: "No Activo",
                },
                {
                    where: {
                        id: id,
                    },
                },
            );
            return res.status(201).json({ message: "ReviewMangrullo Desactivado" });
        } else {
            await ReviewMangrullo.update(
                {
                    state: "Activo",
                },
                {
                    where: {
                        id: id,
                    },
                },
            );
            return res.status(201).json({ message: "ReviewMangrullo Activado" });
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
