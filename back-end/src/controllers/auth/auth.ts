import { RequestHandler } from "express";
import { User } from "../../models/user/user";
import { comparePassword } from "../../helper/encrypt/encrypt";

export const loginUser: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ error: "Faltan datos" });

    const logUser = await User.findOne({
      where: { email: email }
    });

    if (!logUser) {
      return res.status(400).json({ error: "Usuario con ese email no encontrado" });
    }

    const checkPassword = await comparePassword(password, logUser.password);

    if (checkPassword) {
      return res.status(201).json({ message: "Usuario logueado correctamenta", logUser });
    } else {
      return res.status(400).json({ message: "Contraseña Incorrecta" });
    }
  } catch (error: any) {
    return res
      .status(500)
      .json({ message: "Algo salio mal, verifique la funcion", error: error.message })
  }
}