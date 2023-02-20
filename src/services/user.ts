import { HistoryDataLayer } from '../dataLayer/history'
import { UserDataLayer } from '../dataLayer/user'
import { convertToHash, compareHash } from '../helpers/utils/bycrpt'
import { userModel } from '../models/user'
var multer  = require('multer')
const path = require('path')
import { sentMessage } from '../helpers/utils/fcm'

const sendSms = (number: any) => {
  const accountSid = 'AC01b69cc2118b18090908192ef33787b7'
  const authToken = '84a638792cc7363bdb04942a3e0f7512'
  const verifySid = 'VA3d9f3d02944342c03fad54740b8cecdc'
  const client = require('twilio')(accountSid, authToken)

  client.verify.v2
    .services(verifySid)
    .verifications.create({ to: '+65' + number, channel: 'sms' })
    .then((verification: any) => console.log(verification.status))
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
      return {
        message: 'User inserted successfully',
        success: true,
        data: user,
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
          const fcmUser = await UserDataAccess.update({
            '_id': isUserExist[0]._id,
          }, {$set: {fcmToken: payload.fcmToken }})
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
    console.log(payload.file)
    try {
      // const results = await s3Uploadv3(payload.file);
      // const host = payload.headers.host
      const filePath = payload.file.location;
      const password = await convertToHash(payload.body.password)
      const user = await UserDataAccess.update(
        { _id: payload.body._id},
        { $set: { name:payload.body.name, password: password, profileImage: payload.file.location } }
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