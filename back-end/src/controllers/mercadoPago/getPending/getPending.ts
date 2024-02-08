import { Request, Response } from "express";
import { paymentActivities } from "../../../services/mercadoPagoServices/mercadopagoConfig/mercadoPago";

export const getPending = async (req: Request, res: Response) => {
  try {
    const info = req.query;
    console.log(info);
    res.status(201).send({ ...info });
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
};
