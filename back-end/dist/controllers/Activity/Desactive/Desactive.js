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
exports.desactivedActivity = void 0;
const activity_1 = require("../../../models/activity/activity");
const desactivedActivity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const Data = yield activity_1.Activity.findOne({ where: { id } });
        if (!Data) {
            return res.status(201).send({ success: false, message: "el elemento no existe" });
        }
        Data.Active
            ? yield activity_1.Activity.update(Object.assign(Object.assign({}, Data), { Active: false }), { where: { id } })
            : yield activity_1.Activity.update(Object.assign(Object.assign({}, Data), { Active: true }), { where: { id } });
        res
            .status(201)
            .send({ success: true, message: "la Actividad ha sido Desactivada correctamente" });
    }
    catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
});
exports.desactivedActivity = desactivedActivity;
