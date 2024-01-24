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
exports.getIdActivity = void 0;
const activity_1 = require("../../../models/activity/activity");
const getIdActivity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let param = req.params.id;
        console.log(param);
        if ((param === null || param === void 0 ? void 0 : param.length) < 0) {
            throw new Error("se requiere el identificador de busqueda");
        }
        let requestData = yield activity_1.Activity.findOne({
            where: { id: parseInt(param) },
        });
        if (requestData === null) {
            return res.status(404).send({ message: "el elemento no se ha encontrado" });
        }
        res.send({ succes: true, data: requestData });
    }
    catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
});
exports.getIdActivity = getIdActivity;
