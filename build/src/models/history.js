"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.historyModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const historySchema = new Schema({
    senderID: { type: Schema.Types.ObjectId, required: true },
    reciverID: { type: Schema.Types.ObjectId, required: true },
    amount: { type: Number, required: true },
    message: { type: String, required: false, default: 'Reason message' },
    sendBy: { type: String, required: true },
    reciveBy: { type: String, required: true },
    createdAt: {
        type: String,
        default: new Date().toISOString(),
    },
    goldRate: { type: Number, required: false }
});
exports.historyModel = mongoose_1.default.model('history', historySchema);
