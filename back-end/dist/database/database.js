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
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const sequelize_typescript_1 = require("sequelize-typescript");
const activity_1 = require("../models/activity/activity");
const advice_1 = require("../models/advice/advice");
const favorite_1 = require("../models/favorite/favorite");
const mangrullo_1 = require("../models/mangrullo/mangrullo");
const reviewActivity_1 = require("../models/reviewActivity/reviewActivity");
const reviewMangrullo_1 = require("../models/reviewMangrullo/reviewMangrullo");
const user_1 = require("../models/user/user");
const ActivityMangrullo_1 = require("../models/activity/ActivityMangrullo");
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
exports.connection = new sequelize_typescript_1.Sequelize({
    dialect: "postgres",
    host: DB_HOST,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    logging: false,
    models: [
        activity_1.Activity,
        advice_1.Advice,
        favorite_1.Favorite,
        mangrullo_1.Mangrullo,
        reviewActivity_1.Reviewactivitys,
        reviewMangrullo_1.ReviewsMangrullos,
        ActivityMangrullo_1.ActivityMangrullo,
        user_1.User,
    ],
});
function connectionDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.connection.sync({ force: false });
            console.log("Base de dato sincronizada con Exito");
        }
        catch (error) {
            console.error("Error al sincronizar la base de datos", error);
        }
    });
}
exports.default = connectionDB;
