"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsMangrullos = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let ReviewsMangrullos = class ReviewsMangrullos extends sequelize_typescript_1.Model {
};
exports.ReviewsMangrullos = ReviewsMangrullos;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        validate: {
            min: 1,
            max: 5,
        },
        allowNull: false,
    })
], ReviewsMangrullos.prototype, "qualification", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    })
], ReviewsMangrullos.prototype, "idUsuario", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false })
], ReviewsMangrullos.prototype, "comment", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    })
], ReviewsMangrullos.prototype, "idMangrullo", void 0);
exports.ReviewsMangrullos = ReviewsMangrullos = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: "reviewsmangrullos",
    })
], ReviewsMangrullos);
