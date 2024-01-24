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
exports.modifyMangrullo = void 0;
const mangrullo_1 = require("../../../models/mangrullo/mangrullo");
// Ruta para modificar Mangrullos.
const modifyMangrullo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { zone, dangerousness, state, image, qualification } = req.body;
        // Realiza la actualización y obtén el número de filas afectadas
        yield mangrullo_1.Mangrullo.update({
            zone: zone,
            dangerousness: dangerousness,
            image: image,
            qualification: qualification,
        }, {
            where: {
                id: id,
            },
            returning: true, // Habilita la opción de devolver las filas actualizadas
        });
        return res.status(201).json({ message: "Mangrullo Modificado" });
    }
    catch (error) {
        return res.status(500).json({ message: "Algo salió mal, verifica la función", error: error.message });
    }
});
exports.modifyMangrullo = modifyMangrullo;
