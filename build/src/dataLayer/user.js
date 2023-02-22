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
exports.UserDataLayer = void 0;
const user_1 = require("../models/user");
class UserDataLayer {
    insert(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userSchema = new user_1.userModel(payload);
                const user = yield userSchema.save();
                return user;
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    find(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_1.userModel.find(payload);
                return user;
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    findOne(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_1.userModel.findOne(payload);
                return user;
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    updateProfile(query, vary, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_1.userModel.findOneAndUpdate(query, vary, payload);
                return user;
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    update(query, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_1.userModel.findOneAndUpdate(query, payload, { new: true });
                return user;
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    insertRegister(payload, query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userSchema = new user_1.userModel(payload);
                const user = yield userSchema.save();
                return user;
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
}
exports.UserDataLayer = UserDataLayer;
