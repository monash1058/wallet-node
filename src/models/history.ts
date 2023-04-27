import mongoose from 'mongoose'
const { Schema } = mongoose

const historySchema = new Schema({
  senderID:{ type: Schema.Types.ObjectId, required:true},
  reciverID:{ type: Schema.Types.ObjectId, required:true},
  amount:{ type: Number, required:true},
  message:{ type: String, required:false, default:'Reason message'},
  sendBy:{ type: String, required:true},
  reciveBy:{ type: String, required:true},
  createdAt: {
    type: String,
    default: new Date().toISOString(),
  },
  goldRate: {type: Number, required: false}
})

export const historyModel = mongoose.model('history', historySchema)
