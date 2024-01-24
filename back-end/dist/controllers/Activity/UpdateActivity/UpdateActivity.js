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
exports.UpdateActivity = void 0;
const activity_1 = require("../../../models/activity/activity");
const UpdateActivity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        /*  let createData: Activity = await Activity.create({
          ActivityName: "jose",
          description: "paseo en bote",
          qualification: 5,
          price: 1000,
          state: "Pago",
          type: "Deportivo",
          Active: true,
        }); */
        let Data = req.body;
        let requestData = yield activity_1.Activity.findOne({
            where: { id: Data === null || Data === void 0 ? void 0 : Data.id },
        });
        if (!requestData) {
            return res.status(201).send({ success: false, message: "el elemento no existe " });
        }
        yield activity_1.Activity.update(Object.assign({}, Data), { where: { id: Data.id } });
        res
            .status(200)
            .send({ success: true, message: "los datos han sido actualizados correctamente" });
    }
    catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
});
exports.UpdateActivity = UpdateActivity;
