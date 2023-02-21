"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../controller/user");
const file_upload_1 = require("../helpers/utils/file-upload");
const tokenValidator_1 = require("../middleware/tokenValidator");
const userRoute = (0, express_1.default)();
exports.userRoute = userRoute;
const user = new user_1.UserController();
userRoute.post('/register', user.register);
userRoute.get('/verifyNumber/:phone', user.verifyNumber);
userRoute.post('/getAllLists', tokenValidator_1.verifyToken, user.getData);
userRoute.post('/getUser', tokenValidator_1.verifyToken, user.getDashboardData);
userRoute.post('/amount', tokenValidator_1.verifyToken, user.addAmount);
userRoute.post('/login', user.login);
userRoute.post('/editProfile', file_upload_1.upload.single('profileImage'), tokenValidator_1.verifyToken, user.editProfile);
userRoute.post('/transfer', tokenValidator_1.verifyToken, user.transferMoney);
userRoute.post('/historyList', tokenValidator_1.verifyToken, user.getAllHistory);
