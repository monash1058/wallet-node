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
exports.UserService = void 0;
const history_1 = require("../dataLayer/history");
const user_1 = require("../dataLayer/user");
const bycrpt_1 = require("../helpers/utils/bycrpt");
const user_2 = require("../models/user");
// var multer  = require('multer')
const path = require('path');
const fcm_1 = require("../helpers/utils/fcm");
const jwt_1 = require("../helpers/utils/jwt");
const sendSms = (number) => {
    const accountSid = 'AC01b69cc2118b18090908192ef33787b7';
    const authToken = '831224e023d4978e878e925fda6fefb7';
    const verifySid = 'VA3d9f3d02944342c03fad54740b8cecdc';
    const client = require('twilio')(accountSid, authToken);
    client.verify.v2.services(verifySid).verifications.create({ to: '+65' + number, channel: 'sms' }).then((verification) => console.log(verification.status));
};
const UserDataAccess = new user_1.UserDataLayer();
const HistoryDataAccess = new history_1.HistoryDataLayer();
class UserService {
    register(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const isUserExist = yield UserDataAccess.find({
                    'phone': payload.phone,
                });
                if (isUserExist.length !== 0) {
                    throw new Error('User already exist');
                }
                else {
                    const password = yield (0, bycrpt_1.convertToHash)(payload.password);
                    payload.password = password;
                }
                const user = yield UserDataAccess.insert(payload);
                const token = (0, jwt_1.createJWT)(user._id);
                const fcmUser = yield UserDataAccess.update({ '_id': user._id }, { $set: { jwt: token } });
                return {
                    message: 'User inserted successfully',
                    success: true,
                    data: fcmUser,
                };
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    verifyNumber(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const isUserExist = yield UserDataAccess.find({
                    'phone': payload.phone,
                });
                if (isUserExist.length !== 0) {
                    throw new Error('User already Registered');
                }
                else {
                    sendSms(payload.phone);
                    return {
                        message: 'User not registered yet',
                    };
                }
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    login(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const isUserExist = yield UserDataAccess.find({
                    'phone': payload.phone,
                });
                if (isUserExist.length === 0) {
                    throw new Error('No user found');
                }
                else {
                    const isCompare = yield (0, bycrpt_1.compareHash)(payload.password, isUserExist[0].password);
                    if (isCompare) {
                        const token = (0, jwt_1.createJWT)(isUserExist[0]._id);
                        const fcmUser = yield UserDataAccess.update({
                            '_id': isUserExist[0]._id,
                        }, { $set: { fcmToken: payload.fcmToken, jwt: token } });
                        return {
                            message: 'Login Successfully',
                            success: true,
                            data: fcmUser,
                        };
                    }
                    else {
                        throw new Error('Invalid Password');
                    }
                }
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    getData(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserDataAccess.find({
                    _id: { $not: { $eq: payload._id } }
                });
                return {
                    message: 'User fetched successfully',
                    data: user,
                };
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    getDashboardData(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserDataAccess.findOne({
                    _id: payload._id,
                });
                return {
                    message: 'User fetched successfully',
                    data: user,
                };
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    getAmount(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserDataAccess.update({ _id: payload._id }, { $inc: { amount: payload.amount },
                });
                return {
                    message: 'Ammount added to you wallet successfully',
                    data: user,
                };
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    editProfile(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const password = yield (0, bycrpt_1.convertToHash)(payload.body.password);
                const updateVariable = { name: payload.body.name, password: password };
                if (payload.file) {
                    updateVariable.profileImage = payload.file.location;
                }
                const user = yield UserDataAccess.update({ _id: payload.body._id }, { $set: updateVariable });
                return {
                    message: 'User updated successfully',
                    data: user,
                };
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    transferMoney(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sendUserData = yield user_2.userModel.findById(payload.senderID);
                if (sendUserData) {
                    if (sendUserData.amount > payload.amount) {
                        const sendUser = yield UserDataAccess.update({ _id: payload.senderID }, { $inc: { amount: -payload.amount, message: payload.message },
                        });
                        const reciverUser = yield UserDataAccess.update({ _id: payload.reciverID }, { $inc: { amount: payload.amount },
                        });
                        const history = yield HistoryDataAccess.insert(Object.assign(Object.assign({}, payload), { sendBy: sendUser === null || sendUser === void 0 ? void 0 : sendUser.name, reciveBy: reciverUser === null || reciverUser === void 0 ? void 0 : reciverUser.name }));
                        yield (0, fcm_1.sentMessage)(reciverUser === null || reciverUser === void 0 ? void 0 : reciverUser.fcmToken, 'Pro-Pay', `Recived amount ${payload.amount}$ from ${sendUser === null || sendUser === void 0 ? void 0 : sendUser.name}`);
                        return {
                            message: 'Amount Transferred successfully ',
                            data: history,
                        };
                    }
                    else {
                        throw new Error('Insufficient balance');
                    }
                }
                else {
                    throw new Error('Please Send valid user');
                }
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    getAllHistory(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const recentHistory = yield HistoryDataAccess.recentHistory({
                    $or: [{ reciverID: payload._id }, { senderID: payload._id }]
                });
                const recivedHistory = yield HistoryDataAccess.find({
                    reciverID: payload._id
                });
                const sendHistory = yield HistoryDataAccess.find({
                    senderID: payload._id
                });
                return {
                    message: 'History List fetched successfully',
                    data: { sendHistory, recivedHistory, recentHistory },
                };
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
}
exports.UserService = UserService;
