import { Order } from "../../../models/Oders/Order";

export const fillOrders = async () => {
  try {
    const dataForFill = {
      date: "2024-02-14",
      totalValue: 1500,
      title: "Talleres de aventuras",
      status: "approved",
      merchantId: "15801281982",
      userId: 1,
    };
    await Order.create(dataForFill);
  } catch (error) {
    return error;
  }
};
