import { Favorite } from "../../../models/favorite/favorite";
import { Request, Response } from "express";

interface Filter {
  item: string;
  page: string;
}
export const getFavorites = async (req: Request<{}, {}, {}, Filter>, res: Response) => {
  try {
    const filter: Filter = req.query;
    console.log(typeof filter.item);

    const operation = {
      limit: parseInt(filter.item),
      offset: (parseInt(filter.page) - 1) * parseInt(filter.item),
    };

    let { count, rows }: { count: number; rows: Favorite[] } =
      filter.page && filter.item
        ? await Favorite.findAndCountAll({ ...operation })
        : await Favorite.findAndCountAll();

    if (rows.length < 0) {
      return res.status(404).send({ message: "el elemento no se ha encontrado" });
    }

    let responsePage: object = {
      success: true,
      Pagination: {
        TotalPages: Math.ceil(count / parseInt(filter.item)),
        TotalItems: operation.limit,
        currentPage: parseInt(filter.page),
      },
      requestData: rows,
    };
    let responseAllPage: object = {
      success: true,
      requestData: rows,
    };
    res.send(filter.item && filter.page ? responsePage : responseAllPage);
  } catch (error: any) {
    res.status(500).send({ success: false, message: error.message });
  }
};
