"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
//Conexion a la base de datos.
const dotenv = __importStar(require("dotenv")); //Se importa la biblioteca dotenv para cargar las variables de entorno desde un archivo .env.
dotenv.config();
const sequelize_typescript_1 = require("sequelize-typescript"); //Se importa la clase Sequelize de la biblioteca sequelize-typescript.
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env; //Las credenciales de la base de datos se obtienen de las variables de entorno usando process.env.
exports.connection = new sequelize_typescript_1.Sequelize({
    dialect: "postgres",
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    logging: false,
    models: []
});
function connectionDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.connection.sync({ force: false }); //Si la sincronización tiene éxito, se imprime un mensaje indicando que la base de datos se ha sincronizado correctamente.
            console.log("Base de dato sincronizada con Exito");
        }
        catch (error) { //En caso de error, se imprime un mensaje de error junto con la información del error.
            console.error("Error al sincronizar la base de datos", error);
        }
    });
}
;
exports.default = connectionDB; //La función se exporta como el valor predeterminado del módulo.
