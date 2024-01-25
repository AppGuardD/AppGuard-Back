import { Activity } from "../../../models/activity/activity";
import { Request, Response } from "express";
import { ParameterizedQuery } from "pg-promise";
import { Op } from "sequelize";

interface Filter {
  item: string;
  page: string;
  type: string;
}

export const getActivities = async (req: Request<{}, {}, {}, Filter>, res: Response) => {
  try {
    const filter: Filter = req.query;
    console.log(typeof filter.item);
    const operation = {
      limit: parseInt(filter.item),
      offset: (parseInt(filter.page) - 1) * parseInt(filter.item),
    };
    let requestData: Activity[] = filter.type
      ? await Activity.findAll({
          ...operation,
          where: { type: filter.type },
        })
      : await Activity.findAll({ ...operation });

    if (requestData.length < 0) {
      return res.status(404).send({ message: "el elemento no se ha encontrado" });
    }
    res.send({ requestData });
  } catch (error: any) {
    res.status(500).send({ success: false, message: error.message });
  }
};
