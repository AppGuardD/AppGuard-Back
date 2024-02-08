import { Request, Response } from "express";
import {
  merchantOders,
  paymentActivities,
  requirePayInfo,
} from "../../../services/mercadoPagoServices/mercadopagoConfig/mercadoPago";
import { facture } from "../../../services/mercadoPagoServices/mercadoPagoFactureEmail/Facture";
import { sendMail } from "../../../helper/nodeMail/nodeMail";
import { User } from "../../../models/user/user";
import { SentMessageInfo } from "nodemailer";

export const getSucces = async (
  req: Request<{}, {}, {}, { payment_id: string }>,
  res: Response
) => {
  try {
    const info = req.query;
    const paymentInfo = await requirePayInfo(info?.payment_id);
    const userId = paymentInfo.external_reference.split(",")[1];
    const user = await User.findOne({ where: { id: userId } });
    const htmlForEmail = facture(paymentInfo.additional_info.items);
    const emailFacture: SentMessageInfo = await sendMail(
      "Factura de compra en AppGuard",
      `${user?.email}`,
      "aqui te dejamos tu factura",
      htmlForEmail
    );
    if (emailFacture?.accepted?.length <= 0) {
      console.log("no se ha podido enviar el objeto");
    }

    res.send(user);
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
};
