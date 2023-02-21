"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.devConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const defaults_1 = require("./defaults");
dotenv_1.default.config();
exports.devConfig = {
    PORT: process.env.PORT || defaults_1.defaultConfig.PORT,
    DB_NAME: process.env.DB_NAME || defaults_1.defaultConfig.DB_NAME,
    DB_HOST: process.env.DB_HOST || defaults_1.defaultConfig.DB_HOST,
    NODE_ENV: process.env.NODE_ENV || defaults_1.defaultConfig.NODE_ENV,
    FIREBASE_SERVER_KEY: process.env.FIREBASE_SERVER_KEY || defaults_1.defaultConfig.FIREBASE_SERVER_KEY,
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME || defaults_1.defaultConfig.AWS_BUCKET_NAME,
    AWS_BUCKET_REGION: process.env.AWS_BUCKET_REGION || defaults_1.defaultConfig.AWS_BUCKET_REGION,
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY || defaults_1.defaultConfig.AWS_ACCESS_KEY,
    AWS_SECRET_KEY: process.env.AWS_SECRET_KEY || defaults_1.defaultConfig.AWS_SECRET_KEY,
    TOKEN_KEY: process.env.TOKEN_KEY || defaults_1.defaultConfig.TOKEN_KEY,
};
