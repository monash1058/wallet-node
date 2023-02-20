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
exports.HistoryDataLayer = void 0;
const history_1 = require("../models/history");
class HistoryDataLayer {
    insert(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const historySchema = new history_1.historyModel(payload);
                const history = yield historySchema.save();
                return history;
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    find(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const history = yield history_1.historyModel.find(payload).sort({ createdAt: 'desc' });
                return history;
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    recentHistory(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const history = yield history_1.historyModel.find(payload).sort({ createdAt: 'desc' }).limit(5);
                return history;
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
}
exports.HistoryDataLayer = HistoryDataLayer;
