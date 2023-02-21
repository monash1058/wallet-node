"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJWT = void 0;
const jwt = require('jsonwebtoken');
const createJWT = (user_id) => {
    const token = jwt.sign({ user_id }, process.env.TOKEN_KEY);
    return token;
};
exports.createJWT = createJWT;
