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
exports.createActivity = void 0;
const activity_1 = require("../../../models/activity/activity");
const mangrullo_1 = require("../../../models/mangrullo/mangrullo");
const ActivityMangrullo_1 = require("../../../models/activity/ActivityMangrullo");
const createActivity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        /* interface ActivityMangrullo extends Activity {
          Mangrullo: Activity[];
        } */
        let Data = req.body; // magrullo 1, mangrullo 2 {} {} [{},{}]
        // req.body.mangrullos = [{},{}]
        if (!Data.activityName ||
            !Data.price ||
            !Data.description ||
            !Data.qualification ||
            !Data.state) {
        }
        let searchData = yield activity_1.Activity.findAll({
            where: { activityName: Data.activityName },
        });
        if (searchData.length > 0) {
            return res.status(201).send({ success: false, message: "este objeto ya existe" });
        }
        yield activity_1.Activity.create(Object.assign(Object.assign({}, Data), { Active: true }));
        let requestNewData = yield activity_1.Activity.findOne({
            where: { activityName: Data.activityName },
        });
        if (!requestNewData) {
            return res
                .status(201)
                .send({ success: false, message: "este objeto no se pudo crear" });
        }
        for (let index = 0; index < req.body.Mangrullo.length; index++) {
            let mangrullo = yield mangrullo_1.Mangrullo.findOne({
                where: { id: req.body.Mangrullo[index] },
            });
            if (mangrullo === null || mangrullo === void 0 ? void 0 : mangrullo.id) {
                yield ActivityMangrullo_1.ActivityMangrullo.create({
                    activityId: requestNewData.id,
                    mangrulloId: mangrullo.id,
                });
            }
        }
        res.status(201).send({
            succes: true,
            message: "los  datos han sido creados correctamente",
        });
    }
    catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
});
exports.createActivity = createActivity;
