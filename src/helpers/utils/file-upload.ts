// const path = require('path')
// const express = require('express')
// import dotenv from 'dotenv'
// dotenv.config()
// const aws = require("aws-sdk");
// const multer = require("multer");
// const multerS3 = require("multer-s3");
// const s3 = new aws.S3();


// const configAws = {
//   secretAccessKey: process.env.AWS_SECRET_KEY,
//   accessKeyId: process.env.AWS_ACCESS_ID,
//   region: process.env.AWS_BUCKET_REGION,
// }
// aws.config.update(configAws);

// const fileFilter = (req:any, file:any, cb:any) => {
//   if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) { 
//            // upload only png and jpg format
//            return cb(new Error('Please upload a Image'))
//          }
//        cb(undefined, true)
// };

// export const upload = multer({
//   fileFilter,
//   storage: multerS3({
//     limits: 500000,
//     acl: "public-read",
//     s3,
//     bucket: 'pro-pay-uploads',
//     contentType: multerS3.AUTO_CONTENT_TYPE,
//     metadata: function (req:any, file:any, cb:any) {
//       cb(null, { fieldName: file.fieldname });
//     },
//     key: function (req:any, file:any, cb:any) {
//           cb(null, Date.now().toString());
//         },
//   }),
// });