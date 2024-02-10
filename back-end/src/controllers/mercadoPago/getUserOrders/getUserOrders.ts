import { Request, Response } from "express";
import { merchantOders } from "../../../services/mercadoPagoServices/mercadopagoConfig/mercadoPago";
import { Filter } from "../../activity/getActivities/getActivities";
import { Op } from "sequelize";
import { Order } from "../../../models/Oders/Order";

interface OrderFilter {
  date?: string;
  total?: string;
  merchantId?: string;
  status?: string;
  page?: string;
  items?: string;
  userId?: string;
}

interface consultResponse {
  count: number; // count el numero de registros
  rows: Order[]; // rows representan todos los registros
}
export const getUserOrder = async (
  req: Request<{}, {}, {}, OrderFilter>,
  res: Response
) => {
  try {
    const { date, total, merchantId, status, items, page, userId }: OrderFilter =
      req.query;
    if (!userId) {
      return res
        .status(400)
        .send({
          success: false,
          message: "no se puede traer las ordenes  sin el userId",
        });
    }
    const queryOptions: any = {
      where: { userId },
    };

    if (date) {
      queryOptions.order = ["date", date];
    }

    if (total) {
      queryOptions.where.totalValue = parseInt(total);
    }

    if (merchantId) {
      queryOptions.where.merchantId = merchantId;
    }

    if (status) {
      queryOptions.where.status = status;
    }

    const offset: number = (parseInt(page || "1") - 1) * parseInt(items || "8");
    const limit: number = parseInt(items || "8");

    queryOptions.limit = limit;
    queryOptions.offset = offset;

    const { count: totalCount, rows: dbItems }: consultResponse =
      await Order.findAndCountAll(queryOptions);

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
    return res.status(200).send(response);
  } catch (error: any) {
    return res.send({ success: false, message: error.message });
  }
};
