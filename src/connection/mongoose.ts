import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { config } from '../config'
dotenv.config()

export const connectDb = async () => {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(`${config.DB_HOST}`)
    console.log('DB is connected !!! ')
  } catch (err) {
    console.log('error: ' + err)
  }
}
