"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reviewactivitys = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Reviewactivitys = class Reviewactivitys extends sequelize_typescript_1.Model {
};
exports.Reviewactivitys = Reviewactivitys;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        validate: {
            min: 1,
            max: 5,
        },
        allowNull: false,
    })
], Reviewactivitys.prototype, "qualification", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    })
], Reviewactivitys.prototype, "idUsuario", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    })
], Reviewactivitys.prototype, "idActivity", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], Reviewactivitys.prototype, "comment", void 0);
exports.Reviewactivitys = Reviewactivitys = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: "reviewactivitys",
    })
], Reviewactivitys);
