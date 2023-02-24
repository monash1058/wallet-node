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
exports.UserController = void 0;
const user_1 = require("../services/user");
const userService = new user_1.UserService();
class UserController {
    register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield userService.register(req.body);
                res.json(data);
            }
            catch (err) {
                next(err);
            }
        });
    }
    verifyNumber(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield userService.verifyNumber(req.params);
                res.json(data);
            }
            catch (err) {
                next(err);
            }
        });
    }
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield userService.login(req.body);
                res.json(data);
            }
            catch (err) {
                next(err);
            }
        });
    }
    getData(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield userService.getData(req.body);
                res.json(data);
            }
            catch (err) {
                next(err);
            }
        });
    }
    getDashboardData(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield userService.getDashboardData(req.body);
                res.json(data);
            }
            catch (err) {
                next(err);
            }
        });
    }
    addAmount(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield userService.getAmount(req.body);
                res.json(data);
            }
            catch (err) {
                next(err);
            }
        });
    }
    editProfile(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield userService.editProfile(req.body);
                res.json(data);
            }
            catch (err) {
                next(err);
            }
        });
    }
    transferMoney(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield userService.transferMoney(req.body);
                res.json(data);
            }
            catch (err) {
                next(err);
            }
        });
    }
    getAllHistory(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield userService.getAllHistory(req.body);
                res.json(data);
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.UserController = UserController;
