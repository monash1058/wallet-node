"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("./src/middleware/express"));
const config_1 = require("./src/config");
const mongoose_1 = require("./src/connection/mongoose");
const express_2 = __importDefault(require("./src/middleware/express"));
const awsServerlessExpress = require("aws-serverless-express");
const server = http_1.default.createServer(express_1.default);
server.listen(config_1.config.PORT, () => {
    console.log(`Server is running on PORT ${config_1.config.PORT}`);
    (0, mongoose_1.connectDb)();
    const servers = awsServerlessExpress.createServer(express_2.default);
    return awsServerlessExpress.proxy(servers, "PROMISE").promise;
});
