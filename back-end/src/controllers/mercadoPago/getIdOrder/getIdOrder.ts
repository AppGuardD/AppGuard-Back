import { Request, Response } from "express";
import {
  merchantIdOders,
  merchantOders,
} from "../../../services/mercadoPagoServices/mercadopagoConfig/mercadoPago";
import { MerchantOrderResponse } from "mercadopago/dist/clients/merchantOrder/commonTypes";
import { User } from "../../../models/user/user";
import { Order } from "../../../models/Oders/Order";

export const getIdOrder = async (req: Request, res: Response) => {
  try {
    const { id: merchantId } = req.params;
    console.log;
    if (!merchantId) {
      return res.status(400).send({
        success: false,
        message: "no se ha proporcionado  el identificador necesario",
      });
    }
    const OrderId: any = await merchantIdOders(merchantId);
    const userId = OrderId.external_reference.split(",")[1];
    const OrderPerFound = await Order.findOne({
      where: { userId: 1, merchantId: "15653976445" },
    });

    const detailedOrder = {
      date: OrderPerFound?.date,
      totalValue: OrderPerFound?.totalValue,
      status: OrderPerFound?.status,
      items: [...OrderId.items],
    };

    res.send(detailedOrder);
  } catch (error: any) {
    return res.send({ success: false, message: error.message });
  }
};
