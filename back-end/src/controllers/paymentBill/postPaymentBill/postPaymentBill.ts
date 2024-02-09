import { RequestHandler } from "express";
import { PaymentBill } from "../../../models/paymentBill/paymentBill";
import { User } from "../../../models/user/user";
import { clearScreenDown } from "readline";

//Ruta para crear paymentBill.
export const postPaymentBill: RequestHandler = async (req, res) => {
  try {
    const { totalValue, userId, carId } = req.body;

        //Verificar que los campos no estén vacíos.
        if (!totalValue || !userId || !carId) {
            return res.status(302).json({ message: "Todos los campos son requeridos" });
        }

        const idUser: User | null = await User.findByPk(userId);
        if (!idUser) {
            return res
                .status(302)
                .json({ message: "El usuario no existe en la base de datos" });
        }

        // const idCar: Car | null = await Car.findByPk(carId);
        // if (!idCar) {
        //     return res
        //         .status(302)
        //         .json({ message: "El carrito no existe en la base de datos" });
        // }


        //PaymentBill esta definido como un objeto de PaymentBill.
        const paymentBill: PaymentBill | null = await PaymentBill.create({
            date: new Date().toISOString(),
            totalValue: totalValue,
            //state: state,
            userId: userId,
            carId: carId
        });
        return res
            .status(201)
            .json({
                message: "PaymentBill realizada con exito", PaymentBill: paymentBill
            });
    } catch (error: any) {
        return res
            .status(500)
            .json({
                message: "Algo salió mal, verifica la función", error: error.message,
            });
    }

    const idUser: User | null = await User.findByPk(userId);
    if (!idUser) {
      return res
        .status(302)
        .json({ message: "El usuario no existe en la base de datos" });
    }

    const idCar: Car | null = await Car.findByPk(carId);
    if (!idCar) {
      return res
        .status(302)
        .json({ message: "El carrito no existe en la base de datos" });
    }

    //PaymentBill esta definido como un objeto de PaymentBill.
    const paymentBill: PaymentBill | null = await PaymentBill.create({
      date: new Date().toISOString(),
      totalValue: totalValue,
      //state: state,
      userId: userId,
      carId: carId,
    });
    return res.status(201).json({
      message: "PaymentBill realizada con exito",
      PaymentBill: paymentBill,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Algo salió mal, verifica la función",
      error: error.message,
    });
  }
};
