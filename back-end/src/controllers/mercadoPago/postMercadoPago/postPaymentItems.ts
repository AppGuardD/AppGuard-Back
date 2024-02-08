import { Request, Response } from "express";
import { paymentActivities } from "../../../services/mercadoPagoServices/mercadoPago";
import { PreferenceResponse } from "mercadopago/dist/clients/preference/commonTypes";
import { Items } from "mercadopago/dist/clients/commonTypes";
//items sin el id
interface IntemsWithOutId {
  quantity: number;
  title: string;
  unit_price: number;
  description?: string;
  currency_id: string;
}
export const postPaymentItems = async (req: Request, res: Response) => {
  try {
    //areglo de los items a comprar
    const ArrayOfItemsToPay: IntemsWithOutId[] = req.body;
    if (ArrayOfItemsToPay.length < 0) {
      return res
        .status(400)
        .send({ success: false, message: "no hay ninguna actividad a comprar" });
    }
    // hacemos un map para devolver una lista con los items con la propiedad id
    const listOrderItemsToPay: Items[] = ArrayOfItemsToPay.map((ItemToPay) => {
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

    const PaymentResponse: PreferenceResponse | undefined = await paymentActivities(
      listOrderItemsToPay
    );
    res.status(201).send(PaymentResponse);
  } catch (error: any) {
    res.status(400).send({ error: error.message });
  }
};
