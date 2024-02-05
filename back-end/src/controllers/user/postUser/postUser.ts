import { RequestHandler } from "express";
import { User } from "../../../models/user/user";
import { hashPassword } from "../../../helper/encrypt/encrypt";
import { sendMail } from "../../../helper/nodeMail/nodeMail";
import Mail from "nodemailer/lib/mailer";
import { SentMessageInfo } from "nodemailer";

//Ruta para crear User.
export const postUser: RequestHandler = async (req, res) => {
  try {
    const { userName, email, password, typeIdentification, numberIdentification, rol } =
      req.body;

    // Verificar que los campos no estén vacíos.
    if (
      !userName ||
      !email ||
      !password ||
      !typeIdentification ||
      !numberIdentification
    ) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    const userDB: User | null = await User.findOne({
      where: {
        email: email,
      },
    });

    if (userDB) {
      return res.status(400).json({ message: "El email ingresado ya existe" });
    }

    const passwordHash = await hashPassword(password);
    //user esta definido como un objeto de modelo User.
    const user: User = await User.create({
      userName: userName,
      email: email,
      password: passwordHash,
      typeIdentification: typeIdentification,
      numberIdentification: numberIdentification,
      rol: rol,
      state: "Activo",
    });
    // aqui estamos usando la funcion sendMail para enviar un corre de bienvenida
    const mailconfirm: SentMessageInfo = await sendMail(
      "Bienvenido a AppGuard",
      email,
      "te quermos da rla bienvenida a AppGuard"
    );

    if (mailconfirm?.accepted?.length < 0) {
      return res.status(201).send({
        success: true,
        message: "se ha creado el usuario correctamente",
        warning: "no se ha podido enviar el correo",
      });
    }
    return res.status(201).json(user);
  } catch (error: any) {
    return res.status(500).json({
      message: "Algo salió mal, verifica la función",
      error: error.message,
    });
  }
};
