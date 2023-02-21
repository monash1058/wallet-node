"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const userSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
    jwt: { type: String, required: false },
    amount: { type: Number, required: false, default: 0, },
    profileImage: { type: String, required: false, default: null },
    fcmToken: { type: String, required: false },
    createdAt: { type: Date, default: new Date().toISOString() }
});
exports.userModel = mongoose_1.default.model('users', userSchema);
