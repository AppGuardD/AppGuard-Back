//Conexion a la base de datos.
import * as dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize-typescript";
import { Activity } from "../models/activity/activity";
import { Advice } from "../models/advice/advice";
import { Favorite } from "../models/favorite/favorite";
import { Mangrullo } from "../models/mangrullo/mangrullo";
import { Reviewactivitys } from "../models/reviewActivity/reviewActivity";
import { ReviewsMangrullos } from "../models/reviewMangrullo/reviewMangrullo";
import { User } from "../models/user/user";
import { ActivityMangrullo } from "../models/activity/ActivityMangrullo";

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
    Reviewactivitys,
    ReviewsMangrullos,
    ActivityMangrullo,
    User,
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
