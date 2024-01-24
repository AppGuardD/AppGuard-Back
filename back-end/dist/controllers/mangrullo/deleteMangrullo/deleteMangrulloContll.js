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
exports.deactivateMangrullo = void 0;
const mangrullo_1 = require("../../../models/mangrullo/mangrullo");
//Ruta para desactivar Mangrullos.
const deactivateMangrullo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        //mangrullo esta definido como un objeto de mangrullo.
        const mangrullo = yield mangrullo_1.Mangrullo.findByPk(id);
        if (!mangrullo)
            return res.status(200).json({ message: "Mangrullo no encontrado en la base de datos" });
        if (mangrullo.state === "Activo") {
            yield mangrullo_1.Mangrullo.update({
                state: "No Activo"
            }, {
                where: {
                    id: id
                }
            });
            return res.status(201).json({ message: "Mangrullo Desactivado" });
        }
        else {
            yield mangrullo_1.Mangrullo.update({
                state: "Activo"
            }, {
                where: {
                    id: id
                }
            });
            return res.status(201).json({ message: "Mangrullo Activado" });
        }
    }
    catch (error) {
        return res.status(500).json({ message: "Algo salió mal, verifica la función", error: error.message });
    }
});
exports.deactivateMangrullo = deactivateMangrullo;
