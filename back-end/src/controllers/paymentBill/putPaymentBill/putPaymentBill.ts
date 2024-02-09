import { RequestHandler } from "express";
import { PaymentBill } from "../../../models/paymentBill/paymentBill";

//Ruta para modificar pago de paymentBill.
export const putPaymentBill: RequestHandler = async (req, res) => {
  try {
    const id: string = req.params.id;
    const payment = await PaymentBill.findOne({
      where: {
        id: id,
      },
    });

    if (!payment) {
      return res
        .status(404)
        .json({ message: "La factura de pago no existe en la base de datos" });
    }

    //PaymentBill esta definido como un objeto de PaymentBill.
    const paymentBill = await PaymentBill.update(
      {
        state: "Pago Recibido",
      },
      {
        where: {
          id: id,
        },
        returning: true,
      }
    );

    if (!paymentBill) {
      return res
        .status(302)
        .json({ message: "La factura de pago no existe en la base de datos" });
    } else {
      return res.status(201).json({
        message: "El pago de la factura fue exitoso",
        PaymentBill: paymentBill,
      });
    }
  } catch (error: any) {
    return res.status(500).json({
      message: "Algo salió mal, verifica la función",
      error: error.message,
    });
  }
};
