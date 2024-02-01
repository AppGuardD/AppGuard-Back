import express from "express";
import morgan from "morgan";
import cors from "cors";
import connectionDB from "./database/database";
import * as dotenv from "dotenv";
import * as multer from "multer";
dotenv.config();
import routes from "./routes/routes";

const app = express();

//config
app.set("PORT", process.env.PORT || 3001);

//middleswares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

//connection
connectionDB().then(() => console.log("Conexion Ready"));

//routes
app.use("/api", routes);

export default app;
