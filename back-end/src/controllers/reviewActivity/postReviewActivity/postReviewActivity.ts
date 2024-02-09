import { RequestHandler } from "express";
import { Activity } from "../../../models/activity/activity";
import { User } from "../../../models/user/user";
import { ReviewActivity } from "../../../models/reviewActivity/reviewActivity";
import { Op, Sequelize } from "sequelize";


function procesarResultados(totalSumQual: number, totalCountQual: number, activityId: number) {
  let average = (totalSumQual / totalCountQual).toFixed(2);
  Activity.update({
    qualification: average
  }, {
    where: {
      id: activityId
    }
  });
}

export const postReviewActivity: RequestHandler = async (req, res) => {
  try {
    const { qualification, comment, activityId, userId } = req.body
    if (!qualification || !comment || !activityId || !userId) {
      return res.status(400).json({
        message: "No pueden ir datos vacios",
      });
    }

    const activity: Activity | null = await Activity.findByPk(activityId);
    const user: User | null = await User.findByPk(userId);

    if (!activity || !user) {
      return res.status(400).json({ message: "La Actividad o el Usuario con ese id no existe en la base de datos" })
    }

    const review: ReviewActivity | null = await ReviewActivity.create({
      qualification: qualification,
      comment: comment,
      state: "Activo",
      activityId: activityId,
      userId: userId
    });

    let totalSumQual;
    let totalCountQual;

    ReviewActivity.findAll({
      attributes: [
        [Sequelize.fn('SUM', Sequelize.col('qualification')), 'totalSumQualification'], // Suma de los montos
        [Sequelize.fn('COUNT', Sequelize.col('id')), 'totalCountQualification'] // Conteo de todas las ventas
      ], where: {
        activityId: activityId, // Agrega tu filtro aquí
        qualification: {
          [Op.not]: null,
        }
      }
    }).then(result => {
      totalSumQual = result[0].dataValues.totalSumQualification;
      totalCountQual = result[0].dataValues.totalCountQualification;
      procesarResultados(totalSumQual, totalCountQual, activityId);
    });

    res
      .status(201)
      .send({ message: "se ha creado la reviewActivity correctamente", review });
  } catch (error: any) {
    res
      .status(500)
      .send({ message: "Algo salio mal, verifique la funcion", error: error.message });
  }
};


