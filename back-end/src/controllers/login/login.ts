import { RequestHandler } from "express";
import { User } from "../../models/user/user";

export const login: RequestHandler = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Faltan datos" });
        }

        const logUser = await User.findOne({
            where: {
                email: email
            }
        })

        if (!logUser) {
            return res.status(400).json({ error: "Usuario con ese email no encontrado" });
        }

        if (logUser.password !== password) {
            return res.status(403).json({ error: "Contraseña incorrecta" })
        }
    } catch (error: any) {
        return res
            .status(500)
            .json({ message: "Algo salio mal, verifique la funcion", error: error.message })
    }
}