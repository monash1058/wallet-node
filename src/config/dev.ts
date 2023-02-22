import dotenv from 'dotenv'
import { defaultConfig } from './defaults'
dotenv.config()

export const devConfig = {
  PORT: process.env.PORT || defaultConfig.PORT,
  DB_NAME: process.env.DB_NAME || defaultConfig.DB_NAME,
  DB_HOST: process.env.DB_HOST || defaultConfig.DB_HOST,
  NODE_ENV: process.env.NODE_ENV || defaultConfig.NODE_ENV,
  FIREBASE_SERVER_KEY: process.env.FIREBASE_SERVER_KEY || defaultConfig.FIREBASE_SERVER_KEY,
  AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME || defaultConfig.AWS_BUCKET_NAME,
  AWS_BUCKET_REGION: process.env.AWS_BUCKET_REGION || defaultConfig.AWS_BUCKET_REGION,
  AWS_ACCESS_ID: process.env.AWS_ACCESS_ID || defaultConfig.AWS_ACCESS_ID,
  AWS_SECRET_KEY: process.env.AWS_SECRET_KEY || defaultConfig.AWS_SECRET_KEY,
  TOKEN_KEY: process.env.TOKEN_KEY || defaultConfig.TOKEN_KEY,
}
