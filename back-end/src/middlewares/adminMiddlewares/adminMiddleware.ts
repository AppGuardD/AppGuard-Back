import { Request, Response, NextFunction } from "express";
import { verificatonJWT } from "../../helper/jwt/jwt";

export const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.body.token) {
      return res.status(400).send({ success: false, message: "se necesita el token" });
    }

    const tokenAccess: { rol: string } | null = verificatonJWT(req.body.token);

    if (!tokenAccess) {
      return res
        .status(400)
        .send({ success: false, message: "la crendenciales son invalidas" });
    }

    if (tokenAccess.rol !== "Admin") {
      return res
        .status(400)
        .send({ success: false, message: "no tienes persmiso de admin" });
    }

    next();
  } catch (error: any) {
    return res.status(500).send({ success: false, message: error.message });
  }
};
