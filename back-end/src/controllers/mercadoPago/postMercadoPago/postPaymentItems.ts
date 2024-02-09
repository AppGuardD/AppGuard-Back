import { Request, Response } from "express";
import { paymentActivities } from "../../../services/mercadoPagoServices/mercadopagoConfig/mercadoPago";
import { PreferenceResponse } from "mercadopago/dist/clients/preference/commonTypes";
import { Items } from "mercadopago/dist/clients/commonTypes";
import { ResponseData } from "../../../services/mercadoPagoServices/createTicket/createTicket";
import { comprobationProducts } from "../../../services/mercadoPagoServices/comprobationProducts/comprobationProducts";
//items sin el id

export const postPaymentItems = async (req: Request, res: Response) => {
  try {
    //obtenemos un objeto  con el id del usuario y el arreglo  de todos los items
    const { userId, arrayItemsPay } = req.body;

    if (arrayItemsPay.length < 1) {
      console.log("entro");
      return res
        .status(400)
        .send({ success: false, message: "no hay ninguna actividad a comprar" });
    } else if (!userId) {
      return res.status(400).send({
        success: false,
        message: " se ncesita un usuario para comenzar la compra",
      });
    }

    // hacemos un map para devolver una lista con los items con la propiedad id
    const listOrderItemsToPay: Items[] = arrayItemsPay.map((ItemToPay: any) => {
      const newItemToPay: Items = {
        id: `${Math.random() * 10000}`,
        quantity: ItemToPay.quantity,
        title: ItemToPay.title,
        unit_price: ItemToPay.unit_price,
        description: ItemToPay.description,
        currency_id: ItemToPay.currency_id,
      };
      return newItemToPay;
    });

    const comprobationActivitiesExist: ResponseData = await comprobationProducts(
      listOrderItemsToPay
    );

    if (!comprobationActivitiesExist?.success) {
      return res
        .status(400)
        .send({
          success: false,
          message: "no se puede hacer pago si las actividades no existen",
        });
    }
    const PaymentResponse: PreferenceResponse | undefined = await paymentActivities(
      listOrderItemsToPay,
      userId
    );
    res.status(201).send(PaymentResponse);
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
};
