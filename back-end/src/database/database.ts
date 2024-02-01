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
import { ActivityMangrullo } from "../models/activity/ActivityMangrullo";
import { Ticket } from "../models/ticket/ticket";
import { Favorite } from "../models/favorite/favorite";
import { FavoriteMangrullo } from "../models/favorite/FavoriteMangrullo";

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, EXTERNAL_DB_URL }: any = process.env;

export const connection = new Sequelize({
  dialect: "postgres",
  password: DB_PASSWORD,
  host: DB_HOST,
  database: DB_DATABASE,
  username: DB_USER,
  logging: false,
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
    Ticket,
  ],
});

async function connectionDB() {
  try {
    await connection.sync({ force: false });
    console.log("Base de dato sincronizada con Exito");
  } catch (error) {
    console.error("Error al sincronizar la base de datos", error);
  }
}

export default connectionDB;
