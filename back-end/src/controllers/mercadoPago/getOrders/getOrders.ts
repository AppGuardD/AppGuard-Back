import { Request, Response } from "express";
import { merchantOders } from "../../../services/mercadoPagoServices/mercadopagoConfig/mercadoPago";

interface ReqQuery {
  nextOffset: number;
  payerId: string;
}

export const getOrder = async (req: Request<{}, {}, {}, ReqQuery>, res: Response) => {
  try {
    const { nextOffset, payerId } = req.query;
    console.log(nextOffset, payerId);
    const OrderId = await merchantOders(payerId, nextOffset);
    const merchantOrders = {};
    res.send(OrderId);
  } catch (error: any) {
    return res.send({ success: false, message: error.message });
  }
};
