import { HistoryDataLayer } from '../dataLayer/history'
import { UserDataLayer } from '../dataLayer/user'
import { convertToHash, compareHash } from '../helpers/utils/bycrpt'
import { userModel } from '../models/user'
// var multer  = require('multer')
const path = require('path')
import { sentMessage } from '../helpers/utils/fcm'
import { createJWT } from '../helpers/utils/jwt'

const sendSms = (number: any) => {
  const accountSid = 'AC1e62646604212be2462698d1f0ff7077'
  const authToken = '02691cc414ca6113763554f1a5cf1c82'
  const verifySid = 'VAd45dc468b83408ad8a5c080b39e92fc1'
  const client = require('twilio')(accountSid, authToken)

  client.verify.v2.services(verifySid).verifications.create({ to: '+65' + number, channel: 'sms' }).then((verification: any) => console.log(verification.status))
}

const UserDataAccess = new UserDataLayer()
const HistoryDataAccess = new HistoryDataLayer()
export class UserService {
  async register(payload: any) {
    try {
      const isUserExist: any = await UserDataAccess.find({
        'phone': payload.phone,
      })
      if (isUserExist.length !== 0) {
        throw new Error('User already exist')
      } else {
        const password = await convertToHash(payload.password)
        payload.password = password
      }

      const user = await UserDataAccess.insert(payload)
      const token = createJWT(user._id);
      const fcmUser = await UserDataAccess.update({'_id': user._id}, {$set: {jwt: token }})
      return {
        message: 'User inserted successfully',
        success: true,
        data: fcmUser,
      }
    } catch (e: any) {
      throw new Error(e)
    }
  }
  async verifyNumber(payload: any) {
    try {
      const isUserExist: any = await UserDataAccess.find({
        'phone': payload.phone,
      })
      if (isUserExist.length !== 0) {
        throw new Error('User already Registered')
      } else {
        sendSms(payload.phone)
        return {
          message: 'User not registered yet',
        }
      }
    } catch (e: any) {
      throw new Error(e)
    }
  }
  async login(payload: any) {
    try {
      const isUserExist: any = await UserDataAccess.find({
        'phone': payload.phone,
      })
      if (isUserExist.length === 0) {
        throw new Error('No user found')
      } else {
        const isCompare = await compareHash(
          payload.password,
          isUserExist[0].password,
        )
        if (isCompare) {
          const token = createJWT(isUserExist[0]._id)
          const fcmUser = await UserDataAccess.update({
            '_id': isUserExist[0]._id,
          }, {$set: {fcmToken: payload.fcmToken, jwt: token }})
          return {
            message: 'Login Successfully',
            success: true,
            data: fcmUser,
          }
        } else {
          throw new Error('Invalid Password')
        }
      }
    } catch (e: any) {
      throw new Error(e)
    }
  }
  async getData(payload: any) {
    try {
      const user = await UserDataAccess.find({
         _id: {$not: {$eq:payload._id}}
      })
      return {
        message: 'User fetched successfully',
        data: user,
      }
    } catch (e: any) {
      throw new Error(e)
    }
  }
  async getDashboardData(payload: any) {
    try {
      const user = await UserDataAccess.findOne({
         _id: payload._id,
      })
      return {
        message: 'User fetched successfully',
        data: user,
      }
    } catch (e: any) {
      throw new Error(e)
    }
  }
  async getAmount(payload: any) {
    try {
      const user = await UserDataAccess.update(
        { _id: payload._id},
        { $inc: { amount: payload.amount },
      }
      )
      return {
        message: 'Ammount added to you wallet successfully',
        data: user,
      }
    } catch (e: any) {
      throw new Error(e)
    }
  }
  async editProfile(payload: any) {
    try {
      const password = await convertToHash(payload.body.password)
      const updateVariable: any = { name:payload.body.name, password: password }
      // if(payload.file){
      //   updateVariable.profileImage =  payload.file.location
      // }
      const user = await UserDataAccess.update(
        { _id: payload.body._id},
        { $set:  updateVariable}
      )
      return {
        message: 'User updated successfully',
        data: user,
      }
    } catch (e: any) {
      throw new Error(e)
    }
  }
  async transferMoney(payload: any) {
    try {
      const sendUserData:any = await userModel.findById(payload.senderID)
      if(sendUserData){
        if(sendUserData.amount > payload.amount){
          const sendUser = await UserDataAccess.update(
            { _id: payload.senderID},
            { $inc: { amount: -payload.amount, message: payload.message },
          }
          )
          const reciverUser = await UserDataAccess.update(
            { _id: payload.reciverID},
            { $inc: { amount: payload.amount },
          }
          )
         const history = await HistoryDataAccess.insert({
          ...payload, 
          ...{sendBy:sendUser?.name, reciveBy:reciverUser?.name}
         })
         await sentMessage(reciverUser?.fcmToken, 'Pro-Pay', `Recived amount ${payload.amount}$ from ${sendUser?.name}`)
          return {
            message: 'Amount Transferred successfully ',
            data: history,
          }
        }else{
          throw new Error('Insufficient balance')
        }
      }else{
        throw new Error('Please Send valid user')
      }
     
    } catch (e: any) {
      throw new Error(e)
    }
  }
  async getAllHistory(payload: any) {
    try {
      const recentHistory = await HistoryDataAccess.recentHistory({
          $or: [{reciverID:payload._id}, {senderID:payload._id}]
      })
      const recivedHistory = await HistoryDataAccess.find({
        reciverID:payload._id
      })
      const sendHistory = await HistoryDataAccess.find({
        senderID:payload._id
    })
      return {
        message: 'History List fetched successfully',
        data: {sendHistory,recivedHistory, recentHistory},
      }
    } catch (e: any) {
      throw new Error(e)
    }
  }
}
