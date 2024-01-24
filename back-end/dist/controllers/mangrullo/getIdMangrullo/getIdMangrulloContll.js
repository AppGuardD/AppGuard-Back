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
exports.searchIdMangrullo = void 0;
const mangrullo_1 = require("../../../models/mangrullo/mangrullo");
const activity_1 = require("../../../models/activity/activity");
//Ruta de detalle del Mangrullo
const searchIdMangrullo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        //mangrullo esta definodo como un objeto de mangrullo.
        const mangrullo = yield mangrullo_1.Mangrullo.findByPk(id, {
            include: {
                model: activity_1.Activity,
                attributes: [
                    "activityName",
                    "description",
                    "qualification",
                    "price",
                    "state",
                    "type",
                ],
                through: {
                    attributes: [],
                },
            },
        });
        if (mangrullo)
            return res.status(201).json(mangrullo);
        return res
            .status(201)
            .json({ message: "El Mangrullo no existe en la Base de datos" });
    }
    catch (error) {
        return res
            .status(500)
            .json({ message: "Algo salió mal, verifica la función", error: error.message });
    }
});
exports.searchIdMangrullo = searchIdMangrullo;
// attributes: ['userName', 'description', 'calificacion', 'price', 'state', 'type'],
