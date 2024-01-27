//Conexion a la base de datos.
import * as dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize-typescript";
import { Activity } from "../models/activity/activity";
import { Advice } from "../models/advice/advice";
import { Favorite } from "../models/favorite/favorite";
import { Mangrullo } from "../models/mangrullo/mangrullo";
import { ReviewActivity } from "../models/reviewActivity/reviewActivity";
import { ReviewMangrullo } from "../models/reviewMangrullo/reviewMangrullo";
import { User } from "../models/user/user";
import { ActivityMangrullo } from "../models/activity/ActivityMangrullo";
import { Ticket } from "../models/ticket/ticket";
import { ActivityFavorite } from "../models/activity/ActivityFavorite";
import { MangrulloFavorite } from "../models/mangrullo/MangrulloFavorite";

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

export const connection = new Sequelize({
  dialect: "postgres",
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  logging: false,
  models: [
    Activity,
    Advice,
    Favorite,
    Mangrullo,
    ReviewActivity,
    ReviewMangrullo,
    ActivityMangrullo,
    ActivityFavorite,
    MangrulloFavorite,
    User,
    Ticket,
  ],
});

async function connectionDB() {
  try {
    await connection.sync({ force: true });
    console.log("Base de dato sincronizada con Exito");
  } catch (error) {
    console.error("Error al sincronizar la base de datos", error);
  }
}

export default connectionDB;
