"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const path = require('path');
const express = require('express');
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const aws = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");
const s3 = new aws.S3();
const configAws = {
    secretAccessKey: process.env.AWS_SECRET_KEY,
    endpoint: "https://wallet-node-production.up.railway.app",
    accessKeyId: process.env.AWS_ACCESS_ID,
    region: process.env.AWS_BUCKET_REGION,
};
aws.config.update(configAws);
// const fileFilter = (req:any, file:any, cb:any) => {
//   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//     cb(null, true);
//   } else {
//     cb(new Error("Invalid file type, only JPEG and PNG is allowed!"), false);
//   }
// };
const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
        // upload only png and jpg format
        return cb(new Error('Please upload a Image'));
    }
    cb(undefined, true);
};
exports.upload = multer({
    fileFilter,
    storage: multerS3({
        limits: 500000,
        acl: "public-read",
        s3,
        bucket: 'pro-pay-uploads',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString());
        },
    }),
});
// storage: multerS3({
//   acl: "public-read",
//   s3,
//   bucket: 'pro-pay-uploads',
//   metadata: function (req:any, file:any, cb:any) {
//     cb(null, { fieldName: "TESTING_METADATA" });
//   },
//   key: function (req:any, file:any, cb:any) {
//     cb(null, Date.now().toString());
//   },
// }),
// var storage = multer.diskStorage({
//     destination: function (req:any, file:any, cb:any) {
//       cb(null, 'public/uploads')
//     },
//     filename: (req:any, file:any, cb:any) => {
//         cb(null, file.fieldname + '_' + Date.now() 
//            + path.extname(file.originalname))
//   }
// })
// export var upload = multer({ storage: storage, 
//     fileFilter(req:any, file:any, cb:any) {
//     if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) { 
//        // upload only png and jpg format
//        return cb(new Error('Please upload a Image'))
//      }
//    cb(undefined, true)}},
//    )
// const storage = multer.memoryStorage();
// // ["image", "jpeg"]
// export var upload = multer({
//   storage,
//   fileFilter,
// });
