import { Request, Response } from "express";
import { requirePayInfo } from "../../../services/mercadoPagoServices/mercadopagoConfig/mercadoPago";
import * as dotenv from "dotenv";
dotenv.config();
export const getFailure = async (
  req: Request<{}, {}, {}, { payment_id: string }>,
  res: Response
) => {
  try {
    const info = req.query;
    const paymentInfo = await requirePayInfo(info?.payment_id);

    res.redirect(302, `${process.env.RETURN_URL}?state=Failure`);
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
};
