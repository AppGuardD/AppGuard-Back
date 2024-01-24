"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityMangrullo = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const activity_1 = require("./activity");
const mangrullo_1 = require("../mangrullo/mangrullo");
let ActivityMangrullo = class ActivityMangrullo extends sequelize_typescript_1.Model {
};
exports.ActivityMangrullo = ActivityMangrullo;
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => activity_1.Activity)
], ActivityMangrullo.prototype, "activityId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => mangrullo_1.Mangrullo)
], ActivityMangrullo.prototype, "mangrulloId", void 0);
exports.ActivityMangrullo = ActivityMangrullo = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: "ActivityMangrullos",
    })
], ActivityMangrullo);
