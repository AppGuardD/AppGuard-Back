import { Request, Response } from "express";

import { facture } from "../../../services/mercadoPagoServices/mercadoPagoFactureEmail/Facture";
import { sendMail } from "../../../helper/nodeMail/nodeMail";
import { User } from "../../../models/user/user";
import { SentMessageInfo } from "nodemailer";
import { requirePayInfo } from "../../../services/mercadoPagoServices/mercadopagoConfig/mercadoPago";

export const getSucces = async (
  req: Request<{}, {}, {}, { payment_id: string }>,
  res: Response
) => {
  try {
    const info = req.query;
    const paymentInfo = await requirePayInfo(info?.payment_id);

    res.redirect(302, "https://www.youtube.com/?state=true");
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
};
