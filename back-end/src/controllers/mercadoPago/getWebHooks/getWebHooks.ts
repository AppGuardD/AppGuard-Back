import { Request, Response } from "express";
import { paymentActivities } from "../../../services/mercadoPagoServices/mercadoPago";
import {
  PreferenceRequest,
  PreferenceResponse,
} from "mercadopago/dist/clients/preference/commonTypes";
import { Items } from "mercadopago/dist/clients/commonTypes";

export const getWebHooks = async (req: Request, res: Response) => {
  try {
    const info = req.query;
    console.log(info);
    res.status(201).send({ ...info });
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
};
