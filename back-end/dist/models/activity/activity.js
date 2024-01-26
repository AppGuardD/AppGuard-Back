"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const ActivityMangrullo_1 = require("./ActivityMangrullo");
let Activity = class Activity extends sequelize_typescript_1.Model {
};
exports.Activity = Activity;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        unique: true,
    })
], Activity.prototype, "activityName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    })
], Activity.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false,
    })
], Activity.prototype, "image", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        validate: {
            min: {
                args: [1],
                msg: "El valor no puede ser menor que 1",
            },
            max: {
                args: [5],
                msg: "El valor no puede ser mayor que 5",
            },
        },
    })
], Activity.prototype, "qualification", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    })
], Activity.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM("Pago", "Gratis"),
        allowNull: false,
    })
], Activity.prototype, "state", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        allowNull: false,
    })
], Activity.prototype, "active", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM("Deportivo", "Sanitario", "Cultural"),
        allowNull: false,
    })
], Activity.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Activity, () => ActivityMangrullo_1.ActivityMangrullo)
], Activity.prototype, "activity", void 0);
exports.Activity = Activity = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: "activities",
    })
], Activity);
