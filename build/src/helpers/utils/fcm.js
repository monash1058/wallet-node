"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sentMessage = void 0;
const FCM = require('fcm-node');
const config = require('../../config');
const serverKey = config.FIREBASE_SERVER_KEY;
const fcm = new FCM('AAAAgfIvx_U:APA91bGgxz9wHWiEzAzmWrA9Bq1igNYuY5wAbiU340kS_UbB0jf7dVo02GqSbcovz7wxFASNg5WZZ7XxvpznwhcI9INv9ns1jXBZpxbJIfTDZjgRYIzcgVGerQO_xpaxvD2AqpWW0ldZ');
const sentMessage = (token, title, message) => {
    const messageConfig = {
        to: token,
        notification: {
            title,
            body: message
        }
    };
    fcm.send(messageConfig, (error, response) => {
        if (error) {
            throw new Error(error);
        }
        else {
            return response;
        }
    });
};
exports.sentMessage = sentMessage;
