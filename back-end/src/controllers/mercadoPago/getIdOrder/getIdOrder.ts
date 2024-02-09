import { Request, Response } from "express";
import { merchantOders } from "../../../services/mercadoPagoServices/mercadopagoConfig/mercadoPago";

export const getIdOrder = async (req: Request, res: Response) => {
  try {
    const OrderId = await merchantOders("15639190246");
    res.send(OrderId);
  } catch (error: any) {
    return res.send({ success: false, message: error.message });
  }
};
