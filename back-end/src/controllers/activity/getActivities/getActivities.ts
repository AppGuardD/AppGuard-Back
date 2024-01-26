import { Activity } from "../../../models/activity/activity";
import { Request, Response } from "express";
import { ParameterizedQuery } from "pg-promise";
import { GroupedCountResultItem, Op } from "sequelize";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";

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

    let { count, rows }: any = filter.type
      ? await Activity.findAndCountAll({
          ...operation,
          where: { type: filter.type },
        })
      : filter.page && filter.item
      ? await Activity.findAndCountAll({ ...operation })
      : await Activity.findAndCountAll();

    if (rows.length < 0) {
      return res.status(404).send({ message: "el elemento no se ha encontrado" });
    }

    let responsePage: object = {
      Pagination: {
        TotalPages: Math.ceil(count / parseInt(filter.item)),
        TotalItems: operation.limit,
        currentPage: parseInt(filter.page),
      },
      requestData: rows,
    };
    let responseAllPage: object = {
      requestData: rows,
    };
    res.send(filter.item && filter.page ? responsePage : responseAllPage);
  } catch (error: any) {
    res.status(500).send({ success: false, message: error.message });
  }
};
