import { RequestHandler } from "express";
import { Op } from "sequelize";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";


export const getAverageMangrullos: RequestHandler = async (req, res) => {
    try {
        const averageAct: Mangrullo[] | null = await Mangrullo.findAll({
            where: {
                qualification: {
                    [Op.not]: null,
                },
            },
        });
        let totalqualification = 0;
        averageAct.forEach((mangrullo) => {
            totalqualification += mangrullo.qualification.valueOf();
        })
        let average = (totalqualification / averageAct.length).toFixed(2);
        return res
            .status(201)
            .json({ message: "Calculo de Promedio", Promdeio: average });
    } catch (error: any) {
        return res.status(500).json({
            message: "Algo salió mal, verifica la función",
            error: error.message,
        });
    }
};