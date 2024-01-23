"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
let PORT = app_1.default.get("PORT");
app_1.default.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
