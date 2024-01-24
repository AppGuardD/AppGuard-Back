"use strict";
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
exports.createMangrullo = void 0;
const mangrullo_1 = require("../../../models/mangrullo/mangrullo");
//Ruta para crear Mangrullos.
const createMangrullo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { zone, dangerousness, state, image, qualification } = req.body;
        // Verificar que los campos no estén vacíos.
        if (!zone || !dangerousness || !image || !qualification) {
            return res.status(200).json({ message: "Todos los campos son obligatorios" });
        }
        const mangrulloDB = yield mangrullo_1.Mangrullo.findOne({
            where: {
                zone: zone
            }
        });
        if (mangrulloDB) {
            return res.status(200).json({ message: "El nombre de la zona ingresada ya existe" });
        }
        //mangrullo esta definido como un objeto de mangrullo.
        const mangrullo = yield mangrullo_1.Mangrullo.create({
            zone: zone,
            dangerousness: dangerousness,
            state: "Activo",
            image: image,
            qualification: qualification,
        });
        return res.status(201).json(mangrullo);
    }
    catch (error) {
        return res.status(500).json({ message: "Algo salió mal, verifica la función", error: error.message });
    }
});
exports.createMangrullo = createMangrullo;
