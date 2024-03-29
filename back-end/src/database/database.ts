//Conexion a la base de datos.
import * as dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize-typescript";
import { Activity } from "../models/activity/activity";
import { Advice } from "../models/advice/advice";
import { Mangrullo } from "../models/mangrullo/mangrullo";
import { ReviewActivity } from "../models/reviewActivity/reviewActivity";
import { ReviewMangrullo } from "../models/reviewMangrullo/reviewMangrullo";
import { User } from "../models/user/user";
import { Session } from "../models/session/session";
import { ActivityMangrullo } from "../models/activity/ActivityMangrullo";
import { Ticket } from "../models/ticket/ticket";
import { Favorite } from "../models/favorite/favorite";
import { FavoriteMangrullo } from "../models/favorite/FavoriteMangrullo";
import { TicketActivity } from "../models/ticket/TicketActivity";
import { Donation } from "../models/donation/donation";
import { Carrito } from "../models/carrito/carrito";
import { PaymentBill } from "../models/paymentBill/paymentBill";
import { detalle_carrito } from "../models/carrito/detalle_carrito";

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, EXTERNAL_DB_URL }: any = process.env;

export const connection = new Sequelize(
  //EXTERNAL_DB_URL,
  {
    dialect: "postgres",
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    logging: false, //console.log,
    /*dialectOptions: { ssl: { require: true } }, */
    models: [
      Activity,
      Advice,
      Favorite,
      Mangrullo,
      ReviewActivity,
      ReviewMangrullo,
      ActivityMangrullo,
      FavoriteMangrullo,
      User,
      Session,
      Ticket,
      TicketActivity,
      Donation,
      PaymentBill,
      Carrito,
      detalle_carrito
    ],
  }
);

async function connectionDB() {
  try {
    await connection.sync({ force: false });
    console.log("Base de dato sincronizada con Exito");
  } catch (error) {
    console.error("Error al sincronizar la base de datos", error);
  }
}

export default connectionDB;
