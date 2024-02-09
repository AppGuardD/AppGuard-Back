import { PaymentResponse } from "mercadopago/dist/clients/payment/commonTypes";
import { Order } from "../../../models/Oders/Order";
import { Items } from "mercadopago/dist/clients/commonTypes";

export const generateOrders = async (
  paymentInfo: PaymentResponse,
  userId: string | number
) => {
  try {
    const { status, transaction_details, order, additional_info } = paymentInfo;
    const items: Items[] | undefined = additional_info?.items;
    const title = items?.[0].title;

    await Order.create({
      userId,
      date: new Date().toISOString(),
      totalValue: transaction_details?.total_paid_amount,
      status,
      merchantId: order?.id,
      title: title,
    });
    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};
