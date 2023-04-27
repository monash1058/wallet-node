import mongoose from 'mongoose'
const { Schema } = mongoose

const userSchema = new Schema({
  name: { type: String, required: true },
    phone: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
    jwt: { type: String, required: false },
    amount: { type: Number, required: false, default: 0,},
    // profileImage: { type: String, required: false, default: null },
    fcmToken: {type: String, required: false},
    createdAt: { type: Date, default: new Date().toISOString()},
    goldRate: {type: Number, required: false}
})

export const userModel = mongoose.model('users', userSchema)
