"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dev_1 = require("./dev");
const prod_1 = require("./prod");
const NODE_ENV = process.env.NODE_ENV;
exports.config = NODE_ENV === 'development' ? dev_1.devConfig : prod_1.prodConfig;
