import { Request, Response } from "express";
import {
  merchantIdOders,
  merchantOders,
} from "../../../services/mercadoPagoServices/mercadopagoConfig/mercadoPago";

export const getIdOrder = async (req: Request, res: Response) => {
  try {
    const OrderId = await merchantIdOders("15653017290");
    res.send(OrderId);
  } catch (error: any) {
    return res.send({ success: false, message: error.message });
  }
};
