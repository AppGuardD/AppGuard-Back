import { Request, Response } from "express";
import { Op } from "sequelize";
import { Mangrullo } from "../../../models/mangrullo/mangrullo";

interface Filter {
  items?: string;
  page?: string;
  query?: string;
  state?: string;
}

export const adminMangrullo = async (
  req: Request<{}, {}, {}, Filter>,
  res: Response,
) => {
  try {
    const { items, page, query, state } = req.query;

    let whereCondition: any = {};

    if (query) {
      whereCondition.zone = {
        [Op.iLike]: "%" + query + "%",
      };
    }

    const queryOptions: any = {
      where: whereCondition,
    };

    if (state) {
      queryOptions.where.state = state;
    }

    const data: Mangrullo[] = await Mangrullo.findAll(queryOptions);
    const sort = (mangrullos: Mangrullo[]) => {
      const sorter = mangrullos.sort((a, b) => a?.id - b?.id);
      return sorter;
    };

    const allMangrullos = sort(data);
    const totalCount: any = allMangrullos.length;
    const offset: number = (parseInt(page || "1") - 1) * parseInt(items || "8");
    const limit: number = parseInt(items || "8");

    queryOptions.limit = limit;
    queryOptions.offset = offset;

    const dbItems: Mangrullo[] = allMangrullos.slice(offset, offset + limit);

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
