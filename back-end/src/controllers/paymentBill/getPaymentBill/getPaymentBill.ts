import { RequestHandler } from "express";
import { PaymentBill } from "../../../models/paymentBill/paymentBill";

//Ruta para consultar todos las paymentBill.
export const getPaymentBill: RequestHandler = async (_req, res) => {
    try {
        //paymentBill esta definido como un array de objetos del modelo paymentBill.
        const paymentBill: PaymentBill[] = await PaymentBill.findAll();
        return res
            .status(201)
            .json({ PaymentBill: paymentBill });
    } catch (error: any) {
        return res
            .status(500)
            .json({
                message: "Algo salió mal, verifica la función",
                error: error.message,
            });
    }
};

