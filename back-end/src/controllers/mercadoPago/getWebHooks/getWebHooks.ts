import { Request, Response } from "express";
import {
  cancelPayment,
  paymentActivities,
  requirePayInfo,
} from "../../../services/mercadoPagoServices/mercadopagoConfig/mercadoPago";
import {
  PreferenceRequest,
  PreferenceResponse,
} from "mercadopago/dist/clients/preference/commonTypes";
import { Items } from "mercadopago/dist/clients/commonTypes";
import { User } from "../../../models/user/user";
import { sendMail } from "../../../helper/nodeMail/nodeMail";
import { facture } from "../../../services/mercadoPagoServices/mercadoPagoFactureEmail/Facture";
import { SentMessageInfo } from "nodemailer";
import {
  createTickets,
  ticketResponse,
} from "../../../services/mercadoPagoServices/createTicket/createTicket";

export const getWebHooks = async (req: Request, res: Response) => {
  try {
    const paymentInfo: any = req.query;
    // Verificamos el id que se genera cuando la compra está completa
    if (paymentInfo["data.id"] && paymentInfo.type === "payment") {
      // Buscamos el payer_id para vincularlo a la cuenta
      const paymentSuccessInfo = await requirePayInfo(paymentInfo["data.id"]);
      const userId = paymentSuccessInfo.external_reference.split(",")[1];
      await User.update(
        { payerId: paymentSuccessInfo.payer.id },
        { where: { id: userId } }
      );
      const user = await User.findOne({ where: { id: userId } });
      const htmlForEmail = facture(paymentSuccessInfo.additional_info.items);
      await sendMail(
        "Factura de compra en AppGuard",
        `${user?.email}`,
        "aqui te dejamos tu factura",
        htmlForEmail
      );
      const creationtickets: ticketResponse = await createTickets({
        userId,
        activities: paymentSuccessInfo.additional_info.items,
      });
      console.log(paymentSuccessInfo.additional_info.items);
      console.log(creationtickets);
      if (creationtickets.success) {
        cancelPayment(paymentInfo["data.id"]);
        return res.status(201).send(paymentSuccessInfo);
      }
      // Enviamos la respuesta indicando que la notificación fue procesada correctamente
      return res.status(200).send(paymentSuccessInfo);
    }

    // Enviamos una respuesta indicando que la notificación no es válida
    return res.send();
  } catch (error: any) {
    // Enviamos una respuesta indicando que hubo un error al procesar la notificación
    return res.status(500).send({ error: error.message });
  }
};
