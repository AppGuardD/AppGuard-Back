import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const { JWT_SECRET_KEY }: any = process.env;
export function generateJWT(usuario: object): string | undefined {
  try {
    return jwt.sign(usuario, JWT_SECRET_KEY, { expiresIn: "1h" });
  } catch (error: any) {
    return error.message;
  }
}

export function verificatonJWT(token: string): any | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    return decoded;
  } catch (error: any) {
    // Manejar errores específicos
    if (error.name === "TokenExpiredError") {
      console.error("Error: Token expirado");
    } else if (error.name === "JsonWebTokenError") {
      console.error("Error: Token inválido");
    } else {
      console.error("Error al verificar el token:", error.message);
    }
    return null;
  }
}
