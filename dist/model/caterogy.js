"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const caterogy = new mongoose_1.default.Schema({
    title: String,
    avatar: String,
    deleted: {
        type: Boolean,
        default: false
    },
    deletedAt: Date
}, {
    timestamps: true
});
const Caterogy = mongoose_1.default.model("Caterogy", caterogy, "caterogy");
exports.default = Caterogy;
