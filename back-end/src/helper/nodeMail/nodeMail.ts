import * as nodemail from "nodemailer";
import * as dotenv from "dotenv";
dotenv.config();

export const WelcomehtmlContent: string = `
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
      }
      .content {
        max-width: 600px; /* Ajustado para correos electrónicos */
        margin: auto;
        background-color: orangered;
      }
      .main-content {
        padding: 20px;
        background-color: #ffffff;
      }
      h1 {
        color: #ca6b34;
        border-top: 2px solid #ca6b34; /* Borde superior naranja para h1 */
        padding-top: 10px; /* Espaciado superior para compensar el borde */
      }
      p {
        border-top: 1px solid #ca6b34; /* Borde superior naranja para p */
        padding-top: 10px; /* Espaciado superior para compensar el borde */
      }
    </style>
  </head>
  <body>
    <div class="content">
      <div class="main-content">
        <h1>Bienvenido a AppGuard</h1>
        <p>Nos alegra tenerte con nosotros 😁</p>
      </div>
    </div>
  </body>
</html>
`;
const trasnporter = nodemail.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GOOGLE_EMAIL_USER,
    pass: process.env.GOOGLE_APPLICATION_PASSWORD,
  },
});
export interface SentMessageInfo {
  messageId: string; // El ID del mensaje asignado por el servidor de correo
  envelope: {
    from: string; // La dirección de correo electrónico del remitente
    to: string[]; // Una matriz de direcciones de correo electrónico de los destinatarios
  };
  accepted: string[]; // Una matriz de direcciones de correo electrónico que aceptaron el mensaje
  rejected: string[]; // Una matriz de direcciones de correo electrónico que rechazaron el mensaje
  pending?: string[]; // Una matriz de direcciones de correo electrónico pendientes
  response: string; // La respuesta completa del servidor SMTP
}

export const sendMail = async (
  subject: string, // el asunto del mensaje
  to: string, //  para quien va el mensaje
  text: string, // el texto que iria en el mensaje
  html: string
): Promise<any> => {
  try {
    let options = {
      from: process.env.GOOGLE_APPLICATION_PASSWORD,
      to,
      subject,
      text,
      html,
    };
    const mail = await trasnporter.sendMail(options);
    return mail;
  } catch (error: any) {
    return error.message;
  }
};
