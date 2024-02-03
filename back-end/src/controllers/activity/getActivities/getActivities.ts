import { Op } from "sequelize";
import { Activity } from "../../../models/activity/activity";
import { Request, Response } from "express";

interface Filter {
  items?: string;
  page?: string;
  type?: string;
  query?: string;
  state?: string;
}

export const getActivities = async (
  req: Request<{}, {}, {}, Filter>,
  res: Response,
) => {
  try {
    const { items, page, type, query, state }: Filter = req.query;

    let whereCondition: any = {};

    if (query) {
      whereCondition.activityName = {
        [Op.iLike]: "%" + query + "%",
      };
    }

    const queryOptions: any = {
      where: whereCondition,
    };

    if (state) {
      queryOptions.where.state = state;
    }

    if (type) {
      queryOptions.where.type = type;
    }

    const totalCount: any = await Activity.count(queryOptions);
    const offset: number = (parseInt(page || "1") - 1) * parseInt(items || "8");
    const limit: number = parseInt(items || "8");

    queryOptions.limit = limit;
    queryOptions.offset = offset;

    const dbItems: Activity[] = await Activity.findAll(queryOptions);

    const totalPages: number = Math.ceil(totalCount / limit);

    const response: object = {
      success: true,
      pagination: {
        totalPages: totalPages,
        totalItems: totalCount,
        currentPage: parseInt(page || "1"),
      },
      requestData: dbItems,
    };

    res.send(response);
  } catch (error: any) {
    res.status(500).send({ success: false, message: error.message });
  }
};
