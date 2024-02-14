import express from "express";
import morgan from "morgan";
import cors from "cors";
import connectionDB, { connection } from "./database/database";
import * as dotenv from "dotenv";
import * as multer from "multer";
dotenv.config();
import routes from "./routes/routes";


//Libreria para trabajar con google.
import passport from "passport";
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);

const app = express();


//config
app.set("PORT", process.env.PORT || 3001);

// Configuración de sesión con google
const sessionConfig = {
    store: new pgSession({
        conString: process.env.DB_CONEXION,
        tableName: 'sessions',
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1 * 60 * 60 * 1000 } // 1 día de duración
};

app.use(session(sessionConfig));

app.use(passport.initialize());
app.use(passport.session());

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
